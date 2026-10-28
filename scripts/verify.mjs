import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const args = process.argv.slice(2);
assert(args.length === 0 || (args.length === 1 && args[0] === '--sources'), 'Usage: bun scripts/verify.mjs [--sources]');
const fleet = JSON.parse(fs.readFileSync(path.join(root, 'fleet.json'), 'utf8'));
const inventory = JSON.parse(fs.readFileSync(path.join(root, 'inventory/sources.json'), 'utf8'));
assert.equal(fleet.rollout.default, 'dry-run');
assert.equal(fleet.rollout.backupBeforeReplacement, true);
assert.equal(fleet.rollout.deleteDestinationFiles, false);
assert.equal(fleet.rollout.installCoreAutomatically, false);
assert.equal(fs.readlinkSync(path.join(root, 'CLAUDE.md')), 'AGENTS.md');

let copies = 0;
for (const source of inventory.sources) {
  if (source.copiedTo) {
    const bytes = fs.readFileSync(path.join(root, source.copiedTo));
    assert.equal(createHash('sha256').update(bytes).digest('hex'), source.sha256, `Snapshot changed: ${source.copiedTo}`);
    copies++;
  }
  if (args.includes('--sources')) {
    assert.equal(fs.realpathSync(source.path), source.realpath, `Source target changed: ${source.path}`);
    assert.equal(createHash('sha256').update(fs.readFileSync(source.path)).digest('hex'), source.sha256, `Source content changed: ${source.path}`);
    const link = fs.lstatSync(source.path).isSymbolicLink() ? fs.readlinkSync(source.path) : null;
    assert.equal(link, source.symlink, `Source link changed: ${source.path}`);
  }
}
assert.equal(copies, 5, 'All five snapshots must be present');

const entries = [...fs.globSync('skills/*/*/SKILL.md', { cwd: root })];
assert.equal(entries.length, Object.keys(fleet.skills).length, 'Skill metadata coverage');
for (const [name, skill] of Object.entries(fleet.skills)) {
  assert.match(name, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  assert(name.length < 64);
  assert(Object.hasOwn(fleet.scopes, skill.scope), `Unknown scope: ${name}`);
  assert.equal(skill.path, `skills/${skill.scope}/${name}`);
  assert(entries.includes(`${skill.path}/SKILL.md`), `Missing skill: ${name}`);
  const text = fs.readFileSync(path.join(root, skill.path, 'SKILL.md'), 'utf8');
  const frontmatter = text.match(/^---\nname: ([a-z0-9-]+)\ndescription: (.+)\n---\n/);
  assert(frontmatter, `Invalid name/description frontmatter: ${name}`);
  assert.equal(frontmatter[1], name);
  assert.match(frontmatter[2], /^Use when /, `Missing trigger: ${name}`);
  for (const required of skill.requires.skills) assert(Object.hasOwn(fleet.skills, required), `Missing dependency: ${required}`);
}

assert.equal(Object.values(fleet.machines).filter(machine => machine.role === 'leader').length, 1);
for (const machine of Object.values(fleet.machines)) {
  for (const [harness, target] of Object.entries(machine.harnesses)) {
    for (const scope of target.scopes) {
      assert(Object.hasOwn(fleet.scopes, scope), `Unknown scope: ${scope}`);
      if (scope === 'command-center') assert.equal(machine.role, 'leader');
      if (scope === 'claude-only') assert.equal(harness, 'claude');
      if (scope === 'codex-only') assert.equal(harness, 'codex');
    }
    assert.equal(new Set(target.skills).size, target.skills.length, 'Duplicate skill selection');
    for (const name of target.skills) {
      assert(Object.hasOwn(fleet.skills, name), `Unknown selected skill: ${name}`);
      assert(target.scopes.includes(fleet.skills[name].scope), `Scope mismatch: ${name}`);
    }
  }
}

let links = 0;
for (const file of fs.globSync('**/*.md', { cwd: root, exclude: ['.git/**', 'core/**'] })) {
  const text = fs.readFileSync(path.join(root, file), 'utf8');
  assert(!/[\t ]+$/m.test(text), `Trailing whitespace: ${file}`);
  for (const match of text.matchAll(/\]\(([^)]+)\)/g)) {
    const target = match[1];
    if (/^[a-z][a-z0-9+.-]*:|^#/i.test(target)) continue;
    assert(fs.existsSync(path.resolve(root, path.dirname(file), target.split('#')[0])), `Broken link in ${file}: ${target}`);
    links++;
  }
}

if (args.includes('--sources')) {
  const scan = spawnSync('rg', ['--files', '--hidden', '--no-ignore', '--follow', '-g', '!**/node_modules/**', '-g', '!**/.git/**', '-g', 'SKILL.md', '-g', 'AGENTS.md', '-g', 'CLAUDE.md', ...inventory.scanRoots], { encoding: 'utf8' });
  assert.equal(scan.status, 0, scan.stderr);
  const observed = scan.stdout.trim().split('\n').filter(file => !file.startsWith(root)).sort();
  const expected = inventory.sources.filter(source => /\/(?:SKILL|AGENTS|CLAUDE)\.md$/.test(source.path)).map(source => source.path).sort();
  assert.deepEqual(observed, expected, 'Source discovery changed; review inventory additions or removals');
  console.log(`Verified ${inventory.sources.length} unchanged external sources and complete discovery coverage.`);
}
console.log(`Verified ${copies} verbatim snapshots, ${entries.length} personal skill, machine selections, safety metadata, and ${links} local links.`);

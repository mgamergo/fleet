import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const repo = fileURLToPath(new URL('../', import.meta.url));
const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'fleet-verification-'));
try {
  const rollout = fs.readFileSync(path.join(repo, 'docs/rollout.md'), 'utf8');
  const recipe = [...rollout.matchAll(/```bash\n([\s\S]*?)```/g)].map(match => match[1]).find(block => block.startsWith('set -eu\n'));
  assert(recipe, 'Complete recipe found');
  const harness = path.join(temp, 'home/.codex');
  const destination = path.join(harness, 'skills/fleet-authoring');
  const backupRoot = path.join(temp, 'home/.fleet-backups');
  const isolated = recipe.replaceAll('/data/home/.codex', harness).replaceAll('/data/home/.fleet-backups', backupRoot);
  assert(!isolated.includes('/data/home/'), 'No actual home paths in fixture recipe');

  let run = spawnSync('bash', ['-c', isolated], { cwd: repo, encoding: 'utf8' });
  assert.equal(run.status, 0, run.stderr);
  const original = fs.readFileSync(path.join(repo, 'skills/universal/fleet-authoring/SKILL.md'), 'utf8');
  assert.equal(fs.readFileSync(path.join(destination, 'SKILL.md'), 'utf8'), original);
  assert(!fs.existsSync(backupRoot), 'New install needs no replacement backup');
  console.log('PASS temporary fresh install copies the selected skill');

  fs.writeFileSync(path.join(destination, 'SKILL.md'), 'old local skill\n');
  fs.writeFileSync(path.join(destination, 'keep.txt'), 'destination-only\n');
  run = spawnSync('bash', ['-c', isolated], { cwd: repo, encoding: 'utf8' });
  assert.equal(run.status, 0, run.stderr);
  const backups = fs.readdirSync(backupRoot);
  assert.equal(backups.length, 1);
  const backup = path.join(backupRoot, backups[0], 'fleet-authoring');
  assert.equal(fs.readFileSync(path.join(backup, 'SKILL.md'), 'utf8'), 'old local skill\n');
  assert.equal(fs.readFileSync(path.join(backup, 'keep.txt'), 'utf8'), 'destination-only\n');
  assert.equal(fs.readFileSync(path.join(destination, 'keep.txt'), 'utf8'), 'destination-only\n');
  assert.equal(fs.readFileSync(path.join(destination, 'SKILL.md'), 'utf8'), original);
  console.log('PASS replacement is backed up and destination-only files remain');

  const sentinel = path.join(temp, 'sentinel');
  fs.writeFileSync(sentinel, 'untouched\n');
  fs.symlinkSync(sentinel, path.join(destination, 'external-link'));
  run = spawnSync('bash', ['-c', isolated], { cwd: repo, encoding: 'utf8' });
  assert.notEqual(run.status, 0, 'Nested symlink must refuse apply');
  assert.equal(fs.readFileSync(sentinel, 'utf8'), 'untouched\n');
  assert.equal(fs.readdirSync(backupRoot).length, 1, 'Refused apply creates no backup');
  console.log('PASS unexpected nested symlink refuses apply without touching its target');

  const held = path.join(temp, 'held-skill');
  fs.renameSync(destination, held);
  fs.symlinkSync(held, destination);
  run = spawnSync('bash', ['-c', isolated], { cwd: repo, encoding: 'utf8' });
  assert.notEqual(run.status, 0, 'Destination symlink must refuse apply');
  assert.equal(fs.readlinkSync(destination), held);
  console.log('PASS destination symlink refuses apply and remains a symlink');

  const fixture = path.join(temp, 'repo');
  fs.cpSync(repo, fixture, { recursive: true, verbatimSymlinks: true, filter: file => !file.includes(`${path.sep}.git`) });
  const baseline = spawnSync('bun', ['scripts/verify.mjs'], { cwd: fixture, encoding: 'utf8' });
  assert.equal(baseline.status, 0, baseline.stderr);
  fs.appendFileSync(path.join(fixture, 'core/AGENTS.md'), '\nchanged\n');
  let rejected = spawnSync('bun', ['scripts/verify.mjs'], { cwd: fixture, encoding: 'utf8' });
  assert.notEqual(rejected.status, 0);
  assert.match(rejected.stderr, /Snapshot changed: core\/AGENTS.md/);
  fs.copyFileSync(path.join(repo, 'core/AGENTS.md'), path.join(fixture, 'core/AGENTS.md'));

  const metadata = JSON.parse(fs.readFileSync(path.join(fixture, 'fleet.json'), 'utf8'));
  metadata.machines['agent-box'].harnesses.cursor.scopes.push('codex-only');
  fs.writeFileSync(path.join(fixture, 'fleet.json'), JSON.stringify(metadata));
  rejected = spawnSync('bun', ['scripts/verify.mjs'], { cwd: fixture, encoding: 'utf8' });
  assert.notEqual(rejected.status, 0);
  assert.match(rejected.stderr, /cursor/);
  fs.copyFileSync(path.join(repo, 'fleet.json'), path.join(fixture, 'fleet.json'));

  fs.appendFileSync(path.join(fixture, 'README.md'), '\n[Broken fixture link](missing-fixture.md)\n');
  rejected = spawnSync('bun', ['scripts/verify.mjs'], { cwd: fixture, encoding: 'utf8' });
  assert.notEqual(rejected.status, 0);
  assert.match(rejected.stderr, /Broken link in README.md: missing-fixture.md/);
  console.log('PASS verifier rejects changed snapshot, wrong harness scope, and broken link');
} finally {
  fs.rmSync(temp, { recursive: true, force: true });
}

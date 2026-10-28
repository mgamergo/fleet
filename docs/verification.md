# Build verification

The initial build was verified on 2026-10-28 before any commit or publication. The user subsequently authorized committing and publishing the repo publicly at `mgamergo/fleet`. No real harness install or global instruction update was performed. Tests used temporary directories and cleaned them afterward. No browser or server was started.

## Passing checks

| Command | Outcome |
| --- | --- |
| `bun scripts/verify.mjs --sources` | Five snapshots match their original SHA-256 values. All 210 source records have unchanged bytes and resolved paths. Original instruction symlinks are intact. A fresh scan matches the complete original discovery set outside this repo. |
| `bun scripts/verify.mjs` | One new personal skill has valid name and trigger frontmatter, correct scope and selection, and no missing skill dependencies. Local Markdown links resolve. The repo's Claude alias is relative. Rollout metadata defaults to dry-run, backup, and no deletion. |
| `bun scripts/verify-fixtures.mjs` | The exact documented apply block, with only destination paths substituted into a temporary fixture, copies a fresh skill. Replacing an existing skill preserves an exact backup and destination-only files. Nested and destination symlinks refuse apply. Negative controls prove the verifier rejects a changed snapshot, a Codex scope assigned to Cursor, and a broken Markdown link. |
| `node --check scripts/verify.mjs` | Syntax passes. |
| `node --check scripts/verify-fixtures.mjs` | Syntax passes. |
| `git diff --check` | No whitespace errors in the tracked diff. The repo verifier also checks authored Markdown for trailing whitespace. |
| `diff -ruN -- /data/home/.codex/skills/fleet-authoring skills/universal/fleet-authoring` | Expected exit 1. Shows the new skill as an addition. Creates no destination. |

YAML frontmatter was also parsed using the already installed Bun parser:

```bash
bun --eval 'import fs from "node:fs"; import assert from "node:assert/strict"; const s=fs.readFileSync("skills/universal/fleet-authoring/SKILL.md","utf8"); const metadata=Bun.YAML.parse(s.split("---")[1]); assert.equal(metadata.name,"fleet-authoring"); assert.equal(typeof metadata.description,"string"); assert.deepEqual(Object.keys(metadata).sort(),["description","name"]); console.log("PASS YAML frontmatter parsed with Bun.YAML");'
```

The third-party duplicates were compared by SHA-256. The differing Playwright CLI bodies were inspected with `diff -u`; the saved diff contains scroll guidance and an isolated-context tab example. Pstack's marketplace checkout has no tracked changes.

## Failures and corrections

The first isolated verification fixture used Node's default directory-copy behavior, which rewrote a relative symlink to an absolute link. The verifier correctly rejected it. The fixture now uses `verbatimSymlinks: true`, and the rerun passes. The original repo's symlink was already correct and was not changed.

The bundled skill-creator validator was attempted:

```bash
python3 /data/home/.codex/skills/.system/skill-creator/scripts/quick_validate.py skills/universal/fleet-authoring
```

It could not start because PyYAML is absent, reporting `ModuleNotFoundError: No module named 'yaml'`. No Python dependencies were installed. Bun's YAML parser and the repo verifier provide the frontmatter and structure checks for this build. This does not claim that the bundled validator passed.

## Checks that do not apply or remain unavailable

There is no `package.json`, package-manager declaration, lockfile, application, or configured formatting, lint, typecheck, build, or framework test script in this Markdown repo. No dependencies were installed. JavaScript syntax, artifact checks, and fixture behavior were verified with the installed runtimes. There is no changed browser flow or visual layout to test at desktop, tablet, or mobile widths.

Actual harness discovery after installation is untested because installation is explicitly deferred. Claude, shared Agents, Cursor, other machines, remote connections, and global instruction rollout are untested. The three secondary research pages and a usable video transcript were unavailable, as recorded in [research notes](research.md).

The Build the Lever principle shaped the retained verification scripts. The Prove It Works principle shaped direct source checks and isolated copy tests. These are checks, not a fleet sync framework.

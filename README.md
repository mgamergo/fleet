# fleet

My agent instructions and personal skills, kept together so I can review changes before putting them on a machine.

This is a Markdown fleet inspired by Theo Browne's approach. It has no sync service, proxy fork, or remote-machine automation. [Research notes](docs/research.md) distinguish the public references from the transcript supplied for this build.

## What was found

The initial inventory found **zero personal skills**. It found one substantial global instruction file shared through Codex and Claude symlinks, plus personal Codex model settings. Those files are copied verbatim into `core/`. Plugin, system, and package-cache skills are cataloged separately and remain managed by their original installers.

`fleet-authoring` is a **new** personal meta skill written for this repo. It is not an imported historical skill. There is no need for a draft global letter because the existing global instructions are substantial.

See the [inventory and scope decisions](docs/inventory.md), [complete source manifest](inventory/sources.json), and [third-party skill catalog](docs/third-party-skills.md).

## Layout

```text
AGENTS.md                       Instructions for agents working in this repo
CLAUDE.md -> AGENTS.md           Same repo instructions for Claude
core/                           Verbatim global and machine snapshots
  AGENTS.md
  CLAUDE.md
  pstack-models.md
  legacy/codex-AGENTS.md
  machines/agent-box/MACHINE.md
skills/
  universal/fleet-authoring/     New personal authoring skill
  claude-only/                  No imported skills
  codex-only/                   No imported skills
  command-center/               Leader-only skills, currently empty
fleet.json                      Machine, scopes, requirements, and targets
docs/                           Inventory, research, rollout, verification
inventory/sources.json          Original paths, aliases, hashes, timestamps
scripts/                        Read-only checks and temporary-fixture tests
  verify.mjs
  verify-fixtures.mjs
assets/icon.svg                 Preserved initial project asset
```

## Add a skill

Use the [fleet-authoring skill](skills/universal/fleet-authoring/SKILL.md). Start with a recurring mistake from your own work. Choose a scope, create `<name>/SKILL.md`, and write `name` plus a description that matches requests which should trigger it. Include bad and good examples where they clarify a decision. Keep supporting scripts and references beside the skill.

Add its scope and requirements to `fleet.json`. Run `bun scripts/verify.mjs`. Explain any body edits to imported skills in the inventory. Plugin installation is separate from personal skill rollout.

Run `bun scripts/verify-fixtures.mjs` to exercise the documented copy recipe in temporary directories and check that verification catches known mistakes. [Verification notes](docs/verification.md) record the commands, outcomes, and unavailable checks.

## Roll out

Read [the rollout guide](docs/rollout.md). The default is a read-only plan. The guide contains the exact preview command for this machine and a separate, explicitly gated copy recipe with backups. It also covers instruction symlinks and remote machines.

Only `agent-box` is inventoried and designated as the leader. Codex is the active harness. Claude, shared Agents, and Cursor targets are documented candidates, disabled until explicitly selected. T3 Code uses its Codex provider here; no separate T3 skill directory was found.

The initial build was local only. The user subsequently authorized committing and publishing this repo publicly at `mgamergo/fleet`. Publication does not authorize installing or syncing skills. Rollout remains dry-run by default.

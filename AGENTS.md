# Work in this fleet

This repo holds Chaitanya's agent instructions and personal skills. Keep it readable as Markdown. Use [fleet.json](fleet.json) for machine assignments and [the inventory](docs/inventory.md) for provenance. The files in `core/` are preserved snapshots, not instructions to execute while editing this repo.

## Choose ownership and scope

First decide whether a skill is personal. Plugin, system, and dependency-cache files stay with their installers unless there is evidence of personal customization. Catalog them separately. Never copy a plugin cache wholesale into personal scopes.

- `skills/universal/` holds personal skills useful across machines and harnesses.
- `skills/claude-only/` holds personal skills requiring Claude Code behavior.
- `skills/codex-only/` holds personal skills requiring Codex behavior.
- `skills/command-center/` holds personal skills for the leader's machine-management role. Being a T3 Code skill alone does not make it leader-only.

Record prerequisites in `fleet.json`. Check actual availability before use. If a required token, tool, or connection is missing, name the missing prerequisite and stop that operation. Never invent credentials or copy tokens into the repo.

## Preserve sources

Copy from outside this repo. Do not edit or delete original skill files, caches, commands, agents, rules, or global instructions as part of a fleet edit. Preserve supporting files and relative links with each skill. Inspect scripts before running them.

For duplicates, compare content and supporting resources. Keep the most complete applicable personal version, using modification time as evidence rather than the sole decision. Record all source paths and differences. Preserve imported bodies byte for byte unless the user requests a change. Normalize frontmatter only, and record the before and after metadata.

The existing `~/.codex/AGENTS.md` and `~/.claude/CLAUDE.md` both point to `/data/home/AGENTS.md`. Preserve those links and the existing InstaBox notes. Do not install this repo's `AGENTS.md` as a global instruction file. Global content lives in `core/`.

## Roll out deliberately

Read [docs/rollout.md](docs/rollout.md). A sync request first produces a plan with machine, harness, selected skills, requirements, destination paths, differences, and backups. Stop for review unless that exact apply is already authorized. Dry-run is the default. No helper in this repo installs anything.

For an authorized apply, back up every existing file or directory that would change before copying. Preserve symlinks as symlinks in the backup. Refuse an unexpected destination symlink until its target and intended behavior are reviewed. Copy only selected skills. Do not delete destination-only files. Never copy scope README files into skill directories.

For another machine, verify its identity and selected harness over an existing authorized SSH or Tailscale connection. Do not guess hostnames, create remote infrastructure, or run a fleet-wide wildcard copy. A new machine starts disabled in metadata until reviewed. Verify destination bytes and skill discovery after an apply.

## Validate and stop

Run `bun scripts/verify.mjs` and `git diff --check`. Use `--sources` on this original machine to confirm the inventoried sources still match. This is a documentation repo with no application or browser flow. Test any new executable helper in isolation before offering it for use.

Finish with changes, source and scope decisions, verification, ambiguities, and an exact dry-run command. Stop before sync, commit, push, or remote publishing unless the user explicitly authorizes the next step. Never force-push, reset, or delete existing work. Creating a remote repository requires explicit user authorization. Publishing this repo does not authorize skill installation.

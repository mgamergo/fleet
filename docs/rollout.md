# Roll out selected skills

This is an agent-guided procedure. There is no installer or sync framework. The default is a read-only plan. A machine being enabled in metadata permits planning, not installation.

## Preview agent-box and Codex

The current selection is only `fleet-authoring`. Run from the repo root:

```bash
bun scripts/verify.mjs --sources
diff -ruN -- /data/home/.codex/skills/fleet-authoring skills/universal/fleet-authoring
```

`diff` exits with 0 for identical content, 1 for differences, and 2 for an error. A missing destination directory is represented as additions by `-N`. This preview does not create directories or backups. Check the destination's ancestors for unexpected symlinks before any apply. Do not treat a failed verification as an acceptable diff exit.

The exact copy command, once separately authorized and after the backup steps below, is:

```bash
cp -a -- skills/universal/fleet-authoring/. /data/home/.codex/skills/fleet-authoring/
```

Do not run that line alone against an existing destination. The complete proposed apply recipe follows. It has **not** been run against a harness directory.

## Apply only after authorization

Run this block only after the user approves the named machine, harness, skills, differences, and backup plan. It copies one selected skill, backs up the entire existing destination, and leaves destination-only files in place. It refuses symlinks in the destination tree and its two harness ancestors.

```bash
set -eu
fleet_source=skills/universal/fleet-authoring
fleet_destination=/data/home/.codex/skills/fleet-authoring
fleet_backup_root=/data/home/.fleet-backups
test -f "$fleet_source/SKILL.md"
test ! -L /data/home/.codex
test ! -L /data/home/.codex/skills
test ! -L "$fleet_destination"
if [ -e "$fleet_destination" ]; then
  test -d "$fleet_destination"
  test -z "$(find "$fleet_destination" -type l -print -quit)"
  mkdir -p -- "$fleet_backup_root"
  fleet_backup=$(mktemp -d "$fleet_backup_root/agent-box-codex.XXXXXXXX")
  cp -a -- "$fleet_destination" "$fleet_backup/fleet-authoring"
  printf 'Backup saved at %s\n' "$fleet_backup/fleet-authoring"
fi
mkdir -p -- "$fleet_destination"
cp -a -- "$fleet_source/." "$fleet_destination/"
diff -u -- "$fleet_source/SKILL.md" "$fleet_destination/SKILL.md"
```

For a skill with resources, compare every copied file after applying, not only `SKILL.md`. Destination-only files may remain, so a whole-directory diff can report expected extras. Verify discovery in a fresh harness session. If discovery fails, stop and diagnose it before copying into additional locations.

Do not substitute `cp -R skills/*` or copy scope README files. A future selection combines universal, the selected harness scope, and command-center only for the leader. Skill names must be unique across the selected scopes. Check each skill's `requires` entry first. The current authoring skill has no tool, token, or other skill prerequisites.

## Handle core instructions separately

Core files are snapshots. Never copy the repo-root `AGENTS.md` or its `CLAUDE.md` alias into a global location.

On this machine both harness instruction links point to `/data/home/AGENTS.md`. An authorized global update must compare the proposed core content with that canonical file, back up the canonical file **and both symlinks**, and preserve their link structure. Preserve the InstaBox notes. Do not replace either link with a regular file. The current core copy already matches the live file, so no global update is proposed.

`core/pstack-models.md` is Codex configuration. It is never installed as a skill. A future change must keep its role rows consistent with the shared global instructions. `core/machines/agent-box/MACHINE.md` is a historical machine snapshot and must not overwrite the runtime-maintained `~/MACHINE.md`.

## Add another machine or harness

Inventory the destination and verify its machine ID, paths, installed harness, existing skills, instruction files, and symlinks. Add a disabled metadata entry. Review the scope and explicit skill selection before enabling it. Only one machine is known today. No SSH hostname or Tailscale address is assumed.

For a remote rollout, prepare the same per-file plan over an already authorized connection. Use a destination-local backup before a copy. Keep backups on the destination and record their paths. Do not delete files or install third-party catalogs. Never provision a machine or create access credentials as a side effect of syncing skills.

Claude, `~/.agents/skills`, and Cursor targets are disabled candidates. Do not assume their discovery behavior has been tested. Do not copy the same skill into both a harness directory and a shared directory without checking whether that creates duplicate discovery. T3 Code's active Codex provider does not justify inventing `~/.t3/skills`.

`rsync` is not installed on this machine, so the current procedure uses available `diff` and `cp`. No package installation is needed.

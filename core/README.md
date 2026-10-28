# Global instruction snapshots

These files preserve the source bytes from the initial inventory. They are not a rewritten global letter and are not automatically installed.

| File | Source | Intended scope |
| --- | --- | --- |
| `AGENTS.md` | `/data/home/AGENTS.md` | Existing shared instructions for this machine |
| `CLAUDE.md` | `/data/home/.claude/CLAUDE.md` | Same content through the Claude alias |
| `legacy/codex-AGENTS.md` | `/data/home/.codex/AGENTS.md` | Requested Codex snapshot |
| `pstack-models.md` | `/data/home/.codex/pstack-models.md` | Personal Codex model configuration |
| `machines/agent-box/MACHINE.md` | `/data/home/MACHINE.md` | Machine context, not global preferences |

The first three files have identical bytes because both harness paths are symlinks to `/data/home/AGENTS.md`. The `legacy` name denotes an archival copy of the pre-fleet Codex source, not evidence of an older version. No distinct older Codex instruction file was found.

The existing instructions are substantial and include machine details, verification rules, and pstack model preferences. Keep them verbatim. A future portable global letter would be a separate, reviewed change. Do not distribute this machine's absolute paths to other machines without review.

When changing pstack model preferences later, update the model rows in the shared instruction file and `pstack-models.md` together. The model file also contains `panel vendors: any` and `session hook: on`, which are absent from the shared file.

Hashes and symlink provenance are recorded in [the source manifest](../inventory/sources.json). See [the rollout guide](../docs/rollout.md) before installing any core content.

# Initial machine inventory

Inventoried on 2026-10-28. **No pre-existing personal skills were found.** The fleet imports global instructions and personal model settings, and creates one new authoring skill. Plugin and system skills are listed separately instead of being presented as authored work.

## Personal material and scope decisions

| Material | Source path | Scope chosen | Why |
| --- | --- | --- | --- |
| Shared global instructions | `/data/home/AGENTS.md` | `core/AGENTS.md`, machine-specific snapshot | Substantial existing instructions. Copied verbatim, with no letter rewrite. |
| Claude global instructions | `/data/home/.claude/CLAUDE.md` | `core/CLAUDE.md`, snapshot | Symlink to the shared file. Same bytes, not a separate version. |
| Codex global instructions | `/data/home/.codex/AGENTS.md` | `core/legacy/codex-AGENTS.md`, snapshot | Symlink to the shared file. Requested pre-fleet archive, not an older revision. |
| Personal pstack model settings | `/data/home/.codex/pstack-models.md` | `core/pstack-models.md`, Codex-only configuration | Preserves model roles, panel vendor preference, and session hook setting. Not a skill. |
| Machine reference | `/data/home/MACHINE.md` | `core/machines/agent-box/MACHINE.md`, leader context | Records the verified machine ID and operating context. Runtime-owned snapshot. |
| `fleet-authoring` | Created in this repo | `skills/universal/fleet-authoring/` | New, portable personal meta skill requested for authoring and recurring corrections. |

No imported instruction bodies were edited. No skill frontmatter was normalized because no personal skills were imported. The new skill starts with `name` and a request-based trigger description. All original external files and instruction symlinks remain in place.

The shared global file is 8,276 bytes and includes machine notes, development preferences, verification, and pstack routing. It is not missing or thin. No draft global letter was added. Its machine-specific content makes automatic distribution to other machines inappropriate.

## Search coverage

The primary scan included hidden and ignored files, cache directories, and symlink traversal:

```bash
rg --files --hidden --no-ignore --follow \
  -g '!**/node_modules/**' -g '!**/.git/**' \
  -g SKILL.md -g AGENTS.md -g CLAUDE.md \
  /data/home /data/workspace
```

A separate `find` scan without following directory symlinks cross-checked physical paths:

```bash
find /data/home /data/workspace \
  -type d \( -name node_modules -o -name .git \) -prune -o \
  \( -name SKILL.md -o -name AGENTS.md -o -name CLAUDE.md \) -print
```

The initial scans found 208 matching paths with symlink traversal and 201 physical-path occurrences. Two additional context files bring the source manifest to 210 records. The seven-path difference consists of Bun package alias paths. The initial 208 consist of 203 third-party skill paths, three shared instruction paths, and two Next.js dependency instruction paths. These counts exclude the fleet files created afterward and the temporary tstack research clone outside the scan roots.

## Locations inspected

| Location | Result |
| --- | --- |
| `~/.claude/skills`, `commands`, `agents` | Absent. No personal Claude skills, commands, or agents to import. |
| `~/.claude/CLAUDE.md` | Existing symlink to `/data/home/AGENTS.md`. |
| `~/.codex/skills` | Only `.system`, containing five built-in skills. |
| `~/.codex/AGENTS.md` | Existing symlink to `/data/home/AGENTS.md`. |
| `~/.codex/prompts` | Absent. |
| `~/.agents/skills` | Parent directory absent. |
| `~/.cursor/skills`, `~/.cursor/rules` | Parent directory absent. |
| `~/.config/**/skills` | No matching skill or instruction files found. |
| `~/projects/nextjs-prelaunch-check` | No personal `SKILL.md`, `AGENTS.md`, or `CLAUDE.md` found outside dependencies. |
| `~/code/projects` | No matching files. |
| `~/.t3/projects` | Only this starter fleet repo, with no pre-existing skills or global instruction files. |
| `/data/workspace` | Includes `repo-radar` and `.dev-tools`; no matching personal skills or instruction files. |
| Codex plugin and marketplace directories | Third-party files cataloged, not imported. |
| Bun package cache | Playwright skill copies and Next.js instructions cataloged as dependencies. |

Credentials, session contents, shell history, application databases, and arbitrary configuration contents were not collected. Installed configuration was inspected only where it was a known instruction or personal model file. No other machine was inventoried.

## Duplicates and unresolved questions

The three global instruction paths are exact aliases. Separate plain-file snapshots satisfy the requested core and Codex archive without replacing the live links. No distinct older Codex file was found.

The third-party catalog records all 203 skill path occurrences under 127 names. Pstack's installed and marketplace skill bodies match. Playwright CLI has the only differing body under a duplicate name. Its newer and more complete version is noted in the catalog, with the exact diff saved. Third-party bodies and support resources were not promoted into personal scopes.

Authorship cannot be proven from a home-directory path. No evidence established a personally customized plugin skill. If the user recognizes one, inspect its entire directory and upstream differences before importing it.

Only `agent-box` is known. It is designated leader at the user's request. Claude's CLI is absent despite the machine reference listing it among installed tools. Current PATH and T3 provider observations govern the disabled Claude metadata entry. Shared Agents and Cursor discovery are unverified. T3's injected session instructions are not standalone source files and were not misrepresented as imported globals.

The initial build honored the opening wait-before-commit stop point. The user subsequently authorized committing and publishing the repo publicly at `mgamergo/fleet`. That authorization does not include syncing or installing skills.

See [the third-party catalog](third-party-skills.md) for the complete skill-to-source table and [the manifest](../inventory/sources.json) for full hashes, timestamps, aliases, and copy destinations.

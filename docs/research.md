# Research and attribution

Checked on 2026-10-28. Theo's fleet is private. This repo does not claim to reproduce its undisclosed files or metadata format. `fleet.json`, the verification script, and the local layout decisions here are our choices for this machine.

## Directly inspected public source

[t3dotgg/tstack](https://github.com/t3dotgg/tstack) was cloned read-only for study to `/tmp/fleet-tstack-reference-20261028`, at commit `1085050f3baed1ac724caa4a8166145fb2ac88af`. Its README, license, and `skills/file-pr/SKILL.md` were inspected. It uses skill folders with `SKILL.md`, YAML `name` and `description`, request-based triggers, examples, and references to other skills. Its README describes Claude and Codex install destinations. It is MIT licensed. No tstack skill bodies or scripts were imported into this fleet.

## User-supplied account of the private fleet

The user supplied the fleet passage at approximately 2:55 from [the YouTube video](https://www.youtube.com/watch?v=e1snsuY4lTI), titled "My AGENTS.md & SKILLS.md Breakdown (Don't copy them)", also described as "I made Claude smarter by writing it a letter", dated Aug 11, 2026 in the request. The browser fetch exposed only the YouTube shell, not a usable transcript. The passage, timestamp, and date were not independently transcribed or verified in this session.

The supplied passage describes a Markdown repo, core instructions, machine metadata, universal skills, Claude-only skills, and leader-only command-center skills. The user also supplied the process of auditing recurring corrections and turning them into instructions. These guide this build without inventing further details of Theo's private files.

The CLI proxy fork was omitted because no equivalent was identified in the requested inventory.

## Other requested references

| Source | Result |
| --- | --- |
| [BigGo write-up](https://finance.biggo.com/news/63e17fcb23548c16) | Web tool returned inaccessible. No claims extracted. |
| [UIUO summary](https://uiuo.nl/youtube-summaries/e1snsuY4lTI) | Web tool returned inaccessible. No claims extracted. |
| [Unofficial SourceHut reconstruction](https://git.sr.ht/~krisyotam/theo-skills) | Web tool returned inaccessible. No claims extracted. |

The new `fleet-authoring` skill expresses the requested method in original wording. It is not Theo's private letter or a claim about his exact fleet schema.

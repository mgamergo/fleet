---
name: fleet-authoring
description: Use when adding or revising a personal agent skill, codifying a recurring agent mistake, or auditing agent history to improve fleet instructions.
---

# Write a personal skill

Start from a recurring correction in the user's work. Read only the relevant history the user has authorized. Remove secrets and private conversation details from examples. Separate the user's preferences from behavior required by one project or machine.

Write a short rule that would have changed the agent's decision. Test it against the original failure and a nearby request where it should not trigger. Keep a single correction in project instructions when it does not justify a reusable workflow.

## Make discovery precise

Create `<scope>/<name>/SKILL.md`. Use lowercase letters, digits, and hyphens for the name. Frontmatter needs `name` and `description`. The description is visible before the body loads, so write the requests and keywords that should trigger the skill.

BAD

> description: A comprehensive collection of best practices for efficient development.

GOOD

> description: Use when the user asks to file, open, or create a pull request.

Put rules and steps in the body. Keep examples tied to real corrections. Add scripts or references only when they help the workflow. Preserve their relative paths. Reference another skill by name only when it exists in the intended installation, and record that dependency.

## Choose scope and requirements

Use `universal` for personal workflows shared across machines. Use `claude-only` or `codex-only` for a required harness behavior. Use `command-center` for the leader's machine-management role. A tool available only on today's machine is a prerequisite to document, not proof that a skill must remain leader-only.

In a fleet repo, record scope and requirements beside the machine assignments. A token requirement records the variable's name, never its value. If a prerequisite is missing, report it rather than guessing a replacement or credential.

BAD

> Try a likely token, create a remote repo, and roll the skill out everywhere.

GOOD

> Record the required credential name. Prepare a per-machine copy plan. Stop if access is missing or installation is not authorized.

## Preserve imports and validate the result

Copy personal source files into the fleet. Compare duplicate bodies and supporting resources before selecting a version. List source paths, the selected version, and differences. Plugin and built-in skills stay separately cataloged unless personal customization is established.

Normalize imported frontmatter without changing the body. Report any requested body changes separately. Check frontmatter, referenced files, script behavior, and the positive and negative trigger cases. Use the repository's existing checks.

## Give the next agent a stop point

End the task with a reviewable diff and validation results. Keep installation, commits, and pushes within the user's explicit authorization. Fleet rollout defaults to a dry-run plan and requires backups before replacing anything.

BAD

> Clean up the skills and ship everything.

GOOD

> Make the changes in the fleet, list the source and scope decisions, and run local checks. Do not install, commit, or push yet.

After real use, compare the next correction with this rule. Tighten the trigger or remove a rule that adds ceremony without changing a decision. Let recurring corrections become reusable instructions so future prompts can get shorter.

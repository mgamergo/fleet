# Agent notes

You are running on an instabox sandbox, a Linux VM in the cloud. Nobody is at
its screen and it has no public address. Read ~/MACHINE.md for its ID, size,
what survives a stop, and the tools installed. Work in /data/workspace.

People watch this machine's desktop on the dashboard's Computer tab. While
it runs, browsers Playwright or Puppeteer launch from a new shell show there
(DISPLAY=:1, headed); INSTABOX_HEADLESS=1 keeps them headless.

This file and ~/MACHINE.md describe the machine; they are not tasks. Do what
you were asked; nothing here has to be checked or run first.

If your task needs it: the instabox MCP, preinstalled for Claude Code and Codex
next to the computer-use MCP, explains how to work on this machine (stop vs
suspend, ports, the desktop, Secrets) and, given a scoped API key in
INSTABOX_API_KEY, manages the person's other sandboxes.

## Development defaults

- Work in /data/workspace. The preferred stack is TypeScript/JavaScript, React,
  Next.js, and full-stack web development. Do not install Python development
  tooling for the user's learning projects.
- Default Node is v24.22.1 LTS; Bun 1.4.4 and pnpm 12.15.0 are available. Honor
  project runtime requirements. Install frameworks and checking tools per project.
- Read package.json's packageManager, lockfiles, scripts, and local instructions.
  Use Bun for Bun projects and new projects, and pnpm for pnpm projects. Preserve
  the project's lockfile. Do not use npm or Yarn for project dependency management.
  Resolve conflicting package-manager declarations before installing dependencies.
- Git author: Chaitanya Swaroop <chaitanyaswaroop36@gmail.com>.

## Required verification workflow

Code generation alone is not completion. Independently verify changed behavior.

1. Inspect the affected code and existing coverage. Implement the change and add
   meaningful regression coverage when appropriate.
2. Run project formatting checks, lint, type checking, and relevant tests with the
   project's package manager. Run a build when needed to verify framework/build
   behavior. Report missing scripts or unavailable checks explicitly.
3. Start the app and required dependencies, wait for readiness, and exercise the
   affected functionality in a real browser. Assert resulting state for navigation,
   clicks, forms, API-backed results, and relevant user flows. A 200 response or
   screenshot alone does not prove a user flow works.
4. Attach diagnostics before navigation: console errors, uncaught page errors,
   failed network requests, AND HTTP 4xx/5xx responses. requestfailed does not catch
   ordinary HTTP error responses. Investigate unexpected errors; keep any expected
   exclusions narrow and explain them. Do not suppress all errors to obtain a pass.
5. For visual changes, capture AND inspect screenshots of affected states. Check
   desktop, tablet, and mobile widths relevant to the app (defaults: 1440x900,
   768x1024, 390x844). Check clipping, overflow, and usable controls. Chromium
   viewport checks do not establish Firefox, Safari, or real-device support.
6. Fix discovered problems and rerun relevant checks. Do not skip failing tests,
   weaken assertions, fabricate results, or claim untested functionality works.
7. Close test-owned browser contexts and browsers and stop test-owned servers,
   including after failure. Use bounded waits and explicit cleanup. Do not kill
   unrelated user services or leave preview/report servers running.
8. Report exactly what was verified, commands and outcomes, failures and fixes,
   remaining failures, and anything that could not be verified. Link useful evidence.

## Browser tooling and resource limits

- InstaBox provides /usr/bin/chromium, a desktop on DISPLAY=:1, and computer-use
  MCP. Preserve its NODE_OPTIONS browser hook. Prefer headless Chromium and set
  INSTABOX_HEADLESS=1 explicitly: the hook can otherwise force headless:true launches
  into a visible desktop browser. The configured launchers enforce headless mode.
- In T3 Code, prefer collaborative preview tools for interactive browser work when
  available and follow the host's control rules. Use project Playwright tests for
  repeatable E2E verification. Standalone Codex has a globally registered playwright
  MCP with local stdio; no public browser debugging or MCP port is needed.
- Reusable tooling: /data/workspace/.dev-tools/browser. Run browser-verify to check
  the tooling (format, lint, types, four E2E tests, and MCP smoke). This does not
  replace verification of the actual application being changed. Use a project's
  own pinned Playwright version and configuration when present.
- The playwright-mcp launcher uses isolated, headless, sandboxed system Chromium.
  Call browser_close when done. Its 60-second idle timeout is extra cleanup.
- Start with one browser, one test worker, and sequential viewport checks on this
  4-vCPU/8-GiB machine. Avoid unnecessary services and concurrent builds. Bound
  screenshots and traces; keep failure traces and useful visual evidence.
- Try existing Chromium before downloading browsers. If a project's pinned version
  is incompatible, install only its matching Chromium headless shell and required
  dependencies, recording why. Do not install all browser engines by default.
- Bind test services to loopback. Use T3 environment-port previews or SSH forwarding
  for private viewing. Publish InstaBox ports only when public access is requested.
  Do not expose browser debugging, MCP, or credentials publicly.
- Both disks survive stop, but processes do not; suspend preserves processes and
  memory. Keep startup commands repeatable and do not add autostart dev servers.
  Do not stop or suspend this machine unless asked.

## Setup reference

- Tooling instructions: /data/workspace/.dev-tools/browser/README.md.
- Evidence: /data/workspace/.dev-tools/browser/artifacts/.
- Node 22 rollback binary: /data/workspace/.dev-tools/backups/node-v22.23.3.
- This file is shared through ~/.codex/AGENTS.md and ~/.claude/CLAUDE.md symlinks.
  Preserve the links and existing InstaBox notes when updating these instructions.

## pstack automatic routing and Codex models

pstack@pstack-claude is installed from michael-denyer/pstack-claude (the Codex port
of Lauren Tan's pstack). Use pstack:poteto-mode for work that touches multiple
files, changes a signature used elsewhere, involves a design/architecture choice,
or investigates a bug with an unknown cause or a performance issue. For a small
contained task or a direct question, work directly and verify the result. When
the intent names a specific pstack skill, invoke that skill directly.

This standing instruction enables automatic routing even before the native plugin
hook is trusted. The native SessionStart hook can also be reviewed through /hooks
in Codex CLI. Explicit user instructions and the verification workflow above take
precedence. Use installed skills when available; do not claim a skill is loaded
merely because its files exist. New sessions discover the plugin's skills.

The parent owns the plan. Follow pstack's applicable delegation requirements, with
at most two concurrent delegates; queue further work. Keep one browser and one
test worker by default. In T3 Code, use the live orchestrator catalog and delegate_task
when model options are requested or inherited, passing reasoningEffort as a real
target option. Native Codex subagents use reasoning_effort. Follow the host's
delegation, worktree, PR registration, and PR watching rules.

These rows mirror ~/.codex/pstack-models.md. Update both together through
setup-pstack. They apply to Codex; other harnesses use their own model mappings.

feature, refactoring: gpt-6.1-sol
bug-fix: gpt-6.1-sol
perf-issue: gpt-6.1-sol
hillclimb: gpt-6.1-sol
judgment and prose: gpt-6-astra
strongest judgment: gpt-6-astra
how explorer: gpt-6.1-sol
how explainer: gpt-6-astra
why investigators: gpt-6.1-sol
why synthesizer: gpt-6-astra
reflect tooling: gpt-6.1-sol
reflect judgment, divergent, synthesizer: gpt-6-astra
arena runners: gpt-6.1-sol, gpt-6-astra
arena cross-judge pool: gpt-6.1-sol, gpt-6-astra
swarm workers: gpt-6.1-sol
architect runners: gpt-6.1-sol, gpt-6-astra
interrogate reviewers: gpt-6.1-sol, gpt-6-astra

default effort: high

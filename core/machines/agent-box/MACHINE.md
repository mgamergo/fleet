# This machine

An instabox sandbox: a Linux VM (Firecracker) in the cloud, not your laptop.
Written by instabox at 2026-10-27T03:58:33Z; rewritten for every new machine and at every start from stopped.

| | |
| --- | --- |
| Machine ID | `m_agqxxaubxeibuacuyghgbcm5cq` |
| Created | 2026-10-27T03:58:32Z |
| Name | agent-box |
| Template | agent-browser@2026-10-25.23 |
| Size | 4 vCPU, 8192 MiB memory, 16 GiB root disk, 20 GiB /data |

## Facts

- User `user`, passwordless `sudo`. Home is /data/home; work in /data/workspace.
- Both disks, the root disk and /data, are this machine's own and survive a stop.
  A stop ends every process; a suspend keeps memory and processes; a snapshot saves the root disk, and /data unless it is root-only.
- Outbound internet works. No port is reachable from the internet: people reach the
  machine through instabox (SSH, exec, the dashboard's Terminal and Computer tabs).

## How to use it

People, from their own computer:

- Dashboard: this machine's Terminal tab is a shell; its Computer tab shows the desktop.
- CLI: `instabox ssh m_agqxxaubxeibuacuyghgbcm5cq` for a shell (or VS Code / Cursor through `instabox ssh-config m_agqxxaubxeibuacuyghgbcm5cq`),
  `instabox exec m_agqxxaubxeibuacuyghgbcm5cq -- <cmd>` to run one command, `instabox files m_agqxxaubxeibuacuyghgbcm5cq [PATH]` to browse files.

Agents running on this machine:

This is reference, not a to-do list: do what you were asked. Nothing below has to be
checked, run or asked for unless your task needs it.

- You are already on it: run commands directly, keep work in /data/workspace.
- Sign-ins: this machine may already be signed in to git, gh, clouds or agents (from
  before a stop, or copied from a snapshot's source). When your task needs one, it may
  already work (`gh auth status`, `git config --get user.email`).
- Public ports, when configured: `instabox-port publish 3000` gives a running HTTP service
  a public URL that stays until unpublished; `instabox-port serve ./report` serves a directory.
  URLs answer only while this sandbox runs. Manage them with `instabox-port list` and
  `instabox-port unpublish <port>`, or on its Ports tab in the dashboard.
- A browser people can watch: while the desktop runs (the Computer tab starts it), browsers that
  Playwright or Puppeteer launch from a new shell show on it, headed on `DISPLAY=:1`, even when
  asked for headless (`INSTABOX_HEADLESS=1` keeps them headless). Or run `DISPLAY=:1 chromium &`.
  The computer-use MCP (`instabox-computer-use`) drives the same desktop.
- The `instabox` MCP (Claude Code, Codex) answers how to work on this machine and, with a
  scoped API key in `INSTABOX_API_KEY`, lists, creates, starts, stops and runs commands on
  the person's other sandboxes.

## Found on this machine

- `git` (/usr/bin/git)
- `gh` (/usr/bin/gh)
- `curl` (/usr/bin/curl)
- `jq` (/usr/bin/jq)
- `node` (/usr/local/bin/node)
- `npm` (/usr/local/bin/npm)
- `pnpm` (/usr/local/bin/pnpm)
- `yarn` (/usr/local/bin/yarn)
- `bun` (/usr/local/bin/bun)
- `python3` (/usr/bin/python3)
- `uv` (/usr/local/bin/uv)
- `go` (/usr/local/bin/go)
- `cargo` (/usr/local/bin/cargo)
- `docker` (/usr/bin/docker)
- `claude` (/usr/local/bin/claude)
- `codex` (/usr/local/bin/codex)
- `chromium` (/usr/bin/chromium)
- `docker compose`

Desktop: installed. The Computer tab of the dashboard starts it (display :1, Xvnc on 127.0.0.1:5901).

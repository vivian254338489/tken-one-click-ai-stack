# Release Notes: TKEN One-Click AI Stack 0.2.0

This release turns the project into a complete install package suite.

## Download Packages

- `tken-full-stack.zip`
- `tken-gateway.zip`
- `tken-chatgpt-web-ui.zip`
- `tken-claude-web-ui.zip`
- `tken-codex-client-kit.zip`
- `tken-openclaw-client-kit.zip`

## What Changed

- Gateway: OpenAI-compatible `/v1/chat/completions` proxy with model route mapping.
- Web UIs: bundled and standalone ChatGPT-style / Claude-style packages.
- Clients: Codex and OpenClaw config generators.
- Deploy: Docker, Railway, Render, and Vercel docs.
- QA: smoke tests, web app health tests, package doctor, and zip validation.

## Quick Test

```bash
npm install
npm run check:kits
```

## API Base URL

```text
https://www.tken.shop/v1
```

Get a key:

https://www.tken.shop/?utm_source=github&utm_medium=release_notes&utm_campaign=one_click_ai_stack

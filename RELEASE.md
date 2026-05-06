# Release Notes: TKEN One-Click AI Stack 0.4.4

This release hardens the install kits for public demos, commercial trials, and beginner self-serve installs.

## Download Packages

- `tken-full-stack.zip`
- `tken-gateway.zip`
- `tken-chatgpt-web-ui.zip`
- `tken-claude-web-ui.zip`
- `tken-codex-client-kit.zip`
- `tken-openclaw-client-kit.zip`
- `SHA256SUMS.txt`

## What Changed

- Added built-in request rate limiting with `RATE_LIMIT_WINDOW_MS` and `RATE_LIMIT_MAX`.
- Added basic security headers and disabled Express fingerprinting.
- Added `npm run production:check` to catch demo mode, weak local keys, wildcard CORS, and missing rate limits.
- Added preflight checks and `TROUBLESHOOTING.md` so one-click users get clear startup fixes.
- Added `DOWNLOADS.md` package picker and README preview image for better GitHub conversion.
- Added preflight checks to one-step install scripts.
- Added SHA-256 checksum generation and verification for release assets.
- Added safe support report generation for customer troubleshooting.
- Updated README with direct release download links for every package.
- Every package now has beginner entry points.
- Standalone Web UI packages include `START.bat`, `START.sh`, `configure.mjs`, and `NEXT_STEPS.md`.
- Codex and OpenClaw kits include `START.bat`, `START.sh`, and `NEXT_STEPS.md`.
- Gateway loads `.env` automatically.
- Full stack includes demo mode and `/admin` status page.
- Gateway: OpenAI-compatible `/v1/chat/completions` proxy with model route mapping.
- Web UIs: bundled and standalone ChatGPT-style / Claude-style packages.
- Clients: Codex and OpenClaw config generators.
- Deploy: Docker, Railway, Render, and Vercel docs.
- QA: smoke tests, web app health tests, package doctor, and zip validation.

## Quick Test

```bash
npm install
npm run check
npm run check:kits
```

## API Base URL

```text
https://www.tken.shop/v1
```

Get a key:

https://www.tken.shop/?utm_source=github&utm_medium=release_notes&utm_campaign=one_click_ai_stack

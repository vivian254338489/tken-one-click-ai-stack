# Release Notes: TKEN One-Click AI Stack 0.5.0

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
- Added `SUPPORT.bat` and `SUPPORT.sh` for one-click support reports.
- Added `START_HERE.txt` for non-technical users after unzip.
- Added `START_HERE.txt` to standalone Web UI and client kit packages.
- Added automatic browser opening for full-stack and standalone Web UI start scripts.
- Added one-click support reports to standalone ChatGPT-style and Claude-style Web UI packages.
- Added one-click support reports to Codex and OpenClaw client kit packages.
- Added standalone support-report coverage to zip validation.
- Added SEO-ready landing pages for "3-minute ChatGPT gateway", API pricing comparison, GPT vs Claude, and Chinese vs US model routing.
- Added a sitemap for the new guide and comparison pages.
- Added a GitHub growth target list for legal second-development opportunities.
- Added a 30-day content calendar, Reddit experience draft, short-video scripts, comparison headline bank, and Amazon/voucher risk plan.
- Added smoke-test coverage for all new guide and comparison pages.
- Updated README with direct release download links for every package.
- Every package now has beginner entry points.
- Standalone Web UI packages include `START.bat`, `START.sh`, `SUPPORT.bat`, `SUPPORT.sh`, `configure.mjs`, and `NEXT_STEPS.md`.
- Codex and OpenClaw kits include `START.bat`, `START.sh`, `SUPPORT.bat`, `SUPPORT.sh`, and `NEXT_STEPS.md`.
- Gateway loads `.env` automatically.
- Full stack includes demo mode and `/admin` status page.
- Gateway: OpenAI-compatible `/v1/chat/completions` proxy with model route mapping.
- Web UIs: bundled and standalone ChatGPT-style / Claude-style packages.
- Clients: Codex and OpenClaw config generators.
- Deploy: Docker, Railway, Render, and Vercel docs.
- Growth: GitHub second-development targets, SEO pages, social drafts, and video scripts.
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

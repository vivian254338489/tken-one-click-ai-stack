# Installation Package Manifest

This repository contains six installable packages.

| Package | Path | Purpose | Main command |
| --- | --- | --- | --- |
| Full stack | `.` | Gateway plus bundled ChatGPT-style and Claude-style UIs | `npm install && npm start` |
| Gateway | `.` | OpenAI-compatible gateway for Docker, Railway, Render, and Vercel | `docker compose up --build` |
| ChatGPT Web UI | `apps/chatgpt-web` | Standalone ChatGPT-style browser UI for any OpenAI-compatible API | `npm install && npm start` |
| Claude Web UI | `apps/claude-web` | Standalone Claude-style browser UI for any OpenAI-compatible API | `npm install && npm start` |
| Codex client kit | `clients/codex` | Generates a TKEN OpenAI-compatible client config template | `node install.mjs` |
| OpenClaw client kit | `clients/openclaw` | Generates an OpenClaw-style provider config template | `node install.mjs` |

Beginner entry points:

- Windows: `START.bat`
- macOS/Linux: `START.sh`
- One-click support report: `SUPPORT.bat` or `SUPPORT.sh`
- Local preflight check: `npm run preflight`
- Download picker: `DOWNLOADS.md`
- Growth assets: `growth/`
- Troubleshooting guide: `TROUBLESHOOTING.md`
- Commercial checklist: `COMMERCIAL.md`
- 3-minute guide: `QUICKSTART.md`

Build downloadable zip kits:

```bash
npm install
npm run package:kits
```

Generated files are written to `dist/` and are intentionally not committed.

Every generated zip is validated by:

```bash
npm run check:kits
```

Validation confirms the package contains the expected root-level files, support-report tools, and runnable smoke checks.

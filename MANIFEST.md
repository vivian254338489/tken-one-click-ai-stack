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

Build downloadable zip kits:

```bash
npm install
npm run package:kits
```

Generated files are written to `dist/` and are intentionally not committed.

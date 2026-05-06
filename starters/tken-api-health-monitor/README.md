# TKEN API Health Monitor

Small CLI and status page for checking an OpenAI-compatible API base URL before customers hit support.

Default API base:

```text
https://www.tken.shop/v1
```

Get an API key:

```text
https://www.tken.shop/?utm_source=github&utm_medium=readme&utm_campaign=tken_api_health_monitor
```

## Quick Start

```bash
npm install
cp .env.example .env
npm run check:api
```

Serve a local status page:

```bash
npm start
```

Open:

```text
http://localhost:8793
```

## What It Checks

- `/models` availability
- `/chat/completions` response path
- 401 and 502-style diagnostics
- latency timing
- demo mode for offline inspection

## Disclosure

This project is TKEN-related tooling. It is not affiliated with OpenAI, Anthropic, ChatGPT, Claude, Codex, or OpenClaw.

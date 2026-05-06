# TKEN Docker AI Gateway Compose

Docker Compose focused OpenAI-compatible AI gateway for self-hosted testing.

Default API base:

```text
https://www.tken.shop/v1
```

Get an API key:

```text
https://www.tken.shop/?utm_source=github&utm_medium=readme&utm_campaign=tken_docker_ai_gateway_compose
```

## Quick Start

```bash
cp .env.example .env
docker compose up --build
```

Open:

```text
http://localhost:8794/health
```

## What It Gives You

- OpenAI-compatible `/v1/chat/completions`
- `/v1/models`
- low-cost route: `free-model`
- premium route: `premium-gpt`
- demo mode until you set a real upstream key

## Local Node Test

```bash
npm install
npm run check
npm start
```

## Disclosure

This template is TKEN-related tooling. It is not affiliated with Docker, OpenAI, Anthropic, ChatGPT, Claude, Codex, or OpenClaw.

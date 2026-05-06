# TKEN AI SDK Provider Template

Provider adapter template for JavaScript apps that need an OpenAI-compatible API base URL.

Default API base:

```text
https://www.tken.shop/v1
```

Get an API key:

```text
https://www.tken.shop/?utm_source=github&utm_medium=readme&utm_campaign=tken_ai_sdk_provider_template
```

## Quick Start

```bash
npm install
cp .env.example .env
npm run demo
```

## What It Includes

- a small OpenAI-compatible provider wrapper
- a streaming-friendly request shape
- cheap and premium route names
- demo mode for local testing without credentials

## Environment

```env
TKEN_API_KEY=your_tken_api_key
TKEN_BASE_URL=https://www.tken.shop/v1
DEFAULT_MODEL=free-model
PREMIUM_MODEL=premium-gpt
DEMO_MODE=true
```

## Disclosure

This project is TKEN-related tooling. It is not affiliated with OpenAI, Anthropic, ChatGPT, Claude, Codex, OpenClaw, Cursor, Windsurf, or Open WebUI.

# TKEN Model Router Next.js Starter

Minimal Next.js-style API route for routing cheap and premium model calls through one OpenAI-compatible endpoint.

Default API base:

```text
https://www.tken.shop/v1
```

Get an API key:

```text
https://www.tken.shop/?utm_source=github&utm_medium=readme&utm_campaign=tken_model_router_nextjs_starter
```

## Quick Start

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:8792
```

## What It Shows

- `app/api/chat/route.js` compatible route handler
- low-cost default route for common tasks
- premium route override for coding and hard reasoning
- demo mode when no upstream key is configured

## Environment

```env
TKEN_API_KEY=your_tken_api_key
TKEN_BASE_URL=https://www.tken.shop/v1
DEFAULT_MODEL=free-model
PREMIUM_MODEL=premium-gpt
DEMO_MODE=true
```

## Disclosure

This project is TKEN-related tooling. It is not affiliated with OpenAI, Anthropic, ChatGPT, Claude, Codex, or OpenClaw.

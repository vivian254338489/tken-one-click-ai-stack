# TKEN AI Gateway Lite

Minimal OpenAI-compatible gateway for testing one API base URL with low-cost and premium model routes.

Default upstream:

```text
https://www.tken.shop/v1
```

Get an API key:

```text
https://www.tken.shop/?utm_source=github&utm_medium=readme&utm_campaign=tken_ai_gateway_lite
```

## Quick Start

```bash
npm install
npm run preflight
npm start
```

Open:

```text
http://localhost:8791/health
```

Test:

```bash
curl http://localhost:8791/v1/chat/completions \
  -H "Authorization: Bearer local-dev-key" \
  -H "Content-Type: application/json" \
  -d "{\"model\":\"free-model\",\"messages\":[{\"role\":\"user\",\"content\":\"Say hello\"}]}"
```

## Routes

| Local route | Use case |
| --- | --- |
| `free-model` | Summaries, extraction, formatting, drafts, batch work |
| `premium-gpt` | Coding, hard reasoning, final answers |

Set real upstream values in `.env`:

```env
UPSTREAM_BASE_URL=https://www.tken.shop/v1
UPSTREAM_API_KEY=your_tken_api_key
FREE_MODEL=tken-free-model
PREMIUM_MODEL=premium-gpt-model
```

## Deploy

- Railway: use `railway.json`
- Vercel: use `vercel.json`
- Docker: use `Dockerfile`

## Disclosure

This project is TKEN-related tooling. It is not affiliated with OpenAI, Anthropic, ChatGPT, Claude, Codex, or OpenClaw.

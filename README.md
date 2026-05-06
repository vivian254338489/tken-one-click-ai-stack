# TKEN One-Click AI Stack

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vivian254338489/tken-one-click-ai-stack&env=LOCAL_API_KEY,UPSTREAM_API_KEY,UPSTREAM_BASE_URL,FREE_MODEL,PREMIUM_MODEL,DEFAULT_ROUTE&envDescription=OpenAI-compatible%20gateway%20settings&envLink=https://www.tken.shop/?utm_source=github%26utm_medium=deploy_button%26utm_campaign=one_click_ai_stack)

Deploy an OpenAI-compatible multi-model AI stack with one gateway, two chat UIs, and ready-to-copy client configs.

This repo is designed for developers who want to test selected low-cost AI model routes and use premium GPT routes when needed through one API format.

## What You Get

- OpenAI-compatible gateway
- ChatGPT-style web UI
- Claude-style web UI
- Docker Compose deployment
- Railway deployment guide
- Render deployment guide
- Vercel deployment guide
- Codex client config template
- OpenClaw config template
- Open WebUI setup notes
- Node/Python/cURL API examples
- Free or low-cost route plus premium route mapping

## Important Naming Note

This project is not affiliated with OpenAI, Anthropic, ChatGPT, Claude, Codex, or OpenClaw.

The terms "ChatGPT-style" and "Claude-style" describe UI patterns only. You can connect any OpenAI-compatible provider.

## Quick Start With Node

```bash
npm install
cp .env.example .env
npm start
```

Open:

- ChatGPT-style UI: http://localhost:8787/chatgpt
- Claude-style UI: http://localhost:8787/claude
- Gateway health: http://localhost:8787/health

## Quick Start With Docker

```bash
cp .env.example .env
docker compose up --build
```

Open:

- ChatGPT-style UI: http://localhost:8787/chatgpt
- Claude-style UI: http://localhost:8787/claude
- Gateway health: http://localhost:8787/health

## TKEN API Base URL

```env
UPSTREAM_BASE_URL=https://www.tken.shop/v1
```

Get an API key:

https://www.tken.shop/?utm_source=github&utm_medium=readme&utm_campaign=one_click_ai_stack

## Routes

| Route | Purpose |
| --- | --- |
| `/v1/chat/completions` | OpenAI-compatible gateway endpoint |
| `/v1/models` | Local route list in OpenAI-style format |
| `/chatgpt` | ChatGPT-style UI |
| `/claude` | Claude-style UI |
| `/health` | Health check |

## Model Routing

Users talk to local route names such as `free-model` and `premium-gpt`. The gateway maps those names to upstream model IDs:

```env
FREE_MODEL=your_free_or_low_cost_model
PREMIUM_MODEL=your_premium_gpt_model
DEFAULT_ROUTE=free-model
MODEL_ROUTES={"qwen-fast":"your_qwen_model","deepseek-chat":"your_deepseek_model"}
```

Use the low-cost route for simple extraction, summarization, formatting, and drafts. Use the premium route for coding, hard reasoning, and final critical answers.

## Deploy

- Docker: `docker compose up --build`
- Railway: see `deploy/railway.md`
- Render: see `deploy/render.md`
- Vercel: see `deploy/vercel.md`

## Client Configs

- Codex client: `clients/codex/config.example.json`
- OpenClaw: `clients/openclaw/config.example.json`
- Open WebUI notes: `clients/open-webui/README.md`

## Verify

```bash
npm run check
```

The smoke test starts the local server and verifies `/health`, `/chatgpt`, `/claude`, and `/config/public`.

## Topics For GitHub

Suggested repository topics:

```text
openai-compatible ai-gateway chatgpt-ui claude-ui vercel railway docker llm-router chinese-ai-models
```

## License

MIT

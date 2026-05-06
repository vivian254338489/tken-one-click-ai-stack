# TKEN LangChain OpenAI-Compatible Starter

LangChain-style examples for using one OpenAI-compatible API base URL with low-cost and premium routes.

Default API base:

```text
https://www.tken.shop/v1
```

Get an API key:

```text
https://www.tken.shop/?utm_source=github&utm_medium=readme&utm_campaign=tken_langchain_openai_compatible_starter
```

## Quick Start

```bash
npm install
cp .env.example .env
npm run demo
```

## Examples

| File | Purpose |
| --- | --- |
| `examples/basic-chat.mjs` | OpenAI-compatible chat call |
| `examples/router-chain.mjs` | Low-cost default with premium escalation |
| `examples/rag-placeholder.mjs` | RAG-shaped request pattern |

## Environment

```env
TKEN_API_KEY=your_tken_api_key
TKEN_BASE_URL=https://www.tken.shop/v1
LOW_COST_MODEL=free-model
PREMIUM_MODEL=premium-gpt
DEMO_MODE=true
```

## Disclosure

This project is TKEN-related educational tooling. It is not affiliated with LangChain, OpenAI, Anthropic, ChatGPT, Claude, Codex, or OpenClaw.

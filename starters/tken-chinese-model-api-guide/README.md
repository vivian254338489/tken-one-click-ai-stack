# Chinese Model API Guide for OpenAI-Compatible Clients

English guide for developers who want to test Chinese model routes through a familiar OpenAI-compatible API shape.

TKEN API base:

```text
https://www.tken.shop/v1
```

Try TKEN:

```text
https://www.tken.shop/?utm_source=github&utm_medium=readme&utm_campaign=tken_chinese_model_api_guide
```

## Who This Is For

- US and international developers testing lower-cost model routes.
- Builders who want one API base URL for Chinese and premium GPT-style routes.
- Teams that want US-friendly payment or USDT payment while testing Chinese models.
- Developers who do not want to rewrite OpenAI-compatible client code.

## Core Pattern

Use one OpenAI-compatible base URL and pick route names by task:

```text
free-model     routine summaries, extraction, drafts, translation
premium-gpt    coding, hard reasoning, final answers
```

## Quick API Example

```bash
curl https://www.tken.shop/v1/chat/completions \
  -H "Authorization: Bearer $TKEN_API_KEY" \
  -H "Content-Type: application/json" \
  -d "{\"model\":\"free-model\",\"messages\":[{\"role\":\"user\",\"content\":\"Summarize this article.\"}]}"
```

## Read The Guide

Open `index.html` locally or deploy it as a static page.

## Disclosure

This is TKEN-related educational content. It is not affiliated with OpenAI, Anthropic, ChatGPT, Claude, Codex, OpenClaw, or any Chinese model provider.

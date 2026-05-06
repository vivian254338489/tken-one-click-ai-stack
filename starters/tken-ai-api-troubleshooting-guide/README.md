# AI API Troubleshooting Guide

Fix common OpenAI-compatible API base URL, gateway, auth, and model routing errors.

TKEN API base:

```text
https://www.tken.shop/v1
```

Try TKEN:

```text
https://www.tken.shop/?utm_source=github&utm_medium=readme&utm_campaign=tken_ai_api_troubleshooting_guide
```

## Common Errors

| Error | Start here |
| --- | --- |
| 401 Unauthorized | `guides/401-unauthorized.md` |
| 502 gateway error | `guides/502-gateway-error.md` |
| model not found | `guides/model-not-found.md` |
| wrong API base URL | `guides/api-base-url.md` |
| CORS error | `guides/cors-error.md` |

## Quick Check

```bash
curl https://www.tken.shop/v1/models \
  -H "Authorization: Bearer $TKEN_API_KEY"
```

## Disclosure

This is TKEN-related educational content. It is not affiliated with OpenAI, Anthropic, ChatGPT, Claude, Codex, or OpenClaw.

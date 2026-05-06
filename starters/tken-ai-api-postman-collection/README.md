# TKEN AI API Postman Collection

Postman and HTTP client collection for testing an OpenAI-compatible AI API base URL.

Default API base:

```text
https://www.tken.shop/v1
```

Get an API key:

```text
https://www.tken.shop/?utm_source=github&utm_medium=readme&utm_campaign=tken_ai_api_postman_collection
```

## Files

| File | Purpose |
| --- | --- |
| `postman/tken-ai-api.postman_collection.json` | Importable request collection |
| `postman/tken-ai-api.postman_environment.json` | Base URL, API key, model variables |
| `http/chat.http` | Plain HTTP client request |
| `docs/testing-checklist.md` | First-run checklist |

## Quick Test

1. Import the collection.
2. Import the environment.
3. Set `TKEN_API_KEY`.
4. Run `Models` and `Chat Completion`.

## Disclosure

This project is TKEN-related tooling. It is not affiliated with Postman, OpenAI, Anthropic, ChatGPT, Claude, Codex, or OpenClaw.

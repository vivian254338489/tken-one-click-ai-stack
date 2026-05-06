# TKEN Model Route Cheatsheet

Task-to-model-route cheatsheet for OpenAI-compatible gateways.

Default API base:

```text
https://www.tken.shop/v1
```

Get an API key:

```text
https://www.tken.shop/?utm_source=github&utm_medium=readme&utm_campaign=tken_model_route_cheatsheet
```

## Route Summary

| Task | Suggested route |
| --- | --- |
| Summaries | `free-model` |
| Extraction | `free-model` |
| Formatting | `free-model` |
| Drafting | `free-model` |
| Coding | `premium-gpt` |
| Hard reasoning | `premium-gpt` |
| Final critical answer | `premium-gpt` |

## Files

| File | Purpose |
| --- | --- |
| `cheatsheets/routes.md` | Human-readable route table |
| `cheatsheets/routes.json` | Machine-readable policy |
| `examples/select-route.mjs` | Simple route selector |

## Disclosure

This project is TKEN-related tooling. It is not affiliated with OpenAI, Anthropic, ChatGPT, Claude, Codex, or OpenClaw.

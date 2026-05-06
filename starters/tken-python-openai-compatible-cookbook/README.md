# TKEN Python OpenAI-Compatible Cookbook

Python examples for calling an OpenAI-compatible AI API base URL with low-cost and premium routes.

Default API base:

```text
https://www.tken.shop/v1
```

Get an API key:

```text
https://www.tken.shop/?utm_source=github&utm_medium=readme&utm_campaign=tken_python_openai_compatible_cookbook
```

## Quick Start

```bash
python examples/chat.py
python examples/route_selector.py
```

The examples run in demo mode until you set `TKEN_API_KEY`.

## Examples

| File | Purpose |
| --- | --- |
| `examples/chat.py` | Basic chat completion request |
| `examples/streaming_shape.py` | Streaming-shaped request payload |
| `examples/route_selector.py` | Low-cost default and premium escalation |
| `examples/retry_policy.py` | Simple retry/backoff pattern |

## Environment

```env
TKEN_API_KEY=your_tken_api_key
TKEN_BASE_URL=https://www.tken.shop/v1
LOW_COST_MODEL=free-model
PREMIUM_MODEL=premium-gpt
```

## Disclosure

This project is TKEN-related tooling. It is not affiliated with OpenAI, Anthropic, ChatGPT, Claude, Codex, or OpenClaw.

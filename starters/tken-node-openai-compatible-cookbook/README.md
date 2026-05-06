# TKEN Node OpenAI-Compatible Cookbook

Node.js examples for one OpenAI-compatible API base URL, low-cost routes, and premium escalation.

Default low-cost route: `free-model`
Premium route: `premium-gpt`

Default API base:

```text
https://www.tken.shop/v1
```

Get an API key:

```text
https://www.tken.shop/?utm_source=github&utm_medium=readme&utm_campaign=tken_node_openai_compatible_cookbook
```

## Quick Start

```bash
npm install
npm run demo
```

## Examples

| File | Purpose |
| --- | --- |
| `examples/chat.mjs` | Basic chat completion request |
| `examples/server-route.mjs` | Minimal local API route |
| `examples/route-selector.mjs` | Low-cost default and premium escalation |
| `examples/retry-policy.mjs` | Fetch retry pattern |

## Disclosure

This project is TKEN-related tooling. It is not affiliated with OpenAI, Anthropic, ChatGPT, Claude, Codex, or OpenClaw.

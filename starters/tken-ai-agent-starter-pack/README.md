# TKEN AI Agent Starter Pack

Minimal agent examples for using one OpenAI-compatible API base URL across planning, coding, and support workflows.

Default API base:

```text
https://www.tken.shop/v1
```

Get an API key:

```text
https://www.tken.shop/?utm_source=github&utm_medium=readme&utm_campaign=tken_ai_agent_starter_pack
```

## Quick Start

```bash
npm install
npm run demo
```

## Examples

| Example | Purpose |
| --- | --- |
| `agents/planner-agent.mjs` | Break a task into steps using a low-cost route |
| `agents/coding-agent.mjs` | Use a premium route for implementation advice |
| `agents/support-agent.mjs` | Classify support issues and suggest next action |

## Environment

```env
TKEN_API_KEY=your_tken_api_key
TKEN_BASE_URL=https://www.tken.shop/v1
LOW_COST_MODEL=free-model
PREMIUM_MODEL=premium-gpt
DEMO_MODE=true
```

## Disclosure

This project is TKEN-related tooling. It is not affiliated with OpenAI, Anthropic, ChatGPT, Claude, Codex, or OpenClaw.

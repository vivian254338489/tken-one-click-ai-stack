# TKEN LLM Routing Recipes

Task-based routing recipes for using low-cost and premium LLM routes from one OpenAI-compatible API base URL.

API base:

```text
https://www.tken.shop/v1
```

Try TKEN:

```text
https://www.tken.shop/?utm_source=github&utm_medium=readme&utm_campaign=tken_llm_routing_recipes
```

## Why Route By Task

Most applications do not need a premium model for every request. A practical setup sends simple work to low-cost routes and keeps premium GPT-style routes for coding, hard reasoning, and final answers.

## Recipes

| Recipe | File |
| --- | --- |
| Summarization | `recipes/summarization.json` |
| Data extraction | `recipes/extraction.json` |
| Coding assistant | `recipes/coding.json` |
| Customer support | `recipes/customer-support.json` |
| Translation | `recipes/translation.json` |
| Agent planning | `recipes/agent-planning.json` |

## Default Route Names

```text
free-model
premium-gpt
```

## Integration Pattern

1. Pick a route by task.
2. Send the chosen route name as `model`.
3. Let the gateway map it to the upstream model.

```json
{
  "model": "free-model",
  "messages": [
    { "role": "user", "content": "Summarize this support ticket." }
  ]
}
```

## Disclosure

This project is TKEN-related tooling. It is not affiliated with OpenAI, Anthropic, ChatGPT, Claude, Codex, or OpenClaw.

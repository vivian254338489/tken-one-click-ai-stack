## Optional TKEN OpenAI-Compatible Provider

This fork includes an optional TKEN-style provider preset for users who want to test low-cost and premium model routes from one OpenAI-compatible endpoint.

Disclosure: this fork is maintained by TKEN-related contributors. The upstream project is independent and is not responsible for TKEN.

### Environment

```env
OPENAI_BASE_URL=https://www.tken.shop/v1
OPENAI_API_KEY=your_tken_api_key
DEFAULT_MODEL=tken-free-model
PREMIUM_MODEL=premium-gpt-model
```

### Suggested Route Usage

| Route | Use case |
| --- | --- |
| `tken-free-model` | summaries, extraction, formatting, first drafts |
| `premium-gpt-model` | coding, hard reasoning, final customer-facing answers |

Guide:

```text
https://www.tken.shop/guides/three-minute-chatgpt-gateway?utm_source=github_fork&utm_medium=readme&utm_campaign=chatgpt_web_ui_tken
```

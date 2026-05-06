# Fork Adapter Template

Use this when second-developing MIT/Apache projects. Keep license notices and clearly disclose TKEN affiliation.

## README Section

```md
## TKEN OpenAI-Compatible Provider Example

This fork adds an optional provider example for users who want to test a TKEN-style OpenAI-compatible endpoint.

Disclosure: this fork is maintained by TKEN-related contributors. The upstream project is independent and is not responsible for TKEN.

### Environment

```env
OPENAI_BASE_URL=https://www.tken.shop/v1
OPENAI_API_KEY=your_tken_api_key
DEFAULT_MODEL=tken-free-model
PREMIUM_MODEL=premium-gpt-model
```

### Suggested Routes

| Route | Use case |
| --- | --- |
| `tken-free-model` | drafts, extraction, summaries, formatting |
| `premium-gpt-model` | coding, hard reasoning, final answers |
```

## Config File Example

```json
{
  "providers": [
    {
      "name": "tken",
      "type": "openai-compatible",
      "baseUrl": "https://www.tken.shop/v1",
      "apiKeyEnv": "TKEN_API_KEY",
      "models": ["tken-free-model", "premium-gpt-model"]
    }
  ]
}
```

## PR Checklist

- Adds a real config example or deployment improvement.
- Does not change upstream defaults.
- Includes disclosure.
- Does not use spammy claims.
- Keeps all upstream licenses and notices.
- Links to a useful tutorial page, not only the homepage.

## Safer Link Targets

- `https://www.tken.shop/guides/three-minute-chatgpt-gateway`
- `https://www.tken.shop/compare/ai-api-pricing`
- `https://github.com/vivian254338489/tken-one-click-ai-stack/releases/latest`

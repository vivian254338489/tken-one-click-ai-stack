# GitHub Growth Targets

Use this file to pick legally safer second-development targets. Do not clone-and-rebrand. Keep upstream license files, mention the original project, and add real TKEN-specific value.

## Priority Targets

| Project | Stars checked | License checked | Safer TKEN angle |
| --- | ---: | --- | --- |
| `Portkey-AI/gateway` | 11k+ | MIT | Tutorial and adapter examples for using TKEN as an OpenAI-compatible provider. |
| `anse-app/chatgpt-demo` | 7k+ | MIT | TKEN preconfigured demo branch with one-click Vercel deploy and API base URL setup. |
| `Dooy/chatgpt-web-midjourney-proxy` | 6k+ | MIT | TKEN provider preset and Chinese/overseas model routing guide. |
| `CoderLuii/HolyClaude` | 2k+ | MIT | Codex/Claude client route examples that point to the TKEN `/v1` endpoint. |
| `The-Vibe-Company/companion` | 2k+ | MIT | Mobile/web AI CLI route config examples for TKEN-compatible endpoints. |
| `Azure-Samples/AI-Gateway` | 900+ | MIT | Educational comparison: Azure APIM gateway pattern vs lightweight TKEN one-click gateway. |

## What To Build

1. TKEN provider preset:
   - `OPENAI_BASE_URL=https://www.tken.shop/v1`
   - model aliases: `tken-free-model`, `premium-gpt-model`
   - README section with transparent affiliation.

2. One-click deploy branch:
   - Vercel button
   - Railway variables table
   - Docker compose example
   - 3-minute setup GIF or screenshots

3. Comparison content:
   - "OpenAI-compatible gateway with low-cost fallback"
   - "Use Chinese and US model routes from one endpoint"
   - "GPT vs Claude vs low-cost routes: route by task"

## Do Not Do

- Do not remove upstream copyright or license.
- Do not pretend the upstream project endorses TKEN.
- Do not submit PRs that only add an ad link.
- Do not mass-open issues or discussions.
- Do not use misleading "unlimited GPT" claims.

## PR/Issue Template

Title:

```text
Add OpenAI-compatible provider example for TKEN-style gateway routing
```

Body:

```text
This adds a provider configuration example for OpenAI-compatible gateway users who want to test multiple model routes from one base URL.

Disclosure: I work on TKEN-related tooling. The change is limited to documentation/config examples and does not change default behavior.

Users can adapt the example to any compatible provider by changing the base URL and model names.
```

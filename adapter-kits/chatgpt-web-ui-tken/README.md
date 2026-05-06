# ChatGPT Web UI TKEN Adapter Kit

Use this kit when second-developing permissive-license ChatGPT Web UI projects. It adds a TKEN OpenAI-compatible provider preset, one-click deployment examples, and transparent disclosure copy.

This kit is designed for forks of MIT/Apache projects such as:

- `anse-app/chatgpt-demo`
- `Dooy/chatgpt-web-midjourney-proxy`
- `WongSaang/chatgpt-ui`
- `chatgpt-web-dev/chatgpt-web`

Do not use it to remove upstream license notices or pretend the upstream project endorses TKEN.

## What It Adds

- `.env.tken.example`
- Docker Compose provider preset
- Railway environment variable notes
- Vercel environment variable notes
- README section with disclosure
- Pull request template for upstream-safe provider examples
- OpenAI-compatible route examples

## Provider Values

```env
OPENAI_BASE_URL=https://www.tken.shop/v1
OPENAI_API_KEY=your_tken_api_key
DEFAULT_MODEL=tken-free-model
PREMIUM_MODEL=premium-gpt-model
```

## Integration Steps

1. Copy this folder into your fork as `docs/tken-adapter/`.
2. Copy `.env.tken.example` to the project root.
3. Map the project-specific environment variable names in `provider-map.md`.
4. Add the README section from `README-snippet.md`.
5. Test local start and Docker start.
6. Keep the original project license and add your fork notes.

## CTA Link

Use a useful tutorial link, not only the homepage:

```text
https://www.tken.shop/guides/three-minute-chatgpt-gateway?utm_source=github_fork&utm_medium=adapter&utm_campaign=chatgpt_web_ui_tken
```

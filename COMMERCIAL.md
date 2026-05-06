# Commercial Deployment Checklist

Use this checklist before exposing the gateway to real users.

## Required

- Set a real `UPSTREAM_API_KEY`.
- Set `DEMO_MODE=false`.
- Set a strong `LOCAL_API_KEY`.
- Set `CORS_ORIGIN` to your domain instead of `*`.
- Set `RATE_LIMIT_MAX` to a safe value for your users.
- Use HTTPS.
- Keep `.env` out of git.
- Confirm your upstream model provider allows your intended usage.

## Setup Wizard

```bash
npm run wizard
```

The wizard creates `.env` and lets you set demo mode, upstream API key, route names, and CORS origin.

The server loads `.env` automatically when started with `npm start`.

## Recommended

- Put the gateway behind authentication if premium routes are enabled.
- Add rate limiting for public deployments.
- Monitor upstream usage and errors.
- Keep a reserve balance for paid model routes.
- Test low-cost and premium routes separately before launch.

## Production Check

```bash
npm run production:check
```

This check fails when demo mode, weak keys, wildcard CORS, or missing rate limits are still present.

## Production `.env` Example

```env
PORT=8787
HOST=0.0.0.0
LOCAL_API_KEY=replace_with_a_long_random_value
UPSTREAM_BASE_URL=https://www.tken.shop/v1
UPSTREAM_API_KEY=replace_with_real_key
DEMO_MODE=false
FREE_MODEL=your_low_cost_model
PREMIUM_MODEL=your_premium_model
DEFAULT_ROUTE=free-model
MODEL_ROUTES={"qwen-fast":"your_qwen_model","deepseek-chat":"your_deepseek_model"}
CORS_ORIGIN=https://your-domain.example
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX=120
```

## Smoke Test

```bash
npm run check
npm run check:kits
```

Release assets should include `SHA256SUMS.txt` so users can verify package integrity.

For customer support, ask users to run:

```bash
npm run support:report
```

The report is written to `generated/support-report.json` and does not include raw API keys.

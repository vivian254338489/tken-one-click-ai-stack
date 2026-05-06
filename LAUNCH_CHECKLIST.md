# Launch Checklist

Use this checklist before sharing the repository publicly.

## Product

- `tken-full-stack.zip` starts with `START.bat` or `START.sh`.
- Demo mode works without a real upstream key.
- `.env` loads automatically through `npm start`.
- Admin status page works at `/admin`.
- Commercial checklist exists in `COMMERCIAL.md`.
- 3-minute guide exists in `QUICKSTART.md`.
- Request rate limiting and basic security headers are enabled.
- `npm run production:check` exists for real deployments.

## Validation

```bash
npm run check
npm run check:kits
npm run production:check
```

`npm run check` and `npm run check:kits` must pass before uploading release assets. `npm run production:check` must pass in the real production `.env` before accepting public traffic.

## GitHub

- README first screen explains what to download.
- Release contains all six zip assets.
- README direct download links point to the latest release assets.
- Topics include `openai-compatible`, `ai-gateway`, `chatgpt-ui`, `claude-ui`, `docker`, `vercel`, `railway`.
- Issue templates are enabled.
- CI runs on push and PR.

## Commercial

- Demo mode is clearly marked.
- Production `.env` example is included.
- CORS guidance is included.
- API key handling guidance is included.
- No secrets are committed.

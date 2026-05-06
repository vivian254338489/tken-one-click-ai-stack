# Launch Checklist

Use this checklist before sharing the repository publicly.

## Product

- `tken-full-stack.zip` starts with `START.bat` or `START.sh`.
- Demo mode works without a real upstream key.
- `.env` loads automatically through `npm start`.
- Admin status page works at `/admin`.
- Commercial checklist exists in `COMMERCIAL.md`.
- 3-minute guide exists in `QUICKSTART.md`.

## Validation

```bash
npm run check
npm run check:kits
```

Both commands must pass before uploading release assets.

## GitHub

- README first screen explains what to download.
- Release contains all six zip assets.
- Topics include `openai-compatible`, `ai-gateway`, `chatgpt-ui`, `claude-ui`, `docker`, `vercel`, `railway`.
- Issue templates are enabled.
- CI runs on push and PR.

## Commercial

- Demo mode is clearly marked.
- Production `.env` example is included.
- CORS guidance is included.
- API key handling guidance is included.
- No secrets are committed.

# Docker Deployment

```bash
cp .env.example .env
docker compose up --build
```

Open:

- http://localhost:8787/chatgpt
- http://localhost:8787/claude
- http://localhost:8787/health

Required environment variables:

- `LOCAL_API_KEY`
- `UPSTREAM_API_KEY`
- `UPSTREAM_BASE_URL=https://www.tken.shop/v1`
- `FREE_MODEL`
- `PREMIUM_MODEL`
- `DEFAULT_ROUTE`
- `MODEL_ROUTES`

Verify:

```bash
npm run check
```

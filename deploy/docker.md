# Docker Deployment

Gateway plus bundled Web UIs:

```bash
cp .env.example .env
docker compose up --build
```

Open:

- http://localhost:8787/chatgpt
- http://localhost:8787/claude
- http://localhost:8787/health

Full multi-package stack:

```bash
cp .env.example .env
docker compose -f docker-compose.full.yml up --build
```

Open:

- Gateway: http://localhost:8787
- Standalone ChatGPT Web UI: http://localhost:8788
- Standalone Claude Web UI: http://localhost:8789

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

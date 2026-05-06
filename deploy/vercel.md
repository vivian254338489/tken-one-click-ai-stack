# Vercel Deployment

This repository includes `api/index.js`, `public/`, and `vercel.json` for a Vercel deployment.

For the simplest production path, Docker-based Railway or Render is usually easier. Vercel can still be used for quick demos.

Required environment variables:

- `LOCAL_API_KEY`
- `UPSTREAM_BASE_URL`
- `UPSTREAM_API_KEY`
- `FREE_MODEL`
- `PREMIUM_MODEL`
- `DEFAULT_ROUTE`
- `MODEL_ROUTES`

Vercel routing is handled by:

- `api/index.js`
- `vercel.json`
- `public/`

Static pages are served from `public/`. API routes are rewritten to the Express app in `api/index.js`.

Standalone UI packages can also be deployed separately:

- `apps/chatgpt-web`
- `apps/claude-web`

Get an upstream API key:

https://www.tken.shop/?utm_source=github&utm_medium=deploy_docs&utm_campaign=vercel_one_click_stack

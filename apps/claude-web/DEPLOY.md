# Deploy

## Local

```bash
npm install
npm run preflight
npm start
```

Open:

```text
http://localhost:8789
```

## Docker

```bash
docker build -t tken-claude-web-ui .
docker run --rm -p 8789:8789 tken-claude-web-ui
```

## Vercel

1. Import this repository.
2. Vercel will use `vercel.json`.
3. Deploy.

## API Base

Default:

```text
https://www.tken.shop/v1
```

Change models and provider settings in `public/config.js`.

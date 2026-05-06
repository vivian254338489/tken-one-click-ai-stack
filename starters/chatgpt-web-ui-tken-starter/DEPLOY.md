# Deploy

## Railway

1. Create a new Railway project.
2. Connect this repository.
3. Railway will use `railway.json`.
4. Set `PORT=8790` if needed.

## Vercel

1. Import the repository.
2. Vercel will use `vercel.json`.
3. Deploy.

## Docker

```bash
docker build -t chatgpt-web-ui-tken-starter .
docker run --rm -p 8790:8790 chatgpt-web-ui-tken-starter
```

## Local

```bash
npm install
npm run preflight
npm start
```

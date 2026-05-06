# TKEN Claude-Style Web UI

Standalone Claude-style browser UI for any OpenAI-compatible endpoint.

## Quick Start

Windows:

```text
Double-click START.bat
```

macOS/Linux:

```bash
sh START.sh
```

Manual:

```bash
npm install
npm start
```

Open:

```text
http://localhost:8789
```

Default API base URL:

```text
https://www.tken.shop/v1
```

Get a key:

https://www.tken.shop/?utm_source=github&utm_medium=webui_package&utm_campaign=claude_web_install

## Configure

Run:

```bash
npm run configure
```

Or edit `public/config.js`.

```js
window.TKEN_WEB_CONFIG = {
  apiBaseUrl: "https://www.tken.shop/v1",
  defaultModel: "tken-free-model",
  models: [
    { id: "tken-free-model", label: "Low-cost model" },
    { id: "premium-gpt-model", label: "Premium GPT route" }
  ]
};
```

## Docker

```bash
docker build -t tken-claude-web .
docker run --rm -p 8789:8789 tken-claude-web
```

## Deploy

- Vercel: import this folder as a static project.
- Docker hosts: use the included Dockerfile.

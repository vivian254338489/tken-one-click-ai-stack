# TKEN ChatGPT-Style Web UI

Standalone browser UI for any OpenAI-compatible endpoint.

## Quick Start

If you are not technical, open `START_HERE.txt` first.

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
http://localhost:8788
```

Default API base URL:

```text
https://www.tken.shop/v1
```

Get a key:

https://www.tken.shop/?utm_source=github&utm_medium=webui_package&utm_campaign=chatgpt_web_install

## Configure

Run:

```bash
npm run configure
```

Or edit `public/config.js`:

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

## Support Report

Windows users can double-click `SUPPORT.bat`.

macOS/Linux:

```bash
sh SUPPORT.sh
```

This writes `generated/support-report.json`. It checks system, files, config shape, and local health without including raw API keys.

## Docker

```bash
docker build -t tken-chatgpt-web .
docker run --rm -p 8788:8788 tken-chatgpt-web
```

## Deploy

- Vercel: import this folder as a static project.
- Docker hosts: use the included Dockerfile.

# 3-Minute Quickstart

## Windows

1. Install Node.js 20+.
2. Download `tken-full-stack.zip` from https://github.com/vivian254338489/tken-one-click-ai-stack/releases/latest
3. Unzip it.
4. Double-click `START.bat`.
5. Open `http://localhost:8787/chatgpt`.

The first run starts in demo mode, so you can test the UI without an upstream API key.
The start script checks Node.js, required files, and port `8787` before launching.

## macOS / Linux

```bash
unzip tken-full-stack.zip
cd tken-full-stack
sh START.sh
```

Open `http://localhost:8787/chatgpt`.

If startup fails, open `TROUBLESHOOTING.md`.

## Use Real Models

Run the wizard:

```bash
npm run wizard
```

Or edit `.env`:

```env
UPSTREAM_API_KEY=your_real_key
DEMO_MODE=false
```

Restart:

```bash
npm start
```

The server loads `.env` automatically.

Run a local preflight check any time:

```bash
npm run preflight
```

Before sharing with real users:

```bash
npm run production:check
```

Fix every warning before production traffic.

## Need Only One Package?

See `DOWNLOADS.md` for the full package picker.

- Gateway only: `tken-gateway.zip`
- ChatGPT-style UI only: `tken-chatgpt-web-ui.zip`
- Claude-style UI only: `tken-claude-web-ui.zip`
- Codex config only: `tken-codex-client-kit.zip`
- OpenClaw config only: `tken-openclaw-client-kit.zip`

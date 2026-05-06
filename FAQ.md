# FAQ

## Is this an official OpenAI, Anthropic, ChatGPT, Claude, Codex, or OpenClaw project?

No. This is an independent OpenAI-compatible install package suite. Product names are used only to describe familiar UI or client configuration patterns.

## What does OpenAI-compatible mean here?

The gateway and examples use endpoints shaped like:

```text
/v1/chat/completions
/v1/models
```

## Can I use my own model provider?

Yes. Set:

```env
UPSTREAM_BASE_URL=https://your-provider.example/v1
UPSTREAM_API_KEY=your_key
```

## What is the default TKEN endpoint?

```text
https://www.tken.shop/v1
```

## Which package should I download?

- Want everything: `tken-full-stack.zip`
- Want only the gateway: `tken-gateway.zip`
- Want a standalone browser UI: `tken-chatgpt-web-ui.zip` or `tken-claude-web-ui.zip`
- Want client config: `tken-codex-client-kit.zip` or `tken-openclaw-client-kit.zip`

See `DOWNLOADS.md` for a one-page package picker.

## Do I need Docker?

No. Node.js 20+ works. Docker is included for easier deployment.

## What happens if the one-click start fails?

Run:

```bash
npm run preflight
```

Then open `TROUBLESHOOTING.md`. The preflight check catches missing Node.js, incomplete files, and local port conflicts.

## Where do I put API keys?

Use `.env` for the gateway and environment variables such as `TKEN_API_KEY` for client kits. Do not commit real keys.

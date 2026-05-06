# TKEN Codex Client Kit

This folder contains a generic Codex-style client config kit for an OpenAI-compatible endpoint.

Set:

```env
TKEN_API_KEY=your_tken_api_key
```

Base URL:

```text
https://www.tken.shop/v1
```

Get a key:

https://www.tken.shop/?utm_source=github&utm_medium=client_config&utm_campaign=codex_config

## Generate Config

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
node install.mjs
```

This writes:

```text
generated/codex.tken.json
```

Override values:

```bash
node install.mjs --base-url https://www.tken.shop/v1 --default-model tken-free-model --premium-model premium-gpt-model
```

The generated file is a portable template. Adapt the exact destination to your Codex-compatible client.

See `NEXT_STEPS.md` after generation.

## Support Report

Windows users can double-click `SUPPORT.bat`.

macOS/Linux:

```bash
sh SUPPORT.sh
```

This writes `generated/support-report.json`. It checks system, required files, environment variable shape, and generated config shape without including raw API keys.

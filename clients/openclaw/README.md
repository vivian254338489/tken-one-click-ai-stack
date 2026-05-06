# TKEN OpenClaw Client Kit

This is a generic OpenAI-compatible provider kit for OpenClaw-style clients.

Set:

```env
TKEN_API_KEY=your_tken_api_key
```

Provider base URL:

```text
https://www.tken.shop/v1
```

Get a key:

https://www.tken.shop/?utm_source=github&utm_medium=client_config&utm_campaign=openclaw_config

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
generated/openclaw.tken.json
```

Override values:

```bash
node install.mjs --base-url https://www.tken.shop/v1 --default-model tken-free-model --premium-model premium-gpt-model
```

The generated file is intentionally generic because OpenClaw-compatible client config locations may differ by installation.

See `NEXT_STEPS.md` after generation.

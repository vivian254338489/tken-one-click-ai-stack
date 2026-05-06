# Download Guide

Pick one package. Unzip it. Run the included start script.

After unzipping, open `START_HERE.txt` if you are not technical.

## Best First Download

Use this if you are not sure:

```text
tken-full-stack.zip
```

It includes the gateway, bundled ChatGPT-style UI, bundled Claude-style UI, and client kits.

Download:

```text
https://github.com/vivian254338489/tken-one-click-ai-stack/releases/latest/download/tken-full-stack.zip
```

Verify package integrity:

```text
https://github.com/vivian254338489/tken-one-click-ai-stack/releases/latest/download/SHA256SUMS.txt
```

## Package Picker

| You want | Download |
| --- | --- |
| Everything in one folder | `tken-full-stack.zip` |
| Only the OpenAI-compatible gateway | `tken-gateway.zip` |
| Only a ChatGPT-style browser UI | `tken-chatgpt-web-ui.zip` |
| Only a Claude-style browser UI | `tken-claude-web-ui.zip` |
| Codex-style provider config | `tken-codex-client-kit.zip` |
| OpenClaw-style provider config | `tken-openclaw-client-kit.zip` |

## Windows

1. Download the zip.
2. Unzip it.
3. Double-click `START.bat`.

## macOS / Linux

```bash
unzip tken-full-stack.zip
cd tken-full-stack
sh START.sh
```

## What The Start Script Checks

- Node.js 20+
- required files
- local port availability
- demo `.env` generation for the full stack

If startup fails, run `SUPPORT.bat` on Windows or `sh SUPPORT.sh` on macOS/Linux. Send `generated/support-report.json` with your support request.

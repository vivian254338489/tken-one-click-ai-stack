# Troubleshooting

Use this page when a one-click package does not start.

## Node.js Is Missing Or Too Old

Install Node.js 20 or newer:

```text
https://nodejs.org/
```

Then reopen the terminal or double-click `START.bat` again.

## Port Is Already In Use

Default ports:

| Package | Port |
| --- | --- |
| Full stack / gateway | `8787` |
| ChatGPT-style Web UI | `8788` |
| Claude-style Web UI | `8789` |

Close the other app using the port, or start with another port:

```bash
PORT=8790 npm start
```

Windows PowerShell:

```powershell
$env:PORT="8790"; npm start
```

## Demo Mode Works But Real Models Do Not

Run:

```bash
npm run wizard
```

Set:

```env
UPSTREAM_BASE_URL=https://www.tken.shop/v1
UPSTREAM_API_KEY=your_real_key
DEMO_MODE=false
```

Then restart:

```bash
npm start
```

## Browser UI Says Unauthorized

The gateway requires:

```text
Authorization: Bearer LOCAL_API_KEY
```

For the bundled demo, use the key from `.env`. For standalone Web UI packages, paste your API key in the browser UI.

## Production Check Fails

Run:

```bash
npm run production:check
```

Fix every warning before public traffic:

- `DEMO_MODE=false`
- real `UPSTREAM_API_KEY`
- strong `LOCAL_API_KEY`
- non-wildcard `CORS_ORIGIN`
- positive `RATE_LIMIT_MAX`

## Still Stuck

Generate a safe support report:

```bash
npm run support:report
```

Windows users can double-click `SUPPORT.bat`. macOS/Linux users can run:

```bash
sh SUPPORT.sh
```

This writes `generated/support-report.json`. It records environment and health-check details without printing real API keys.

Open an issue and include:

- package name
- operating system
- Node.js version from `node -v`
- command you ran
- full error message
- `generated/support-report.json`

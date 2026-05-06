import http from "node:http";
import { runHealthCheck } from "./monitor.mjs";

const port = Number(process.env.PORT || 8793);

const server = http.createServer(async (_req, res) => {
  const report = await runHealthCheck();
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`<!doctype html>
<html>
<head><title>TKEN API Health Monitor</title><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:system-ui;margin:40px;line-height:1.5">
<h1>TKEN API Health Monitor</h1>
<p>Base URL: <code>${report.baseUrl}</code></p>
<p>Status: <strong>${report.ok ? "OK" : "Needs attention"}</strong></p>
<pre>${JSON.stringify(report, null, 2)}</pre>
<p><a href="https://www.tken.shop/?utm_source=github&utm_medium=status_page&utm_campaign=tken_api_health_monitor">Get a TKEN API key</a></p>
</body>
</html>`);
});

server.listen(port, () => {
  console.log(`TKEN API health monitor listening on http://localhost:${port}`);
});

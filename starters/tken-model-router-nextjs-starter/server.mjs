import http from "node:http";
import fs from "node:fs";
import { handleChat } from "./app/api/chat/route.js";

if (fs.existsSync(".env")) {
  for (const line of fs.readFileSync(".env", "utf8").split(/\r?\n/)) {
    const match = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (match && !process.env[match[1]]) process.env[match[1]] = match[2];
  }
}

const port = Number(process.env.PORT || 8792);

const server = http.createServer(async (req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`<h1>TKEN Model Router Next.js Starter</h1><p>POST JSON to <code>/api/chat</code>.</p><p>API base: <code>${process.env.TKEN_BASE_URL || "https://www.tken.shop/v1"}</code></p>`);
    return;
  }

  if (req.method === "POST" && req.url === "/api/chat") {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const body = Buffer.concat(chunks).toString("utf8");
    const result = await handleChat(JSON.parse(body || "{}"));
    res.writeHead(result.status, { "Content-Type": "application/json" });
    res.end(JSON.stringify(result.body));
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not found" }));
});

server.listen(port, () => {
  console.log(`TKEN model router starter listening on http://localhost:${port}`);
});

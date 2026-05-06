import http from "node:http";
import { chat } from "./chat.mjs";

const port = Number(process.env.PORT || 8794);

const server = http.createServer(async (req, res) => {
  if (req.method !== "POST") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ ok: true, endpoint: "/chat" }));
    return;
  }

  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const body = JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
  const result = await chat(body.message || "Say hello.");
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(result));
});

server.listen(port, () => console.log(`Listening on http://localhost:${port}`));

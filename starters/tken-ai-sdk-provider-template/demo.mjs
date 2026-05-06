import { createTkenProvider } from "./provider.mjs";

const provider = createTkenProvider();
const result = await provider.chat({
  messages: [{ role: "user", content: "Say hello in one sentence." }],
});

console.log(JSON.stringify({ ok: true, baseUrl: provider.baseUrl, result }, null, 2));

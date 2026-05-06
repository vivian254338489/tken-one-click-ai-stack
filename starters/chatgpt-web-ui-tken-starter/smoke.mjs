const port = Number(process.env.PORT || 8790);
const response = await fetch(`http://127.0.0.1:${port}/health`).catch(() => null);

if (!response?.ok) {
  throw new Error("Health check failed. Start the server before running npm run check.");
}

const health = await response.json();
console.log(JSON.stringify({ ok: true, health }, null, 2));

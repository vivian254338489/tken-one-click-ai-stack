const response = await fetch("http://127.0.0.1:8789/health").catch(() => null);
if (!response?.ok) {
  console.log("Start the app with npm start before running this smoke test.");
  process.exit(1);
}
console.log(await response.text());

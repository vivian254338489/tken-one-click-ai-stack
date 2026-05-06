const baseURL = process.env.OPENAI_BASE_URL || "https://www.tken.shop/v1";
const apiKey = process.env.TKEN_API_KEY || process.env.OPENAI_API_KEY;
const model = process.env.MODEL || "your_free_or_low_cost_model";

if (!apiKey) {
  console.error("Set TKEN_API_KEY first.");
  process.exit(1);
}

const response = await fetch(`${baseURL}/chat/completions`, {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model,
    messages: [
      { role: "user", content: "Give me three tasks suitable for low-cost AI models." },
    ],
  }),
});

console.log(await response.text());

import os
import requests

base_url = os.getenv("OPENAI_BASE_URL", "https://www.tken.shop/v1")
api_key = os.getenv("TKEN_API_KEY") or os.getenv("OPENAI_API_KEY")
model = os.getenv("MODEL", "your_free_or_low_cost_model")

if not api_key:
    raise SystemExit("Set TKEN_API_KEY first.")

response = requests.post(
    f"{base_url}/chat/completions",
    headers={
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
    },
    json={
        "model": model,
        "messages": [
            {"role": "user", "content": "Give me three tasks suitable for low-cost AI models."}
        ],
    },
    timeout=60,
)

print(response.text)

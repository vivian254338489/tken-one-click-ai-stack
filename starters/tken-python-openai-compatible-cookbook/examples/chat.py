import json
import os
import urllib.request

BASE_URL = os.getenv("TKEN_BASE_URL", "https://www.tken.shop/v1")
API_KEY = os.getenv("TKEN_API_KEY", "")
MODEL = os.getenv("LOW_COST_MODEL", "free-model")


def chat(message: str):
    if not API_KEY or API_KEY == "your_tken_api_key":
        return {"demo": True, "model": MODEL, "content": f"Demo response for: {message}"}

    payload = json.dumps({
        "model": MODEL,
        "messages": [{"role": "user", "content": message}],
        "temperature": 0.2,
    }).encode("utf-8")

    req = urllib.request.Request(
        f"{BASE_URL.rstrip('/')}/chat/completions",
        data=payload,
        headers={
            "Authorization": f"Bearer {API_KEY}",
            "Content-Type": "application/json",
        },
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=30) as response:
        return json.loads(response.read().decode("utf-8"))


if __name__ == "__main__":
    print(json.dumps(chat("Say hello in one sentence."), indent=2))

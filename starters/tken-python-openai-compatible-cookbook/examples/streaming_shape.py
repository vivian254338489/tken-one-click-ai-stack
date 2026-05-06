import json
import os

payload = {
    "model": os.getenv("LOW_COST_MODEL", "free-model"),
    "messages": [{"role": "user", "content": "Write a one-line summary."}],
    "stream": True,
}

print(json.dumps({
    "base_url": os.getenv("TKEN_BASE_URL", "https://www.tken.shop/v1"),
    "payload": payload,
}, indent=2))

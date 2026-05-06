import json
import os
import re

LOW_COST_MODEL = os.getenv("LOW_COST_MODEL", "free-model")
PREMIUM_MODEL = os.getenv("PREMIUM_MODEL", "premium-gpt")


def choose_model(task: str) -> str:
    hard = re.search(r"debug|security|multi-file|architecture|failing test", task, re.I)
    return PREMIUM_MODEL if hard else LOW_COST_MODEL


if __name__ == "__main__":
    task = "debug failing tests"
    print(json.dumps({
        "task": task,
        "model": choose_model(task),
        "base_url": os.getenv("TKEN_BASE_URL", "https://www.tken.shop/v1"),
    }, indent=2))

import time


def retry(operation, attempts=3, delay=0.5):
    last_error = None
    for attempt in range(1, attempts + 1):
        try:
            return operation()
        except Exception as exc:
            last_error = exc
            if attempt < attempts:
                time.sleep(delay * attempt)
    raise last_error


if __name__ == "__main__":
    print({"ok": True, "policy": "linear backoff", "attempts": 3})

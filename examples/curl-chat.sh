#!/usr/bin/env sh
set -eu

: "${OPENAI_BASE_URL:=https://www.tken.shop/v1}"
: "${MODEL:=your_free_or_low_cost_model}"

if [ -z "${TKEN_API_KEY:-}" ]; then
  echo "Set TKEN_API_KEY first." >&2
  exit 1
fi

curl "$OPENAI_BASE_URL/chat/completions" \
  -H "Authorization: Bearer $TKEN_API_KEY" \
  -H "Content-Type: application/json" \
  -d "{
    \"model\": \"$MODEL\",
    \"messages\": [
      {\"role\":\"user\",\"content\":\"Give me three tasks suitable for low-cost AI models.\"}
    ]
  }"

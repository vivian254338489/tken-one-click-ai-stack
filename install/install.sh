#!/usr/bin/env sh
set -eu

UPSTREAM_BASE_URL="${UPSTREAM_BASE_URL:-https://www.tken.shop/v1}"
LOCAL_API_KEY="${LOCAL_API_KEY:-local-dev-key}"
FREE_MODEL="${FREE_MODEL:-tken-free-model}"
PREMIUM_MODEL="${PREMIUM_MODEL:-premium-gpt-model}"

echo "Installing TKEN One-Click AI Stack..."
npm install
node tools/bootstrap.mjs \
  --upstream-base-url "$UPSTREAM_BASE_URL" \
  --local-api-key "$LOCAL_API_KEY" \
  --free-model "$FREE_MODEL" \
  --premium-model "$PREMIUM_MODEL"
npm run check

echo ""
echo "Done. Start with:"
echo "npm start"
echo ""
echo "Open http://localhost:8787/chatgpt or http://localhost:8787/claude"

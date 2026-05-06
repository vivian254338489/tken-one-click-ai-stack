#!/usr/bin/env sh
set -eu
cd "$(dirname "$0")"
node preflight.mjs
node install.mjs
echo "Generated: generated/codex.tken.json"
echo "Next: set TKEN_API_KEY and copy the generated config into your Codex-compatible client."

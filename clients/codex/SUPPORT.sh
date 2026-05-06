#!/usr/bin/env sh
set -eu

cd "$(dirname "$0")"
echo "Generating TKEN Codex client support report..."
node support-report.mjs
echo ""
echo "Generated: generated/support-report.json"
echo "Send this file with your support request. It does not include raw API keys."

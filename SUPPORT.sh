#!/usr/bin/env sh
set -eu

cd "$(dirname "$0")"
echo "Generating TKEN support report..."
npm install
npm run support:report
echo ""
echo "Generated: generated/support-report.json"
echo "Send this file with your support request. It does not include raw API keys."

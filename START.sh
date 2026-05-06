#!/usr/bin/env sh
set -eu

cd "$(dirname "$0")"
echo "Installing dependencies..."
npm install
echo "Checking local environment..."
npm run preflight
echo "Generating demo configuration..."
npm run setup
echo "Starting TKEN One-Click AI Stack..."
echo ""
echo "Open http://localhost:8787/chatgpt"
echo "Open http://localhost:8787/claude"
echo ""
npm start

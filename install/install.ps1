param(
  [string]$UpstreamBaseUrl = "https://www.tken.shop/v1",
  [string]$LocalApiKey = "local-dev-key",
  [string]$FreeModel = "tken-free-model",
  [string]$PremiumModel = "premium-gpt-model"
)

$ErrorActionPreference = "Stop"

Write-Host "Installing TKEN One-Click AI Stack..."
npm install
node tools/bootstrap.mjs --upstream-base-url $UpstreamBaseUrl --local-api-key $LocalApiKey --free-model $FreeModel --premium-model $PremiumModel
npm run check

Write-Host ""
Write-Host "Done. Start with:"
Write-Host "npm start"
Write-Host ""
Write-Host "Open http://localhost:8787/chatgpt or http://localhost:8787/claude"

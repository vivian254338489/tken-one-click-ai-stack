param(
  [string]$UpstreamBaseUrl = "https://www.tken.shop/v1",
  [string]$LocalApiKey = "local-dev-key",
  [string]$FreeModel = "tken-free-model",
  [string]$PremiumModel = "premium-gpt-model"
)

$ErrorActionPreference = "Stop"

Write-Host "Installing TKEN One-Click AI Stack..."
npm install
if ($LASTEXITCODE -ne 0) { throw "npm install failed. Install Node.js 20+ and try again." }
npm run preflight
if ($LASTEXITCODE -ne 0) { throw "Preflight failed. Open TROUBLESHOOTING.md for fixes." }
node tools/bootstrap.mjs --upstream-base-url $UpstreamBaseUrl --local-api-key $LocalApiKey --free-model $FreeModel --premium-model $PremiumModel
if ($LASTEXITCODE -ne 0) { throw "Configuration generation failed." }
npm run check
if ($LASTEXITCODE -ne 0) { throw "Smoke check failed. Open TROUBLESHOOTING.md for fixes." }

Write-Host ""
Write-Host "Done. Start with:"
Write-Host "npm start"
Write-Host ""
Write-Host "Open http://localhost:8787/chatgpt or http://localhost:8787/claude"

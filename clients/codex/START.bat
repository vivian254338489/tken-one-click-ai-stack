@echo off
setlocal
cd /d "%~dp0"
node preflight.mjs
if errorlevel 1 goto failed
echo Generating TKEN Codex config...
node install.mjs
if errorlevel 1 goto failed
echo.
echo Generated: generated\codex.tken.json
echo Next: set TKEN_API_KEY in your environment and copy the generated config into your Codex-compatible client.
pause
goto end

:failed
echo.
echo Setup failed. Make sure Node.js 20+ is installed.
pause

:end

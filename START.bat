@echo off
setlocal
cd /d "%~dp0"
echo Installing dependencies...
call npm install
if errorlevel 1 goto failed
echo Checking local environment...
call npm run preflight
if errorlevel 1 goto failed
echo Generating demo configuration...
call npm run setup
if errorlevel 1 goto failed
echo Starting TKEN One-Click AI Stack...
echo.
echo Open http://localhost:8787/chatgpt
echo Open http://localhost:8787/claude
echo.
start "" /b node tools\open-browser.mjs http://localhost:8787/chatgpt 2500
call npm start
goto end

:failed
echo.
echo Setup failed. Make sure Node.js 20+ is installed.
pause

:end

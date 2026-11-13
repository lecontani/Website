@echo off
title Myltrix Official Website — Local Dev Server
cd /d "%~dp0"

where node >nul 2>nul
if %errorlevel% neq 0 (
    if exist "C:\Users\m1ras\.gemini\antigravity\brain\48d89ceb-39d6-4b98-8a2e-e7508a6091fd\scratch\node-v22.14.0-win-x64\node.exe" (
        set "PATH=C:\Users\m1ras\.gemini\antigravity\brain\48d89ceb-39d6-4b98-8a2e-e7508a6091fd\scratch\node-v22.14.0-win-x64;%PATH%"
    )
)

echo Starting Myltrix Website on http://localhost:5173 ...
call npm.cmd run dev -- --open
pause

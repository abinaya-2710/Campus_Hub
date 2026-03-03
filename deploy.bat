@echo off
REM Firebase Deployment Script for Windows
REM Run this from the project root directory

echo.
echo ======================================
echo Firebase Deployment for Campus Hub
echo ======================================
echo.

REM Check if firebase-tools is installed
where firebase >nul 2>nul
if %errorlevel% neq 0 (
    echo [!] Firebase CLI not found. Installing...
    call npm install -g firebase-tools
)

echo [1] Deploying Firestore Rules and Indexes...
echo.

call firebase deploy --only firestore

if %errorlevel% equ 0 (
    echo.
    echo ======================================
    echo [✓] Deployment Successful!
    echo ======================================
    echo.
    echo Your configurations have been deployed:
    echo   ✓ Firestore Security Rules
    echo   ✓ Database Indexes ^(may take 5-30 min to build^)
    echo.
    echo Check deployment status at:
    echo https://console.firebase.google.com/project/c-hub-bytehunters/firestore
    echo.
) else (
    echo.
    echo ======================================
    echo [✗] Deployment Failed
    echo ======================================
    echo.
    echo Troubleshooting steps:
    echo 1. Run: firebase login
    echo 2. Verify project: firebase projects:list
    echo 3. Try again: firebase deploy --only firestore
    echo.
)

pause

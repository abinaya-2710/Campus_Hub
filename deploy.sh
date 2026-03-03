#!/bin/bash
# Firebase Deployment Script for macOS/Linux

echo ""
echo "======================================"
echo "Firebase Deployment for Campus Hub"
echo "======================================"
echo ""

# Check if firebase-tools is installed
if ! command -v firebase &> /dev/null; then
    echo "[!] Firebase CLI not found. Installing..."
    npm install -g firebase-tools
fi

echo "[1] Deploying Firestore Rules and Indexes..."
echo ""

firebase deploy --only firestore

if [ $? -eq 0 ]; then
    echo ""
    echo "======================================"
    echo "[✓] Deployment Successful!"
    echo "======================================"
    echo ""
    echo "Your configurations have been deployed:"
    echo "  ✓ Firestore Security Rules"
    echo "  ✓ Database Indexes (may take 5-30 min to build)"
    echo ""
    echo "Check deployment status at:"
    echo "https://console.firebase.google.com/project/c-hub-bytehunters/firestore"
    echo ""
else
    echo ""
    echo "======================================"
    echo "[✗] Deployment Failed"
    echo "======================================"
    echo ""
    echo "Troubleshooting steps:"
    echo "1. Run: firebase login"
    echo "2. Verify project: firebase projects:list"
    echo "3. Try again: firebase deploy --only firestore"
    echo ""
fi

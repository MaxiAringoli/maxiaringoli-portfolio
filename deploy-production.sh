#!/usr/bin/env bash
set -euo pipefail

REPO="/opt/maxiaringoli-portfolio"
DEST="/var/www/maxiaringoli"
BRANCH="main"

cd "$REPO"
git switch "$BRANCH"
git pull --ff-only origin "$BRANCH"
npm ci --no-audit --no-fund
npm run build
sudo find "$DEST" -mindepth 1 -maxdepth 1 -exec rm -rf {} +
sudo cp -a dist/. "$DEST/"
sudo chown -R www-data:www-data "$DEST"

echo "Deploy production completado: https://www.maxiaringoli.com.ar"

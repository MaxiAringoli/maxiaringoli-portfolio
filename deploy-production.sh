#!/usr/bin/env bash
set -euo pipefail

REPO="/opt/maxiaringoli-portfolio"
DEST="/var/www/maxiaringoli"
API_DEST="/var/www/portfolio-api/event.php"
BRANCH="main"

cd "$REPO"
git switch "$BRANCH"
git pull --ff-only origin "$BRANCH"
npm ci --no-audit --no-fund
npm run build
php -l server/analytics/event.php
sudo find "$DEST" -mindepth 1 -maxdepth 1 -exec rm -rf {} +
sudo cp -a dist/. "$DEST/"
sudo chown -R www-data:www-data "$DEST"
sudo install -o root -g www-data -m 0640 server/analytics/event.php "$API_DEST"

echo "Deploy production completado: https://www.maxiaringoli.com.ar"

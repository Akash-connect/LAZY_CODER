import React from 'react';
import fs from 'fs';
import path from 'path';

// Generate lightweight base64 PNGs for favicon & PWA icons to prevent 404s
const icon192Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="192" height="192">
  <rect width="192" height="192" fill="#0A0A1A" rx="36"/>
  <text x="50%" y="56%" text-anchor="middle" dominant-baseline="middle" fill="#FFFFFF" font-family="monospace" font-size="44" font-weight="bold">&lt;<tspan fill="#A5B4FC">z</tspan>/&gt;</text>
</svg>`;

const icon512Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" fill="#0A0A1A" rx="96"/>
  <text x="50%" y="56%" text-anchor="middle" dominant-baseline="middle" fill="#FFFFFF" font-family="monospace" font-size="120" font-weight="bold">&lt;<tspan fill="#A5B4FC">z</tspan>/&gt;</text>
</svg>`;

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <rect width="32" height="32" fill="#0A0A1A" rx="6"/>
  <text x="50%" y="58%" text-anchor="middle" dominant-baseline="middle" fill="#FFFFFF" font-family="monospace" font-size="11" font-weight="bold">&lt;z/&gt;</text>
</svg>`;

const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'icon-192.svg'), icon192Svg);
fs.writeFileSync(path.join(publicDir, 'icon-512.svg'), icon512Svg);
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), faviconSvg);
fs.writeFileSync(path.join(publicDir, 'icon-192.png'), icon192Svg);
fs.writeFileSync(path.join(publicDir, 'icon-512.png'), icon512Svg);
fs.writeFileSync(path.join(publicDir, 'og-image.png'), icon512Svg);

console.log('Public icons and assets generated successfully.');

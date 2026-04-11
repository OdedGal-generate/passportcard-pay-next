#!/usr/bin/env node
/**
 * generate-og.js — Generates og-image.jpg for each agent.
 *
 * Uses template/og-base.png + agent photo + agent name/title.
 * Adapted from the old PassportCard system's proven OG generator.
 *
 * Usage: node scripts/generate-og.js
 */

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const ROOT = path.join(__dirname, '..');
const BASE_IMG = path.join(ROOT, 'public', 'images', 'og-base.png');
const AGENTS_DIR = path.join(ROOT, 'public', 'images', 'agents');
const OG_DIR = path.join(ROOT, 'public', 'images', 'og');

// Layout config (800x630 base image, 130px header)
const CIRCLE_DIAMETER = 100;
const CIRCLE_X = 680;
const CIRCLE_Y = 12;
const BORDER_WIDTH = 4;
const BORDER_COLOR = '#D0021B';

const NAME_X = 660;
const NAME_Y = 18;
const NAME_FONT_SIZE = 38;

const TITLE_X = 660;
const TITLE_Y = 65;
const TITLE_FONT_SIZE = 26;

function escapeXml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

// Import agents from the TypeScript data file (parse manually)
function getAgents() {
  const agentsFile = fs.readFileSync(path.join(ROOT, 'src', 'data', 'agents.ts'), 'utf8');
  const agents = [];
  const regex = /name:\s*"([^"]+)"[\s\S]*?slug:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"/g;
  let match;
  while ((match = regex.exec(agentsFile)) !== null) {
    agents.push({ name: match[1], slug: match[2], title: match[3] });
  }
  return agents;
}

async function generateForAgent(agent) {
  const { name, slug, title } = agent;

  // Find photo
  let photoPath = path.join(AGENTS_DIR, `${slug}.jpg`);
  if (!fs.existsSync(photoPath)) {
    photoPath = path.join(AGENTS_DIR, `${slug}.png`);
  }
  if (!fs.existsSync(photoPath)) {
    console.log(`  ⚠  ${slug} — no photo found, skipping`);
    return;
  }

  // 1. Create circular photo with red border
  const r = CIRCLE_DIAMETER / 2;
  const borderR = r + BORDER_WIDTH;
  const totalSize = borderR * 2;

  const circleMask = Buffer.from(
    `<svg width="${CIRCLE_DIAMETER}" height="${CIRCLE_DIAMETER}">
      <circle cx="${r}" cy="${r}" r="${r}" fill="white"/>
    </svg>`
  );

  const circularPhoto = await sharp(photoPath)
    .resize(CIRCLE_DIAMETER, CIRCLE_DIAMETER, { fit: 'cover', position: 'top' })
    .composite([{ input: circleMask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  const borderCircle = Buffer.from(
    `<svg width="${totalSize}" height="${totalSize}">
      <circle cx="${borderR}" cy="${borderR}" r="${borderR}" fill="${BORDER_COLOR}"/>
    </svg>`
  );

  const photoWithBorder = await sharp(borderCircle)
    .composite([{ input: circularPhoto, left: BORDER_WIDTH, top: BORDER_WIDTH }])
    .png()
    .toBuffer();

  // 2. Create text overlay SVG
  const textSvg = Buffer.from(
    `<svg width="800" height="140" xmlns="http://www.w3.org/2000/svg">
      <text x="${NAME_X}" y="${NAME_Y + NAME_FONT_SIZE}"
            font-family="Arial, Helvetica, sans-serif"
            font-size="${NAME_FONT_SIZE}px"
            font-weight="bold"
            fill="#111827"
            text-anchor="end">${escapeXml(name)}</text>
      <text x="${TITLE_X}" y="${TITLE_Y + TITLE_FONT_SIZE}"
            font-family="Arial, Helvetica, sans-serif"
            font-size="${TITLE_FONT_SIZE}px"
            font-weight="normal"
            fill="#6b7280"
            text-anchor="end">${escapeXml(title)}</text>
    </svg>`
  );

  // 3. Composite onto base image
  const outputPath = path.join(OG_DIR, `${slug}.png`);
  await sharp(BASE_IMG)
    .composite([
      { input: photoWithBorder, left: CIRCLE_X - BORDER_WIDTH, top: CIRCLE_Y - BORDER_WIDTH },
      { input: textSvg, left: 0, top: 0 },
    ])
    .png()
    .toFile(outputPath);

  console.log(`  ✔  ${slug}.png`);
}

async function main() {
  if (!fs.existsSync(BASE_IMG)) {
    console.error('ERROR: public/images/og-base.png not found');
    process.exit(1);
  }

  // Create output dir
  if (!fs.existsSync(OG_DIR)) {
    fs.mkdirSync(OG_DIR, { recursive: true });
  }

  const agents = getAgents();
  console.log(`\nGenerating OG images for ${agents.length} agents...`);

  for (const agent of agents) {
    await generateForAgent(agent);
  }

  console.log(`\nDone.\n`);
}

main().catch(err => { console.error(err); process.exit(1); });

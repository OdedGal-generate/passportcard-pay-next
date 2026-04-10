import { NextRequest, NextResponse } from "next/server";
import { getAgent } from "@/data/agents";
import sharp from "sharp";
import { readFileSync } from "fs";
import { join } from "path";

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug") || "";
  const agent = getAgent(slug);

  if (!agent) {
    return new Response("Agent not found", { status: 404 });
  }

  // Read agent photo and make circular
  let photoComposite: sharp.OverlayOptions[] = [];
  try {
    const photoPath = join(process.cwd(), "public", "images", "agents", `${slug}.jpg`);
    const photoBuffer = readFileSync(photoPath);

    // Resize and make circular with white border
    const size = 90;
    const borderSize = 4;
    const totalSize = size + borderSize * 2;

    // White circle border
    const borderCircle = Buffer.from(
      `<svg width="${totalSize}" height="${totalSize}"><circle cx="${totalSize / 2}" cy="${totalSize / 2}" r="${totalSize / 2}" fill="white"/></svg>`
    );

    // Circular mask for photo
    const circleMask = Buffer.from(
      `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white"/></svg>`
    );

    const circularPhoto = await sharp(photoBuffer)
      .resize(size, size, { fit: "cover" })
      .composite([{ input: circleMask, blend: "dest-in" }])
      .png()
      .toBuffer();

    const photoWithBorder = await sharp(borderCircle)
      .composite([{ input: circularPhoto, left: borderSize, top: borderSize }])
      .png()
      .toBuffer();

    photoComposite = [{ input: photoWithBorder, left: 800 - 40 - totalSize, top: 40 }];
  } catch {
    // No photo
  }

  // Build SVG with all text (RTL handled natively in SVG with direction + text-anchor)
  const svgText = `
    <svg width="800" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#D0021B"/>
          <stop offset="100%" style="stop-color:#a00118"/>
        </linearGradient>
      </defs>

      <!-- Background -->
      <rect width="800" height="630" fill="url(#bg)"/>

      <!-- Agent name + title (top right) -->
      <text x="760" y="75" text-anchor="end" direction="rtl"
            font-size="30" font-weight="900" fill="white" font-family="sans-serif">
        ${escapeXml(agent.name)}
      </text>
      <text x="760" y="105" text-anchor="end" direction="rtl"
            font-size="18" font-weight="500" fill="rgba(255,255,255,0.8)" font-family="sans-serif">
        ${escapeXml(agent.title)}
      </text>

      <!-- Main headline -->
      <text x="760" y="240" text-anchor="end" direction="rtl"
            font-size="58" font-weight="900" fill="white" font-family="sans-serif">
        הפסיקו לשלם
      </text>
      <text x="760" y="310" text-anchor="end" direction="rtl"
            font-size="58" font-weight="900" fill="#FFD700" font-family="sans-serif">
        עמלות מיותרות
      </text>
      <text x="760" y="380" text-anchor="end" direction="rtl"
            font-size="58" font-weight="900" fill="white" font-family="sans-serif">
        בחו״ל
      </text>

      <!-- Bottom bar -->
      <text x="760" y="560" text-anchor="end" direction="rtl"
            font-size="20" font-weight="600" fill="rgba(255,255,255,0.75)" font-family="sans-serif">
        המדריך הקצר לנסיעה חכמה יותר
      </text>

      <!-- Badge -->
      <rect x="40" y="540" width="160" height="40" rx="20" fill="rgba(255,255,255,0.15)"/>
      <text x="120" y="566" text-anchor="middle" direction="rtl"
            font-size="16" font-weight="700" fill="white" font-family="sans-serif">
        ✈️ קיץ 2026
      </text>
    </svg>
  `;

  const imageBuffer = await sharp(Buffer.from(svgText))
    .composite(photoComposite)
    .jpeg({ quality: 90 })
    .toBuffer();

  return new NextResponse(imageBuffer, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

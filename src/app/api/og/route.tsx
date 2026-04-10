import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { getAgent } from "@/data/agents";
import { readFileSync } from "fs";
import { join } from "path";

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug") || "";
  const agent = getAgent(slug);

  if (!agent) {
    return new Response("Agent not found", { status: 404 });
  }

  // Read the agent photo
  let photoBase64 = "";
  try {
    const photoPath = join(process.cwd(), "public", "images", "agents", `${slug}.jpg`);
    const photoBuffer = readFileSync(photoPath);
    photoBase64 = `data:image/jpeg;base64,${photoBuffer.toString("base64")}`;
  } catch {
    // No photo available
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "800px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #D0021B 0%, #a00118 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Agent photo circle */}
        {photoBase64 && (
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              border: "4px solid white",
              overflow: "hidden",
              marginBottom: "20px",
              display: "flex",
            }}
          >
            <img
              src={photoBase64}
              width={120}
              height={120}
              style={{ objectFit: "cover" }}
            />
          </div>
        )}

        {/* Agent name */}
        <div
          style={{
            fontSize: "42px",
            fontWeight: 900,
            color: "white",
            textAlign: "center",
            marginBottom: "8px",
          }}
        >
          {agent.name}
        </div>

        {/* Agent title */}
        <div
          style={{
            fontSize: "22px",
            fontWeight: 500,
            color: "rgba(255,255,255,0.85)",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          {agent.title}
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: "36px",
            fontWeight: 900,
            color: "#FFD700",
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          חיסכו בעמלות בנסיעה לחו״ל
        </div>

        {/* Sub text */}
        <div
          style={{
            fontSize: "20px",
            color: "rgba(255,255,255,0.7)",
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          PassportCard Pay · 0% עמלות המרה
        </div>
      </div>
    ),
    {
      width: 800,
      height: 630,
    }
  );
}

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
          background: "linear-gradient(135deg, #D0021B 0%, #a00118 100%)",
          fontFamily: "sans-serif",
          padding: "40px",
          position: "relative",
        }}
      >
        {/* Top section: Agent info */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          {/* Agent photo */}
          {photoBase64 && (
            <div
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                border: "3px solid white",
                overflow: "hidden",
                display: "flex",
                flexShrink: 0,
              }}
            >
              <img
                src={photoBase64}
                width={90}
                height={90}
                style={{ objectFit: "cover" }}
              />
            </div>
          )}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: "32px",
                fontWeight: 900,
                color: "white",
              }}
            >
              {agent.name}
            </div>
            <div
              style={{
                fontSize: "20px",
                fontWeight: 500,
                color: "rgba(255,255,255,0.8)",
                marginTop: "4px",
              }}
            >
              {agent.title}
            </div>
          </div>
        </div>

        {/* Main headline — the ad */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: "56px",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.15,
              marginBottom: "12px",
            }}
          >
            הפסיקו לשלם
          </div>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 900,
              color: "#FFD700",
              lineHeight: 1.15,
              marginBottom: "12px",
            }}
          >
            עמלות מיותרות
          </div>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.15,
            }}
          >
            בחו״ל
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "22px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.75)",
            }}
          >
            המדריך הקצר לנסיעה חכמה יותר
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.15)",
              padding: "8px 20px",
              borderRadius: "20px",
              fontSize: "18px",
              fontWeight: 700,
              color: "white",
            }}
          >
            ✈️ קיץ 2026
          </div>
        </div>
      </div>
    ),
    {
      width: 800,
      height: 630,
    }
  );
}

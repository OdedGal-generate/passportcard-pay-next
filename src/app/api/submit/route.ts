import { NextResponse } from "next/server";
import { agents } from "@/data/agents";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { lead_type, agent, agent_name, full_name, phone, destination, date_from, date_to, consent } = body;

    // Find agent webhook
    const agentConfig = agents.find((a) => a.slug === agent);
    if (!agentConfig) {
      return NextResponse.json({ error: "Agent not found" }, { status: 400 });
    }

    // Basic validation
    if (!full_name || full_name.trim().length < 2) {
      return NextResponse.json({ error: "שם לא תקין" }, { status: 400 });
    }
    if (!phone) {
      return NextResponse.json({ error: "טלפון לא תקין" }, { status: 400 });
    }

    // Send to agent's n8n webhook (fire and forget)
    try {
      await fetch(agentConfig.webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lead_type,
          agent,
          agent_name,
          timestamp: new Date().toISOString(),
          full_name: full_name.trim(),
          phone: phone.trim(),
          destination: destination?.trim() || "",
          date_from: date_from || "",
          date_to: date_to || "",
          consent: consent ?? null,
        }),
      });
    } catch {
      // Don't break user flow if webhook fails
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "שגיאה בשליחת הטופס" },
      { status: 500 }
    );
  }
}

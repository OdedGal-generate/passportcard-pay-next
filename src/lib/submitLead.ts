const SUBMIT_ERROR = "שגיאה בשליחת הטופס — נסו שוב בעוד רגע";

// Posts a lead to the agent's webhook and waits for its answer. Returns null only when the webhook
// accepted the lead (2xx); a 404/5xx, a network failure or a timeout returns the message to show,
// so the visitor is never told "received" for a lead that was not. (2026-10-04: a 3h42m webhook
// outage went unnoticed because the forms reported success without looking.)
export async function submitLead(webhookUrl: string, data: Record<string, unknown>): Promise<string | null> {
  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      signal: AbortSignal.timeout(10000),
    });
    return res.ok ? null : SUBMIT_ERROR;
  } catch {
    return SUBMIT_ERROR;
  }
}

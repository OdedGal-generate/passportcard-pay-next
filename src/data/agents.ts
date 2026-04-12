import { AgentConfig } from "@/lib/types";

export const agents: AgentConfig[] = [
  {
    name: "אבי אהרונוב",
    slug: "avi-aharonov",
    title: "תכנון פיננסי, פנסיוני וליווי פרישה",
    webhookUrl: "https://n8n.srv1068559.hstgr.cloud/webhook/3f307d49-3a48-4bc6-8036-c3d8b16c209a",
  },
  {
    name: "גיל דן-גור",
    slug: "dan-gor-ins",
    title: "סוכן מלווה אישי 24/7 · דן-גור ביטוחים",
    webhookUrl: "https://n8n.srv1068559.hstgr.cloud/webhook/e36e799f-32fc-4d63-9097-4c8d930bd679",
  },
  {
    name: "דנאל להב",
    slug: "danel-lahav",
    title: "סוכן ביטוח, פנסיה ופיננסים",
    webhookUrl: "https://n8n.srv1068559.hstgr.cloud/webhook/33820cfa-e606-4264-899e-761d1a3a11cb",
  },
  {
    name: "אלירן יוסף",
    slug: "eliran-yosef",
    title: "סוכן ביטוח, פנסיה ופיננסים",
    webhookUrl: "https://n8n.srv1068559.hstgr.cloud/webhook/4e290bf9-a0d0-4e0f-915d-a8068ef47fc4",
  },
  {
    name: "גל תכנון פיננסי",
    slug: "gal-finance",
    title: "סוכנות לביטוח, פנסיה ופיננסים",
    webhookUrl: "https://n8n.srv1068559.hstgr.cloud/webhook/c812f320-5e76-450c-ae84-1184b8d1e56f",
  },
  {
    name: "אילן עשור",
    slug: "ilan-asor",
    title: "סוכן ביטוח, פנסיה ופיננסים",
    webhookUrl: "https://n8n.srv1068559.hstgr.cloud/webhook/6b1736f2-a5b4-484f-916e-c853db5c0a3e",
  },
  {
    name: "קירה קרישטול",
    slug: "kira-krishtol",
    title: "סוכנת ביטוח, פנסיה ופיננסים",
    webhookUrl: "https://n8n.srv1068559.hstgr.cloud/webhook/2b64e2e6-a6f1-4547-a9b7-4ca94d81a531",
  },
  {
    name: "הוד לוגשי",
    slug: "lugashi-ins",
    title: "לוגשי סוכנות לביטוח",
    webhookUrl: "https://n8n.srv1068559.hstgr.cloud/webhook/9366e6c7-60db-43aa-b089-b9bddd175273",
  },
  {
    name: "משה טטרו",
    slug: "moshe-tetro",
    title: "סוכנות לביטוח",
    webhookUrl: "https://n8n.srv1068559.hstgr.cloud/webhook/33c612b2-bcbf-44d9-8295-8f9a9efa6661",
  },
  {
    name: "אורן דזובס",
    slug: "oren-dzubs",
    title: "סוכן ביטוח",
    webhookUrl: "https://n8n.srv1068559.hstgr.cloud/webhook/9f9a4390-56df-4d45-b601-e1b765cca23b",
  },
  {
    name: "שי אלימלך - שי לעתיד",
    slug: "shai-latid",
    title: "סוכן ביטוח, פנסיה ופיננסים",
    webhookUrl: "https://n8n.srv1068559.hstgr.cloud/webhook/daceb4a6-f53f-4735-acb0-b7a1859935a0",
  },
  {
    name: "יחיעם כהן",
    slug: "yechiam-cohen",
    title: "סוכן ביטוח, פנסיה ופיננסים",
    webhookUrl: "https://n8n.srv1068559.hstgr.cloud/webhook/e7ef2a77-1f01-4214-8d57-bac9b4d60fe4",
  },
  {
    name: "צחי פילוסוף נחום",
    slug: "zahi-pn",
    title: "סוכן ביטוח, פנסיה ופיננסים",
    webhookUrl: "https://n8n.srv1068559.hstgr.cloud/webhook/0bbcca52-62c9-4fc4-94fb-b25d46f113c2",
  },
  {
    name: "דניאל דבילה",
    slug: "daniel-dvela",
    title: "סוכן ביטוח, פנסיה ופיננסים",
    webhookUrl: "https://n8n.srv1068559.hstgr.cloud/webhook/a268fc28-8840-4448-ab66-f951e3910eed",
  },
  {
    name: "אילן בחנא",
    slug: "ilan-bachana",
    title: "סוכן ביטוח, פנסיה ופיננסים",
    webhookUrl: "https://n8n.srv1068559.hstgr.cloud/webhook/c8fe56fb-1473-4159-8819-3e371d3c4d4e",
  },
  {
    name: "Novity",
    slug: "novity-ins",
    title: "זה בטוח בשבילי",
    webhookUrl: "https://n8n.srv1068559.hstgr.cloud/webhook/b3a17fe9-7775-4fea-9111-4e9d8fde54a1",
  },
  {
    name: "אברהם אהרוני",
    slug: "avi-aharoni",
    title: "סוכן ביטוח, פנסיה ופיננסים",
    webhookUrl: "https://n8n.srv1068559.hstgr.cloud/webhook/bc24dd07-ef28-4944-969a-327d16e95bbf",
  },
];

export function getAgent(slug: string): AgentConfig | undefined {
  return agents.find((a) => a.slug === slug);
}

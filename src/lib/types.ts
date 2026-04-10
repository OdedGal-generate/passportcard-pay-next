export interface AgentConfig {
  name: string;
  slug: string;
  title: string;
  webhookUrl: string;
}

export interface FormData {
  lead_type: "purchase" | "reminder";
  agent: string;
  agent_name: string;
  timestamp: string;
  full_name: string;
  phone: string;
  destination: string;
  date_from: string;
  date_to: string;
  consent: boolean | null;
}

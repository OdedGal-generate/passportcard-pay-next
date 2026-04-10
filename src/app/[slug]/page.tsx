import { notFound } from "next/navigation";
import { agents, getAgent } from "@/data/agents";
import AgentPageClient from "@/components/AgentPageClient";

export function generateStaticParams() {
  return agents.map((agent) => ({ slug: agent.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const agent = getAgent(slug);
  if (!agent) return {};

  return {
    title: `חיסכו בעמלות מיותרות בנסיעה לחו״ל — ${agent.name}`,
    description: `הפסיקו לשלם עמלות מיותרות בחו״ל — ${agent.name}, ${agent.title}`,
    openGraph: {
      title: "חיסכו בעמלות מיותרות בנסיעה לחו״ל",
      description:
        "הפסיקו לשלם עמלות מיותרות בחו״ל — המדריך הקצר לנסיעה חכמה יותר",
      locale: "he_IL",
    },
  };
}

export default async function AgentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const agent = getAgent(slug);

  if (!agent) {
    notFound();
  }

  return <AgentPageClient agent={agent} />;
}

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
      title: `חיסכו בעמלות מיותרות בנסיעה לחו״ל — ${agent.name}`,
      description: `הפסיקו לשלם עמלות מיותרות בחו״ל — ${agent.name}, ${agent.title}`,
      locale: "he_IL",
      images: [
        {
          url: `https://passportcard-pay-next.vercel.app/api/og?slug=${slug}`,
          width: 800,
          height: 630,
          alt: `חיסכו בעמלות מיותרות בנסיעה לחו״ל — ${agent.name}`,
        },
      ],
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

import { AgentConfig } from "@/lib/types";

interface FooterAgentProps {
  agent: AgentConfig;
}

export default function FooterAgent({ agent }: FooterAgentProps) {
  return (
    <div className="bg-white/80 text-center py-4 px-4">
      <p className="text-muted text-[11px]">
        {agent.name} &middot; {agent.title}
      </p>
    </div>
  );
}

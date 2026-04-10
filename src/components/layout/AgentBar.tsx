"use client";

import { AgentConfig } from "@/lib/types";

interface AgentBarProps {
  agent: AgentConfig;
}

export default function AgentBar({ agent }: AgentBarProps) {
  return (
    <div className="bg-white px-4 py-3 flex items-center gap-3 border-b border-border">
      {/* Agent photo */}
      <div className="w-[52px] h-[52px] rounded-full border-[3px] border-brand-500 overflow-hidden flex-shrink-0">
        <img
          src={`/images/agents/${agent.slug}.jpg`}
          alt={agent.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (target.src.endsWith(".jpg")) {
              target.src = target.src.replace(".jpg", ".png");
            }
          }}
        />
      </div>

      {/* Agent info */}
      <div className="flex-1 min-w-0">
        <div className="font-bold text-text text-[15px] leading-tight truncate">
          {agent.name}
        </div>
        <div className="text-muted text-[11px] leading-tight truncate">
          {agent.title}
        </div>
      </div>

      {/* Authorized badge */}
      <div className="flex-shrink-0 bg-green-light text-green-500 text-[9px] font-semibold px-2 py-1 rounded-full border border-green-500/20">
        סוכן מורשה
      </div>
    </div>
  );
}

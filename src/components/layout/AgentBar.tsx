"use client";

import { AgentConfig } from "@/lib/types";
import { CheckIcon } from "@/components/brand/BrandIcons";

interface AgentBarProps {
  agent: AgentConfig;
}

export default function AgentBar({ agent }: AgentBarProps) {
  return (
    <div className="bg-white px-4 py-3 flex items-center gap-3 border-b border-border">
      <div className="relative flex-shrink-0">
        <div
          className="w-[58px] h-[58px] rounded-full overflow-hidden p-[2px]"
          style={{ background: "linear-gradient(135deg, #E10E18 0%, #F23847 100%)" }}
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-white">
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
        </div>
        {/* Verified tick */}
        <div className="absolute -bottom-[2px] -right-[2px] w-[20px] h-[20px] rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-white">
          <CheckIcon size={11} />
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="font-display font-extrabold text-text text-[18px] leading-tight truncate">
          {agent.name}
        </div>
        <div className="text-muted text-[12px] leading-tight truncate mt-0.5">
          {agent.title}
        </div>
      </div>

      <div className="flex-shrink-0 inline-flex items-center gap-1 bg-green-light text-green-600 text-[11px] font-bold px-2.5 py-[5px] rounded-full border border-green-500/25">
        <CheckIcon size={11} />
        סוכן מורשה
      </div>
    </div>
  );
}

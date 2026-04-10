"use client";

import { useEffect, useRef } from "react";
import { AgentConfig } from "@/lib/types";

interface CTASectionProps {
  agent: AgentConfig;
  onBuy: () => void;
  onRemind: () => void;
}

export default function CTASection({ agent, onBuy, onRemind }: CTASectionProps) {
  const buyRef = useRef<HTMLButtonElement>(null);
  const remindRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const el = document.getElementById("cta-buttons");
    if (!el || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            buyRef.current?.classList.remove("animate-glow");
            void buyRef.current?.offsetWidth;
            buyRef.current?.classList.add("animate-glow");
            remindRef.current?.classList.remove("animate-glow-light");
            void remindRef.current?.offsetWidth;
            remindRef.current?.classList.add("animate-glow-light");
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="cta-buttons" className="bg-[#111827] px-5 py-[22px] pb-7">
      <p className="text-[13px] text-white/60 mb-3.5 leading-relaxed text-center">
        טסים לחו״ל? לחצו ונדאג לכם להכל — ביטוח + חיסכון בעמלות.
      </p>
      <div className="flex flex-col gap-2.5">
        <button
          ref={buyRef}
          onClick={onBuy}
          className="bg-brand-500 text-white border-none rounded-[14px] py-[15px] w-full text-[15px] font-bold cursor-pointer text-center shadow-[0_4px_14px_rgba(208,2,27,0.4)] active:opacity-90"
        >
          ✈️ רכישת ביטוח נסיעות עכשיו
        </button>
        <button
          ref={remindRef}
          onClick={onRemind}
          className="bg-white/[0.07] text-white/65 border border-white/15 rounded-[14px] py-[13px] w-full text-[13px] font-medium cursor-pointer text-center active:opacity-90"
        >
          ⏰ שלח לי תזכורת קרוב לטיסה
        </button>
      </div>
      <div className="flex justify-center items-center gap-2 mt-[18px]">
        <span className="w-1.5 h-1.5 bg-brand-500 rounded-full" />
        <span className="text-white/[0.28] text-[11px] font-medium" id="agent-footer-text">
          {agent.name} · {agent.title}
        </span>
        <span className="w-1.5 h-1.5 bg-brand-500 rounded-full" />
      </div>
    </div>
  );
}

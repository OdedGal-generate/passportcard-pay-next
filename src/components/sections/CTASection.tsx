"use client";

import { useEffect, useRef } from "react";
import { AgentConfig } from "@/lib/types";
import Logomark from "@/components/brand/Logomark";

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
    <div id="cta-buttons" className="bg-[#1A1313] px-5 py-7">
      {/* Trust micro-line */}
      <div className="flex items-center justify-center gap-3 text-[10px] text-white/55 mb-3 font-semibold">
        <span className="inline-flex items-center gap-1">
          <span className="text-brand-400">✓</span> אישור מיידי
        </span>
        <span className="text-white/20">·</span>
        <span className="inline-flex items-center gap-1">
          <span className="text-brand-400">✓</span> ביטול חינם
        </span>
        <span className="text-white/20">·</span>
        <span className="inline-flex items-center gap-1">
          <span className="text-brand-400">✓</span> ללא התחייבות
        </span>
      </div>

      <p className="text-[13px] text-white/70 mb-3.5 leading-relaxed text-center">
        טסים לחו״ל? לחצו ונדאג לכם להכל — ביטוח + חיסכון בעמלות.
      </p>

      <div className="flex flex-col gap-2.5">
        <button
          ref={buyRef}
          onClick={onBuy}
          className="text-white border-none rounded-2xl py-4 w-full text-[15px] font-display font-extrabold cursor-pointer text-center active:opacity-90 inline-flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #F23847 0%, #E10E18 50%, #C00913 100%)",
            boxShadow: "var(--shadow-cta)",
          }}
        >
          רכישת ביטוח נסיעות עכשיו
        </button>
        <button
          ref={remindRef}
          onClick={onRemind}
          className="bg-white/[0.07] text-white/70 border border-white/15 rounded-2xl py-3 w-full text-[13px] font-medium cursor-pointer text-center active:opacity-90 hover:bg-white/[0.1] transition-colors"
        >
          שלח לי תזכורת קרוב לטיסה
        </button>
      </div>

      <div className="flex justify-center items-center gap-2 mt-5">
        <span className="w-1.5 h-1.5 bg-brand-500 rounded-full" />
        <span
          className="text-white/30 text-[11px] font-medium"
          id="agent-footer-text"
        >
          {agent.name} · {agent.title}
        </span>
        <span className="w-1.5 h-1.5 bg-brand-500 rounded-full" />
      </div>
    </div>
  );
}

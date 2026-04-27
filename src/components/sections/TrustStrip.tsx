"use client";

import RevealOnScroll from "../animations/RevealOnScroll";

const stats = [
  { value: "69284", label: "רישיון" },
  { value: "10+", label: "שנות פעילות" },
  { value: "200K+", label: "לקוחות" },
  { value: "★ 4.8", label: "דירוג" },
];

export default function TrustStrip() {
  return (
    <div className="px-5 py-4">
      <RevealOnScroll>
        <div
          className="bg-card rounded-2xl border border-brand-100 px-3 py-3 grid grid-cols-4"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center ${
                i < stats.length - 1 ? "border-l border-border" : ""
              }`}
            >
              <div className="font-display text-[14px] font-black text-brand-500 leading-tight tabular">
                {s.value}
              </div>
              <div className="text-[9px] text-muted font-semibold mt-0.5 leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-muted/80 text-center mt-2 leading-snug">
          PassportCard שירותים פיננסיים בע״מ · בפיקוח רשות שוק ההון, ביטוח וחיסכון
        </p>
      </RevealOnScroll>
    </div>
  );
}

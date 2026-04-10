"use client";

import RevealOnScroll from "../animations/RevealOnScroll";

const bonuses = [
  { icon: "🛡️", text: "כיסוי הרחב ביותר בשוק" },
  { icon: "💳", text: "PassportCard Pay ללא עמלות" },
  { icon: "🧾", text: "Tax Free מהאפליקציה" },
  { icon: "📶", text: "eSIM חינם 3GB לחו״ל" },
];

export default function Bonus() {
  return (
    <div className="px-5 pb-5">
      <RevealOnScroll>
        <div className="flex items-center gap-1.5 text-[16px] font-extrabold text-brand-500 tracking-wide uppercase mb-2.5">
          מה מקבלים עם ביטוח PASSPORTCARD
          <span className="flex-1 h-px bg-brand-border" />
        </div>

        <div className="grid grid-cols-2 gap-2">
          {bonuses.map((item, i) => (
            <div
              key={i}
              className="bg-card rounded-[14px] p-3 flex items-center gap-2 shadow-[0_2px_16px_rgba(0,0,0,0.07)] border-r-[3px] border-r-brand-500"
            >
              <span className="text-[20px] flex-shrink-0">{item.icon}</span>
              <span className="text-[11px] font-semibold text-text leading-snug">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </div>
  );
}

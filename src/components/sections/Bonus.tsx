"use client";

import RevealOnScroll from "../animations/RevealOnScroll";

const bonuses = [
  { icon: "🛡️", text: "כיסוי הרחב ביותר בשוק" },
  { icon: "💳", text: "PassportCard Pay ללא עמלות" },
  { icon: "🧾", text: "Tax Free מהאפליקציה", disclaimer: "*במדינות נבחרות" },
  { icon: "📶", text: "eSIM חינם 3GB לחו״ל", disclaimer: "*ברכישת כיסוי לטלפון" },
];

export default function Bonus() {
  return (
    <div className="px-5 pb-5">
      <RevealOnScroll>
        <div className="flex items-center gap-1.5 mb-2.5">
          <span
            className="font-display text-[16px] font-extrabold text-brand-500 leading-tight"
            style={{ letterSpacing: "1px" }}
          >
            מה מקבלים עם PassportCard
          </span>
          <span className="flex-1 h-px bg-brand-200" />
        </div>

        <div className="grid grid-cols-2 gap-2">
          {bonuses.map(({ icon, text, disclaimer }, i) => (
            <div
              key={i}
              className="bg-card rounded-[14px] py-3 px-2.5 flex items-center gap-2 border-r-[3px] border-brand-500"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <span className="text-[20px] leading-none flex-shrink-0">
                {icon}
              </span>
              <span className="flex flex-col">
                <span className="text-[11px] font-semibold text-text leading-[1.3]">
                  {text}
                </span>
                {disclaimer && (
                  <span className="text-[9px] text-muted leading-[1.3] mt-0.5">
                    {disclaimer}
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </div>
  );
}

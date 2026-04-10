"use client";

import RevealOnScroll from "../animations/RevealOnScroll";

export default function Problem() {
  return (
    <div className="p-5">
      <RevealOnScroll>
        <div className="flex items-center gap-1.5 text-[16px] font-extrabold text-brand-500 tracking-wide uppercase mb-2.5">
          הבעיה
          <span className="flex-1 h-px bg-brand-border" />
        </div>

        <div className="bg-card rounded-2xl p-4 shadow-[0_2px_16px_rgba(0,0,0,0.07)] text-[14px] text-[#374151] leading-relaxed">
          כשמשלמים בחו״ל עם כרטיס אשראי רגיל, משלמים גם{" "}
          <strong className="text-brand-500 font-bold">
            עמלות המרה של עד 3%
          </strong>{" "}
          על כל עסקה — בלי לשים לב. בטיול משפחתי זה מצטבר לסכום לא קטן.
        </div>
      </RevealOnScroll>
    </div>
  );
}

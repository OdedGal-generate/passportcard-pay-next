"use client";

import RevealOnScroll from "../animations/RevealOnScroll";

export default function Problem() {
  return (
    <div className="px-5 py-6">
      <RevealOnScroll>
        <div className="flex items-center gap-1.5 mb-3">
          <span className="font-display text-[15px] font-extrabold text-brand-500 tracking-wide uppercase">
            הבעיה
          </span>
          <span className="flex-1 h-px bg-brand-200" />
        </div>

        <div
          className="bg-card rounded-2xl p-4 border border-brand-100 text-[14px] text-[#374151] leading-relaxed"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          כשמשלמים בחו״ל עם כרטיס אשראי רגיל, משלמים גם{" "}
          <span className="inline-block bg-brand-50 text-brand-700 font-bold px-2 py-0.5 rounded-md">
            עמלות המרה של עד 3%
          </span>{" "}
          על כל עסקה — בלי לשים לב. בטיול משפחתי זה מצטבר לסכום לא קטן.
        </div>
      </RevealOnScroll>
    </div>
  );
}

"use client";

import RevealOnScroll from "../animations/RevealOnScroll";
import PhoneFrame from "../ui/PhoneFrame";

export default function TaxFree() {
  return (
    <div className="p-5">
      <RevealOnScroll>
        <div className="flex items-center gap-1.5 text-[16px] font-extrabold text-brand-500 tracking-wide uppercase mb-2.5">
          Tax Free באפליקציה 🧾
          <span className="flex-1 h-px bg-brand-border" />
        </div>

        <p className="text-[13px] text-[#374151] leading-relaxed mb-3">
          עם PassportCard אפשר לנהל זכאות Tax Free ולהגיש החזרים ישירות
          מהטלפון — בלי ניירת, בלי תורים.
        </p>

        {/* Phone with Tax Free screenshot */}
        <div className="mb-3.5">
          <PhoneFrame>
            <img
              src="/images/taxfree-phone.png"
              alt="Tax Free באפליקציה"
              className="w-full block"
            />
          </PhoneFrame>
        </div>

        {/* Tax Free callout */}
        <div className="bg-[#d93448] rounded-[14px] p-3 flex items-center gap-3">
          <div className="text-[38px] font-black text-[#FFD700] leading-none flex-shrink-0">
            €345
          </div>
          <div className="text-white text-[12px] leading-relaxed">
            <strong className="font-bold block text-[13px]">
              ניהול החזרי מס מהאפליקציה
            </strong>
            הגשת בקשות דיגיטלית.
            <br />
            מקסימום יעילות — לא מפספסים החזרים!
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}

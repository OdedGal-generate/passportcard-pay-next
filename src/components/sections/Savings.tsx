"use client";

import RevealOnScroll from "../animations/RevealOnScroll";

export default function Savings() {
  return (
    <div className="p-5">
      <RevealOnScroll>
        <div className="bg-card rounded-2xl p-[18px] shadow-[0_2px_16px_rgba(0,0,0,0.07)] text-center">
          <p className="text-[13px] text-muted">בטיול של שבוע עם משפחה אפשר לחסוך</p>
          <div className="text-[26px] font-black text-text my-1.5">
            עד <em className="not-italic text-brand-500">₪680</em> ויותר
          </div>
          <p className="text-[11px] text-[#9ca3af]">
            לפי חישוב ממוצע של עסקאות בחו״ל · בהשוואה לכרטיס אשראי רגיל
          </p>
        </div>
      </RevealOnScroll>
    </div>
  );
}

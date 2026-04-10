"use client";

import RevealOnScroll from "../animations/RevealOnScroll";
import PhoneFrame from "../ui/PhoneFrame";

export default function Proof() {
  return (
    <div className="bg-brand-500 px-5 py-[22px] relative overflow-hidden">
      <div className="absolute -top-[50px] -left-[50px] w-[180px] h-[180px] bg-white/5 rounded-full" />

      <RevealOnScroll>
        <div className="text-[10px] font-extrabold text-white/65 tracking-[2px] uppercase mb-2">
          הוכחה אמיתית
        </div>
        <div className="text-[15px] font-bold text-white mb-3.5 relative z-[1]">
          צילום מסך מהנסיעה האחרונה שלי לאיטליה 🇮🇹
        </div>

        {/* Phone with real screenshot */}
        <div className="mb-3.5">
          <PhoneFrame>
            <img
              src="/images/proof-screenshot.jpg"
              alt="צילום מסך מאפליקציית PassportCard - חיסכון ₪680"
              className="w-full block"
            />
          </PhoneFrame>
        </div>

        {/* Savings callout */}
        <div className="bg-white/12 rounded-[14px] p-3 flex items-center gap-3 relative z-[1]">
          <div className="text-[38px] font-black text-[#FFD700] leading-none flex-shrink-0">
            ₪680
          </div>
          <div className="text-white text-[12px] leading-relaxed">
            <strong className="font-bold block text-[13px]">
              כרטיס אשראי אחד — נסיעה אחת
            </strong>
            לא כולל בן/בת הזוג.
            <br />
            במשפחה שלמה — אלפי שקלים.
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}

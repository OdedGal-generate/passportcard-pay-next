"use client";

import RevealOnScroll from "../animations/RevealOnScroll";
import PhoneFrame from "../ui/PhoneFrame";
import CountUp from "../ui/CountUp";

export default function Proof() {
  return (
    <div
      className="relative overflow-hidden px-5 py-7"
      style={{
        background:
          "radial-gradient(ellipse 320px 200px at 80% 8%, #F23847 0%, #E10E18 50%, #BF1732 100%)",
      }}
    >
      <div className="absolute -top-[50px] -left-[50px] w-[180px] h-[180px] bg-white/[0.05] rounded-full" />

      <RevealOnScroll>
        <div className="text-[13px] font-extrabold text-white/75 tracking-[2px] uppercase mb-2">
          הוכחה אמיתית
        </div>
        <div className="font-display text-[13px] font-extrabold text-white mb-3 leading-snug relative z-[1] whitespace-nowrap">
          צילום מסך מהנסיעה האחרונה שלי לאיטליה{" "}
          <span aria-hidden>🇮🇹</span>
        </div>

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
        <div className="bg-white/[0.12] backdrop-blur-sm rounded-2xl p-3 flex items-center gap-3 relative z-[1] ring-1 ring-white/15">
          <div
            className="font-display text-[40px] font-black leading-none flex-shrink-0"
            style={{ color: "#FFD700", textShadow: "0 1px 0 rgba(0,0,0,0.2)" }}
          >
            <span aria-hidden>₪</span>
            <CountUp to={680} />
          </div>
          <div className="text-white text-[12px] leading-relaxed">
            <strong className="font-bold block text-[13px]">
              כרטיס אחד · נסיעה אחת
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

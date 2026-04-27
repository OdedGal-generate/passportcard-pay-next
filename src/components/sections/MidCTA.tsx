"use client";

import { CheckIcon } from "@/components/brand/BrandIcons";

export default function MidCTA() {
  const scrollToCTA = () => {
    document.getElementById("cta-buttons")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="px-5 pb-3 text-center">
      <button
        onClick={scrollToCTA}
        className="text-white border-none rounded-2xl py-3.5 w-full text-[15px] font-display font-extrabold cursor-pointer active:opacity-90 inline-flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5"
        style={{
          background: "linear-gradient(135deg, #22C55E 0%, #15803D 100%)",
          boxShadow: "0 2px 4px rgba(34,197,94,0.20), 0 8px 24px rgba(34,197,94,0.32)",
        }}
      >
        <span className="bg-white rounded-full w-5 h-5 inline-flex items-center justify-center">
          <CheckIcon size={12} className="text-[#15803D]" />
        </span>
        גם אני רוצה לחסוך בחו״ל
      </button>
    </div>
  );
}

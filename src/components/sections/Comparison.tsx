"use client";

import RevealOnScroll from "../animations/RevealOnScroll";

function CreditCardBad() {
  return (
    <div className="w-[82px] h-[68px] flex items-end justify-center">
      <div className="w-[82px] h-[52px] bg-gradient-to-br from-[#94a3b8] to-[#cbd5e1] rounded-lg relative shadow-[0_3px_10px_rgba(0,0,0,0.15)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
        <div className="absolute top-[10px] right-[9px] w-4 h-3 bg-gradient-to-br from-[#d4af37] to-[#b8962e] rounded-sm" />
        <div className="absolute bottom-[7px] left-[7px] flex">
          <span className="w-3.5 h-3.5 rounded-full bg-[#f79e1b] block -mr-1.5 opacity-90" />
          <span className="w-3.5 h-3.5 rounded-full bg-[#eb001b] block" />
        </div>
      </div>
    </div>
  );
}

function PhoneCardGood() {
  return (
    <div className="relative w-[82px] h-[68px]">
      {/* Red PassportCard */}
      <div className="absolute top-0 right-[-2px] w-16 h-10 bg-gradient-to-br from-[#e8192c] to-[#c41422] rounded-[7px] shadow-[0_4px_14px_rgba(232,25,44,0.4)] z-[2] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
        <div className="absolute top-[7px] right-[7px] w-[13px] h-[10px] bg-gradient-to-br from-[#d4af37] to-[#b8962e] rounded-sm" />
        <div className="absolute bottom-[5px] left-[5px] text-[4.5px] font-extrabold text-white/85 tracking-wide">
          PassportCard
        </div>
      </div>

      {/* Mini phone */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[44px] h-[62px] bg-[#111] rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.2)] overflow-hidden z-[1]">
        <div className="m-0.5 bg-white rounded-[5px] h-[calc(100%-4px)] overflow-hidden">
          <div className="bg-brand-500 h-[9px] flex items-center justify-between px-[3px]">
            <span className="text-[3.5px] text-white font-bold">PassportCard</span>
            <span className="text-[3.5px] text-white font-bold">עסקאות</span>
          </div>
          <div className="p-0.5">
            <div className="bg-brand-500 rounded-[3px] p-0.5 text-center mb-0.5">
              <div className="text-[3px] text-white/80">יתרה</div>
              <div className="text-[9px] font-black text-white leading-none">₪2,480</div>
            </div>
            <div className="bg-[#f5f5f5] rounded-sm p-[1.5px_2px] mb-[1.5px] flex justify-between">
              <span className="text-[3px] text-[#333] font-semibold">מסעדה</span>
              <span className="text-[3px] text-brand-500 font-semibold">₪87</span>
            </div>
            <div className="bg-[#f5f5f5] rounded-sm p-[1.5px_2px] flex justify-between">
              <span className="text-[3px] text-[#333] font-semibold">חנות</span>
              <span className="text-[3px] text-brand-500 font-semibold">₪142</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Comparison() {
  return (
    <div className="px-5">
      <RevealOnScroll>
        <div className="flex items-center gap-1.5 text-[16px] font-extrabold text-brand-500 tracking-wide uppercase mb-2.5">
          ההשוואה
          <span className="flex-1 h-px bg-brand-border" />
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {/* Bad card */}
          <div className="bg-card rounded-2xl p-3 shadow-[0_2px_16px_rgba(0,0,0,0.07)] flex flex-col items-center gap-2.5 border-t-[3px] border-t-[#ef4444]">
            <div className="text-[11px] font-bold py-1 px-2.5 rounded-full w-full text-center bg-[#fee2e2] text-[#b91c1c]">
              כרטיס אשראי רגיל
            </div>
            <CreditCardBad />
            <ul className="flex flex-col gap-1.5 w-full list-none">
              {["עמלת המרה כ-3%", "שער המרה לא תמיד ברור", "מצטבר למאות או אלפי ₪", "הגשת Tax Free ידנית"].map((item, i) => (
                <li key={i} className="text-[11px] text-[#374151] flex items-start gap-1.5 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444] flex-shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Good card */}
          <div className="bg-card rounded-2xl p-3 shadow-[0_2px_16px_rgba(0,0,0,0.07)] flex flex-col items-center gap-2.5 border-t-[3px] border-t-green-500">
            <div className="text-[11px] font-bold py-1 px-2.5 rounded-full w-full text-center bg-[#dcfce7] text-[#15803d]">
              PassportCard Pay
            </div>
            <PhoneCardGood />
            <ul className="flex flex-col gap-1.5 w-full list-none">
              {["0% עמלות — שער אמיתי", "שקלים → מט\"ח בקליק", "אפליקציה חכמה + התראות", "Tax Free אוטומטי דרך האפליקציה"].map((item, i) => (
                <li key={i} className="text-[11px] text-[#374151] flex items-start gap-1.5 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}

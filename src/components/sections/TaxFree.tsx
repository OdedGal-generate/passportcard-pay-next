"use client";

import RevealOnScroll from "../animations/RevealOnScroll";
import PhoneFrame from "../ui/PhoneFrame";
import CountUp from "../ui/CountUp";
import { ReceiptIcon, CheckIcon, IconDisc } from "@/components/brand/BrandIcons";

const steps = [
  { Icon: ReceiptIcon, label: "סורקים" },
  { Icon: CheckIcon, label: "מאשרים" },
  { Icon: ReceiptIcon, label: "מקבלים החזר" },
];

export default function TaxFree() {
  return (
    <div className="relative overflow-hidden px-5 py-7">
      {/* Cafe flatlay subtle background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/images/brand/cafe-flatlay.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.10,
          filter: "saturate(0.85)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(251,247,244,0.85) 0%, rgba(251,247,244,0.95) 100%)",
        }}
      />

      <div className="relative">
        <RevealOnScroll>
          <div className="flex items-center gap-1.5 mb-3">
            <span className="font-display text-[15px] font-extrabold text-brand-500 tracking-wide uppercase">
              Tax Free באפליקציה
            </span>
            <span className="flex-1 h-px bg-brand-200" />
          </div>

          <p className="text-[13px] text-[#374151] leading-relaxed mb-3">
            עם PassportCard אפשר לנהל זכאות Tax Free ולהגיש החזרים ישירות
            מהטלפון — בלי ניירת, בלי תורים.
          </p>

          {/* 3-step micro-flow */}
          <div className="relative mb-4">
            {/* Dotted connector line behind */}
            <div
              className="absolute top-[18px] left-[14%] right-[14%] h-px pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, var(--color-brand-200) 50%, transparent 50%)",
                backgroundSize: "8px 1px",
                backgroundRepeat: "repeat-x",
              }}
            />
            {/* Direction chevrons centered between adjacent discs */}
            <div
              className="absolute top-[12px] left-0 right-0 h-3 pointer-events-none"
              aria-hidden="true"
            >
              {[33.333, 66.667].map((pct) => (
                <svg
                  key={pct}
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-brand-500 absolute -translate-x-1/2"
                  style={{ left: `${pct}%` }}
                >
                  <polyline points="15 6 9 12 15 18" />
                </svg>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-2 relative">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative z-[1] mb-2">
                    <IconDisc Icon={s.Icon} size={36} />
                  </div>
                  <span className="text-[11px] font-semibold text-text leading-[1.3]">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

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
          <div
            className="rounded-2xl p-3 flex items-center gap-3"
            style={{
              background: "linear-gradient(135deg, #E10E18 0%, #C00913 100%)",
              boxShadow: "var(--shadow-cta)",
            }}
          >
            <div
              className="font-display text-[40px] font-black leading-none flex-shrink-0 tabular"
              style={{ color: "#FFD700", textShadow: "0 1px 0 rgba(0,0,0,0.2)" }}
            >
              <span aria-hidden>€</span>
              <CountUp to={345} />
            </div>
            <div className="text-white text-[12px] leading-relaxed">
              <strong className="font-bold block text-[13px]">
                ניהול החזרי מס מהאפליקציה
              </strong>
              הגשת בקשות דיגיטלית.
              <br />
              לא מפספסים החזרים!
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}

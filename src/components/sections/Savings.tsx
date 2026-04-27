"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import RevealOnScroll from "../animations/RevealOnScroll";

const SAVINGS_RATE = 0.03;
const SPEND_MIN = 0;
const SPEND_MAX = 10000;
const SPEND_STEP = 50;
const SPEND_DEFAULT = 3500;
const TICKS = [0, 5000, 10000];
const MINOR_TICKS = [2500, 7500];

const usdFmt = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});
const usdNumFmt = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
});

const savingsNumStyle: React.CSSProperties = {
  fontWeight: 900,
  letterSpacing: "-0.02em",
  lineHeight: 1,
  color: "var(--color-brand-500)",
  filter: "drop-shadow(0 4px 10px rgba(225, 14, 24, 0.28))",
};

const savingsSymbolStyle: React.CSSProperties = {
  fontWeight: 900,
  color: "var(--color-brand-500)",
  lineHeight: 1,
};

function AnimatedNumber({ value }: { value: number }) {
  const motionVal = useMotionValue(value);
  const rounded = useTransform(motionVal, (v) => usdNumFmt.format(Math.round(v)));

  useEffect(() => {
    const controls = animate(motionVal, value, {
      duration: 0.45,
      ease: "easeOut",
    });
    return controls.stop;
  }, [value, motionVal]);

  return <motion.span>{rounded}</motion.span>;
}

export default function Savings() {
  const [spend, setSpend] = useState(SPEND_DEFAULT);
  const [showInfo, setShowInfo] = useState(false);
  const infoRef = useRef<HTMLDivElement>(null);

  const savingsUsd = Math.round(spend * SAVINGS_RATE);
  const trackPct = ((spend - SPEND_MIN) / (SPEND_MAX - SPEND_MIN)) * 100;

  useEffect(() => {
    if (!showInfo) return;
    const onClickOutside = (e: MouseEvent) => {
      if (infoRef.current && !infoRef.current.contains(e.target as Node)) {
        setShowInfo(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [showInfo]);

  const scrollToCta = () => {
    const el = document.getElementById("cta-buttons");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="px-5 py-6">
      <RevealOnScroll>
        <div
          className="bg-card rounded-2xl p-5 border border-brand-100 text-center"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <p className="text-[13px] text-muted">
            כמה תוכלו לחסוך עם{" "}
            <span className="text-brand-500 font-bold">PassportCard Pay</span>?
          </p>

          {/* Result block */}
          <div className="mt-2.5 mb-4" aria-live="polite" aria-atomic="true">
            <p className="text-[12px] text-muted">
              החיסכון המשוער שלך בנסיעה הקרובה
            </p>
            <motion.div
              key={`pulse-${savingsUsd}`}
              initial={{ scale: 0.97 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              dir="ltr"
              className="mt-2 mb-1 flex items-start justify-center gap-1"
            >
              <span style={savingsSymbolStyle} className="text-[26px] mt-2 font-display">
                $
              </span>
              <span
                style={savingsNumStyle}
                className="text-[68px] tabular font-display"
              >
                <AnimatedNumber value={savingsUsd} />
              </span>
            </motion.div>
            {/* Underline grow */}
            <motion.div
              key={`underline-${savingsUsd}`}
              className="h-1 mx-auto rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, #E10E18 50%, transparent 100%)",
              }}
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(70, savingsUsd / 4)}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>

          {/* Slider block */}
          <div className="bg-[#F7F2EE] rounded-2xl p-3.5 mt-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[12px] text-muted">
                ההוצאה המשוערת בנסיעה
              </span>
              <span className="text-[14px] font-bold text-text tabular">
                {usdFmt.format(spend)}
              </span>
            </div>

            <div className="relative px-1 pt-1 pb-0.5">
              <input
                id="pcp-spend-slider"
                type="range"
                dir="rtl"
                min={SPEND_MIN}
                max={SPEND_MAX}
                step={SPEND_STEP}
                value={spend}
                onChange={(e) => setSpend(Number(e.target.value))}
                aria-label="הוצאה משוערת בנסיעה בדולרים"
                aria-valuetext={`${spend} dollars`}
                className="brand-slider w-full appearance-none bg-transparent cursor-pointer relative z-[2]"
                style={{
                  background: `linear-gradient(to left, var(--color-brand-500) 0%, var(--color-brand-500) ${trackPct}%, #e5e7eb ${trackPct}%, #e5e7eb 100%)`,
                }}
              />
              {/* Tick marks */}
              <div className="relative h-3 mt-1" dir="ltr">
                {MINOR_TICKS.map((t) => {
                  const pct = 100 - ((t - SPEND_MIN) / (SPEND_MAX - SPEND_MIN)) * 100;
                  return (
                    <div
                      key={`minor-${t}`}
                      className="absolute -translate-x-1/2 flex flex-col items-center"
                      style={{ left: `${pct}%` }}
                    >
                      <span className="w-px h-1 bg-[#cbd5e1]" />
                    </div>
                  );
                })}
                {TICKS.map((t) => {
                  const pct = 100 - ((t - SPEND_MIN) / (SPEND_MAX - SPEND_MIN)) * 100;
                  return (
                    <div
                      key={t}
                      className="absolute -translate-x-1/2 flex flex-col items-center"
                      style={{ left: `${pct}%` }}
                    >
                      <span className="w-px h-1.5 bg-[#cbd5e1]" />
                      <span className="text-[9px] text-muted mt-0.5 tabular">
                        {t === 0 ? "$0" : `$${t / 1000}k`}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA */}
          <button
            type="button"
            onClick={scrollToCta}
            className="mt-4 text-white border-none rounded-2xl py-[15px] w-full text-[15px] font-display font-extrabold cursor-pointer text-center active:opacity-90 transition-transform hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #E10E18 0%, #C00913 100%)",
              boxShadow: "var(--shadow-cta)",
            }}
          >
            שנתחיל לחסוך?
          </button>

          {/* Formula disclosure */}
          <div className="relative mt-2.5" ref={infoRef}>
            <button
              type="button"
              onClick={() => setShowInfo((v) => !v)}
              aria-expanded={showInfo}
              className="inline-flex items-center gap-1 text-[11px] text-[#9ca3af] hover:text-muted transition-colors cursor-pointer"
            >
              <span
                aria-hidden="true"
                className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full border border-current text-[9px] font-bold leading-none"
              >
                i
              </span>
              מידע על אופן חישוב החיסכון
            </button>

            {showInfo && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.18 }}
                role="tooltip"
                className="absolute left-1/2 -translate-x-1/2 mt-2 w-[260px] bg-text text-white text-[12px] leading-relaxed rounded-xl p-3 shadow-lg z-10 text-right"
              >
                <p>
                  החיסכון מחושב לפי <strong>3% מההוצאה</strong> בחו״ל, על בסיס
                  עמלות ההמרה שאתם חוסכים מול שימוש בכרטיס אשראי רגיל.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}

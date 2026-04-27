"use client";

import RevealOnScroll from "../animations/RevealOnScroll";

const steps = [
  { src: "/images/steps/step-1-signup.png", alt: "מצטרפים לשירות", title: "מצטרפים לשירות", flipX: false },
  { src: "/images/steps/step-2-link-card.png", alt: "מקשרים לכרטיס ישראלי", title: "מקשרים לכרטיס ישראלי", flipX: false },
  { src: "/images/steps/step-3-no-fees.png", alt: "טסים בלי עמלות", title: "טסים בלי עמלות", flipX: true },
];

export default function HowItWorks() {
  return (
    <div className="px-5 py-6">
      <RevealOnScroll>
        <div className="flex items-center gap-1.5 mb-4">
          <span className="font-display text-[15px] font-extrabold text-brand-500 tracking-wide uppercase">
            איך זה עובד
          </span>
          <span className="flex-1 h-px bg-brand-200" />
        </div>

        <div className="relative">
          {/* Direction chevrons centered between adjacent illustrations */}
          <div
            className="absolute top-[26px] left-0 right-0 h-3 pointer-events-none z-[2]"
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
                <img
                  src={s.src}
                  alt={s.alt}
                  width={64}
                  height={64}
                  className="w-16 h-16 mb-2 relative z-[1]"
                  style={s.flipX ? { transform: "scaleX(-1)" } : undefined}
                />
                <div className="font-display text-[12px] font-extrabold text-text leading-tight">
                  {s.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}

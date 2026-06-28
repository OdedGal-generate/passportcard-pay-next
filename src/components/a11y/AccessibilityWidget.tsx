"use client";

import { useEffect, useState } from "react";

type Settings = {
  fontScale: number; // 0..3
  contrast: boolean;
  links: boolean;
  readable: boolean;
  stopMotion: boolean;
};

const DEFAULT: Settings = {
  fontScale: 0,
  contrast: false,
  links: false,
  readable: false,
  stopMotion: false,
};

const KEY = "pcp-a11y";

function apply(s: Settings) {
  const el = document.getElementById("a11y-root");
  if (!el) return;
  if (s.fontScale) el.style.setProperty("zoom", String(1 + s.fontScale * 0.12));
  else el.style.removeProperty("zoom");
  el.classList.toggle("a11y-contrast", s.contrast);
  el.classList.toggle("a11y-links", s.links);
  el.classList.toggle("a11y-readable", s.readable);
  el.classList.toggle("a11y-stop-motion", s.stopMotion);
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [s, setS] = useState<Settings>(DEFAULT);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed: Settings = { ...DEFAULT, ...JSON.parse(raw) };
        setS(parsed);
        apply(parsed);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const update = (
    patch: Partial<Settings> | ((prev: Settings) => Partial<Settings>)
  ) => {
    setS((prev) => {
      const resolved = typeof patch === "function" ? patch(prev) : patch;
      const next = { ...prev, ...resolved };
      apply(next);
      try {
        localStorage.setItem(KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  const reset = () => {
    apply(DEFAULT);
    setS(DEFAULT);
    try {
      localStorage.removeItem(KEY);
    } catch {
      /* ignore */
    }
  };

  return (
    <>
      <button
        aria-label="פתיחת תפריט נגישות"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-4 right-4 z-[60] w-12 h-12 rounded-full bg-brand-500 text-white shadow-lg flex items-center justify-center text-[22px] cursor-pointer hover:bg-brand-600 transition-colors"
      >
        <span aria-hidden="true">♿</span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="תפריט נגישות"
          dir="rtl"
          className="fixed bottom-20 right-4 z-[60] w-[262px] bg-white rounded-2xl shadow-2xl ring-1 ring-black/5 p-4 flex flex-col gap-2"
        >
          <div className="flex items-center justify-between mb-1">
            <span className="font-extrabold text-[14px] text-text">תפריט נגישות</span>
            <button
              aria-label="סגירת תפריט נגישות"
              onClick={() => setOpen(false)}
              className="text-muted text-[13px] cursor-pointer bg-transparent border-none"
            >
              ✕
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              aria-label="הקטנת טקסט"
              onClick={() => update((p) => ({ fontScale: Math.max(0, p.fontScale - 1) }))}
              className="w-9 h-9 rounded-lg border-[1.5px] border-border bg-white text-text font-bold cursor-pointer hover:border-brand-500 transition-colors"
            >
              א-
            </button>
            <span className="text-[12px] text-muted flex-1 text-center">גודל טקסט</span>
            <button
              aria-label="הגדלת טקסט"
              onClick={() => update((p) => ({ fontScale: Math.min(3, p.fontScale + 1) }))}
              className="w-9 h-9 rounded-lg border-[1.5px] border-border bg-white text-text font-bold cursor-pointer hover:border-brand-500 transition-colors"
            >
              א+
            </button>
          </div>

          <ToggleRow
            label="ניגודיות גבוהה"
            active={s.contrast}
            onClick={() => update({ contrast: !s.contrast })}
          />
          <ToggleRow
            label="הדגשת קישורים"
            active={s.links}
            onClick={() => update({ links: !s.links })}
          />
          <ToggleRow
            label="גופן קריא"
            active={s.readable}
            onClick={() => update({ readable: !s.readable })}
          />
          <ToggleRow
            label="עצירת אנימציות"
            active={s.stopMotion}
            onClick={() => update({ stopMotion: !s.stopMotion })}
          />

          <button
            onClick={reset}
            className="mt-1 text-[12px] text-brand-600 font-bold cursor-pointer bg-transparent border-none"
          >
            איפוס הגדרות
          </button>

          <a
            href="/accessibility"
            className="text-[11px] text-muted underline text-center mt-0.5"
          >
            הצהרת נגישות
          </a>
        </div>
      )}
    </>
  );
}

function ToggleRow({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`flex items-center justify-between w-full rounded-[10px] px-3 py-2 text-[13px] border-[1.5px] transition-colors cursor-pointer ${
        active
          ? "border-brand-500 bg-brand-light text-brand-700 font-bold"
          : "border-border bg-white text-text"
      }`}
    >
      <span>{label}</span>
      <span aria-hidden="true">{active ? "✓" : ""}</span>
    </button>
  );
}

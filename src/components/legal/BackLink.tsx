"use client";

export default function BackLink() {
  return (
    <button
      onClick={() => {
        if (window.history.length > 1) window.history.back();
        else window.location.href = "/";
      }}
      className="text-white/60 text-[12px] hover:text-white transition-colors cursor-pointer bg-transparent border-none whitespace-nowrap"
    >
      חזרה
    </button>
  );
}

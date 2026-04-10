"use client";

export default function MidCTA() {
  const scrollToCTA = () => {
    document.getElementById("cta-buttons")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="px-5 pb-2.5 text-center">
      <button
        onClick={scrollToCTA}
        className="bg-green-500 text-white border-none rounded-[14px] py-3.5 w-full text-[15px] font-bold cursor-pointer shadow-[0_4px_14px_rgba(34,197,94,0.4)] active:opacity-90"
      >
        💰 גם אני רוצה לחסוך בחו״ל
      </button>
    </div>
  );
}

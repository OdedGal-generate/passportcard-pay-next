"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="bg-brand-500 px-6 py-8 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-[60px] -left-[60px] w-[220px] h-[220px] bg-white/5 rounded-full" />
      <div className="absolute -bottom-[40px] -right-[40px] w-[160px] h-[160px] bg-white/5 rounded-full" />

      {/* Coins — fall in wrapper */}
      <motion.div
        className="absolute left-[5px] top-1/2 -translate-y-1/2 w-[120px] pointer-events-none z-[0]"
        initial={{ y: -180, opacity: 0 }}
        animate={{ y: 0, opacity: 0.9 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
      >
        {/* Float after landing */}
        <motion.img
          src="/images/coins.png"
          alt=""
          className="w-full"
          animate={{ y: [-4, 6, -4] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2,
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-[1]"
      >
        <span className="inline-flex items-center gap-1.5 bg-white/15 text-white/90 text-[13px] font-semibold px-4 py-2 rounded-full mb-5">
          ✈️ קיץ 2026 · טיפ ששווה כסף
        </span>

        <h1 className="text-[34px] font-black text-white leading-[1.15]">
          הפסיקו לשלם
          <br />
          <em className="not-italic text-[#FFD700]">עמלות מיותרות</em>
          <br />
          בחו״ל
        </h1>

        <p className="text-[15px] text-white/80 mt-3 font-medium">
          המדריך הקצר לנסיעה חכמה יותר
        </p>
      </motion.div>
    </div>
  );
}

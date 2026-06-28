import Link from "next/link";

export default function LegalFooter() {
  return (
    <div className="bg-[#1A1313] border-t border-white/10 px-5 py-4">
      <div className="flex items-center justify-center gap-3 text-[11px] text-white/55 font-medium">
        <Link href="/privacy" className="hover:text-white transition-colors">
          מדיניות פרטיות
        </Link>
        <span className="text-white/20">·</span>
        <Link href="/terms" className="hover:text-white transition-colors">
          תקנון
        </Link>
        <span className="text-white/20">·</span>
        <Link href="/accessibility" className="hover:text-white transition-colors">
          הצהרת נגישות
        </Link>
      </div>
      <p className="text-center text-white/30 text-[10px] mt-2 leading-relaxed">
        © 2026 עודד גל סוכנות לביטוח פנסיוני (2016) בע״מ · ח.פ. 515548550
      </p>
    </div>
  );
}

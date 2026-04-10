import { ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
  className?: string;
}

export default function PhoneFrame({ children, className = "" }: PhoneFrameProps) {
  return (
    <div
      className={`bg-[#111] rounded-[28px] px-[7px] pt-[10px] pb-[8px] shadow-[0_14px_40px_rgba(0,0,0,0.4)] max-w-[190px] mx-auto relative z-[1] ${className}`}
    >
      {/* Notch */}
      <div className="w-[50px] h-[4px] bg-[#333] rounded-sm mx-auto mb-[7px]" />
      {/* Screen */}
      <div className="rounded-[18px] overflow-hidden">{children}</div>
      {/* Home bar */}
      <div className="w-[40px] h-[3px] bg-[#444] rounded-sm mx-auto mt-[7px]" />
    </div>
  );
}

import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="flex justify-center px-4 py-5 sm:py-10 min-h-screen">
      <div
        className="w-full max-w-[420px] bg-bg rounded-[28px] overflow-hidden ring-1 ring-brand-100"
        style={{ boxShadow: "var(--shadow-floating)" }}
      >
        {children}
      </div>
    </div>
  );
}

import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="flex justify-center px-4 py-5 sm:py-10 min-h-screen">
      <div className="w-full max-w-[400px] bg-bg rounded-3xl shadow-[0_6px_24px_rgba(0,0,0,0.10)] overflow-hidden">
        {children}
      </div>
    </div>
  );
}

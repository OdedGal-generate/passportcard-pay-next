import PageWrapper from "@/components/layout/PageWrapper";
import LegalFooter from "@/components/layout/LegalFooter";
import BackLink from "@/components/legal/BackLink";

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-[15px] font-extrabold text-text mb-1.5">{title}</h2>
      <div className="text-[13.5px] text-text leading-relaxed">{children}</div>
    </section>
  );
}

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <PageWrapper>
      <div className="bg-[#1A1313] px-5 py-5 flex items-center justify-between gap-3">
        <h1 className="text-white text-[18px] font-display font-extrabold leading-tight">
          {title}
        </h1>
        <BackLink />
      </div>
      <div className="px-5 py-6">
        {updated && (
          <p className="text-muted text-[12px] mb-5">עודכן לאחרונה: {updated}</p>
        )}
        <div className="flex flex-col gap-5">{children}</div>
      </div>
      <LegalFooter />
    </PageWrapper>
  );
}

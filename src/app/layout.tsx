import type { Metadata } from "next";
import { Heebo, Assistant } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["500", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "חיסכו בעמלות מיותרות בנסיעה לחו״ל",
  description:
    "הפסיקו לשלם עמלות מיותרות בחו״ל — המדריך הקצר לנסיעה חכמה יותר עם PassportCard Pay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} ${assistant.variable}`}
    >
      <body className="min-h-screen antialiased page-bg">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  variable: "--font-rubik",
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
    <html lang="he" dir="rtl" className={`${rubik.variable}`}>
      <body className="min-h-screen font-rubik antialiased bg-[#c8d8e8]">
        {children}
      </body>
    </html>
  );
}

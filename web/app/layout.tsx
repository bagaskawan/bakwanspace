import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ALUR by BakwanSpace — Teman yang Jujur Soal Kapasitasmu",
  description:
    "ALUR adalah AI productivity companion yang menghitung kapasitasmu, menyusun prioritas pagi, dan jujur saat jadwalmu sudah penuh. Dibangun oleh BakwanSpace Labs.",
  keywords: [
    "ALUR",
    "BakwanSpace",
    "Productivity",
    "Capacity Planning",
    "AI Companion",
    "Daily Focus",
  ],
  authors: [{ name: "BakwanSpace Studio" }],
  openGraph: {
    title: "ALUR by BakwanSpace — Teman yang Jujur Soal Kapasitasmu",
    description:
      "ALUR adalah AI productivity companion yang menghitung kapasitasmu, menyusun prioritas pagi, dan jujur saat jadwalmu sudah penuh.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans bg-alur-off-white text-alur-charcoal">
        {children}
      </body>
    </html>
  );
}

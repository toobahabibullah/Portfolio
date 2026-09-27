import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tooba | BS Artificial Intelligence Student & AI Developer",
  description: "Portfolio of Tooba Habibullah, a BS Artificial Intelligence student and AI developer building practical intelligent products.",
  keywords: ["Tooba Habibullah", "AI developer", "artificial intelligence", "portfolio"],
  openGraph: {
    title: "Tooba | AI Developer Portfolio",
    description: "Explore Tooba's AI, machine learning, and web development work.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}

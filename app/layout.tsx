import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CampusPe — Connect 10X Faster | Students, Colleges & Employers",
  description:
    "One platform connecting students, colleges & employers — faster. AI-driven job discovery, smart profiles, verified placements, and instant candidate matching.",
  keywords: [
    "CampusPe",
    "campus recruitment",
    "college discovery",
    "internships",
    "fresher jobs",
    "placement tracker",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#FAFCFF] text-slate-900 antialiased font-sans selection:bg-blue-100 selection:text-blue-700`}
      >
        {children}
      </body>
    </html>
  );
}

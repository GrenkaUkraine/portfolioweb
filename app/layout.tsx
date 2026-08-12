import type { Metadata } from "next";
import { TASA_Orbiter, Azeret_Mono } from "next/font/google";
import "./globals.css";

const tasaOrbiter = TASA_Orbiter({
  variable: "--font-sans",
  subsets: ["latin"],
  adjustFontFallback: false,
});

const azeretMono = Azeret_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GRENKAUKRAINE // CREATIVE DEVELOPER",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${tasaOrbiter.variable} ${azeretMono.variable} h-full antialiased md:snap-y md:snap-mandatory scroll-smooth custom-scrollbar`}
    >
      <body
        className={`${tasaOrbiter.variable} ${azeretMono.variable} min-h-full bg-bg text-fg font-sans selection:bg-fg selection:text-bg`}
      >
        {children}
      </body>
    </html>
  );
}

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

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://grenkaukraine.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "GRENKAUKRAINE // CREATIVE DEVELOPER",
  description: "Portfolio of Creative Developer — grenkaukraine.com",

  openGraph: {
    title: "GRENKAUKRAINE // CREATIVE DEVELOPER",
    description: "Portfolio of Creative Developer — grenkaukraine.com",
    url: SITE_URL,
    siteName: "GRENKAUKRAINE",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GRENKAUKRAINE - Creative Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "GRENKAUKRAINE // CREATIVE DEVELOPER",
    description: "Portfolio of Creative Developer — grenkaukraine.com",
    images: ["/og-image.png"],
  },
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

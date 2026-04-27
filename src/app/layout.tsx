import type { Metadata, Viewport } from "next";
import "./globals.css";
import HUD from "@/components/HUD";
import Footer from "@/components/Footer";
import PressStart from "@/components/PressStart";

export const metadata: Metadata = {
  title: {
    default: "Agency 1-1 — Web Design, E-Commerce & Google Ads",
    template: "%s · Agency 1-1",
  },
  description:
    "Agency 1-1 is a digital agency that ships pixel-perfect websites, e-commerce stores, and Google Ads campaigns that actually convert. Press Start.",
  openGraph: {
    title: "Agency 1-1 — Web Design, E-Commerce & Google Ads",
    description:
      "Pixel-perfect websites, e-commerce stores, and Google Ads campaigns that actually convert.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#5c94fc",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap"
        />
      </head>
      <body className="min-h-dvh flex flex-col">
        <PressStart />
        <HUD />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { RevealProvider } from "@/components/reveal-provider";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vyaparpool.vercel.app"),
  title: {
    default: "VyaparPool 2.0 — Demand Pooling & Embedded Working Capital",
    template: "%s · VyaparPool",
  },
  description:
    "VyaparPool aggregates fragmented rural merchant demand into cluster-level purchasing power, unlocks distributor pricing, coordinates consolidated delivery, and finances each merchant's fulfilled order through a short-duration inventory facility.",
  keywords: [
    "VyaparPool",
    "demand pooling",
    "rural commerce",
    "MSME",
    "working capital",
    "inventory finance",
    "embedded credit",
    "rural retailers",
    "distributor infrastructure",
    "India commerce",
  ],
  openGraph: {
    title: "VyaparPool 2.0 — Demand Pooling & Embedded Working Capital",
    description:
      "Turn fragmented retail demand into purchasing power and working capital for rural Indian MSME retailers.",
    type: "website",
    locale: "en_IN",
    siteName: "VyaparPool",
  },
  twitter: {
    card: "summary_large_image",
    title: "VyaparPool 2.0",
    description:
      "Demand pooling and embedded working-capital infrastructure for rural Indian MSME retailers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary">
        <RevealProvider>
          <Navigation />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </RevealProvider>
      </body>
    </html>
  );
}

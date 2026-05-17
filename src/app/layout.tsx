import type { Metadata, Viewport } from "next";
import { Cinzel, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans-loaded",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display-loaded",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-loaded",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nadking.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NADKING — The King of all Nads",
    template: "%s | NADKING",
  },
  description:
    "NADKING — The King of all Nads. Live on Monad. 100% community-owned memecoin. No tax, no team allocation, LP burned.",
  keywords: [
    "NADKING",
    "$NADKING",
    "Monad",
    "memecoin",
    "Nad.fun",
    "crypto",
    "DeFi",
    "Monad mainnet",
  ],
  authors: [{ name: "NADKING Community" }],
  creator: "NADKING",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "NADKING — The King of all Nads",
    description:
      "The King of all Nads. Live on Monad. Forever in your bag. 100% fair launch on Nad.fun.",
    siteName: "NADKING",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "NADKING — The King of all Nads",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NADKING — The King of all Nads",
    description:
      "Live on Monad. Forever in your bag. 100% community-owned memecoin.",
    images: ["/og.png"],
    creator: "@nadking_token",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cinzel.variable} ${jetbrainsMono.variable}`}
    >
      <body
        style={{
          fontFamily: "var(--font-sans-loaded), Inter, system-ui, sans-serif",
        }}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-full focus:bg-purple-500 focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

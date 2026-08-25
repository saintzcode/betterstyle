import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { PageTransition } from "@/components/layout/PageTransition";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = "https://betterstyle.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BetterStyle — Denim, Shirting & Knitwear",
    template: "%s — BetterStyle",
  },
  description:
    "BetterStyle is a small-run house of denim, shirting, and knitwear cut for permanence. Explore the current collections.",
  openGraph: {
    title: "BetterStyle",
    description:
      "Denim, shirting, and knitwear cut for permanence — built in small runs, worn for seasons.",
    url: SITE_URL,
    siteName: "BetterStyle",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BetterStyle",
    description:
      "Denim, shirting, and knitwear cut for permanence — built in small runs, worn for seasons.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <CartProvider>
          <Header />
          <main id="main" className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}

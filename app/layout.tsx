import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Albert_Sans } from "next/font/google";
import "./globals.css";
import { site, seo } from "@/content/site";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { LocalBusinessSchema } from "@/components/local-business-schema";

const albert = Albert_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-albert",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: seo.home.title,
    template: `%s | ${site.name}`,
  },
  description: seo.home.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    title: seo.home.title,
    description: seo.home.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
  },
  formatDetection: {
    telephone: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f9f8",
  width: "device-width",
  initialScale: 1,
};

/* Runs before the page paints: marks that JavaScript is on, then lets the
   hero enter once. Without JavaScript everything simply shows. */
const bootScript = `document.documentElement.classList.remove('no-js');requestAnimationFrame(function(){requestAnimationFrame(function(){document.documentElement.classList.add('is-ready')})});`;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-ZA" className={`no-js ${albert.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <LocalBusinessSchema />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Script src="/js/site.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

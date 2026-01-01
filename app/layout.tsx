import type { ReactNode } from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import Loading from "@/app/loading-screen"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

// 1. Base URL Tanımlaması
const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://bajar.app"

// 2. Viewport Ayarları
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

// 3. Metadata
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bajar - Şehrin Dijital Nabzı",
    template: "%s | Bajar",
  },
  description: "Diyarbakır'ı keşfet! En iyi restoranlar, güncel etkinlikler ve yerel topluluk Bajar'da. Şehrin nabzını tutan uygulama.",
  applicationName: "Bajar",
  authors: [{ name: "Bajar Team", url: siteUrl }],
  generator: "Next.js",
  keywords: ["Diyarbakır", "Etkinlik", "Gezi", "Restoran", "Kafe", "Konser", "Bajar App", "Şehir Rehberi"],
  referrer: "origin-when-cross-origin",
  creator: "Bajar",
  publisher: "Bajar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/bajar-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/bajar-logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/bajar-logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    title: "Bajar - Şehrin Dijital Nabzı",
    description: "Şehrini keşfet, yerel işletmeleri destekle ve şehrin nabzını hisset. Hemen indir!",
    siteName: "Bajar",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Bajar App Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bajar - Şehrin Dijital Nabzı",
    description: "Diyarbakır'ın en kapsamlı etkinlik ve mekan keşif uygulaması.",
    creator: "@bajarapp",
  },
  appleWebApp: {
    capable: true,
    title: "Bajar",
    statusBarStyle: "black-translucent",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const jsonLd = {
    "@type": "SoftwareApplication",
    "name": "Bajar",
    "applicationCategory": "LifestyleApplication",
    "operatingSystem": "iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "TRY"
    },
    "description": "Diyarbakır şehir rehberi, etkinlikler ve mekan keşfi uygulaması.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    }
  }

  return (
    // DÜZELTME BURADA: suppressHydrationWarning eklendi ve translate engellendi
    <html lang="tr" className="scroll-smooth notranslate" translate="no" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-zinc-950 text-zinc-50`}>
        
        {/* --- GOOGLE ANALYTICS SCRIPTS START --- */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        {/* --- GOOGLE ANALYTICS SCRIPTS END --- */}

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <Loading>
          {children}
        </Loading>
        
        <Analytics />
      </body>
    </html>
  )
}
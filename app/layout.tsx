import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ClientProviders } from '@/components/layout/ClientProviders';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['300', '400', '600'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://miva-cikolata.com'),
  title: 'MIVA Çikolata | Architectural Confectionery',
  description: 'Premium el yapımı çikolata. 1950\'lerden beri geleneksel yöntemlerle hazırlanan, en kaliteli kakao çekirdeklerinden oluşan lüks çikolatalar. Sanat ve tutkunun her dilimde yansıması.',
  keywords: [
    'çikolata',
    'premium',
    'el yapımı',
    'artisanal',
    'lüks',
    'kakao',
    'confectionery',
    'Istanbul',
    'Türkiye',
  ],
  authors: [{ name: 'MIVA Çikolata', url: 'https://miva-cikolata.com' }],
  creator: 'MIVA Çikolata',
  publisher: 'MIVA Çikolata',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://miva-cikolata.com',
    siteName: 'MIVA Çikolata',
    title: 'MIVA Çikolata | Architectural Confectionery',
    description: 'Premium el yapımı çikolata. Geleneksel sanat ve modern lüksün buluşma noktası.',
    images: [
      {
        url: '/images/logo2.png',
        width: 1200,
        height: 630,
        alt: 'MIVA Çikolata - Premium Artisanal Chocolates',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MIVA Çikolata | Architectural Confectionery',
    description: 'Premium el yapımı çikolata ve lüks confectionery.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0F0905',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="canonical" href="https://miva-cikolata.com" />
      </head>
      <body
        className={`${cormorant.variable} ${inter.variable} font-sans antialiased bg-cream-50 text-charcoal scroll-smooth`}
      >
        <ClientProviders>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}

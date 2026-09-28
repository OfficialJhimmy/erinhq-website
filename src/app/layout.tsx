// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/a11y";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { satoshi, euclidCircularA } from '@/lib/fonts';
import { Navbar } from '@/components/Navigation/Navbar';
import { GoogleAnalytics } from '@/components/TrafficTracker/GoogleAnalytics';
import { PageViewTracker } from '@/components/TrafficTracker/PageViewTracker';
import { buildMetadata } from '@/lib/seo';
import { jsonLdScriptProps, personJsonLd, websiteJsonLd } from '@/lib/jsonLd';

export const metadata: Metadata = {
  ...buildMetadata({
    title: 'Feyijimi Erinle | AI Engineer & Software Engineer',
    description:
      'Feyijimi Erinle is an AI Engineer and Software Engineer based in Lagos, Nigeria, building AI agents, intelligent automation, AI products and scalable software for businesses globally.',
    path: '/',
  }),
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full ${satoshi.variable} ${euclidCircularA.variable}`}>
      <body className="min-h-full text-neutral-100 font-body antialiased">
        <script {...jsonLdScriptProps(personJsonLd())} />
        <script {...jsonLdScriptProps(websiteJsonLd())} />
        {/* Skip link for a11y */}
        <GoogleAnalytics/>
        <PageViewTracker/>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-neutral-800 focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <SpeedInsights />
      </body>
    </html>
  )
}
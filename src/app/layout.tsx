// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/a11y";
import { Navbar } from '@/components/Navigation/Navbar';

export const metadata: Metadata = {
  title: 'ERIN The Brand — The Multi-Hat Tech Professional',
  description:
    'Software Engineer • Technical Writer • Open Source Contributor • Technical Content Strategist',
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full text-neutral-100 font-body antialiased">
        {/* Skip link for a11y */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-neutral-800 focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
      </body>
    </html>
  )
}
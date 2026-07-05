// app/portfolio/page.tsx
import { Footer } from '@/components/Footer/Footer';
import { PortfolioHeroSection } from '@/components/Hero/PortfolioHeroSection';
import { CTASection } from '@/components/Sections/CTASection/CTASection';
import { PortfolioTabsSection } from '@/components/Sections/PortfolioSections/PortfolioTabsSection';
import React from 'react';


export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <PortfolioHeroSection />
      <PortfolioTabsSection />
      <CTASection variant="default" />
      <Footer />
    </div>
  );
}
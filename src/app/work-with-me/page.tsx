// app/work-with-me/page.tsx
import { Footer } from '@/components/Footer/Footer';
import { WorkWithMeHeroSection } from '@/components/Hero/WorkWithMeHeroSection';
import { CTASection } from '@/components/Sections/CTASection/CTASection';
import { HowIWorkSection } from '@/components/Sections/WorkWithMeSections/HowItWorkSection';
import React from 'react';

export default function WorkWithMePage() {
  return (
    <div className="min-h-screen bg-white">
      <WorkWithMeHeroSection />
      <HowIWorkSection />
      <CTASection variant="default" />
      <Footer />
    </div>
  );
}
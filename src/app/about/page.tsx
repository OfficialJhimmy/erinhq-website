// app/about/page.tsx
import type { Metadata } from 'next';
import React from 'react';

import { CTASection } from '@/components/Sections/CTASection/CTASection';
import { Footer } from '@/components/Footer/Footer';
import { AboutHeroSection } from '@/components/Hero/AboutHeroSection';
import { AboutStorySection } from '@/components/Sections/AboutSections/AboutStorySection';
import { WhatIDoTodaySection } from '@/components/Sections/AboutSections/WhatIDoTodaySection';
import { HowIApproachEngineeringSection } from '@/components/Sections/AboutSections/HowIApproachEngineeringSection';
import { EngineeringFoundationSection } from '@/components/Sections/AboutSections/EngineeringFoundationSection';
import { ExperienceSection } from '@/components/Sections/AboutSections/ExperienceSection';
import { FocusNowSection } from '@/components/Sections/AboutSections/FocusNowSection';
import { GlobalPositioningSection } from '@/components/Sections/HomeSections/GlobalPositioningSection';
import { SelectedProofSection } from '@/components/Sections/AboutSections/SelectedProofSection';
import { buildMetadata } from '@/lib/seo';
import { jsonLdScriptProps, breadcrumbJsonLd } from '@/lib/jsonLd';

export const metadata: Metadata = buildMetadata({
  title: 'About Feyijimi Erinle | AI Engineer & Software Engineer',
  description:
    'Learn about Feyijimi Erinle, an AI Engineer and Software Engineer based in Lagos, Nigeria, building intelligent systems, AI products, automation and scalable software for businesses globally.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        {...jsonLdScriptProps(
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
          ])
        )}
      />
      <AboutHeroSection />
      <AboutStorySection />
      <WhatIDoTodaySection />
      <ExperienceSection />
      {/* <HowIApproachEngineeringSection /> */}
      <EngineeringFoundationSection />
      
      <FocusNowSection />
      <CTASection variant="about" />
      <Footer />
    </div>
  );
}

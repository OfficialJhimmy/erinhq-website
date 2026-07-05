// app/about/page.tsx
import React from 'react';

import { CTASection } from '@/components/Sections/CTASection/CTASection';
import { Footer } from '@/components/Footer/Footer';
import { AboutHeroSection } from '@/components/Hero/AboutHeroSection';
import { AboutStorySection } from '@/components/Sections/AboutSections/AboutStorySection';
import { ExperienceSection } from '@/components/Sections/AboutSections/ExperienceSection';


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHeroSection />
      <AboutStorySection />
      <ExperienceSection/>

      <CTASection variant="default" />
      <Footer />
    </div>
  );
}
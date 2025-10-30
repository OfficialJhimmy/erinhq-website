import { Footer } from '@/components/Footer/Footer';
import { DigitalFootprintHeroSection } from '@/components/Hero/DigitalFootprintHeroSection';
import { CTASection } from '@/components/Sections/CTASection/CTASection';
import { ContentCreationSection } from '@/components/Sections/DigitalFootprintSection/ContentCreationSection';
import { DigitalFootprintHowIWorkSection } from '@/components/Sections/DigitalFootprintSection/DigitalFootprintHowIWorkSection';
import { DigitalFootPrintTestimonialsSection } from '@/components/Sections/DigitalFootprintSection/DigitalFootPrintTestimonialsSection';
import { SpeakingSection } from '@/components/Sections/DigitalFootprintSection/SpeakingSection';
import React from 'react';


export default function DigitalFootprintPage() {
  return (
    <div className="min-h-screen bg-white">
      <DigitalFootprintHeroSection />
      <ContentCreationSection/>
      <DigitalFootPrintTestimonialsSection/>
      <SpeakingSection/>
      <DigitalFootprintHowIWorkSection/>
      <CTASection variant="mediaKit" />
      
      <Footer />
    </div>
  );
}
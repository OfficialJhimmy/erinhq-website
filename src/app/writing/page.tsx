// app/writing/page.tsx
import { Footer } from '@/components/Footer/Footer';
import { WritingHeroSection } from '@/components/Hero/WritingHeroSection';
import { CTASection } from '@/components/Sections/CTASection/CTASection';
import { WritingTabsSection } from '@/components/Sections/WritingSection/WritingTabSection';
import React from 'react';


export default function WritingPage() {
  return (
    <div className="min-h-screen bg-white">
      <WritingHeroSection />
      <WritingTabsSection />
      <CTASection variant="default" />
      <Footer />
    </div>
  );
}
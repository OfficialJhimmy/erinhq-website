// app/writing/page.tsx
import type { Metadata } from 'next';
import { Footer } from '@/components/Footer/Footer';
import { WritingHeroSection } from '@/components/Hero/WritingHeroSection';
import { CTASection } from '@/components/Sections/CTASection/CTASection';
import { WritingTabsSection } from '@/components/Sections/WritingSection/WritingTabSection';
import { buildMetadata } from '@/lib/seo';
import React from 'react';

export const metadata: Metadata = buildMetadata({
  title: 'Writing | Feyijimi Erinle',
  description:
    "Writing is how I make complex ideas simple. Technical documentation, blog articles and insights on AI engineering, software engineering and building technology, focused on clarity and structure.",
  path: '/writing',
});

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
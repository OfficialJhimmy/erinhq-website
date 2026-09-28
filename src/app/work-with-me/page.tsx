// app/work-with-me/page.tsx
import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Footer } from '@/components/Footer/Footer';
import { WorkWithMeHeroSection } from '@/components/Hero/WorkWithMeHeroSection';
import { WhatAreYouBuildingSection } from '@/components/Sections/WorkWithMeSections/WhatAreYouBuildingSection';
import { HowIWorkSection } from '@/components/Sections/WorkWithMeSections/HowItWorkSection';
import { EnquiryForm } from '@/components/Sections/WorkWithMeSections/EnquiryForm';
import { AlternativeContactSection } from '@/components/Sections/WorkWithMeSections/AlternativeContactSection';
import { WorkWithMeFAQSection } from '@/components/Sections/WorkWithMeSections/WorkWithMeFAQSection';
import { buildMetadata } from '@/lib/seo';
import { jsonLdScriptProps, breadcrumbJsonLd } from '@/lib/jsonLd';

export const metadata: Metadata = buildMetadata({
  title: 'Work With Feyijimi Erinle | AI & Software Engineering',
  description:
    'Work with Feyijimi Erinle on AI systems, AI products, business automation and software products. Based in Lagos, Nigeria and working with teams globally.',
  path: '/work-with-me',
});

export default function WorkWithMePage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        {...jsonLdScriptProps(
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Work With Me', path: '/work-with-me' },
          ])
        )}
      />
      <WorkWithMeHeroSection />
      <WhatAreYouBuildingSection />
      <Suspense fallback={null}>
        <EnquiryForm />
      </Suspense>
      <HowIWorkSection />
      <AlternativeContactSection />
      <WorkWithMeFAQSection />
      <Footer />
    </div>
  );
}

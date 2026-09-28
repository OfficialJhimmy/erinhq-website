// app/projects/page.tsx
import type { Metadata } from 'next';
import { Footer } from '@/components/Footer/Footer';
import { ProjectsHeroSection } from '@/components/Hero/ProjectsHeroSection';
import { FeaturedProjectsSection } from '@/components/Sections/ProjectsSections/FeaturedProjectsSection';
import { ProjectsTabsSection } from '@/components/Sections/ProjectsSections/ProjectsTabsSection';
import { CTASection } from '@/components/Sections/CTASection/CTASection';
import { buildMetadata } from '@/lib/seo';
import { jsonLdScriptProps, breadcrumbJsonLd } from '@/lib/jsonLd';

export const metadata: Metadata = buildMetadata({
  title: 'AI & Software Engineering Projects | Feyijimi Erinle',
  description:
    "Explore AI systems, automation platforms, software products, web applications and digital experiences built by Feyijimi Erinle, an AI Engineer and Software Engineer based in Nigeria and working globally.",
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        {...jsonLdScriptProps(
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Projects', path: '/projects' },
          ])
        )}
      />
      <ProjectsHeroSection />
      <FeaturedProjectsSection />
      <ProjectsTabsSection />
      <CTASection variant="projects" />
      <Footer />
    </div>
  );
}

// app/page.tsx
import type { Metadata } from "next";
import { Contributions } from "@/components/Sections/HomeSections/Contributions";
import Hero from "@/components/Hero/Hero";
import { CredibilityStrip } from "@/components/Sections/HomeSections/CredibilityStrip";
import { AISolutionsPreviewSection } from "@/components/Sections/HomeSections/AISolutionsPreviewSection";
import { HowItWorksSection } from "@/components/Sections/HomeSections/HowItWorksSection";
import { OrganisationFitSection } from "@/components/Sections/HomeSections/OrganisationFitSection";
import { AIEngineeringCapabilitiesSection } from "@/components/Sections/HomeSections/AIEngineeringCapabilitiesSection";
import { SoftwareEngineeringSection } from "@/components/Sections/HomeSections/SoftwareEngineeringSection";
import { SelectedProjectsSection } from "@/components/Sections/HomeSections/SelectedProjectsSection";
import { WhyWorkWithMeSection } from "@/components/Sections/HomeSections/WhyWorkWithMeSection";
import { WritingSection } from "@/components/Sections/HomeSections/WritingSection";
import { CTASection } from "@/components/Sections/CTASection/CTASection";
import { Footer } from "@/components/Footer/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Feyijimi Erinle | AI Engineer & Software Engineer",
  description:
    "Feyijimi Erinle is an AI Engineer and Software Engineer based in Lagos, Nigeria, building AI agents, intelligent automation, AI products and scalable software for businesses globally.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <Contributions />
      <AISolutionsPreviewSection />
      <HowItWorksSection />
      <OrganisationFitSection />
      <AIEngineeringCapabilitiesSection />
      <SoftwareEngineeringSection />
      <SelectedProjectsSection />
      <WhyWorkWithMeSection />
      <WritingSection />
      <CTASection variant="home" />
      <Footer />
    </>
  );
}

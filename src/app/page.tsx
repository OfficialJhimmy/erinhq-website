// app/page.tsx

import { AboutSection } from "@/components/Sections/HomeSections/AboutSection";
import { Contributions } from "@/components/Sections/HomeSections/Contributions";
import { DigitalFootprintSection } from "@/components/Sections/HomeSections/DigitalFootprintSection";
import Hero from "@/components/Hero/Hero";
import { ProjectsSection } from "@/components/Sections/HomeSections/ProjectsSection";
import { WritingSection } from "@/components/Sections/HomeSections/WritingSection";
import { TestimonialsSection } from "@/components/Sections/HomeSections/TestimonialsSection";
import { CTASection } from "@/components/Sections/CTASection/CTASection";
import { Footer } from "@/components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Contributions />
      <AboutSection/>
      <ProjectsSection/>
      <WritingSection/>
      <DigitalFootprintSection/>
      <TestimonialsSection/>
      <CTASection variant="default"/>
      <Footer/>
    </>
  );
}

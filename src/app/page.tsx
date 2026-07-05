// app/page.tsx

import { AboutSection } from "@/components/Sections/HomeSections/AboutSection";
import { Contributions } from "@/components/Sections/HomeSections/Contributions";
import Hero from "@/components/Hero/Hero";
import { ProjectsSection } from "@/components/Sections/HomeSections/ProjectsSection";
import { WritingSection } from "@/components/Sections/HomeSections/WritingSection";
import { TestimonialsSection } from "@/components/Sections/HomeSections/TestimonialsSection";
import { CTASection } from "@/components/Sections/CTASection/CTASection";
import { Footer } from "@/components/Footer/Footer";
import { HowToWorkWithMeSection } from "@/components/Sections/HomeSections/HowToWorkWithMeSection";
import { ConnectSection } from "@/components/Sections/HomeSections/ConnectSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Contributions />
      <AboutSection/>
      <ProjectsSection/>
      <WritingSection/>
      <HowToWorkWithMeSection/>
      <ConnectSection/>
      <TestimonialsSection/>
      <CTASection variant="default"/>
      <Footer/>
    </>
  );
}

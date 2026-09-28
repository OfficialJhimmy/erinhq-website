import React from "react";
import { Button, HeroBackgroundImage } from "@/components/ui";
import { ENQUIRY_TYPES, workWithMeHref } from "@/data/enquiryTypes";

export const AISolutionsHeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#1B1B1B] pt-32 pb-20 px-6">
      <HeroBackgroundImage src="/images/ai-solutions-hero.webp" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="text-white/50 font-heading text-sm uppercase tracking-wider mb-4 block">
          AI Solutions
        </span>
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tighter">
          AI systems built around how your business works.
        </h1>
        <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
          You do not need AI for the sake of AI. You need a system that solves a real problem,
          fits into your workflow and gives your team a better way to work. Explore practical AI
          solutions designed for different parts of an organisation.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="#catalogue">Explore Solutions</Button>
          <Button href={workWithMeHref(ENQUIRY_TYPES.notSure)} variant="secondary">
            Build Something Custom
          </Button>
        </div>
      </div>
    </section>
  );
};

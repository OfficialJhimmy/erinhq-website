// components/sections/WorkWithMeHeroSection.tsx
import React from "react";
import { Button, HeroBackgroundImage } from "@/components/ui";
import { ENQUIRY_TYPES, workWithMeHref } from "@/data/enquiryTypes";

export const WorkWithMeHeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#1B1B1B] pt-32 pb-20 px-6">
      <HeroBackgroundImage src="/images/work-with-me-hero.webp" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="text-white/50 font-heading text-sm uppercase tracking-wider mb-4 block">
          Work With Me
        </span>
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tighter">
          Have a problem worth building around?
        </h1>
        <p className="text-white/80 text-base md:text-lg leading-relaxed mb-4 max-w-2xl mx-auto">
          Whether you are looking to build an AI system, turn an AI idea into a product, automate
          a business workflow or engineer a software product from the ground up, tell me what you
          are trying to achieve.
        </p>
        <p className="text-white/50 text-sm mb-10">Based in Lagos, Nigeria &middot; Working with teams globally</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href={workWithMeHref(ENQUIRY_TYPES.notSure)}>Start a Conversation</Button>
          <Button href="/projects" variant="secondary">
            Explore My Work
          </Button>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import Image from "next/image";
import { projects } from "@/data/portfolioData";
import { Button, HeroBackgroundImage } from "@/components/ui";

export const ProjectsHeroSection: React.FC = () => {
  const projectCount = projects.length;

  return (
    <section className="relative overflow-hidden bg-[#1B1B1B] pt-32 pb-20 px-6">
      <HeroBackgroundImage src="/images/projects-hero.webp" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
          {/* Left Side - Photo */}
          <div>
            <span className="text-white/50 font-heading text-sm uppercase tracking-wider mb-4 block">
              Projects
            </span>
            <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/portfolio-image.png"
                alt="Feyijimi Erinle"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Side - Heading and Description */}
          <div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tighter">
              Systems, products and digital experiences I&apos;ve built.
            </h1>

            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
              A selection of AI systems, software products, platforms, web applications and
              digital experiences I&apos;ve designed and engineered across different industries
              and use cases.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 rounded-full border border-white/15 text-white/70 text-sm">
                {projectCount} projects
              </span>
              <span className="px-4 py-2 rounded-full border border-white/15 text-white/70 text-sm">
                AI and software engineering
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="/ai-solutions">Explore AI Solutions</Button>
              <Button href="/work-with-me" variant="secondary">
                Work With Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

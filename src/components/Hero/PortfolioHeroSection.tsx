// components/sections/PortfolioHeroSection.tsx
import React from "react";
import Image from "next/image";
import { projects } from "@/data/portfolioData";

export const PortfolioHeroSection: React.FC = () => {
  const projectCount = projects.length;

  return (
    <section className="bg-[#1B1B1B] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
          {/* Left Side - Photo */}
          <div>
            <span className="text-white/50 font-heading text-sm uppercase tracking-wider mb-4 block">
              Portfolio
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
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-normal leading-tight text-white mb-6">
              Hi, I&apos;m Feyijimi Erinle. I Build Digital Experiences that
              are clear, intentional, and built to make an impact.
            </h1>

            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
              My work brings together design, engineering, and simple human
              communication to create products that solve real problems.
              Feel free to explore the projects I&apos;ve worked on and see
              how I bring ideas to life through thoughtful execution.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full border border-white/15 text-white/70 text-sm">
                {projectCount} projects
              </span>
              <span className="px-4 py-2 rounded-full border border-white/15 text-white/70 text-sm">
                Full stack and AI engineering
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
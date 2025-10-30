// components/sections/WritingHeroSection.tsx
import React from 'react';
import Image from 'next/image';

export const WritingHeroSection: React.FC = () => {
  return (
    <section className="bg-[#1B1B1B] py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <Image
            src="/images/line.png"
            alt="Decorative line"
            width={60}
            height={16}
            loading="lazy"
            className="object-contain"
          />
          <span className="font-heading text-white/70 font-heading text-sm uppercase tracking-wider">
            Writing
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#E8B67E] mb-8 tracking-wide">
          MY WRITING
        </h1>

        {/* Description */}
        <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          Writing is how I make complex ideas simple. Whether it's technical documentation, blog articles, or insights, I focus on clarity, structure, and giving readers something they can actually use.
        </p>
      </div>
    </section>
  );
};
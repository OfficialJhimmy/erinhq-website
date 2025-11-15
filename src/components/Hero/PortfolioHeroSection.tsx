// components/sections/PortfolioHeroSection.tsx
import React from "react";

export const PortfolioHeroSection: React.FC = () => {
  return (
    <section className="bg-[#1B1B1B] pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Title */}
          <div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide bg-gradient-to-r from-[#FFFFFF] to-[#FF8906] bg-clip-text text-transparent">
              MY PORTFOLIO
            </h1>
          </div>

          {/* Right Side - Description */}
          <div>
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              Welcome to my portfolio. I build digital experiences that are
              clear, intentional, and built to make an impact. My work brings
              together design, engineering, and simple human communication to
              create products that solve real problems. Feel free to explore the
              projects I’ve worked on and see how I bring ideas to life through
              thoughtful execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

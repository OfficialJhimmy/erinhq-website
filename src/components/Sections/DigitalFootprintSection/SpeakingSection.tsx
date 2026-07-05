// components/sections/SpeakingSection.tsx
import React from "react";
import Image from "next/image";

export const SpeakingSection: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="font-heading text-4xl md:text-[40px] lg:text-[56px] font-normal text-[#1B1B1B] text-center mb-16 tracking-wide font-heading">
          SPEAKING
        </h2>

        {/* Main Image with Purple Border */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative  rounded-lg overflow-hidden shadow-2xl">
            <div className="aspect-video relative">
              <Image
                src="/images/erin-big.svg"
                alt="Speaking engagement"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          </div>
        </div>

        {/* Two Column Text */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <p className="text-[#333] text-base md:text-[20px] leading-relaxed">
              I speak on topics ranging from software engineering and technology
              to productivity and personal growth. My goal is to deliver talks
              that are practical, engaging, and inspiring, leaving audiences
              with ideas they can immediately apply.
            </p>
          </div>

          {/* Right Column */}
          <div>
            <p className="text-[#333] text-base md:text-lg leading-relaxed">
              Over the years, I’ve had the privilege of reaching thousands of
              people across events and platforms. The most rewarding part has
              been the conversations and connections that follow, sparking new
              perspectives and collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// components/sections/AboutHeroSection.tsx
import React from "react";
import Image from "next/image";

export const AboutHeroSection: React.FC = () => {
  return (
    <section className="bg-[#1B1B1B] min-h-[50vh] lg:min-h-screen flex flex-col items-center justify-center py-20 px-6">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex flex-col gap-2 mb-4 w-fit justify-center mx-auto">
          <p className="font-heading text-center lg:text-[110px] text-[60px] md:text-[95px] font-normal leading-[70px] md:leading-[90px] bg-gradient-to-r from-[#FFFFFF] to-[#FF8906] bg-clip-text text-transparent">
          ERIN THE BRAND
        </p>
        <p className="text-[#FFF] text-right text-base md:text-lg font-normal tracking-wide">
          Imagine Creative, Imagine Modern
        </p>
        </div>
        
        <div className="w-full mb-8">
          <Image
            src="/images/erin-big.svg"
            alt="ERIN THE BRAND"
            width={1920}
            height={600}
            className="w-full h-auto"
            priority
          />
        </div>        
      </div>
    </section>
  );
};

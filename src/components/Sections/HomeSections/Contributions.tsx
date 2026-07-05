"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

const CompanyCarousel = dynamic(
  () => import("../../Carousels/CompanyCarousel"),
  { ssr: false }
);


const companies = [
  { name: "Datamellon", logo: "/images/new-datamellon.png", size: 200 },
  { name: "LSDPC", logo: "/images/lsdpc.svg" },
  { name: "GTCO", logo: "/images/gtco_logo.png" },
  { name: "Sterling", logo: "/images/sterling.png", size: 200},
  { name: "Premium Trust", logo: "/images/premium-trust.png", size: 250 },
  { name: "Elegance Media", logo: "/images/elegance.png" },
  { name: "FIRS", logo: "/images/firs-logo-new.png" },
  { name: "Lagos State Judiciary", logo: "/images/judiciary.png" },
  { name: "Kluadworks", logo: "/images/klaudworks.png", size: 200 },
  { name: "Befit", logo: "/images/newbefit.png", size: 200 },
];

export const Contributions: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center flex flex-col items-center justify-center">
          <div className=" flex items-center justify-center gap-2 mb-6">
            <Image
              src="/images/Line.png"
              alt="Straight line"
              width={60}
              height={16}
              loading="lazy"
              className="object-contain"
            />
            <span className="text-[#A3A3A3] font-heading text-sm uppercase tracking-wider">
              Organizations
            </span>
          </div>

          <h2 className="text-4xl md:text-[38px] lg:text-[40px] font-normal font-body text-[#1B1B1B] mb-4 leading-tight">
            These are some of the organizations I have built for
          </h2>
          <p className="text-base md:text-lg text-[#4D4D4D] mb-4 leading-7 font-body max-w-2xl mx-auto">
            Startups, enterprise teams, government agencies, and non-profits,
            usually building the systems they run on day to day.
          </p>
          <p className="font-heading text-sm uppercase tracking-wider text-[#E8B67E] mb-14">
            {companies.length} organizations and counting
          </p>
        </div>

        {/* Company Logos Carousel, client-only, lazy loaded */}
        <div className="relative">
          <CompanyCarousel companies={companies} speed={40} />
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Contributions;
"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

const CompanyCarousel = dynamic(
  () => import("../../Carousels/CompanyCarousel").then((m) => m.CompanyCarousel),
  {
    ssr: false,
    loading: () => <div className="py-8 text-center">Loading companies…</div>,
  }
);

const companies = [
  { name: "Reform", logo: "/images/reform.svg" },
  { name: "YUPLE", logo: "/images/tuple.svg" },
  { name: "SavvyCal", logo: "/images/savvycal.svg" },
  { name: "Statamic", logo: "/images/statamic.svg" },
  { name: "Transitor", logo: "/images/transform.svg" },
];

export const Contributions: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
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

        <h1 className="text-4xl md:text-[38px] lg:text-[40px] font-normal font-body text-[#1B1B1B] mb-6 leading-tight">
          Projects I've Contributed To
        </h1>
        <p
          className="text-base md:text-lg text-[#4D4D4D] mb-16 leading-7 font-body w-full lg:w-4/5"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          I've worked with startups, B2B SaaS teams, enterprises, government,
          and non-profits, building tools and content that actually make a
          difference. I also enjoy contributing to open source and collaborating
          with developer communities to make technology more accessible.
        </p>

        {/* Company Logos Carousel — client-only, lazy loaded */}
        {/* <div className="mb-8">
          <CompanyCarousel companies={companies} />
        </div> */}
      </div>
    </section>
  );
};

export default Contributions;

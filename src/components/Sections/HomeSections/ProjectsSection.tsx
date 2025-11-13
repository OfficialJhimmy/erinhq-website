// components/sections/ProjectsSection.tsx
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { ProjectsCarousel } from "@/components/Carousels/ProjectsCarousel";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Datamellon",
    description:"Datamellon is a Cloud-native software development and AI consulting company with operations in the UK, Nigeria, Ghana, Kenya, USA, Canada, Uganda, South Africa, Dubai and Saudi Arabia.",
    link: "https://datamellon.com",
    image: "/images/datamellon-cover.png",
  },
  {
    title: "WriteTech Hub",
    description:'WriteTech Hub is a platform dedicated to clear, precise technical communication, enabling growth and innovation through technical content.',
    link: "https://writetechhub.org",
    image: "/images/writetechhub-banner.png",
  },
  {
    title: "KlaudWorks",
    description:'A cloud financial management platform that enables users to monitor, analyze, and optimize cloud costs with AI-driven insights.',
    link: "https://www.klaudworks.io/",
    image: "/images/klaudworks-cover.png",
  },
  {
    title: "Shestel",
    description:'A global platform connecting users through digital content including movies, TV shows, and sports, with AI-powered engagement features.',
    link: "#",
    image: "/images/shestel-new.png",
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:py-20 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <div className=" flex items-center gap-2 mb-6">
            <Image
              src="/images/Line.png"
              alt="Straight line"
              width={60}
              height={16}
              loading="lazy"
              className="object-contain"
            />
            <span className="text-[#A3A3A3] font-heading text-sm uppercase tracking-wider">
              Works
            </span>
          </div>
          <h2 className="hidden lg:block text-[32px] md:text-[40px] font-medium text-[#333333] leading-[38px] lg:leading-[45px]">
            Check out the Software Projects &<br />
            Open Source Work I've Built
          </h2>
          <h2 className="lg:hidden text-[32px] md:text-[40px] font-medium text-[#333333] leading-[38px] lg:leading-[45px]">
            Check out the Software Projects & Open Source Work I've Built
          </h2>
        </div>
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-gray-900 font-medium hover:gap-3 transition-all whitespace-nowrap underline"
        >
          Explore my work <BsArrowUpRight size={18} />
        </Link>
      </div>

      <ProjectsCarousel projects={projects} />
    </section>
  );
};

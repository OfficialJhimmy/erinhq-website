// components/sections/ProjectsSection.tsx
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { ProjectsCarousel } from "@/components/Carousels/ProjectsCarousel";
import Image from "next/image";

const projects = [
  {
    title: "Datamellon",
    description: "A tech company site focused on AI and data-driven solutions.",
    link: "#",
    image: "/images/datamellon-banner.png",
  },
  {
    title: "WriteTech Hub",
    description: "The hub for technical writing and documentation projects.",
    link: "#",
    image: "/images/writetechhub-banner.png",
  },
  {
    title: "SongDis",
    description: "The hub for technical writing.",
    link: "#",
    image: "/images/songdis.png",
  },
  {
    title: "Additional Project",
    description: "Another amazing project showcasing technical expertise.",
    link: "#",
    image: "/images/songdis.png",
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <div className=" flex items-center gap-2 mb-6">
            <Image
              src="/images/line.png"
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
        <a
          href="#"
          className="inline-flex items-center gap-2 text-gray-900 font-medium hover:gap-3 transition-all whitespace-nowrap underline"
        >
          Explore my work <BsArrowUpRight size={18} />
        </a>
      </div>

      <ProjectsCarousel projects={projects} />
    </section>
  );
};

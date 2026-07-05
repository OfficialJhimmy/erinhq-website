// components/sections/HowToWorkWithMeSection.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

interface EngagementPath {
  number: string;
  title: string;
  description: string;
}

const paths: EngagementPath[] = [
  {
    number: "01",
    title: "Build something with me",
    description:
      "I design and ship AI powered products, automation systems, and full stack applications, from the first architecture decision through to production.",
  },
  {
    number: "02",
    title: "Bring me in on AI strategy",
    description:
      "I help teams figure out which AI opportunities are actually worth building, then lead the technical discovery and implementation to get there.",
  },
  {
    number: "03",
    title: "Have me write or explain it",
    description:
      "I turn complex technical work into documentation, tutorials, and content that your team and your users can actually follow.",
  },
];

export const HowToWorkWithMeSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Image
            src="/images/Line.png"
            alt="Straight line"
            width={60}
            height={16}
            loading="lazy"
            className="object-contain"
          />
          <span className="text-[#A3A3A3] font-heading text-sm uppercase tracking-wider">
            How to work with me
          </span>
        </div>

        <h2 className="text-3xl md:text-[38px] lg:text-[40px] font-normal text-[#1B1B1B] mb-6">
          Three ways we can work together
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Whatever the starting point, it usually comes down to one of
          these.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-14">
        {paths.map((path) => (
          <div
            key={path.number}
            className="border border-gray-200 rounded-2xl p-8"
          >
            <span className="font-heading text-4xl text-[#E8B67E] mb-4 block">
              {path.number}
            </span>
            <h3 className="text-xl font-semibold text-[#1B1B1B] mb-3">
              {path.title}
            </h3>
            <p className="text-[#696969] leading-relaxed">
              {path.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link href="/work-with-me" passHref>
          <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1B1B1B] to-[#FF8906] text-[#FBF5E4] font-body font-medium rounded-full transition-transform hover:scale-105 p-4 text-[15px]">
            See how we can work together <GoArrowUpRight size={18} />
          </button>
        </Link>
      </div>
    </section>
  );
};
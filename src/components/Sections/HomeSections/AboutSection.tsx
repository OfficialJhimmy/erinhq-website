// components/sections/AboutSection.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const stats = [
  { value: "8+", label: "Years engineering" },
  { value: "10+", label: "AI products shipped" },
  { value: "6", label: "Companies scaled" },
  { value: "AWS", label: "Certified architect" },
];

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/images/Line.png"
                alt="Straight line"
                width={60}
                height={16}
                loading="lazy"
                className="object-contain"
              />
              <span className="text-[#A3A3A3] font-heading text-sm uppercase tracking-wider">
                About Me
              </span>
            </div>

            <h2 className="text-3xl md:text-[38px] lg:text-[40px] font-normal text-[#1B1B1B] mb-6 leading-tight">
              Tech is more than code to me
            </h2>

            <p className="text-[#525252] text-lg leading-relaxed mb-6 max-w-lg">
              It is about solving real problems, explaining them clearly, and
              building things people actually use. I studied Actuarial
              Science, taught myself to code, and spent the years since
              moving between full stack engineering and, more recently,
              leading AI engineering work at Refactrd. I still write and
              teach alongside the building, because the two have always
              been the same instinct for me.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-gray-900 font-medium hover:gap-3 transition-all underline"
            >
              Know about ERIN <GoArrowUpRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border border-gray-200 rounded-2xl p-6"
              >
                <p className=" text-3xl md:text-4xl text-transparent bg-gradient-to-r from-[#1B1B1B] to-[#FF8906] bg-clip-text mb-2">
                  {stat.value}
                </p>
                <p className="text-[#696969] text-sm leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
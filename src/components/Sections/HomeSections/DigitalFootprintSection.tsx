// components/sections/DigitalFootprintSection.tsx
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

interface ContentCard {
  title: string;
  description: string;
  image: string;
  link: string;
  linkText: string;
}

const contentCards: ContentCard[] = [
  {
    title: "Making AI Tools More Human-Friendly",
    description:
      "Talks, panels, and advocacy around open source, AI, and accessibility",
    image: "/images/image 29.png",
    link: "#",
    linkText: "Book me to speak",
  },
  {
    title: "Social Content",
    description:
      "Bite-sized tutorials and insights I share with my growing social audience",
    image: "/images/image 30.png",
    link: "#",
    linkText: "See my socials",
  },
  {
    title: "Lifestyle Lens",
    description:
      "A peek into my world outside tech – fitness, music, and travel.",
    image: "/images/image 31.png",
    link: "#",
    linkText: "Peek into my world",
  },
];

export const DigitalFootprintSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <div className=" flex items-center justify-center gap-2 mb-6">
          <Image
            src="/images/line.png"
            alt="Straight line"
            width={60}
            height={16}
            loading="lazy"
            className="object-contain"
          />
          <span className="text-[#A3A3A3] font-heading text-sm uppercase tracking-wider">
            Digital Footprint
          </span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Beyond the Code
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          I also create content around tech, AI, and lifestyle. From writing
          insights on LinkedIn to building tutorials on TikTok and Instagram, I
          share what I learn in real time
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {contentCards.map((card, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-lg bg-white transition-all duration-300"
          >
            <div className="aspect-[4/5] overflow-hidden bg-gray-100">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {card.title}
              </h3>
              <p className="text-[#696969] text-sm mb-4 leading-relaxed">
                {card.description}
              </p>
              <a
                href={card.link}
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all"
              >
                {card.linkText} <GoArrowUpRight size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
      <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1B1B1B] to-[#FF8906] text-[#FBF5E4] font-body font-medium rounded-full transition-transform hover:scale-105 p-4 text-[15px]">
          Explore my Digital Footprint <GoArrowUpRight size={18} />
        </button>
      </div>
    </section>
  );
};

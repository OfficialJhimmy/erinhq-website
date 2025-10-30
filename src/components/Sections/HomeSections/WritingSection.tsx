import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import { ArticleCard } from "@/components/Cards/ArticleCard";

const articles = [
  {
    category: "Blog" as const,
    readTime: "5 min read",
    title: "Making AI Tools More Human-Friendly",
    description:
      "A reflection on building AI that's not just powerful, but also relaxed and fun",
    link: "#",
    bgColor: "bg-orange-50",
  },
  {
    category: "Case Studies" as const,
    readTime: "5 min read",
    title: "Scaling a B2B SaaS Platform for 500+ Users",
    description:
      "Documented how I optimized backend performance and improved adoption rates",
    link: "#",
    bgColor: "bg-gray-800",
  },
  {
    category: "Open Source" as const,
    readTime: "5 min read",
    title: "MellyAI: Open Source Chatbot",
    description:
      "Improved RAG/LLM, added setup guide, wrote contribution guidelines",
    link: "#",
    bgColor: "bg-blue-900",
  },
];

export const WritingSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
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
              Works
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Read my tutorials, documentation, and
            <br className="hidden md:block" /> insights.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, idx) => (
            <ArticleCard key={idx} {...article} />
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1B1B1B] to-[#FF8906] text-[#FBF5E4] font-body font-medium rounded-full transition-transform hover:scale-105 p-4 text-[15px]">
            View all my Writing <GoArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

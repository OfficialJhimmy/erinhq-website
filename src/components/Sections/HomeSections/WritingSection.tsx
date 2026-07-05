import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import { ArticleCard } from "@/components/Cards/ArticleCard";
import Link from "next/link";

const articles = [
  {
    category: "Blog" as const,
    readTime: "10 min read",
    title:
      "What Is Agentic AI and Why It Matters for the Future of Productivity",
    description:
      "What Is Agentic AI and Why It Matters for the Future of Productivity",
    link: "https://the-erin.hashnode.dev/what-is-agentic-ai-and-why-it-matters-for-the-future-of-productivity",
    image: "/images/agentic-ai.png",
  },
  {
    category: "Blog" as const,
    readTime: "5 min read",
    title: "A Comprehensive Guide to Writing Your First GraphQL Query",
    description:
      "A comprehensive guide on how to write your first GraphQL Query",

    link: "https://the-erin.hashnode.dev/a-comprehensive-guide-to-writing-your-first-graphql-query",
    image: "/images/graphql.png",
  },
  {
    category: "Blog" as const,
    readTime: "8 min read",
    title:
      "Code Obfuscation Explained: What It Is, How It Works, and When to Use It",
    description:
      "A comprehensive guide on what is Code Obfuscation, how it works, and when to use it.",
    link: "https://the-erin.hashnode.dev/code-obfuscation-explained",
    image: "/images/code-obfuscation.png",
  },
];

export const WritingSection: React.FC = () => {
  return (
    <section className="bg-gray-50 md:py-20 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
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
              Works
            </span>
          </div>
          <h2 className="text-3xl md:text-[38px] lg:text-[40px] font-normal text-[#1B1B1B] text-center">
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
          <Link href="/writing" passHref>
            <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1B1B1B] to-[#FF8906] text-[#FBF5E4] font-body font-medium rounded-full transition-transform hover:scale-105 p-4 text-[15px]">
              View all my Writing <GoArrowUpRight size={18} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

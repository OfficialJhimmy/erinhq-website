import React from "react";
import Image from "next/image";
import { getSolutionBySlug } from "@/data/aiSolutions";
import { Section, Button, Tag } from "@/components/ui";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const previewSlugs = [
  "ai-customer-support-agent",
  "ai-sales-lead-qualification-agent",
  "ai-knowledge-assistant",
  "ai-recruitment-screening-system",
  "ai-research-decision-intelligence",
  "ai-document-contract-intelligence",
];

export const AISolutionsPreviewSection: React.FC = () => {
  const solutions = previewSlugs
    .map((slug) => getSolutionBySlug(slug))
    .filter((solution): solution is NonNullable<typeof solution> => Boolean(solution));

  return (
    <Section aria-labelledby="ai-solutions-heading" className="bg-white">
      <div className="grid gap-10 lg:grid-cols-[1fr_280px] lg:items-center mb-10">
        <div>
          <span className="text-[#A3A3A3] font-heading text-sm uppercase tracking-wider block mb-3">
            AI Solutions
          </span>
          <h2 id="ai-solutions-heading" className="font-heading text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-4 max-w-2xl">
            AI systems built around how your business actually works.
          </h2>
          <p className="text-[#525252] text-lg leading-relaxed max-w-2xl">
            Most businesses do not need another AI demo. They need systems that fit into the way
            their teams already work. I design and build practical AI solutions for customer
            experience, sales, operations, HR, finance, research and other business workflows.
          </p>
        </div>
        <div className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl lg:block">
          <Image src="/images/ai-solutions-mobile.webp" alt="" fill loading="lazy" className="object-cover" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {solutions.map((solution) => (
          <Link key={solution.slug} href={`/ai-solutions/${solution.slug}`} className="group block h-full">
            <article className="flex h-full flex-col gap-3 rounded-2xl border border-black/10 p-6 transition-colors hover:border-copper">
              <Tag variant="light" className="w-fit">{solution.category}</Tag>
              <h3 className="font-heading text-lg font-semibold text-[#1B1B1B] group-hover:text-copper transition-colors">
                {solution.name}
              </h3>
              <p className="text-[#525252] text-sm leading-relaxed">{solution.audience}</p>
              <div className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[#1B1B1B] group-hover:gap-3 transition-all">
                See How It Works
                <ArrowUpRight size={14} />
              </div>
            </article>
          </Link>
        ))}
      </div>

      <Button href="/ai-solutions">Explore AI Solutions</Button>
    </Section>
  );
};

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { AISolution } from "@/data/aiSolutions";

interface SolutionCardProps {
  solution: AISolution;
}

export const SolutionCard: React.FC<SolutionCardProps> = ({ solution }) => {
  return (
    <Link href={`/ai-solutions/${solution.slug}`} className="group block h-full">
      <article className="flex h-full flex-col gap-4 rounded-2xl border border-black/10 bg-white p-6 transition-colors hover:border-copper">
        <span className="font-heading text-xs uppercase tracking-wider text-copper">
          {solution.category}
        </span>
        <h3 className="font-heading text-xl font-semibold text-[#1B1B1B] group-hover:text-copper transition-colors">
          {solution.name}
        </h3>
        <p className="text-[#525252] text-sm leading-relaxed">{solution.summary}</p>
        <ul className="flex flex-col gap-1.5 text-sm text-[#525252]">
          {solution.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-copper" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[#1B1B1B] group-hover:gap-3 transition-all">
          See How It Works
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </article>
    </Link>
  );
};

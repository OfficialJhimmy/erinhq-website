"use client";

import React, { useMemo, useState } from "react";
import { aiSolutions } from "@/data/aiSolutions";
import { SolutionCard } from "@/components/Cards/SolutionCard";
import { Section, Button } from "@/components/ui";
import { ENQUIRY_TYPES, workWithMeHref } from "@/data/enquiryTypes";

export const AISolutionsCatalogueSection: React.FC = () => {
  const categories = useMemo(() => {
    const unique = Array.from(new Set(aiSolutions.map((solution) => solution.category)));
    return ["All", ...unique];
  }, []);

  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? aiSolutions
      : aiSolutions.filter((solution) => solution.category === activeCategory);

  return (
    <Section id="catalogue" aria-labelledby="catalogue-heading" className="bg-[#FAF7F2]">
      <h2 id="catalogue-heading" className="sr-only">
        AI Solutions Catalogue
      </h2>

      <div role="tablist" aria-label="Filter solutions by category" className="flex flex-wrap gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            role="tab"
            aria-selected={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
              activeCategory === category
                ? "bg-[#1B1B1B] text-white"
                : "bg-white text-[#525252] border border-gray-300 hover:border-gray-400"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filtered.map((solution) => (
          <SolutionCard key={solution.slug} solution={solution} />
        ))}
      </div>

      <div className="rounded-2xl border border-black/10 bg-white p-10 text-center">
        <h3 className="font-heading text-2xl font-semibold text-[#1B1B1B] mb-3">
          Do not see exactly what you need?
        </h3>
        <p className="text-[#525252] mb-6 max-w-2xl mx-auto">
          Your workflow may be unique. Tell me what you are trying to improve, automate or build,
          and I can design a system around it.
        </p>
        <Button href={workWithMeHref(ENQUIRY_TYPES.notSure)}>Discuss a Custom AI System</Button>
      </div>
    </Section>
  );
};

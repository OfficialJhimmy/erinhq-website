import React from "react";
import { Section } from "@/components/ui";
import { CheckCircle2 } from "lucide-react";

const items = [
  "AI agents and agentic workflows",
  "RAG and knowledge systems",
  "AI-powered products",
  "AI automation",
  "LLM applications",
  "Multi-agent systems",
  "AI evaluation and monitoring",
  "AI systems architecture",
  "Full-stack web applications",
  "Backend systems and APIs",
  "Cloud architecture and deployment",
  "Internal business tools and platforms",
  "Technical architecture and product engineering",
];

export const WhatICanHelpWithSection: React.FC = () => {
  return (
    <Section aria-labelledby="help-heading" className="bg-white">
      <h2 id="help-heading" className="font-heading text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-10 max-w-2xl">
        Where I can contribute
      </h2>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3 text-[#525252]">
            <CheckCircle2 size={20} className="flex-shrink-0 text-copper" />
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
};

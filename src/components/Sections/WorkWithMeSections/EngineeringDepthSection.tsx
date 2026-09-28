import React from "react";
import { Section } from "@/components/ui";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Engineer-first approach",
  "AI and software engineering in one workflow",
  "Business problem before technology choice",
  "Production-minded architecture",
  "Clear technical communication",
  "Practical, maintainable solutions",
  "Remote collaboration across locations",
];

export const EngineeringDepthSection: React.FC = () => {
  return (
    <Section aria-labelledby="depth-heading" className="bg-[#FAF7F2]">
      <h2 id="depth-heading" className="font-heading text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-4 max-w-2xl">
        Engineering depth, not just AI wrappers.
      </h2>
      <p className="text-[#525252] text-lg leading-relaxed max-w-2xl mb-10">
        I bring software engineering, backend development, cloud infrastructure and AI
        engineering together. That means the work does not stop at getting a model to produce an
        interesting response. The goal is to build a system that can actually fit into the
        product or business workflow.
      </p>
      <ul className="grid sm:grid-cols-2 gap-3">
        {points.map((point) => (
          <li key={point} className="flex items-center gap-3 text-[#525252]">
            <CheckCircle2 size={20} className="flex-shrink-0 text-copper" />
            {point}
          </li>
        ))}
      </ul>
    </Section>
  );
};

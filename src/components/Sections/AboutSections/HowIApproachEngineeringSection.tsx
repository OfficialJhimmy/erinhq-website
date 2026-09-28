import React from "react";
import { Section } from "@/components/ui";
import { CheckCircle2 } from "lucide-react";

const principles = [
  "Understand the business problem before choosing the technology.",
  "Design the workflow before adding intelligence.",
  "Use AI where it creates meaningful value.",
  "Keep architecture as simple as the problem allows.",
  "Build for reliability, security and maintainability, not just demos.",
  "Use human review where the consequences of an automated decision require it.",
  "Measure and evaluate AI systems instead of assuming that a model response is good enough.",
  "Treat AI as part of a larger software system.",
];

export const HowIApproachEngineeringSection: React.FC = () => {
  return (
    <Section aria-labelledby="approach-heading" className="bg-white">
      <h2 id="approach-heading" className="font-heading text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-4 max-w-2xl">
        Start with the problem. Then choose the technology.
      </h2>
      <p className="text-[#525252] text-lg leading-relaxed max-w-2xl mb-10">
        I do not believe every problem needs an AI agent, a complex architecture or the latest
        model. Good engineering starts with understanding what needs to change and then choosing
        the simplest system that can reliably achieve it.
      </p>
      <ul className="grid sm:grid-cols-2 gap-4">
        {principles.map((principle) => (
          <li key={principle} className="flex items-start gap-3 text-[#525252]">
            <CheckCircle2 size={20} className="flex-shrink-0 text-copper mt-0.5" />
            {principle}
          </li>
        ))}
      </ul>
    </Section>
  );
};

import React from "react";
import { ProcessStepCard } from "@/components/Cards/ProcessStepCard";
import { Section } from "@/components/ui";

const steps = [
  {
    number: "01",
    description:
      "Understand — Identify the business problem, workflow, users, constraints and desired outcome.",
    bgColor: "#F4F0E8",
  },
  {
    number: "02",
    description:
      "Design — Define the AI workflow, architecture, integrations, human approval points and success criteria.",
    bgColor: "#FDEEDC",
  },
  {
    number: "03",
    description:
      "Build — Develop the AI system, product interface, integrations and supporting infrastructure.",
    bgColor: "#F4F0E8",
  },
  {
    number: "04",
    description:
      "Deploy & Improve — Launch, monitor, evaluate and continuously improve the system based on real usage.",
    bgColor: "#FDEEDC",
  },
];

export const HowItWorksSection: React.FC = () => {
  return (
    <Section aria-labelledby="how-it-works-heading" className="bg-[#FAF7F2]">
      <span className="text-[#A3A3A3] font-heading text-sm uppercase tracking-wider block mb-3">
        From Business Problem to Working System
      </span>
      <h2 id="how-it-works-heading" className="font-heading text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-4 max-w-2xl">
        AI should fit your organisation, not force your organisation to fit the AI.
      </h2>
      <p className="text-[#525252] text-lg leading-relaxed max-w-2xl mb-12">
        Every AI system starts with the workflow. I first understand the problem, map how your
        team currently works, identify where AI can create leverage, then design and build a
        system around your existing processes, tools and data.
      </p>

      <div>
        {steps.map((step, index) => (
          <ProcessStepCard
            key={step.number}
            number={step.number}
            description={step.description}
            bgColor={step.bgColor}
            alignment={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </Section>
  );
};

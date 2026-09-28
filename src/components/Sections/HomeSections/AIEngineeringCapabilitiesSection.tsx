import React from "react";
import { Section, Button } from "@/components/ui";

const capabilities = [
  { name: "AI Agents", description: "Tool-using agents, task execution and agent workflows." },
  { name: "RAG & Knowledge Systems", description: "Grounded answers over company documents and structured knowledge." },
  { name: "AI Automation", description: "AI-powered workflows that connect models to business processes and existing tools." },
  { name: "AI Product Development", description: "From prototype to production-ready AI products." },
  { name: "Multi-Agent Systems", description: "Specialised agents working together on complex tasks." },
  { name: "AI Systems Architecture", description: "Designing reliable, scalable AI systems and their surrounding infrastructure." },
];

export const AIEngineeringCapabilitiesSection: React.FC = () => {
  return (
    <Section aria-labelledby="ai-engineering-heading" className="bg-[#1B1B1B]">
      <span className="text-white/50 font-heading text-sm uppercase tracking-wider block mb-3">
        AI Engineering
      </span>
      <h2 id="ai-engineering-heading" className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl">
        More than prompting. Engineering the systems around AI.
      </h2>
      <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-10">
        AI products need more than a model. They need good software architecture, data flows,
        APIs, security, infrastructure, evaluation, observability and a clear way for humans and
        AI to work together.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {capabilities.map((capability) => (
          <div key={capability.name} className="rounded-2xl border border-white/10 p-6">
            <h3 className="font-heading text-lg font-semibold text-white mb-2">{capability.name}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{capability.description}</p>
          </div>
        ))}
      </div>

      <Button href="/ai-engineering">Explore AI Engineering</Button>
    </Section>
  );
};

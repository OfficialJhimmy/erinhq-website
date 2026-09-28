import React from "react";
import Image from "next/image";
import { Section } from "@/components/ui";

const capabilities = [
  { name: "AI Engineering", description: "AI agents, RAG systems, LLM applications, multi-agent systems, evaluation and AI workflows." },
  { name: "AI Automation", description: "Turning repetitive business processes into intelligent workflows that can understand information, make bounded decisions and trigger actions." },
  { name: "AI Product Development", description: "Taking AI product ideas from architecture and prototyping through application engineering and production." },
  { name: "AI Systems Architecture", description: "Designing the components, data flows, integrations, controls and infrastructure around AI systems." },
  { name: "Software Engineering", description: "Building full-stack applications, APIs, backend services, platforms and cloud infrastructure." },
  { name: "Technical Writing", description: "Making complex engineering systems understandable through clear technical documentation and developer-focused content." },
];

export const WhatIDoTodaySection: React.FC = () => {
  return (
    <Section aria-labelledby="what-i-do-heading" className="bg-[#FAF7F2]">
      <div className="grid gap-10 lg:grid-cols-[1fr_280px] lg:items-center mb-10">
        <div>
          <h2 id="what-i-do-heading" className="font-heading text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-4 max-w-2xl">
            Building beyond the model.
          </h2>
          <p className="text-[#525252] text-lg leading-relaxed max-w-2xl">
            AI is rarely the whole product. A useful AI system needs software around it, data
            behind it, workflows connecting it to the business and infrastructure that can support
            it. That is where my work sits.
          </p>
        </div>
        <div className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl lg:block">
          <Image
            src="/images/about-engineering-real-world.webp"
            alt=""
            fill
            loading="lazy"
            className="object-cover"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((capability) => (
          <div key={capability.name} className="rounded-2xl border border-black/10 bg-white p-6">
            <h3 className="font-heading text-lg font-semibold text-[#1B1B1B] mb-2">{capability.name}</h3>
            <p className="text-[#525252] text-sm leading-relaxed">{capability.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

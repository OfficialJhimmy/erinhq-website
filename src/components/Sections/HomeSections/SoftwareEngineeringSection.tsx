import React from "react";
import { Section, Button, FadeIn } from "@/components/ui";
import { Layout, Server, Cloud, Database, GitBranch, Boxes } from "lucide-react";

const capabilities = [
  { name: "Full-stack web applications", icon: Layout },
  { name: "Backend systems and APIs", icon: Server },
  { name: "Cloud architecture and deployment", icon: Cloud },
  { name: "Databases and data systems", icon: Database },
  { name: "DevOps and CI/CD", icon: GitBranch },
  { name: "Product engineering", icon: Boxes },
];

export const SoftwareEngineeringSection: React.FC = () => {
  return (
    <Section aria-labelledby="software-engineering-heading" className="bg-white">
      <FadeIn>
        <span className="text-[#A3A3A3] font-heading text-sm uppercase tracking-wider block mb-3">
          Software Engineering
        </span>
        <h2 id="software-engineering-heading" className="font-heading text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-4 max-w-2xl">
          Strong AI starts with strong engineering.
        </h2>
        <p className="text-[#525252] text-lg leading-relaxed max-w-2xl mb-10">
          My background in software engineering shapes how I build AI systems, so AI products can
          be treated as real software products rather than isolated experiments.
        </p>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {capabilities.map((capability, index) => {
          const Icon = capability.icon;
          return (
            <FadeIn key={capability.name} delay={index * 0.05}>
              <div className="group flex h-full items-center gap-4 rounded-2xl border border-black/10 p-5 transition-colors hover:border-copper">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-copper/10 text-copper transition-colors group-hover:bg-copper group-hover:text-white">
                  <Icon size={20} />
                </div>
                <span className="font-medium text-[#1B1B1B]">{capability.name}</span>
              </div>
            </FadeIn>
          );
        })}
      </div>

      <Button href="/projects">See the Engineering Behind the Work</Button>
    </Section>
  );
};

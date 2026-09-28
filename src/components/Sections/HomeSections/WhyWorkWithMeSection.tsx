import React from "react";
import { Section, FadeIn } from "@/components/ui";
import { Wrench, Target, Layers, Building2, Globe } from "lucide-react";

const points = [
  { label: "Engineer-first approach", icon: Wrench },
  { label: "Business-problem driven", icon: Target },
  { label: "AI + software engineering in one workflow", icon: Layers },
  { label: "Built for real organisational processes", icon: Building2 },
  { label: "Global collaboration from Nigeria", icon: Globe },
];

export const WhyWorkWithMeSection: React.FC = () => {
  return (
    <Section aria-labelledby="why-work-with-me-heading" className="bg-white">
      <FadeIn>
        <h2 id="why-work-with-me-heading" className="font-heading text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-4 max-w-2xl">
          Engineering experience behind the AI.
        </h2>
        <p className="text-[#525252] text-lg leading-relaxed max-w-2xl mb-10">
          I combine software engineering, cloud infrastructure and AI engineering to build
          systems that can actually fit into a real organisation.
        </p>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {points.map((point, index) => {
          const Icon = point.icon;
          return (
            <FadeIn key={point.label} delay={index * 0.05}>
              <div className="group flex h-full items-center gap-4 rounded-2xl border border-black/10 p-5 transition-colors hover:border-copper">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-copper/10 text-copper transition-colors group-hover:bg-copper group-hover:text-white">
                  <Icon size={20} />
                </div>
                <span className="font-medium text-[#1B1B1B]">{point.label}</span>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
};

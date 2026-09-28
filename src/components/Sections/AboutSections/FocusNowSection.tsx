import React from "react";
import { Section, FadeIn } from "@/components/ui";
import { Bot, Sparkles, Zap, Search, ShieldCheck, Rocket } from "lucide-react";

const focusAreas = [
  { title: "AI agents & agentic workflows", description: "Practical, task-bounded automation.", icon: Bot },
  { title: "AI-powered products", description: "Internal business systems and products.", icon: Sparkles },
  { title: "Workflow automation", description: "Repetitive, information-heavy work.", icon: Zap },
  { title: "Knowledge & retrieval", description: "Making organisational information useful.", icon: Search },
  { title: "Production-ready architecture", description: "Evaluation, controls and observability.", icon: ShieldCheck },
  { title: "Idea to usable system", description: "Helping businesses actually ship.", icon: Rocket },
];

export const FocusNowSection: React.FC = () => {
  return (
    <Section aria-labelledby="focus-heading" className="bg-white">
      <FadeIn>
        <h2 id="focus-heading" className="font-heading text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-4 max-w-2xl">
          Building what comes next.
        </h2>
        <p className="text-[#525252] text-lg leading-relaxed max-w-2xl mb-10">
          Right now, I&apos;m focused on the space where AI, software engineering and business
          workflows meet.
        </p>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {focusAreas.map((area, index) => {
          const Icon = area.icon;
          return (
            <FadeIn key={area.title} delay={index * 0.05}>
              <div className="group h-full rounded-2xl border border-black/10 p-6 transition-colors hover:border-copper">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-copper/10 text-copper transition-colors group-hover:bg-copper group-hover:text-white">
                  <Icon size={20} />
                </div>
                <h3 className="font-heading font-semibold text-[#1B1B1B] mb-1">{area.title}</h3>
                <p className="text-[#525252] text-sm leading-relaxed">{area.description}</p>
              </div>
            </FadeIn>
          );
        })}
      </div>

      <p className="text-[#1B1B1B] font-medium">
        The goal is not to put AI everywhere. The goal is to build better systems with it.
      </p>
    </Section>
  );
};

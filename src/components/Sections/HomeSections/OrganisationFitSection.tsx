import React from "react";
import { Section, Button, FadeIn } from "@/components/ui";
import { Headset, TrendingUp, Settings2, Users, Wallet, Scale, Search } from "lucide-react";

const fitAreas = [
  { area: "Customer Experience", description: "Automate repetitive questions and support requests.", icon: Headset },
  { area: "Sales & Marketing", description: "Qualify leads and support sales teams.", icon: TrendingUp },
  { area: "Operations", description: "Reduce manual work across internal processes.", icon: Settings2 },
  { area: "Human Resources", description: "Support recruitment and employee knowledge.", icon: Users },
  { area: "Finance", description: "Automate document processing and extraction.", icon: Wallet },
  { area: "Legal", description: "Support contract review and legal research.", icon: Scale },
  { area: "Research & Knowledge", description: "Turn information into searchable intelligence.", icon: Search },
];

export const OrganisationFitSection: React.FC = () => {
  return (
    <Section aria-labelledby="org-fit-heading" className="bg-white">
      <FadeIn>
        <h2 id="org-fit-heading" className="font-heading text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-4 max-w-2xl">
          Where AI can fit into your organisation.
        </h2>
        <p className="text-[#525252] text-lg leading-relaxed max-w-2xl mb-10">
          AI is most useful when it removes friction from a real workflow.
        </p>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {fitAreas.map((item, index) => {
          const Icon = item.icon;
          return (
            <FadeIn key={item.area} delay={index * 0.05}>
              <div className="group h-full rounded-2xl border border-black/10 p-6 transition-colors hover:border-copper">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-copper/10 text-copper transition-colors group-hover:bg-copper group-hover:text-white">
                  <Icon size={20} />
                </div>
                <h3 className="font-heading font-semibold text-[#1B1B1B] mb-1">{item.area}</h3>
                <p className="text-[#525252] text-sm leading-relaxed">{item.description}</p>
              </div>
            </FadeIn>
          );
        })}
      </div>

      <Button href="/ai-solutions">See All AI Solutions</Button>
    </Section>
  );
};

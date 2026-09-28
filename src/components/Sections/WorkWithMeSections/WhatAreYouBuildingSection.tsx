import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui";
import { ENQUIRY_TYPES, workWithMeHref } from "@/data/enquiryTypes";

const paths = [
  {
    title: "Build an AI System",
    copy: "Build an AI-powered system around a real business workflow. This could be an AI agent, knowledge assistant, document intelligence system, customer support system, research workflow or another intelligent process.",
    examples: "AI agents, RAG systems, knowledge assistants, document intelligence, customer support, sales automation, research systems, internal AI tools.",
    cta: "Discuss an AI System",
    type: ENQUIRY_TYPES.aiSystem,
  },
  {
    title: "Build an AI Product",
    copy: "Turn an AI idea into a usable product. I can help shape the architecture, engineer the application, integrate the AI layer and build the infrastructure around it.",
    examples: "AI SaaS products, AI-powered applications, agentic products, intelligent platforms, AI developer tools.",
    cta: "Discuss an AI Product",
    type: ENQUIRY_TYPES.aiProduct,
  },
  {
    title: "Build a Software Product",
    copy: "Build the software foundation your business or product needs. This can include web applications, platforms, APIs, backend systems and cloud infrastructure.",
    examples: "SaaS platforms, web applications, internal tools, marketplaces, portals, APIs and backend systems.",
    cta: "Discuss a Software Product",
    type: ENQUIRY_TYPES.softwareProduct,
  },
  {
    title: "Automate a Workflow",
    copy: "If your team is spending too much time on repetitive, manual or information-heavy work, we can look at the workflow and identify where software, automation or AI can remove unnecessary effort.",
    examples: "Lead qualification, customer follow-up, document processing, reporting, data movement, notifications, operational workflows and WhatsApp-based business processes.",
    cta: "Discuss an Automation",
    type: ENQUIRY_TYPES.automation,
  },
  {
    title: "I Have a Problem, But I'm Not Sure What to Build",
    copy: "That is completely fine. You do not need to arrive with a technical specification. Explain the problem, what your team currently does and what you would like to improve. We can work out whether the right answer is AI, automation, software or a combination.",
    examples: null,
    cta: "Talk Through My Problem",
    type: ENQUIRY_TYPES.notSure,
  },
];

export const WhatAreYouBuildingSection: React.FC = () => {
  return (
    <Section aria-labelledby="what-are-you-building-heading" className="bg-[#FAF7F2]">
      <h2 id="what-are-you-building-heading" className="font-heading text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-4 max-w-2xl">
        What are you trying to build?
      </h2>
      <p className="text-[#525252] text-lg leading-relaxed max-w-2xl mb-10">
        You do not have to know the technical answer before reaching out. Start with the outcome
        you want and we can work backwards from there.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {paths.map((path) => (
          <Link
            key={path.title}
            href={workWithMeHref(path.type)}
            className="group flex flex-col gap-3 rounded-2xl border border-black/10 bg-white p-6 hover:border-copper transition-colors"
          >
            <h3 className="font-heading text-lg font-semibold text-[#1B1B1B] group-hover:text-copper transition-colors">
              {path.title}
            </h3>
            <p className="text-[#525252] text-sm leading-relaxed">{path.copy}</p>
            {path.examples && <p className="text-[#A3A3A3] text-xs leading-relaxed">{path.examples}</p>}
            <div className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[#1B1B1B] group-hover:gap-3 transition-all">
              {path.cta}
              <ArrowRight size={14} />
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
};

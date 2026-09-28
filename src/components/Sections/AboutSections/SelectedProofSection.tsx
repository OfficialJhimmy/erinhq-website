import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui";

const proofLinks = [
  { label: "AI Engineering", description: "How ERIN approaches AI systems.", href: "/ai-engineering" },
  { label: "AI Solutions", description: "The types of business systems ERIN can build.", href: "/ai-solutions" },
  { label: "Projects", description: "Actual products, software and digital experiences.", href: "/projects" },
  { label: "Work With Me", description: "Start a conversation.", href: "/work-with-me" },
];

export const SelectedProofSection: React.FC = () => {
  return (
    <Section aria-labelledby="proof-heading" className="bg-[#FAF7F2]">
      <h2 id="proof-heading" className="font-heading text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-4 max-w-2xl">
        See the work behind the story.
      </h2>
      <p className="text-[#525252] text-lg leading-relaxed max-w-2xl mb-10">
        This page should not try to prove everything itself. Here is where to look for the
        strongest evidence.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {proofLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex items-center justify-between rounded-2xl border border-black/10 bg-white p-6 hover:border-copper transition-colors"
          >
            <div>
              <p className="font-heading font-semibold text-[#1B1B1B] group-hover:text-copper transition-colors">
                {link.label}
              </p>
              <p className="text-[#525252] text-sm">{link.description}</p>
            </div>
            <ArrowRight size={18} className="flex-shrink-0 text-[#A3A3A3] group-hover:translate-x-1 transition-transform" />
          </Link>
        ))}
      </div>
    </Section>
  );
};

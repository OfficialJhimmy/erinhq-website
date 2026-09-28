"use client";

import React from "react";
import { Section } from "@/components/ui";
import { Mail, ArrowUpRight } from "lucide-react";
import { useAnalytics } from "@/hooks/useAnalytics";

// Only real, already-configured contact methods are listed here — no
// invented contact details.
export const AlternativeContactSection: React.FC = () => {
  const { trackLinkClick } = useAnalytics();

  return (
    <Section aria-labelledby="alt-contact-heading" className="bg-[#FAF7F2]">
      <h2 id="alt-contact-heading" className="font-heading text-2xl md:text-3xl font-bold text-[#1B1B1B] mb-4 max-w-2xl">
        Prefer to start with a direct conversation?
      </h2>
      <p className="text-[#525252] leading-relaxed max-w-2xl mb-6">
        If you already know what you need, you can get in touch directly. If you are still
        figuring it out, the enquiry form above is usually the better starting point because it
        gives enough context to make the first conversation useful.
      </p>
      <div className="flex flex-wrap gap-6">
        <a
          href="mailto:creatives@erinhq.com"
          onClick={() => trackLinkClick("Email", "mailto:creatives@erinhq.com")}
          className="inline-flex items-center gap-2 text-[#1B1B1B] font-medium hover:text-copper transition-colors"
        >
          <Mail size={18} />
          creatives@erinhq.com
        </a>
        <a
          href="https://erinhq.fillout.com/contact-me"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackLinkClick("Direct Contact Form", "https://erinhq.fillout.com/contact-me")}
          className="inline-flex items-center gap-2 text-[#1B1B1B] font-medium hover:text-copper transition-colors"
        >
          Direct contact form <ArrowUpRight size={18} />
        </a>
      </div>
    </Section>
  );
};

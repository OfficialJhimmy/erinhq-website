import React from "react";
import { ChevronDown } from "lucide-react";
import { Button, Container } from "@/components/ui";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSplitSectionProps {
  eyebrow: string;
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  faqs: FAQItem[];
  className?: string;
}

export const FAQSplitSection: React.FC<FAQSplitSectionProps> = ({
  eyebrow,
  heading,
  body,
  ctaLabel,
  ctaHref,
  faqs,
  className,
}) => {
  return (
    <section className={className ?? "bg-white py-16 md:py-24"}>
      <Container className="grid gap-10 lg:grid-cols-[360px_1fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <span className="text-[#A3A3A3] font-heading text-sm uppercase tracking-wider block mb-3">
            {eyebrow}
          </span>
          <h2 className="font-heading text-3xl font-bold text-[#1B1B1B] mb-4">{heading}</h2>
          <p className="text-[#525252] leading-relaxed mb-6">{body}</p>
          <Button href={ctaHref}>{ctaLabel}</Button>
        </div>

        <div className="divide-y divide-black/10">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading font-semibold text-[#1B1B1B]">
                {faq.question}
                <ChevronDown size={18} className="flex-shrink-0 text-[#A3A3A3] transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-[#525252] leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
};

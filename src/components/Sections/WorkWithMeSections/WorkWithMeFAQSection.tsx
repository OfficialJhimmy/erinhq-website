import React from "react";
import { FAQSplitSection } from "@/components/Sections/FAQSplitSection";
import { jsonLdScriptProps, faqJsonLd } from "@/lib/jsonLd";

export const workWithMeFaqs = [
  {
    question: "Do I need to know exactly what I want to build before contacting you?",
    answer:
      "No. You can start with the business problem, workflow or product idea. We can work out whether AI, automation, software or a combination makes sense.",
  },
  {
    question: "Do you only build AI products?",
    answer:
      "No. AI is a major part of my current work, but I also build software products, web applications, backend systems and cloud infrastructure.",
  },
  {
    question: "Can you build a custom AI system for my business?",
    answer: "Yes. The system can be designed around your workflow, existing tools, data and operational requirements.",
  },
  {
    question: "Do you work with international teams?",
    answer:
      "Yes. I'm based in Lagos, Nigeria and work through remote collaboration with teams across Africa and internationally.",
  },
  {
    question: "Can you help with the technical architecture before development starts?",
    answer: "Yes. Architecture, system design and technical discovery can be part of the engagement when the project requires it.",
  },
  {
    question: "What if my idea does not actually need AI?",
    answer:
      "That is worth discovering early. If conventional software or automation is a better fit, the solution should reflect that rather than adding AI unnecessarily.",
  },
];

export const WorkWithMeFAQSection: React.FC = () => {
  return (
    <>
      <script {...jsonLdScriptProps(faqJsonLd(workWithMeFaqs))} />
      <FAQSplitSection
        eyebrow="FAQ"
        heading="Frequently asked questions."
        body="Still unsure? Bring your question directly and we can figure it out together."
        ctaLabel="Start a Conversation"
        ctaHref="#enquiry-form"
        faqs={workWithMeFaqs}
        className="bg-white py-16 md:py-24"
      />
    </>
  );
};

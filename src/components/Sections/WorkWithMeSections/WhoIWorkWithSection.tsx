import React from "react";
import { Section } from "@/components/ui";
import { CheckCircle2 } from "lucide-react";

const audiences = [
  "Founders with a product idea",
  "Startups building or scaling AI products",
  "SMEs looking to automate operations",
  "Established businesses exploring practical AI adoption",
  "Product teams that need additional engineering capacity",
  "Organisations building internal tools and knowledge systems",
];

export const WhoIWorkWithSection: React.FC = () => {
  return (
    <Section aria-labelledby="who-heading" className="bg-white">
      <h2 id="who-heading" className="font-heading text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-10 max-w-2xl">
        Built for teams that need to build.
      </h2>
      <ul className="grid sm:grid-cols-2 gap-3 mb-8">
        {audiences.map((audience) => (
          <li key={audience} className="flex items-center gap-3 text-[#525252]">
            <CheckCircle2 size={20} className="flex-shrink-0 text-copper" />
            {audience}
          </li>
        ))}
      </ul>
      <p className="text-[#525252] italic">
        Based in Lagos, Nigeria. Available for remote collaboration with teams across Africa and
        internationally.
      </p>
    </Section>
  );
};

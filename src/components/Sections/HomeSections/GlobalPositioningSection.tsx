import React from "react";
import { Section } from "@/components/ui";

interface GlobalPositioningSectionProps {
  heading?: string;
  body?: string;
}

export const GlobalPositioningSection: React.FC<GlobalPositioningSectionProps> = ({
  heading = "Based in Nigeria. Building globally.",
  body = "I am based in Lagos, Nigeria and work with startups, businesses and organisations beyond Nigeria. Whether you are building an AI product, automating an internal workflow or improving an existing software system, the work can be designed around your organisation and delivered remotely.",
}) => {
  return (
    <Section aria-labelledby="global-positioning-heading" className="bg-[#1B1B1B]">
      <h2 id="global-positioning-heading" className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl">
        {heading}
      </h2>
      <p className="text-white/70 text-lg leading-relaxed max-w-2xl">{body}</p>
    </Section>
  );
};

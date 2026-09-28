import React from "react";
import { getProjectById } from "@/data/portfolioData";
import { ProjectCardPortfolio } from "@/components/Cards/ProjectCardPortfolio";
import { Section, FadeIn } from "@/components/ui";

// Curated, not exhaustive — the AI work plus a few strong software
// engineering projects that best represent the engineering foundation.
const featuredIds = [
  "kora",
  "quill",
  "melly-guard",
  "ai-contract-generator",
  "atlas",
  "refactrd",
  "shestel",
  "lsdpc-payment-portal",
];

export const FeaturedProjectsSection: React.FC = () => {
  const featured = featuredIds
    .map((id) => getProjectById(id))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  return (
    <Section id="featured" aria-labelledby="featured-heading" className="bg-white">
      <span className="text-[#A3A3A3] font-heading text-sm uppercase tracking-wider block mb-3">
        Featured Work
      </span>
      <h2 id="featured-heading" className="font-heading text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-10">
        Selected AI and software engineering projects.
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((project, index) => (
          <FadeIn key={project.id} delay={index * 0.05}>
            <ProjectCardPortfolio
              id={project.id}
              title={project.title}
              description={project.shortDescription}
              image={project.image}
              technologies={project.technologies}
              status={project.status}
            />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};

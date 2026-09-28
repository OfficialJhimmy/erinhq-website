import React from "react";
import { getProjectById } from "@/data/portfolioData";
import { ProjectCardPortfolio } from "@/components/Cards/ProjectCardPortfolio";
import { Section, Button } from "@/components/ui";

const selectedIds = ["kora", "quill", "atlas", "melly-guard", "ai-contract-generator", "refactrd"];

export const SelectedProjectsSection: React.FC = () => {
  const selected = selectedIds
    .map((id) => getProjectById(id))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  return (
    <Section aria-labelledby="selected-work-heading" className="bg-[#FAF7F2]">
      <span className="text-[#A3A3A3] font-heading text-sm uppercase tracking-wider block mb-3">
        Selected Work
      </span>
      <h2 id="selected-work-heading" className="font-heading text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-4 max-w-2xl">
        Systems I have built.
      </h2>
      <p className="text-[#525252] text-lg leading-relaxed max-w-2xl mb-10">
        Explore selected AI and software projects, from internal knowledge systems and
        multi-agent research platforms to full-stack products and production software.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {selected.map((project) => (
          <ProjectCardPortfolio
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.shortDescription}
            image={project.image}
            technologies={project.technologies}
            status={project.status}
          />
        ))}
      </div>

      <Button href="/projects">View All Projects</Button>
    </Section>
  );
};

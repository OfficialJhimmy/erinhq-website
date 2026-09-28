"use client";

import React, { useState } from "react";
import { getProjectsByTag, type ProjectTag } from "@/data/portfolioData";
import { ProjectCardPortfolio } from "@/components/Cards/ProjectCardPortfolio";
import { Section } from "@/components/ui";

const tabs: { id: ProjectTag | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "AI Engineering", label: "AI Engineering" },
  { id: "AI Automation", label: "AI Automation" },
  { id: "Software Engineering", label: "Software Engineering" },
  { id: "Web Applications", label: "Web Applications" },
  { id: "Platforms", label: "Platforms" },
  { id: "Websites & Digital Experiences", label: "Websites & Digital Experiences" },
];

export const ProjectsTabsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProjectTag | "all">("all");
  const filtered = getProjectsByTag(activeTab);

  return (
    <Section aria-labelledby="all-projects-heading" className="bg-white pt-0">
      <h2 id="all-projects-heading" className="sr-only">
        All projects
      </h2>

      {/* Tabs */}
      <div role="tablist" aria-label="Filter projects by category" className="flex flex-wrap gap-3 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${
              activeTab === tab.id
                ? "bg-[#1B1B1B] text-white"
                : "bg-white text-[#525252] border border-gray-300 hover:border-gray-400"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      {filtered.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
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
      ) : (
        <div className="text-center py-16">
          <p className="text-[#A3A3A3] text-lg">More projects in this category are being added.</p>
        </div>
      )}
    </Section>
  );
};

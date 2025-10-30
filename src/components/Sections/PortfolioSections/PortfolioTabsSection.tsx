// components/sections/PortfolioTabsSection.tsx
'use client';

import React, { useState } from 'react';
import { getProjectsByCategory, ProjectCategory } from '@/data/portfolioData';
import { ProjectCardPortfolio } from '@/components/Cards/ProjectCardPortfolio';

const tabs = [
  { id: 'all', label: 'Personal projects' },
  { id: 'frontend', label: 'Company Website' },
  { id: 'fullstack', label: 'Software Tools' },
];

export const PortfolioTabsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('all');
  const projects = getProjectsByCategory(activeTab);

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Intro Text */}
        <p className="text-[#525252] text-center max-w-3xl mx-auto mb-8 leading-relaxed">
          Building personal brands online is something I enjoy because it blends design, storytelling, and engineering.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as ProjectCategory)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${
                activeTab === tab.id
                  ? 'bg-[#1B1B1B] text-white'
                  : 'bg-white text-[#525252] border border-gray-300 hover:border-gray-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 9).map((project) => (
            <ProjectCardPortfolio
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.shortDescription}
              image={project.image}
              technologies={project.technologies}
            />
          ))}
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#A3A3A3] text-lg">
              No projects available in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
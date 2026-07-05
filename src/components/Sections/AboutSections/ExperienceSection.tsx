"use client";

import { ExperienceCard } from "@/components/Cards/ExperienceCard";
import { ExperienceModal } from "@/components/Modals/ExperienceModal";
import React, { useState } from "react";

interface Experience {
  number: string;
  company: string;
  location: string;
  title: string;
  period: string;
  shortDescription: string;
  fullDescription: string;
  skills: { name: string; color: string }[];
}

const experiences: Experience[] = [
  {
    number: "01",
    company: "Refactrd",
    location: "Remote",
    title: "Lead AI Engineer",
    period: "Apr 2025 - Present",
    shortDescription:
      "At Refactrd, I lead the design and delivery of AI-powered products, intelligent automation, and workflow optimization systems for startups and enterprise organizations...",
    fullDescription: `At Refactrd, I lead the design and delivery of AI-powered products, intelligent automation solutions, and workflow optimization systems for startups and enterprise organizations. My work covers solution architecture, technical discovery, and implementation across multiple client projects at once, rather than any single product.

I design and deploy AI-powered applications that automate real business processes, and I build AI assistants and LLM-powered solutions for both internal tooling and customer-facing use cases. A lot of the job happens before a single line of code gets written, sitting with stakeholders to identify which AI opportunities are actually worth building and which ones just sound good in a meeting.

I work daily with OpenAI and Claude APIs, LangChain and LangGraph for agent orchestration, and AWS for deployment, translating that into automation workflows that measurably reduce manual effort for the teams we work with.`,
    skills: [
      { name: "AI Product Development", color: "#E0E7FF" },
      { name: "AI Agents", color: "#DBEAFE" },
      { name: "OpenAI APIs", color: "#FEE2E2" },
      { name: "Claude APIs", color: "#FEF3C7" },
      { name: "LangChain", color: "#E0E7FF" },
      { name: "LangGraph", color: "#DBEAFE" },
      { name: "Prompt Engineering", color: "#FEF3C7" },
      { name: "Workflow Automation", color: "#D1FAE5" },
      { name: "Python", color: "#FEE2E2" },
      { name: "TypeScript", color: "#DBEAFE" },
      { name: "AWS", color: "#E0E7FF" },
      { name: "REST APIs", color: "#DBEAFE" },
      { name: "Solution Architecture", color: "#FEE2E2" },
      { name: "Technical Discovery", color: "#FEF3C7" },
    ],
  },
  {
    number: "02",
    company: "Datamellon",
    location: "London, UK",
    title: "Full-Stack Engineer, AI Solutions",
    period: "Nov 2022 - Jan 2026",
    shortDescription:
      "At Datamellon, I built cloud-based fullstack applications and led development on AI-powered tools used across finance, logistics, and enterprise operations...",
    fullDescription: `At Datamellon, I built cloud-based fullstack applications and led development on AI-powered tools used across finance, logistics, and enterprise operations. I designed and integrated several custom GPT solutions for internal and external clients, using OpenAI and ChatGPT APIs to automate workflows and improve user experience.

Beyond the AI integrations, I developed backend APIs and Python automation scripts to streamline data processing, set up CI/CD pipelines with AWS CodePipeline and Jenkins, and managed deployments on AWS using Docker and GitHub Actions. On the frontend side, I improved performance and reduced load times by over 20 percent through lazy loading, caching, and code splitting.

I also contributed to architecture decisions and backend API design, working closely with product and design teams to keep the system scalable as new AI features were added.`,
    skills: [
      { name: "React.js", color: "#E0E7FF" },
      { name: "Next.js", color: "#FEE2E2" },
      { name: "TypeScript", color: "#DBEAFE" },
      { name: "Node.js", color: "#E0E7FF" },
      { name: "Python", color: "#FEE2E2" },
      { name: "OpenAI APIs", color: "#FEF3C7" },
      { name: "Large Language Models (LLM)", color: "#E0E7FF" },
      { name: "AI Product Development", color: "#DBEAFE" },
      { name: "AWS", color: "#E0E7FF" },
      { name: "Docker", color: "#DBEAFE" },
      { name: "CI/CD Workflows", color: "#FEF3C7" },
      { name: "REST and GraphQL APIs", color: "#D1FAE5" },
      { name: "PostgreSQL", color: "#DBEAFE" },
      { name: "Design Systems", color: "#FEE2E2" },
      { name: "Software Architecture", color: "#E0E7FF" },
    ],
  },
  {
    number: "03",
    company: "ERIN The Brand",
    location: "",
    title: "Founder & Principal Engineer",
    period: "Jan 2021 - Present",
    shortDescription:
      "ERIN is my personal brand and independent practice where I combine software engineering, technical writing, and developer experience to build digital solutions...",
    fullDescription: `ERIN is my personal brand and independent practice where I combine software engineering, technical writing, and developer experience to build digital solutions and create content that educates and empowers.

Through ERIN, I've delivered full-stack web projects for startups and founders, focusing on clean, scalable frontend systems using React, Next.js, and TypeScript. I've also written technical documentation for APIs, DevOps tools, and internal systems, helping teams reduce support load and speed up onboarding.

As a content creator, I break down complex engineering topics through short-form videos, guides, and tutorials that reach thousands of learners across Instagram, TikTok, and LinkedIn. I also collaborate with dev-focused brands to improve their developer experience and help them connect with their audience more clearly.

ERIN is also a container for jobs and projects that I've delivered under NDA or short-term contracts, ranging from internal dashboards to documentation systems and AI-integrated tools.`,
    skills: [
      { name: "Full-Stack Development", color: "#E0E7FF" },
      { name: "React.js", color: "#DBEAFE" },
      { name: "Next.js", color: "#E0E7FF" },
      { name: "JavaScript", color: "#FEF3C7" },
      { name: "TypeScript", color: "#DBEAFE" },
      { name: "Python", color: "#E0E7FF" },
      { name: "Node.js", color: "#D1FAE5" },
      { name: "Cloud Engineering", color: "#DBEAFE" },
      { name: "Data Analytics", color: "#FEE2E2" },
      { name: "Technical Writing", color: "#FEF3C7" },
      { name: "Developer Experience", color: "#DBEAFE" },
      { name: "Software Architecture", color: "#E0E7FF" },
      { name: "API Documentation", color: "#DBEAFE" },
      { name: "Content Creation", color: "#FEE2E2" },
    ],
  },
  {
    number: "04",
    company: "Shestel",
    location: "New York, United States",
    title: "Founding Software Engineer",
    period: "Jan 2021 - Sep 2023",
    shortDescription:
      "I joined Shestel as the first engineer and worked closely with the CEO to lay the technical foundation for the platform...",
    fullDescription: `I joined Shestel as the first engineer and worked closely with the CEO to lay the technical foundation for the platform. I helped scale the engineering team from the ground up, defining workflows, setting up best practices, and building the infrastructure to support a high-growth e-commerce product.

I led backend development, designing scalable APIs that powered thousands of daily transactions. I worked directly with product managers and designers to shape features and ensure smooth delivery cycles. My contributions extended beyond code; I helped shape the product roadmap and engineering culture from day one.

I set up CI/CD pipelines with Jenkins and Docker, and introduced automated testing practices that brought code coverage to 95%, reducing post-release bugs by 40%. I also drove engineering rituals like sprint planning, code reviews, and team stand-ups, creating a collaborative and high-trust environment.`,
    skills: [
      { name: "Next.js", color: "#E0E7FF" },
      { name: "React.js", color: "#E0E7FF" },
      { name: "AWS", color: "#DBEAFE" },
      { name: "Node.js", color: "#D1FAE5" },
    ],
  },
  {
    number: "05",
    company: "Dash Language School",
    location: "Lagos, Nigeria",
    title: "Frontend Engineer (Team Lead)",
    period: "Jan 2020 - May 2022",
    shortDescription:
      "At Dash Language School, I led a small frontend team to design and deploy mobile-first, responsive web applications...",
    fullDescription: `At Dash Language School, I led a small frontend team to design and deploy mobile-first, responsive web applications. One of my key contributions was developing and implementing a responsive website design that boosted mobile traffic by 40 percent and user engagement by 25 percent.

I created and maintained reusable React.js component libraries, which cut development time by 60 percent and improved consistency across the codebase. I also implemented accessibility best practices to improve usability for users with disabilities, and ensured frontend integration with backend services through REST APIs and GraphQL.

Beyond my own output, I mentored the developers on my team and ran code reviews to raise the overall quality and productivity of the group, which was my first real experience leading engineers rather than just writing code alongside them.`,
    skills: [
      { name: "Cloud Firestore", color: "#8B5CF6" },
      { name: "HTML5", color: "#FEE2E2" },
      { name: "CSS", color: "#DBEAFE" },
      { name: "Redux", color: "#8B5CF6" },
      { name: "JavaScript", color: "#FEF3C7" },
      { name: "React.js", color: "#E0E7FF" },
    ],
  },
  {
    number: "06",
    company: "Side Hustle",
    location: "",
    title: "Frontend Engineer",
    period: "Mar 2019 - Dec 2019",
    shortDescription:
      "At Side Hustle, I led the frontend engineering team during an internship program...",
    fullDescription: `At Side Hustle, I led the frontend engineering team during an internship program. One of my first tasks was modernizing old codebases. By modularizing and updating them, we reduced operating costs and improved performance across projects.

I also introduced and implemented a localization framework that cut development time in half and improved international user engagement by 40%. A big part of my work involved collaborating with cross-functional teams to create responsive website designs, which helped drive mobile traffic and user engagement.

Another area I focused on was performance. I optimized websites to load faster, which made a real difference in keeping users engaged and reducing customer churn. To ensure inclusivity, I also worked on accessibility standards, making sure our products met regulatory requirements.`,
    skills: [
      { name: "WordPress", color: "#DBEAFE" },
      { name: "HTML5", color: "#FEE2E2" },
      { name: "CSS", color: "#DBEAFE" },
      { name: "JavaScript", color: "#FEF3C7" },
    ],
  },
];

export const ExperienceSection: React.FC = () => {
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);

  const openModal = (experience: Experience) => {
    setSelectedExperience(experience);
  };

  const closeModal = () => {
    setSelectedExperience(null);
  };

  return (
    <section className="bg-white py-2 lg:py-14 px-6">
      <div className="max-w-5xl mx-auto">
        {experiences.map((exp) => (
          <ExperienceCard
            key={exp.number}
            number={exp.number}
            company={exp.company}
            location={exp.location}
            title={exp.title}
            period={exp.period}
            description={exp.shortDescription}
            onReadMore={() => openModal(exp)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedExperience && (
        <ExperienceModal
          isOpen={!!selectedExperience}
          onClose={closeModal}
          company={selectedExperience.company}
          title={selectedExperience.title}
          period={selectedExperience.period}
          description={selectedExperience.fullDescription}
          skills={selectedExperience.skills}
        />
      )}
    </section>
  );
};
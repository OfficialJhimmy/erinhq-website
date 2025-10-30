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
    company: "Datamellon",
    location: "London, UK",
    title: "Software Engineer",
    period: "Nov 2022 - Present",
    shortDescription:
      "At Datamellon, I build cloud-based frontend applications and lead development on AI-powered tools used across finance, logistics, and operations...",
    fullDescription: `At Datamellon, I build cloud-based frontend applications and lead development on AI-powered tools used across finance, logistics, and operations. I've designed and shipped 9+ custom GPT-based products tailored to internal use cases for enterprise clients, helping them streamline tasks like reporting, content generation, and customer support.

I work closely with product leads and backend teams to bring ideas to life, from rough concepts to polished, secure, and scalable applications. My focus is on creating clean, intuitive interfaces powered by real-time cloud integrations.

Beyond code, I mentor junior frontend engineers through code reviews, pair programming, and architecture walkthroughs. I also help define our internal engineering best practices, ensuring our frontend stack stays efficient and future-ready.`,

    skills: [
      { name: "Front End Engineering Design (FEED)", color: "#E0E7FF" },
      { name: "Backend Engineering", color: "#DBEAFE" },
      { name: "React.js", color: "#E0E7FF" },
      { name: "TypeScript", color: "#DBEAFE" },
      { name: "Next.js", color: "#FEE2E2" },
      { name: "JavaScript", color: "#FEF3C7" },
      { name: "Python", color: "#FEE2E2" },
      { name: "Node.js", color: "#E0E7FF" },
      { name: "PostgreSQL", color: "#DBEAFE" },
      { name: "Prompt Engineering", color: "#FEF3C7" },
      { name: "Large Language Models (LLM)", color: "#E0E7FF" },
      { name: "AI Product Development", color: "#DBEAFE" },
      { name: "Cloud Architecture", color: "#E0E7FF" },
      { name: "REST and GraphQL APIs", color: "#D1FAE5" },
      { name: "Scalable UI Design", color: "#DBEAFE" },
      { name: "State Management (Redux, Zustand)", color: "#FEE2E2" },
      { name: "CI/CD Workflows", color: "#FEF3C7" },
      { name: "Version Control (Git)", color: "#E0E7FF" },
      { name: "Design Systems", color: "#FEE2E2" },
      { name: "Software Architecture", color: "#E0E7FF" },
      { name: "Mentorship and Team Support", color: "#DBEAFE" },
    ],
  },
  {
    number: "02",
    company: "WriteTech Hub",
    location: "United Kingdom",
    title: "Technical Writer",
    period: "Jan 2024 - Present",
    shortDescription:
      "At WriteTech Hub, I work as a senior technical writer helping startups and open-source projects simplify complex systems through clear, developer-focused documentation...",
    fullDescription: `At WriteTech Hub, I work as a senior technical writer helping startups and open-source projects simplify complex systems through clear, developer-focused documentation. I lead and manage end-to-end documentation projects, from onboarding flows to internal APIs and user-facing guides, ensuring each product tells a clear, usable story.

Beyond writing, I help build and grow a community of technical writers by creating training resources, mentoring junior writers, and running hands-on workshops. I work closely with cross-functional teams, engineering, DevOps, and product to align documentation with business goals and development timelines.

As part of the leadership team, I contribute to internal standards, review contributor docs for consistency, and shape our tone and voice across projects. I'm also involved in strategy sessions for new client projects, defining documentation scope and processes before development starts.

One of the most rewarding aspects of my role is seeing junior writers transition into confident professionals. I make it a priority to create space for learning, questions, and real-world practice, because building people is just as important as building docs.`,
    skills: [
      { name: "Technical Documentation", color: "#FEF3C7" },
      { name: "API Documentation", color: "#E0E7FF" },
      { name: "Technical Writing", color: "#DBEAFE" },
      { name: "Search Engine Optimization (SEO)", color: "#FEE2E2" },
      { name: "Technical Publication", color: "#E0E7FF" },
      { name: "Developer Experience", color: "#DBEAFE" },
      { name: "Documentation Strategy", color: "#FEE2E2" },
      { name: "Open Source Contribution", color: "#D1FAE5" },
      { name: "Information Architecture", color: "#FEF3C7" },
      { name: "Content Design", color: "#DBEAFE" },
      { name: "Documentation as Code", color: "#E0E7FF" },
      { name: "Cross-team Collaboration", color: "#FEE2E2" },
      { name: "Mentorship and Coaching", color: "#DBEAFE" },
      { name: "Style Guide Development", color: "#FEF3C7" },
      { name: "Git and Version Control", color: "#E0E7FF" },
      { name: "User-Centered Writing", color: "#DBEAFE" },
      { name: "Community Building", color: "#FEE2E2" },
      { name: "Knowledge Management", color: "#E0E7FF" },
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
    location: "",
    title: "Frontend Engineer",
    period: "Jan 2020 - May 2022",
    shortDescription:
      "At Dash Language School, I worked in an Agile environment where I learned how to balance timelines with resources effectively...",
    fullDescription: `At Dash Language School, I worked in an Agile environment where I learned how to balance timelines with resources effectively. My role was centered on building and improving web experiences, and one of my key contributions was developing and implementing a responsive website design. This move boosted mobile traffic by 40% and user engagement by 25%.

I also managed full-cycle design tasks, taking projects from idea to completion while ensuring everything aligned with company guidelines. To make development more efficient, I created and maintained reusable React.js components. This reduced development time by 60% and improved overall code quality by 30%. I worked closely with product teams to roll out new features that not only met customer needs but also increased satisfaction and online sales revenue.`,
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

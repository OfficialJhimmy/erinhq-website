import React from "react";
import { Section, Tag } from "@/components/ui";

// Grounded in the real technologies listed against each role in
// ExperienceSection.tsx, grouped rather than invented from scratch.
const stack = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS", "Redux"] },
  { category: "Backend", items: ["Node.js", "Python", "REST APIs", "GraphQL APIs"] },
  { category: "Data", items: ["PostgreSQL"] },
  { category: "Cloud & Infrastructure", items: ["AWS", "Docker", "CI/CD (Jenkins, GitHub Actions, AWS CodePipeline)"] },
  { category: "AI", items: ["OpenAI APIs", "Claude APIs", "LangChain", "LangGraph", "LLM applications", "Prompt engineering"] },
  { category: "Engineering practices", items: ["Solution architecture", "Technical discovery", "API design", "Automated testing", "Design systems", "Technical documentation"] },
];

export const EngineeringFoundationSection: React.FC = () => {
  return (
    <Section aria-labelledby="foundation-heading" className="bg-[#1B1B1B]">
      <h2 id="foundation-heading" className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl">
        AI is the latest layer, not the only layer.
      </h2>
      <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-10">
        My AI work is grounded in years of software engineering. That foundation shapes how I
        build AI systems because production AI still needs applications, APIs, databases,
        infrastructure, authentication, observability, testing and deployment.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stack.map((group) => (
          <div key={group.category}>
            <h3 className="font-heading text-sm uppercase tracking-wider text-copper mb-3">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item} variant="dark">
                  {item}
                </Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

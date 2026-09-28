import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { projects } from "@/data/portfolioData";
import { aiSolutions } from "@/data/aiSolutions";

// /links is a personal link-in-bio page, not a canonical content page, so it
// is intentionally left out of the sitemap (it stays crawlable via robots).
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/ai-solutions`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/ai-engineering`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/projects`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/work-with-me`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/writing`, changeFrequency: "weekly", priority: 0.6 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.id}`,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const solutionRoutes: MetadataRoute.Sitemap = aiSolutions.map((solution) => ({
    url: `${SITE_URL}/ai-solutions/${solution.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes, ...solutionRoutes];
}

// app/projects/[id]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectById, projects } from "@/data/portfolioData";
import { ProjectDetailClient } from "@/components/Sections/PortfolioSections/ProjectDetailClient";
import { buildMetadata } from "@/lib/seo";
import { jsonLdScriptProps, breadcrumbJsonLd } from "@/lib/jsonLd";

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return {};

  return buildMetadata({
    title: `${project.title} | Feyijimi Erinle`,
    description: project.shortDescription,
    path: `/projects/${project.id}`,
    image: project.image,
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <script
        {...jsonLdScriptProps(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: project.title, path: `/projects/${project.id}` },
          ])
        )}
      />
      <ProjectDetailClient project={project} />
    </>
  );
}

// app/portfolio/[id]/page.tsx
import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, ArrowRight } from 'lucide-react';
import { getProjectById, getRelatedProjects, projects } from '@/data/portfolioData';
import { ProjectCardPortfolio } from '@/components/Cards/ProjectCardPortfolio';
import { Footer } from '@/components/Footer/Footer';

// Generate static paths for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#1B1B1B] pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>

          {/* Title */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal text-[#FFF] mb-6">
            {project.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-white/80 mb-8">
            <div>
              <span className="text-white/60 text-sm">Year</span>
              <p className="font-medium">{project.year}</p>
            </div>
            {project.client && (
              <div>
                <span className="text-white/60 text-sm">Client</span>
                <p className="font-medium">{project.client}</p>
              </div>
            )}
            <div>
              <span className="text-white/60 text-sm">Role</span>
              <p className="font-medium">{project.role}</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#E8B67E] text-[#1B1B1B] px-6 py-3 rounded-full font-medium hover:bg-[#d4a36e] transition-colors"
              >
                Visit Live Site <ExternalLink size={18} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-colors"
              >
                View on GitHub <Github size={18} />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="px-6 -mt-12">
        <div className="max-w-5xl mx-auto">
          <div className="aspect-video relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <div>
              <h2 className="font-heading text-3xl font-normal text-[#1B1B1B] mb-4">Overview</h2>
              <p className="text-[#525252] text-lg leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Challenges */}
            {project.challenges && (
              <div>
                <h2 className="font-heading text-3xl font-normal text-[#1B1B1B] mb-4">Challenges</h2>
                <p className="text-[#525252] text-lg leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            )}

            {/* Solutions */}
            {project.solutions && (
              <div>
                <h2 className="font-heading text-3xl font-normal text-[#1B1B1B] mb-4">Solutions</h2>
                <p className="text-[#525252] text-lg leading-relaxed">
                  {project.solutions}
                </p>
              </div>
            )}

            {/* Results */}
            {project.results && (
              <div>
                <h2 className="font-heading text-3xl font-normal text-[#1B1B1B] mb-4">Results</h2>
                <p className="text-[#525252] text-lg leading-relaxed">
                  {project.results}
                </p>
              </div>
            )}

            {/* Image Gallery */}
            {project.images.length > 0 && (
              <div>
                <h2 className="font-heading text-3xl font-bold text-[#1B1B1B] mb-6">Gallery</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.images.map((img, index) => (
                    <div key={index} className="aspect-video relative rounded-lg overflow-hidden">
                      <Image
                        src={img}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Testimonial */}
            {project.testimonial && (
              <div className="bg-[#FFFBF1] rounded-2xl p-8">
                <p className="text-[#1B1B1B] text-xl leading-relaxed mb-6 italic">
                  "{project.testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-[#1B1B1B]">{project.testimonial.author}</p>
                  <p className="text-[#A3A3A3]">{project.testimonial.position}</p>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Technologies */}
              <div>
                <h3 className="text-xl font-bold text-[#1B1B1B] mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-gray-100 text-[#525252] rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-xl font-bold text-[#1B1B1B] mb-4">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {project.category.map((cat, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-[#E8B67E]/20 text-[#1B1B1B] rounded-full text-sm capitalize"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div>
                <h3 className="text-xl font-bold text-[#1B1B1B] mb-4">Project Links</h3>
                <div className="space-y-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#525252] hover:text-[#E8B67E] transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Website
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#525252] hover:text-[#E8B67E] transition-colors"
                    >
                      <Github size={18} />
                      GitHub Repository
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="bg-gray-50 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B1B1B]">
                Related Projects
              </h2>
              <Link
                href="/portfolio"
                className="hidden md:inline-flex items-center gap-2 text-[#1B1B1B] font-medium hover:gap-3 transition-all hover:text-[#E8B67E]"
              >
                View All Projects <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject) => (
                <ProjectCardPortfolio
                  key={relatedProject.id}
                  id={relatedProject.id}
                  title={relatedProject.title}
                  description={relatedProject.shortDescription}
                  image={relatedProject.image}
                  technologies={relatedProject.technologies}
                />
              ))}
            </div>

            <Link
              href="/portfolio"
              className="md:hidden inline-flex items-center gap-2 text-[#1B1B1B] font-medium hover:gap-3 transition-all hover:text-[#E8B67E] mt-8"
            >
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
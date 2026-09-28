// components/ProjectCardPortfolio.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ProjectPlaceholder, illustrationVariantForId } from '@/components/ui/ProjectPlaceholder';

interface ProjectCardPortfolioProps {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  status?: 'concept';
}

export const ProjectCardPortfolio: React.FC<ProjectCardPortfolioProps> = ({
  id,
  title,
  description,
  image,
  status,
}) => {
  return (
    <Link href={`/projects/${id}`}>
      <article className="group relative overflow-hidden rounded-2xl cursor-pointer h-full">
        {/* Background Image with Gradient Overlay */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <ProjectPlaceholder
              variant={illustrationVariantForId(id)}
              className="transition-transform duration-700 group-hover:scale-105"
            />
          )}
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {status === 'concept' && (
            <span className="absolute top-4 right-4 rounded-full border border-copper/60 bg-ink/80 px-3 py-1 font-heading text-xs uppercase tracking-wider text-copper">
              Concept
            </span>
          )}

          {/* Content Overlay */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            {/* Title */}
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-copper transition-colors">
              {title}
            </h3>

            {/* Description */}
            <p className="text-white/80 text-sm leading-relaxed mb-3 line-clamp-2">
              {description}
            </p>

            {/* Explore Link */}
            <div className="inline-flex items-center gap-2 text-white font-medium text-sm group-hover:gap-3 transition-all">
              View Project
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

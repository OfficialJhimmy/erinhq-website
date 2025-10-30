// components/ProjectCard.tsx
import React from 'react';
import { BsArrowUpRight } from "react-icons/bs";


interface ProjectCardProps {
  image?: string;
  title: string;
  description: string;
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  image, 
  title, 
  description, 
  link 
}) => (
  <div className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] group relative overflow-hidden rounded-lg bg-white transition-shadow duration-300">
    <div className="aspect-[4/3] overflow-hidden">
      {image ? (
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
          <span className="text-sm text-purple-600">{title}</span>
        </div>
      )}
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <a 
        href={link}
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all underline"
      >
        Explore Website <BsArrowUpRight size={18}  />
      </a>
    </div>
  </div>
);
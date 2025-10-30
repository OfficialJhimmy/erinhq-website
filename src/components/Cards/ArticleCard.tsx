// components/ArticleCard.tsx
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

interface ArticleCardProps {
  image?: string;
  category: 'Blog' | 'Case Studies' | 'Open Source';
  readTime: string;
  title: string;
  description: string;
  link: string;
  bgColor?: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ 
  image, 
  category, 
  readTime, 
  title, 
  description, 
  link, 
  bgColor = 'bg-gray-100' 
}) => (
  <div className="group relative overflow-hidden rounded-lg bg-white transition-shadow duration-300">
    <div className="aspect-[4/3] overflow-hidden">
      {image ? (
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      ) : (
        <div className={`w-full h-full ${bgColor} flex items-center justify-center`}>
          <span className="text-sm text-gray-600">{title}</span>
        </div>
      )}
    </div>
    <div className="p-6">
      <div className="flex items-center gap-3 mb-3">
        <span className={`px-3 py-1 text-xs font-medium rounded ${
          category === 'Blog' ? 'bg-orange-100 text-orange-800' :
          category === 'Case Studies' ? 'bg-red-900 text-white' :
          'bg-blue-900 text-white'
        }`}>
          {category}
        </span>
        <span className="text-sm text-gray-500">{readTime}</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <a 
        href={link}
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:gap-3 transition-all"
      >
        {category === 'Open Source' ? 'View Project' : 'Read more'} <GoArrowUpRight size={18} />
      </a>
    </div>
  </div>
);
// components/ArticleCardWriting.tsx
import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ArticleCardWritingProps {
  image: string;
  readTime: string;
  title: string;
  description: string;
  link: string;
  linkText?: string;
}

export const ArticleCardWriting: React.FC<ArticleCardWritingProps> = ({
  image,
  readTime,
  title,
  description,
  link,
  linkText = 'Read more',
}) => {
  return (
    <article className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Read Time */}
        <p className="text-sm text-[#A3A3A3] mb-3">{readTime}</p>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-semibold text-[#1B1B1B] mb-3 line-clamp-2 group-hover:text-[#E8B67E] transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#525252] leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>

        {/* Link */}
        <a
          href={link}
          className="inline-flex items-center gap-2 text-[#1B1B1B] font-medium hover:gap-3 transition-all hover:text-[#E8B67E] group/link"
        >
          {linkText}
          <ArrowRight 
            size={16} 
            className="group-hover/link:translate-x-1 transition-transform" 
          />
        </a>
      </div>
    </article>
  );
};
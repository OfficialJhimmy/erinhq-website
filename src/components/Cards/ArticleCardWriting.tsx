import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ArticleCardWritingProps {
  image: string;
  readTime: string;
  title: string;
  description: string;
  link: string;
  linkText?: string;
  companyName?: string;
  variant?: 'card' | 'list'; // Add variant prop
}

export const ArticleCardWriting: React.FC<ArticleCardWritingProps> = ({
  image,
  readTime,
  title,
  description,
  link,
  linkText = "Read Article",
  companyName,
  variant = 'card',
}) => {
  // List Layout (for Case Studies, API Docs, etc.)
  if (variant === 'list') {
    return (
      <article className="group border-b border-gray-800 pb-8 last:border-b-0">
        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-medium text-[#525252] mb-3 group-hover:text-[#E8B67E] transition-colors leading-tight">
          {title}
        </h3>

        {/* Company Name */}
        {description && (
          <div className="flex items-center gap-2 mb-4">
            {/* <span className="text-[#E8B67E]">🚀</span> */}
            <p className="text-sm text-[#1B1B1B] tracking-wide">
              {description}
            </p>
          </div>
        )}

        {/* Link */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#1B1B1B] font-medium hover:gap-3 transition-all hover:text-[#E8B67E] group/link"
        >
          {linkText}
          <ArrowRight
            size={16}
            className="group-hover/link:translate-x-1 transition-transform"
          />
        </a>
      </article>
    );
  }

  // Card Layout (for Blogs & Tutorials)
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
          target="_blank"
          rel="noopener noreferrer"
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

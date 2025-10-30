import React from "react";
import { GoArrowUpRight } from "react-icons/go";

interface ExperienceCardProps {
  number: string;
  company: string;
  location: string;
  title: string;
  period: string;
  description: string;
  onReadMore: () => void;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  number,
  company,
  location,
  title,
  period,
  description,
  onReadMore,
}) => {
  return (
    <div className="group relative border-b border-gray-200 py-8 hover:bg-gray-50/50 transition-colors duration-300">
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 items-start">
        {/* Number */}
        <div className="w-20 flex-shrink-0 flex justify-center">
          <span className="font-heading text-5xl md:text-6xl font-medium text-[#1B1B1B] group-hover:text-[#E8B67E] transition-colors duration-300">
            {number}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header Tag */}
          <div className="hidden md:flex items-center gap-2 mb-3">
            <div className="w-12 h-px bg-gray-300" />
            <span className="text-xs uppercase tracking-wider text-[#A3A3A3] font-heading">
              My Experience
            </span>
          </div>

          {/* Company and Title */}
          <h3 className="text-[24px] md:text-[30px] font-semibold text-[#1B1B1B] mb-2">
            {company}, {location} - {title}
          </h3>

          {/* Period */}
          <p className="text-[18px] md:text-[20px] text-[#A3A3A3] mb-4">
            {period}
          </p>

          {/* Description */}
          <p className="text-[#525252] leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>

          {/* Read More Button */}
          <button
            onClick={onReadMore}
            className="inline-flex items-center gap-2 text-[#1B1B1B] font-medium hover:gap-3 transition-all hover:text-[#E8B67E] group/btn"
          >
            Read More
            <GoArrowUpRight
              size={16}
              className="group-hover/btn:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

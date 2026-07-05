// components/ProcessStepCard.tsx
import React from 'react';

interface ProcessStepCardProps {
  number: string;
  description: string;
  bgColor: string;
  alignment: 'left' | 'right';
}

export const ProcessStepCard: React.FC<ProcessStepCardProps> = ({
  number,
  description,
  bgColor,
  alignment,
}) => {
  return (
    <div
      className={`flex ${alignment === 'right' ? 'justify-end' : 'justify-start'} lg:mb-12 mb-6`}
    >
      <div
        className={`rounded-2xl p-8 md:p-10 max-w-3xl w-full transition-shadow duration-300`}
        style={{ backgroundColor: bgColor }}
      >
        {/* Number Badge */}
        <div className="flex items-center gap-2 mb-2">
            <span className="font-heading text-[#1B1B1B] font-bold text-[32px] md:text-[40px] lg:text-[64px]">{number}</span>
        </div>

        <div className="w-full h-[1px] bg-[#E9EFF5] mb-6" />

        {/* Description */}
        <p className="text-[#1B1B1B] text-[18px] md:text-[22px] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
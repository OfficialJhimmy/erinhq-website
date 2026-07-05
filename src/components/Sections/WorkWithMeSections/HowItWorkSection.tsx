// components/sections/HowIWorkSection.tsx
import React from 'react';
import Image from 'next/image';
import { ProcessStepCard } from '@/components/Cards/ProcessStepCard';

interface ProcessStep {
  number: string;
  description: string;
  bgColor: string;
  alignment: 'left' | 'right';
}

const processSteps: ProcessStep[] = [
  {
    number: '01',
    description: 'You reach out with what you need. Maybe you want a developer, a writer, or both. Start by filling out a brief form. Share your goals, project type, and what you hope to achieve.',
    bgColor: '#FFFBF1',
    alignment: 'left',
  },
  {
    number: '02',
    description: 'We talk. I ask you questions, lots of them. This helps me understand your goals, your audience, and where you are right now.',
    bgColor: '#EFE5FC',
    alignment: 'right',
  },
  {
    number: '03',
    description: 'If I know I can deliver real value, we start with a small fixed project or consultation. This way, you see how I think and work before we dive deeper.',
    bgColor: '#FFEAE7',
    alignment: 'left',
  },
  {
    number: '04',
    description: 'I do the research. I learn about your audience, your challenges, and your product. If it is a build, I map out the requirements. If it is writing, I explore the best way to structure and deliver the content.',
    bgColor: '#E2FFFE',
    alignment: 'right',
  },
  {
    number: '05',
    description: 'I create a clear plan and start execution: building, writing, or both. Along the way, I keep you updated, so you are never left in the dark.',
    bgColor: '#FFDAF8',
    alignment: 'left',
  },
  {
    number: '06',
    description: 'By the end, you have something you can actually use, a product that works, or documentation that speaks to the right people.',
    bgColor: '#FCF6E1',
    alignment: 'right',
  },
];

export const HowIWorkSection: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Image
              src="/images/Line.png"
              alt="Decorative line"
              width={60}
              height={16}
              loading="lazy"
              className="object-contain"
            />
            <span className="text-[#A3A3A3] font-heading text-sm uppercase tracking-wider">
              Simple Process
            </span>
          </div>
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium text-[#1B1B1B] leading-tight">
            Here's How I Work With You
          </h2>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Vertical connecting line - decorative */}
          {/* <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent -translate-x-1/2" /> */}

          {processSteps.map((step, index) => (
            <ProcessStepCard
              key={index}
              number={step.number}
              description={step.description}
              bgColor={step.bgColor}
              alignment={step.alignment}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
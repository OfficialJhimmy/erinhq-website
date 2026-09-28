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
    description: 'Understand — Start with the business problem, users, workflow, constraints and desired outcome.',
    bgColor: '#FFFBF1',
    alignment: 'left',
  },
  {
    number: '02',
    description: 'Define — Identify what should be built and decide whether AI, automation, conventional software or a combination makes sense.',
    bgColor: '#EFE5FC',
    alignment: 'right',
  },
  {
    number: '03',
    description: 'Design — Define the product experience, system architecture, integrations, data flows and technical approach.',
    bgColor: '#FFEAE7',
    alignment: 'left',
  },
  {
    number: '04',
    description: 'Build — Engineer the application, AI components, backend services, integrations and infrastructure.',
    bgColor: '#E2FFFE',
    alignment: 'right',
  },
  {
    number: '05',
    description: 'Validate — Test the system, evaluate AI behaviour where relevant and address reliability, security and edge cases.',
    bgColor: '#FFDAF8',
    alignment: 'left',
  },
  {
    number: '06',
    description: 'Launch — Deploy the system and make sure the required operational foundations are in place.',
    bgColor: '#FCF6E1',
    alignment: 'right',
  },
  {
    number: '07',
    description: 'Improve — Continue refining the system based on actual usage, feedback and changing business requirements.',
    bgColor: '#FFFBF1',
    alignment: 'left',
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
              From Problem to Production
            </span>
          </div>
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium text-[#1B1B1B] leading-tight">
            Every project is different, but the process should remain clear.
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
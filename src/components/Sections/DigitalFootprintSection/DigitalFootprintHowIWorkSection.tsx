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
    description: 'Reach out with your idea or project request. Share your goals, audience, and vision.',
    bgColor: '#FFDAF8',
    alignment: 'left',
  },
  {
    number: '02',
    description: 'We schedule a quick call or email exchange to clarify objectives, timelines, and key outcomes.',
    bgColor: '#FFFBF1',
    alignment: 'right',
  },
  {
    number: '03',
    description: 'I create a tailored content plan or strategy outline so you know exactly what to expect.',
    bgColor: '#E2FFFE',
    alignment: 'left',
  },
  {
    number: '04',
    description: 'After approval, I produce, deliver, and optimize the content to engage your audience effectively.',
    bgColor: '#FFEAE7',
    alignment: 'right',
  }
];

export const DigitalFootprintHowIWorkSection: React.FC = () => {
  return (
    <section className="bg-white py-8 lg:py-20 px-6">
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
// components/sections/CTASection.tsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  variant?: 'default' | 'mediaKit';
}

export const CTASection: React.FC<CTASectionProps> = ({ variant = 'default' }) => {
  return (
    <div className="relative bg-gradient-to-br from-[#1B1B1B] via-[#3E2A15] to-[#FF8906] py-32">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {variant === 'default' ? (
          <>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-8">
              Have a project in mind?
            </h2>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[linear-gradient(90deg,#FFFFFF,#FFC687,#FF8906)] text-[#1B1B1B] font-body font-medium rounded-full transition-transform hover:scale-105 p-4 text-[15px]"            >
              Get in Touch <ArrowRight size={20} />
            </a>
          </>
        ) : (
          <>
            <div className="mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-16 h-px bg-white/30" />
                <span className="text-white/70 text-sm uppercase tracking-wider font-heading">
                  Digital Footprint
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
                Media Kit
              </h2>
            </div>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              If you'd like all the details about my reach, platforms, and collaborations, you can download my media kit below.
            </p>
            <a
              href="/media-kit.pdf"
              download
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all shadow-lg hover:shadow-xl hover:gap-3"
            >
              Download Media Kit <ArrowRight size={20} />
            </a>
          </>
        )}
      </div>
    </div>
  );
};
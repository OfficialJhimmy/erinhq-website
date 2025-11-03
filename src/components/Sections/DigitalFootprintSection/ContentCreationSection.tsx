// components/sections/ContentCreationSection.tsx
import React from 'react';
import Image from 'next/image';
import { ArrowRight, Mail } from 'lucide-react';

interface VideoContent {
  thumbnail: string;
  videoUrl: string;
  alt: string;
}

const videoContents: VideoContent[] = [
  {
    thumbnail: '/images/Placeholder-image.svg',
    videoUrl: '#',
    alt: 'Content creation video 1',
  },
  {
    thumbnail: '/images/Placeholder-image.svg',
    videoUrl: '#',
    alt: 'Content creation video 2',
  },
  {
    thumbnail: '/images/Placeholder-image.svg',
    videoUrl: '#',
    alt: 'Content creation video 3',
  },
];

export const ContentCreationSection: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="border-gray-300 rounded-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-gray-300" />
            <span className="text-[#A3A3A3] font-heading text-sm uppercase tracking-wider">
              Digital Footprint
            </span>
          </div>
          <h2 className="text-3xl md:text-[40px] font-semibold text-[#1B1B1B] mb-4">
            Content Creation
          </h2>
          <p className="text-[#4D4D4D] text-base md:text-[20px] leading-relaxed">
            I make short, impactful videos that cover everything from frontend engineering tips to productivity hacks. My goal is always the same: create content that people replay, save, and share because it feels practical and inspiring.
          </p>
        </div>

        {/* Video Grid */}
        <div className="border-gray-300 rounded-lg p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            {videoContents.map((video, index) => (
              <a
                key={index}
                href={video.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-[9/16] bg-gray-100 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={video.thumbnail}
                  alt={video.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-black border-b-8 border-b-transparent ml-1" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="border-gray-300 rounded-lg p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Contact Info */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-[#A3A3A3] mb-1">Get In Touch With ERIN</p>
                <a 
                  href="mailto:erinthebrand@gmail.com"
                  className="text-[#4D4D4D] font-medium hover:text-[#E8B67E] transition-colors"
                >
                  creatives@erinhq.com
                </a>
              </div>
            </div>

            {/* See More Link */}
            <a
              href="https://instagram.com/erinthebrand"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#1B1B1B] font-medium hover:gap-3 transition-all hover:text-[#E8B67E] group"
            >
              See More Videos on my Instagram
              <ArrowRight 
                size={20} 
                className="group-hover:translate-x-1 transition-transform" 
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
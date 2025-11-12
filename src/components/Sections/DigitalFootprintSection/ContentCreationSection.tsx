// components/sections/ContentCreationSection.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

interface VideoContent {
  instagramUrl: string;
  embedUrl: string;
  alt: string;
}

const videoContents: VideoContent[] = [
  {
    instagramUrl: 'https://www.instagram.com/reel/DIthDu4tp9c/?igsh=MWg4OXlmdWhzOHN2NQ==',
    embedUrl: 'https://www.instagram.com/reel/DIthDu4tp9c/embed',
    alt: 'Content creation video 1',
  },
  {
    instagramUrl: 'https://www.instagram.com/reel/DQOfZW4jJbC/?igsh=Zjgwa3g5c3V4eWt6',
    embedUrl: 'https://www.instagram.com/reel/DQOfZW4jJbC/embed',
    alt: 'Content creation video 2',
  },
  {
    instagramUrl: 'https://www.instagram.com/reel/DQb85tDjK4L/?igsh=ODY4Y3hvdGY3OWc=',
    embedUrl: 'https://www.instagram.com/reel/DQb85tDjK4L/embed',
    alt: 'Content creation video 3',
  },
];

const InstagramReelEmbed: React.FC<{ video: VideoContent; index: number }> = ({ 
  video, 
  index 
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
          
          // Load iframe when it becomes visible for the first time
          if (entry.isIntersecting && !hasLoaded) {
            setHasLoaded(true);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% visible
        rootMargin: '50px', // Start loading slightly before entering viewport
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasLoaded]);

  return (
    <div
      ref={containerRef}
      className="group relative aspect-[9/16] bg-gray-100 rounded-lg overflow-hidden"
    >
      {hasLoaded ? (
        <iframe
          ref={iframeRef}
          src={`${video.embedUrl}?autoplay=${isVisible ? '1' : '0'}`}
          className="w-full h-full border-0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          loading="lazy"
          title={video.alt}
        />
      ) : (
        // Placeholder while not loaded
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400">
          <div className="text-white text-center">
            <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-2" />
            <p className="text-sm font-medium">Loading Reel...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export const ContentCreationSection: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="border-gray-300 rounded-lg lg:p-8 p-2 mb-8">
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
        <div className="border-gray-300 rounded-lg lg:p-8 p-2 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            {videoContents.map((video, index) => (
              <InstagramReelEmbed key={index} video={video} index={index} />
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="border-gray-300 rounded-lg lg:p-8 p-2">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Contact Info */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <p className="text-sm text-[#A3A3A3] mb-1">Get In Touch With ERIN</p>
                <a 
                  href="mailto:creatives@erinhq.com"
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
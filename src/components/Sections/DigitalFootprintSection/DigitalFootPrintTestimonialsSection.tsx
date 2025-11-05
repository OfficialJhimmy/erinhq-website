// components/sections/TestimonialsSection.tsx
'use client';

import { TestimonialCard } from '@/components/Cards/TestimonialCard';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  testimonial: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Dazzle Healer',
    role: 'Front End Developer',
    avatar: '/images/Avatar.svg',
    rating: 5,
    testimonial: "The attention to detail and usability are truly amazing for all designers. I highly recommend it for any type of project."
  },
  {
    name: 'Dazzle Healer',
    role: 'Front End Developer',
    avatar: '/images/Avatar.svg',
    rating: 5,
    testimonial: "I've used other kits, but this one is the best. The attention to detail and usability are truly amazing for all designers. I highly recommend it for any type of project."
  },
  {
    name: 'Dazzle Healer',
    role: 'Front End Developer',
    avatar: '/images/Avatar.svg',
    rating: 5,
    testimonial: "I've used other kits, but this one is the best. The attention to detail and usability are truly amazing for all designers. I highly recommend it for any type of project."
  },
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    avatar: '/images/Avatar.svg',
    rating: 5,
    testimonial: "Working with Erin was a game-changer for our team. The technical expertise combined with clear communication made the entire process seamless."
  },
  {
    name: 'Michael Chen',
    role: 'CEO, TechStart',
    avatar: '/images/Avatar.svg',
    rating: 5,
    testimonial: "Exceptional work! The documentation was clear, the code was clean, and the project was delivered ahead of schedule. Highly recommended!"
  }
];

export const DigitalFootPrintTestimonialsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.3; // Slower speed for testimonials

    const animate = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed;
        
        // Calculate the width of one set of testimonials
        const cardWidth = scrollContainer.scrollWidth / 3;
        
        // Reset scroll position for seamless loop
        if (scrollPosition >= cardWidth) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);

  return (
    <section className=" py-4 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Image
              src="/images/Line.png"
              alt="Straight line"
              width={60}
              height={16}
              loading="lazy"
              className="object-contain"
            />
            <span className="text-[#A3A3A3] font-heading text-sm uppercase tracking-wider">
              Testimonials
            </span>
          </div>
          <h2 className="text-[32px] md:text-[40px] font-medium text-[#1B1B1B]">
            What people I've Worked With Say About Me
          </h2>
        </div>

        {/* Auto-scrolling carousel */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            {duplicatedTestimonials.map((testimonial, idx) => (
              <div 
                key={`testimonial-${idx}`} 
                className="flex-shrink-0 w-[85vw] sm:w-[400px] lg:w-[calc(50%-12px)]"
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>

          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
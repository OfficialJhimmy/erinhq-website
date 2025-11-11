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
    name: 'Zainab Daoudu',
    role: 'Founder, WriteTech Hub',
    avatar: '/images/Avatar.svg',
    rating: 5,
    testimonial: "The attention to detail and usability are truly amazing for all designers. I highly recommend it for any type of project."
  },
  {
    name: 'Omotola E. Omotayo',
    role: 'Founder, Elegance Media',
    avatar: '/images/Avatar.svg',
    rating: 5,
    testimonial: "The attention to detail and usability are truly amazing for all designers. I highly recommend it for any type of project."
  },
  {
    name: 'Tolulope Olawumi',
    role: 'Project Manager, Marketing & Communication Strategist',
    avatar: '/images/tolu.jpeg',
    rating: 5,
    testimonial: "I had the pleasure of working with Feyijimi at WriteTech Hub where I was the Marketing Manager and he was our Technical Writer. Jimi stood out for his ability to take complex technical ideas and turn them into content that was clear, engaging, and easy to understand. His work made it much easier for our team to communicate with both technical and non-technical audiences. He was always open to feedback, quick to contribute ideas, and worked seamlessly across teams. His professionalism and consistency made him a reliable partner on every project we worked on together. Anyone looking for a skilled Technical Writer who can blend technical expertise with creativity will be lucky to have Feyijimi on their team."
  },
  {
    name: 'Femi Akinyemi',
    role: 'Senior Software Engineer',
    avatar: '/images/femi.jpeg',
    rating: 5,
    testimonial: "I’ve had the pleasure of working with ERIN for the past three years as a frontend engineer. He consistently delivers high-quality, scalable solutions, communicates effectively, and is a reliable team player. I highly recommend him for any Software Engineering role."
  },
  {
    name: 'Abdulrasaq Jamiu Adewuyi',
    role: 'Senior Software Engineer',
    avatar: '/images/jamiu.jpeg',
    rating: 5,
    testimonial: "I currently work alongside Feyijimi at Datamellon, and he’s easily one of the most talented and reliable software engineers I’ve worked with. His expertise in working with several frontend, and backend frameworks and technologies, improving product performance, or creating clean, well-designed user experiences. What makes Feyijimi stand out is not just his technical skills but also his eye for great design, attention to detail, and passion for writing clean, efficient code. He’s also a great teammate, collaborative, supportive, and always willing to jump in to solve tough challenges."
  },
  {
    name: 'John Alokan',
    role: 'Senior Full Stack Software Engineer',
    avatar: '/images/john.jpeg',
    rating: 5,
    testimonial: "Working with Feyijimi at Datamellon has been an outstanding experience. His frontend engineering expertise is truly impressive, and collaborating with him as a backend engineer has been seamless. Our integration process was smooth, with minimal friction, thanks to his clear communication and technical precision. Feyijimi’s attention to detail consistently stands out"
  },
  {
    name: 'Toyibat Adele',
    role: 'Technical Writer',
    avatar: '/images/toyibat.jpeg',
    rating: 5,
    testimonial: "I’ve had the privilege of working directly with Feyijimi at WriteTech Hub, and he has been such a great colleague to learn from. He’s proactive, always on top of his tasks, and consistently shows up for the team whenever there’s a need. Feyijimi has a unique mix of creativity and strong work ethic that makes collaborating with him both easy and inspiring. He’s also a great team player, never hesitating to share ideas or chip in during meetings. Working with him has truly been a rewarding experience, and I admire the energy and commitment he brings to everything he does."
  },
];

export const TestimonialsSection: React.FC = () => {
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
    <section className="py-20 overflow-hidden">
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
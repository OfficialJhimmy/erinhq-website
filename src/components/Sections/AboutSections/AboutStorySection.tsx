// components/sections/AboutStorySection.tsx
import React from 'react';
import Image from 'next/image';

export const AboutStorySection: React.FC = () => {
  return (
    <section className="bg-white py-10 lg:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-9 lg:mb-16">
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
              About Me
            </span>
          </div>
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium text-[#1B1B1B] leading-tight">
            My Story, What Drives Me, Beyond Work
          </h2>
        </div>

        {/* Story Content */}
        <div className="space-y-6 text-[#525252] leading-relaxed">
          <p className="text-base md:text-lg">
            My name is Feyijimi Erinle, or you can call me ERIN, and I live in Lagos, Nigeria. Looking back, I've always been the kind of person who was curious about how computers and the internet worked. I loved tinkering with phones, trying out new tools, and imagining what it would be like to build something of my own.
          </p>

          <p className="text-base md:text-lg">
            That curiosity didn't fully take shape until my final year at the University of Lagos, where I studied Actuarial Science. At the time, I had no clear direction on what to do after graduation. One day, someone came to our department to share a flyer about learning Python. That small moment of curiosity was the spark that set me on a completely new path.
          </p>

          <p className="text-base md:text-lg">
            From that point, I dove headfirst into programming, teaching myself through online resources, building small projects, and learning by doing. It wasn't always easy—there were moments of frustration and self-doubt—but I kept going because I genuinely loved solving problems with code.
          </p>

          <p className="text-base md:text-lg">
            Today, I work as a software engineer and technical writer, and I've found that my favorite part of the job isn't just writing code—it's explaining it. I love breaking down complex ideas into clear, simple language that anyone can understand. Whether it's through documentation, tutorials, or open-source contributions, I'm passionate about making technology more accessible.
          </p>

          <p className="text-base md:text-lg">
            Outside of work, I'm into fitness, music, and exploring new places when I get the chance. I also enjoy connecting with other developers and creators, sharing what I've learned, and learning from others in return.
          </p>

          <p className="text-base md:text-lg">
            At the core of it all, I'm someone who believes in continuous growth—both as a developer and as a person. I'm always looking for the next challenge, the next thing to learn, and the next way to make an impact.
          </p>
        </div>
      </div>
    </section>
  );
};
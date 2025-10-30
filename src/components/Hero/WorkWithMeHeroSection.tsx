// components/sections/WorkWithMeHeroSection.tsx
import React from "react";
import Image from "next/image";

export const WorkWithMeHeroSection: React.FC = () => {
  return (
    <section className="bg-[#1B1B1B] min-h-screen flex items-center py-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="font-heading text-center text-4xl md:text-5xl lg:text-6xl font-bold text-[#E8B67E] mb-8 tracking-wide">
          WORK WITH ME
        </h1>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Profile Image */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full max-w-2xl mx-auto lg:mx-0">
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/erin-work.svg"
                  alt="Erin - Ready to collaborate"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Decorative border accent */}
              <div className="absolute -inset-4 border-2 border-[#E8B67E]/30 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            {/* Main Description */}
            <p className="text-[#E2E2E2] font-normal text-lg md:text-xl leading-relaxed mb-8">
              If you want to collaborate on a project, hire me to build
              something, or bring me in to write and explain your product
              better, this page is where we start.
            </p>

            {/* Services List */}
            <div className="mb-8">
              <p className="text-white/90 text-lg mb-4">
                I work in two main ways:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-[#E8B67E] font-bold text-xl flex-shrink-0">
                    •
                  </span>
                  <p className="text-[#E2E2E2] text-base md:text-lg leading-relaxed">
                    <span className="font-semibold text-white">
                      Software Engineering →
                    </span>{" "}
                    I design and build clean, scalable, and user-focused web
                    applications.
                  </p>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#E8B67E] font-bold text-xl flex-shrink-0">
                    •
                  </span>
                  <p className="text-[#E2E2E2] text-base md:text-lg leading-relaxed">
                    <span className="font-semibold text-white">
                      Technical Writing →
                    </span>{" "}
                    I create content that educates, inspires, and helps people
                    truly understand your product or technology.
                  </p>
                </li>
              </ul>
            </div>

            {/* Value Proposition */}
            <p className="text-[#E2E2E2] text-lg md:text-xl leading-relaxed mb-8">
              Together, these skills let me not only build tools but also tell
              their story in a way that gets people to use and trust them.
            </p>

            {/* Call to Action Text */}
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
              Whether you're a startup that needs your first product out the
              door, a company that wants better developer documentation, or a
              team looking for clear, human-centered technical content, I can
              help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

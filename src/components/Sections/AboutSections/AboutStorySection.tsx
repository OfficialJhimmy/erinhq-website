// components/sections/AboutStorySection.tsx
import React from "react";
import Image from "next/image";

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
        <div className="space-y-14">
          {/* My Story */}
          <div>
            <h3 className="font-heading text-xl md:text-2xl font-medium text-[#1B1B1B] mb-4">
              My Story
            </h3>
            <div className="space-y-6 text-[#525252] leading-relaxed">
              <p className="text-base md:text-lg">
                My name is Feyijimi Erinle, but most people simply call me
                ERIN. I am based in Lagos, Nigeria, and my journey into tech
                started long before I realised it. I was the kid who wanted
                to know why computers behaved the way they did, why websites
                worked the way they did, and why a single line of code could
                change everything. I was always exploring, fixing, breaking,
                and testing things without knowing it was shaping my future.
              </p>

              <p className="text-base md:text-lg">
                Things became clearer during my final year at the University
                of Lagos, where I studied Actuarial Science. I had no defined
                plan for after graduation. Then one afternoon, someone came
                to our department to introduce a beginner Python workshop,
                and that single moment shifted everything for me. I followed
                the spark and it opened a world I did not know I needed.
              </p>

              <p className="text-base md:text-lg">
                I taught myself to code. I built small projects, made
                mistakes, and learned from them. There were days when
                nothing made sense, but the joy of solving problems kept me
                going. Over time, I realised my strength was not just in
                writing code but in explaining it and making it useful to
                other people, which is the thread that still runs through
                everything I build today.
              </p>
            </div>
          </div>

          {/* What Drives Me */}
          <div>
            <h3 className="font-heading text-xl md:text-2xl font-medium text-[#1B1B1B] mb-4">
              What Drives Me
            </h3>
            <div className="space-y-6 text-[#525252] leading-relaxed">
              <p className="text-base md:text-lg">
                Today, I lead AI engineering work at Refactrd, where I help
                startups and enterprise teams move from AI experimentation to
                systems that actually change how they operate. That work sits
                on top of years spent as a full stack and frontend engineer,
                which is why I care as much about how a product feels to use
                as I do about whether the model behind it works.
              </p>

              <p className="text-base md:text-lg">
                What drives me is the gap between what technology can do and
                what most people actually understand about it. I am
                genuinely more interested in whether a workflow saves someone
                real time than in whether it sounds impressive in a pitch
                deck. Building and teaching have always been the same
                instinct for me, just pointed in different directions.
              </p>
            </div>
          </div>

          {/* Beyond Work */}
          <div>
            <h3 className="font-heading text-xl md:text-2xl font-medium text-[#1B1B1B] mb-4">
              Beyond Work
            </h3>
            <div className="space-y-6 text-[#525252] leading-relaxed">
              <p className="text-base md:text-lg">
                Outside of work, I care about fitness, music, and discovering
                new places when I get the chance. I enjoy real conversations
                with other builders and creators, sharing what I have learned
                and learning from what they are working on in return.
              </p>

              <p className="text-base md:text-lg">
                At the core of it all, I believe in continuous growth, as an
                engineer and as a person. I am always looking for the next
                thing to learn and the next way to make what I build actually
                matter to someone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
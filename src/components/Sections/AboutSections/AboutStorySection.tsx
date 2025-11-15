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
        {/* <div className="space-y-6 text-[#525252] leading-relaxed">
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
        </div> */}
        <div className="space-y-6 text-[#525252] leading-relaxed">
          <p className="text-base md:text-lg">
            My name is Feyijimi Erinle, but most people simply call me ERIN. I’m
            based in Lagos, Nigeria, and my journey into tech started long
            before I realised it. I was that kid who wanted to know why
            computers behaved the way they did, why websites worked the way they
            did, and why a single line of code could change everything. I was
            always exploring, fixing, breaking, and testing things without even
            knowing it was shaping my future.
          </p>

          <p className="text-base md:text-lg">
            Things became clearer during my final year at the University of
            Lagos where I studied Actuarial Science. I had no defined post
            graduation plan. Then one afternoon, someone came to our department
            to introduce a beginner Python workshop, and that single moment
            shifted everything for me. I followed the spark and it opened a
            world I didn’t know I needed.
          </p>

          <p className="text-base md:text-lg">
            I taught myself to code. I built small projects. I made mistakes and
            learned from them. There were days when nothing made sense, but the
            joy of solving problems kept me going. Over time, I realised that my
            strength was not just in writing code but in explaining it. Turning
            complex concepts into simple, clear language became something I
            genuinely enjoyed.
          </p>

          <p className="text-base md:text-lg">
            Today, I work as a Software Engineer and Technical Writer. My work
            sits at the intersection of building and teaching. I create, I
            document, and I share. I’m passionate about helping people
            understand technology in a way that feels welcoming rather than
            intimidating. Whether I’m writing documentation, creating tutorials,
            or contributing to open source projects, my goal is to make tech
            easier for someone else.
          </p>

          <p className="text-base md:text-lg">
            Beyond work, I’m a person who loves fitness, music, and discovering
            new places when I can. I enjoy meaningful conversations, connecting
            with other builders and creators, and contributing to communities
            that help people grow. I’m constantly learning, constantly
            experimenting, and constantly improving.
          </p>

          <p className="text-base md:text-lg">
            At the heart of everything I do is growth. Growth as an engineer.
            Growth as a writer. Growth as a creator. Growth as a person. I’m
            driven by the belief that every skill can be refined, every idea can
            be improved, and every experience can shape the next chapter. I’m
            always looking forward to what I can build, who I can help, and the
            impact I can make along the way.
          </p>
        </div>
      </div>
    </section>
  );
};

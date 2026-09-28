// // components/sections/AboutHeroSection.tsx
// import React from "react";
// import Image from "next/image";

// export const AboutHeroSection: React.FC = () => {
//   return (
//     <section className="bg-[#1B1B1B] min-h-[50vh] lg:min-h-screen flex flex-col items-center justify-center py-20 px-6">
//       <div className="max-w-7xl w-full mx-auto">
//         <div className="flex flex-col gap-2 mb-4 w-fit justify-center mx-auto">
//           <p className="font-heading text-center lg:text-[110px] text-[60px] md:text-[95px] font-normal leading-[70px] md:leading-[90px] bg-gradient-to-r from-[#FFFFFF] to-[#FF8906] bg-clip-text text-transparent">
//           ERIN THE BRAND
//         </p>
//         <p className="text-[#FFF] text-right text-base md:text-lg font-normal tracking-wide">
//           Imagine Creative, Imagine Modern
//         </p>
//         </div>
        
//         <div className="w-full mb-8">
//           <Image
//             src="/images/erin-big.svg"
//             alt="ERIN THE BRAND"
//             width={1920}
//             height={600}
//             className="w-full h-auto"
//             priority
//           />
//         </div>        
//       </div>
//     </section>
//   );
// };


// components/sections/AboutHeroSection.tsx
import React from "react";
import Link from "next/link";
import { HeroBackgroundImage } from "@/components/ui";

const roles = [
  "AI Engineer",
  "Software Engineer",
  "Technical Writer",
  "Content Creator",
];

export const AboutHeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#1B1B1B] min-h-screen flex flex-col justify-center py-28 px-6">
      <HeroBackgroundImage src="/images/about-hero.webp" />
      <div className="relative z-10 max-w-6xl w-full mx-auto">
        <span className="text-white/60 font-heading text-sm uppercase tracking-wider mb-6 block">
          About ERIN
        </span>

        <h1 className="font-heading text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] font-normal leading-[1.1] bg-gradient-to-r from-[#FFFFFF] to-[#FF8906] bg-clip-text text-transparent mb-6 max-w-4xl">
          I started by building software. Today, I build intelligent systems.
        </h1>

        <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-3xl mb-14">
          I&apos;m Feyijimi Erinle, an AI Engineer and Software Engineer based in Lagos, Nigeria.
          My work has evolved from frontend development into full-stack engineering, backend
          systems, cloud infrastructure and AI engineering. Today, I design and build intelligent
          systems, AI products, automation and scalable software that solve real business
          problems.
        </p>

        {/* Statement + quick facts */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start border-t border-white/10 pt-12">
          <div className="flex flex-wrap gap-2">
            {roles.map((role) => (
              <span
                key={role}
                className="px-4 py-2 rounded-full border border-white/15 text-white/80 text-sm"
              >
                {role}
              </span>
            ))}
          </div>

          <div>
            <p className="text-white/60 text-sm mb-6">
              Lagos, Nigeria &middot; Working globally &middot; Building since 2019.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-[#E8B67E] font-medium hover:gap-3 transition-all"
              >
                Explore My Work
                <span aria-hidden="true">↗</span>
              </Link>
              <Link
                href="/work-with-me"
                className="inline-flex items-center gap-2 text-[#E8B67E] font-medium hover:gap-3 transition-all"
              >
                Work With Me
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
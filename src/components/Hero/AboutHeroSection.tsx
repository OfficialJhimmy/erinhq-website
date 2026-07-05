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
import Image from "next/image";
import Link from "next/link";

const roles = [
  "Software Engineer",
  "AI Engineer",
  "Technical Writer",
  "Content Creator",
];

export const AboutHeroSection: React.FC = () => {
  return (
    <section className="bg-[#1B1B1B] min-h-screen flex flex-col justify-center py-28 px-6">
      <div className="max-w-6xl w-full mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-8">
          <Image
            src="/images/Line.png"
            alt="Decorative line"
            width={60}
            height={16}
            loading="lazy"
            className="object-contain"
          />
          <span className="text-white/60 font-heading text-sm uppercase tracking-wider">
            About
          </span>
        </div>

        {/* Wordmark */}
        <p className="font-heading text-[56px] sm:text-[72px] md:text-[95px] lg:text-[110px] font-normal leading-[60px] sm:leading-[76px] md:leading-[90px] bg-gradient-to-r from-[#FFFFFF] to-[#FF8906] bg-clip-text text-transparent mb-3">
          ERIN THE BRAND
        </p>
        <p className="text-[#E8B67E] text-base md:text-lg font-normal tracking-wide mb-14">
          Imagine Creative, Imagine Modern
        </p>

        {/* Statement + quick facts */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start border-t border-white/10 pt-12">
          <p className="text-white/90 text-lg md:text-xl leading-relaxed">
            I am Feyijimi Erinle, and most people know me as ERIN. I build
            software, I write about it, and I teach other people how to do
            both. My work moves between engineering, AI, and communication,
            and I care more about whether something actually works for the
            person using it than how impressive it sounds on paper.
          </p>

          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              {roles.map((role) => (
                <span
                  key={role}
                  className="px-4 py-2 rounded-full border border-white/15 text-white/80 text-sm"
                >
                  {role}
                </span>
              ))}
            </div>
            <p className="text-white/60 text-sm mb-6">
              Based in Lagos, Nigeria. Building since 2019.
            </p>
            <Link
              href="/work-with-me"
              className="inline-flex items-center gap-2 text-[#E8B67E] font-medium hover:gap-3 transition-all"
            >
              Work with me
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
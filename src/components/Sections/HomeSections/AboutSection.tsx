// components/sections/AboutSection.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

export const AboutSection: React.FC = () => {
  return (
    // <section className="py-8">
    //   <div className="max-w-7xl mx-auto px-6">
    //     <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
    //       <div>
    //         <div className=" flex items-center gap-2 mb-6">
    //           <Image
    //             src="/images/Line.png"
    //             alt="Straight line"
    //             width={60}
    //             height={16}
    //             loading="lazy"
    //             className="object-contain"
    //           />
    //           <span className="text-[#A3A3A3] font-heading text-sm uppercase tracking-wider">
    //             About Me
    //           </span>
              
    //         </div>
    //         <h2 className="text-3xl md:text-[38px] lg:text-[40px] font-normal text-[#1B1B1B] mb-6">
    //             About ERIN THE BRAND
    //           </h2>
    //           <p className="text-[#1B1B1B] leading-relaxed mb-6">
    //             For me, tech is more than just code. It's about solving
    //             problems, sharing stories, and building communities. I like
    //             making complicated things easier to understand through clear
    //             documentation, and I enjoy building AI tools that people
    //             actually find useful and fun. At the heart of it, I bring
    //             engineering and communication together with a creative touch.
    //           </p>
    //           <Link
    //             href="/about"
    //             className="inline-flex items-center gap-2 text-gray-900 font-medium hover:gap-3 transition-all underline"
    //           >
    //             Know About ERIN <GoArrowUpRight size={18} />
    //           </Link>
    //       </div>

    //       <div className="relative">
    //         <Image
    //           src="/images/bigerinhq.png"
    //           alt="ERIN The Brand Logo"
    //           width={450}
    //           height={600}
    //           className="object-cover"
    //           loading="lazy"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
        {/* Text Section */}
        <div className="max-w-lg md:pl-6">
          <div className="flex items-center gap-2 mb-6">
            <Image
              src="/images/Line.png"
              alt="Straight line"
              width={60}
              height={16}
              loading="lazy"
              className="object-contain"
            />
            <span className="text-[#A3A3A3] font-heading text-sm uppercase tracking-wider">
              About Me
            </span>
          </div>

          <h2 className="text-3xl md:text-[38px] lg:text-[40px] font-normal text-[#1B1B1B] mb-6">
            About ERIN THE BRAND
          </h2>

          <p className="text-[#1B1B1B] leading-relaxed mb-6">
            For me, tech is more than just code. It's about solving problems,
            sharing stories, and building communities. I like making
            complicated things easier to understand through clear
            documentation, and I enjoy building AI tools that people actually
            find useful and fun. At the heart of it, I bring engineering and
            communication together with a creative touch.
          </p>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-gray-900 font-medium hover:gap-3 transition-all underline"
          >
            Know About ERIN <GoArrowUpRight size={18} />
          </Link>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center md:justify-end">
          <Image
            src="/images/bigerinhq.png"
            alt="ERIN The Brand Logo"
            width={520}
            height={680}
            className="object-cover rounded-2xl shadow-sm"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
  );
};

// components/sections/ConnectSection.tsx
import React from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

interface SocialLink {
  name: string;
  handle: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const socials: SocialLink[] = [
  {
    name: "Instagram",
    handle: "@erinthebrand",
    description: "Tips, updates, and a look at what I am building right now.",
    href: "https://www.instagram.com/erinthebrand/",
    icon: <FaInstagram size={20} />,
  },
  {
    name: "TikTok",
    handle: "@erinthebrand",
    description: "Quick web development clips and behind-the-scenes builds.",
    href: "https://www.tiktok.com/@erinthebrand",
    icon: <FaTiktok size={20} />,
  },
  {
    name: "YouTube",
    handle: "@erinthebrand",
    description: "Longer tutorials for people who want the full walkthrough.",
    href: "https://www.youtube.com/@erinthebrand",
    icon: <FaYoutube size={20} />,
  },
  {
    name: "X",
    handle: "@erinthebrand",
    description: "Quick thoughts on engineering, AI, and building in public.",
    href: "https://x.com/erinthebrand",
    icon: <FaXTwitter size={20} />,
  },
  {
    name: "LinkedIn",
    handle: "Feyijimi Erinle",
    description: "Where I keep the professional record straight.",
    href: "https://linkedin.com/in/feyijimierinle",
    icon: <FaLinkedin size={20} />,
  },
  {
    name: "Email",
    handle: "creatives@erinhq.com",
    description: "The fastest way to reach me about actual work.",
    href: "mailto:creatives@erinhq.com",
    icon: <FaEnvelope size={20} />,
  },
];

export const ConnectSection: React.FC = () => {
  return (
    <section className="bg-[#1B1B1B] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
          {/* Left: personal touch */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/images/Line.png"
                alt="Straight line"
                width={60}
                height={16}
                loading="lazy"
                className="object-contain"
              />
              <span className="text-white/50 font-heading text-sm uppercase tracking-wider">
                Let's connect
              </span>
            </div>

            <h2 className="text-3xl md:text-[38px] lg:text-[40px] font-normal text-white mb-6 leading-tight">
              Get to know me beyond the resume
            </h2>

            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/images/erin-two.png"
                  alt="Feyijimi Erinle"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-white/70 text-base leading-relaxed">
                Lagos-based, always building, usually mid-project. This is
                where I sound like myself instead of a CV.
              </p>
            </div>
          </div>

          {/* Right: social grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between border border-white/10 rounded-2xl p-5 hover:border-white/25 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[#E8B67E]">{social.icon}</span>
                    <GoArrowUpRight
                      size={16}
                      className="text-white/40 group-hover:text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </div>
                  <p className="text-white font-medium mb-1">{social.name}</p>
                  <p className="text-white/50 text-sm mb-3">
                    {social.handle}
                  </p>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  {social.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
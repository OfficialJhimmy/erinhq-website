// components/Footer.tsx
import React from "react";
import Link from "next/link";
import { ArrowRight, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import { FaTiktok } from "react-icons/fa";

// Custom X (Twitter) Icon component
const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "About ERIN", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Writing", href: "/writing" },
    { name: "Digital Footprint", href: "/digital-footprint" },
    { name: "Get in Touch", href: "/links" },
    { name: "Work With Me", href: "/work-with-me" },
  ];

  const footerLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookies Settings", href: "#" },
  ];

  const socialLinks = [
    { name: "TikTok", icon: FaTiktok, href: "https://www.tiktok.com/@erinthebrand?_r=1&_t=ZS-91LVN0OmxrJ" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/erinthebrand" },
    { name: "X (Twitter)", icon: XIcon, href: "https://x.com/erinthebrand" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/feyijimierinle" },
  ];

  return (
    <footer className="bg-[#1B1B1B] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top section with logo and navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div className="flex flex-col gap-6">
            <div>
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/white-erin-logo.png"
                  alt="ERIN Logo"
                  width={80}
                  height={40}
                  className="h-[90px] w-auto"
                  loading="lazy"
                />
              </Link>
            </div>
            <div>
              {/* Navigation Links */}
              <nav className="flex flex-col lg:flex-row flex-wrap gap-x-8 gap-y-4">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-white/80 hover:text-[#E8B67E] transition-colors text-[17px] lg:text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-[#E8B67E] transition-colors"
                      aria-label={social.name}
                    >
                      <IconComponent />
                    </a>
                  );
                })}
              </div>
            </div>
            <div>
              <a
                href="https://erinhq.fillout.com/contact-me"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[linear-gradient(90deg,#FFFFFF,#FFC687,#FF8906)] text-[#1B1B1B] font-body font-medium rounded-full transition-transform hover:scale-105 p-4 text-[15px]"
              >
                Get in Touch <ArrowRight size={18} />
              </a>
            </div>
          </div>
          {/* Social Icons and CTA */}
        </div>

        {/* Large Brand Text */}
        <div className="mb-12 overflow-hidden">
          <p className="font-heading lg:text-[110px] text-[60px] md:text-[95px] font-normal leading-[70px] md:leading-[90px] bg-gradient-to-r from-[#FFFFFF] to-[#FF8906] bg-clip-text text-transparent">
            ERIN THE BRAND
          </p>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/60 hover:text-[#E8B67E] transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <p className="text-white/60 text-sm">
            © {currentYear} ERINHQ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

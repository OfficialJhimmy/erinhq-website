// components/Footer.tsx
'use client'
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useRestrictedSession } from "@/hooks/useRestrictedSession";
import { socialLinks } from "@/data/social";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const isRestricted = useRestrictedSession();

  const { trackButtonClick, trackLinkClick } = useAnalytics();

  const navigationLinks = [
    { name: "AI Solutions", href: "/ai-solutions" },
    { name: "AI Engineering", href: "/ai-engineering" },
    { name: "Projects", href: "/projects" },
    { name: "Writing", href: "/writing" },
    { name: "About", href: "/about" },
    { name: "Work With Me", href: "/work-with-me" },
  ];

  const footerLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookies Settings", href: "#" },
  ];

  return (
    <footer className="bg-[#1B1B1B] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top section with logo and navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div className="flex flex-col gap-6">
            <div>
              {isRestricted ? (
                <div className="flex items-center">
                  <Image
                    src="/images/white-erin-logo.png"
                    alt="ERIN Logo"
                    width={80}
                    height={40}
                    className="h-[90px] w-auto"
                    loading="lazy"
                  />
                </div>
              ) : (
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
              )}
            </div>
            {!isRestricted && (
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
            )}
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
                      onClick={() => trackLinkClick(social.name, 'Footer')}
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
              <Link
                href="/work-with-me"
                onClick={() => trackButtonClick('Footer CTA - Work With Me')}
                className="inline-flex items-center justify-center gap-2 bg-brand-gradient text-ink font-body font-medium rounded-full transition-transform hover:scale-105 p-4 text-[15px]"
              >
                Work With Me <ArrowRight size={18} />
              </Link>
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
          <div className="flex flex-col items-center md:items-end gap-1 text-right">
            <p className="text-white/60 text-sm">Lagos, Nigeria &middot; Working globally</p>
            <p className="text-white/60 text-sm">
              &copy; {currentYear} ERINHQ. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
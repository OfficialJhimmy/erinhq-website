// components/Navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useRestrictedSession } from "@/hooks/useRestrictedSession";
import { socialLinks } from "@/data/social";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMinimalMode = useRestrictedSession();
  const pathname = usePathname();

  const { trackButtonClick, trackLinkClick } = useAnalytics();

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "AI Solutions", href: "/ai-solutions" },
    { name: "AI Engineering", href: "/ai-engineering" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 lg:py-4 ${
          isScrolled
            ? "bg-[#1B1B1B]/95 backdrop-blur-md shadow-lg"
            : "bg-[#1B1B1B]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            {/* Logo - not clickable in restricted mode */}
            {isMinimalMode ? (
              <div className="flex items-center z-50" aria-hidden="false">
                <Image
                  src="/images/erinhq.png"
                  alt="ERIN Logo"
                  width={60}
                  height={40}
                  className="h-[70px] w-auto"
                />
              </div>
            ) : (
              <Link
                href="/"
                className="flex items-center z-50"
                onClick={handleLinkClick}
              >
                <Image
                  src="/images/erinhq.png"
                  alt="ERIN Logo"
                  width={60}
                  height={40}
                  className="h-[70px] w-auto"
                />
              </Link>
            )}

            {/* Desktop Navigation - Hidden in minimal mode */}
            {!isMinimalMode && (
              <div className="hidden lg:flex items-center justify-center flex-1 mx-12">
                <div className="bg-[linear-gradient(90deg,#FFFFFF,#FFC687,#FF8906)] rounded-full px-8 py-4 shadow-lg">
                  <div className="flex items-center gap-8">
                    {navigationLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={handleLinkClick}
                        className={`text-sm font-medium transition-colors relative ${
                          isActiveLink(link.href)
                            ? "text-[#333333]"
                            : "text-[#333333] hover:text-gray-900"
                        }`}
                      >
                        {link.name}
                        {isActiveLink(link.href) && (
                          <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-600 rounded-full" />
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Desktop CTA */}
            <Link
              href="/work-with-me"
              onClick={() => trackButtonClick("Navbar CTA - Work With Me")}
              className="hidden lg:inline-flex items-center gap-2 text-white border-b-2 border-white pb-1 font-medium hover:border-copper hover:text-copper transition-all hover:gap-3 cursor-pointer"
            >
              Work With Me <ArrowRight size={18} />
            </Link>

            {/* Mobile Menu Button - Hidden in minimal mode */}
            {!isMinimalMode && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden relative z-50 p-2 text-white hover:text-copper transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={28} /> : <HiOutlineMenuAlt3 size={38} />}
              </button>
            )}

            {/* Mobile CTA - Shown only in minimal mode on mobile */}
            {isMinimalMode && (
              <Link
                href="/work-with-me"
                onClick={() => trackButtonClick("Navbar CTA - Work With Me")}
                className="lg:hidden inline-flex items-center gap-2 text-white border-b-2 border-white pb-1 font-medium hover:border-copper hover:text-copper transition-all hover:gap-3 cursor-pointer text-sm"
              >
                Work With Me <ArrowRight size={16} />
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Only render if not in minimal mode */}
      {!isMinimalMode && (
        <div
          className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div
            className={`absolute top-0 right-0 bottom-0 w-full sm:w-96 bg-[#1B1B1B] shadow-2xl transform transition-transform duration-500 ease-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full pt-24 pb-8 px-8">
              {/* Navigation Links */}
              <nav className="flex flex-col gap-2 mb-auto mt-16">
                {navigationLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`group relative py-4 px-6 rounded-xl text-lg font-medium transition-all duration-300 ${
                      isActiveLink(link.href)
                        ? "bg-brand-gradient text-ink"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isMenuOpen
                        ? "slideInRight 0.5s ease-out forwards"
                        : "none",
                    }}
                  >
                    <span className="flex items-center justify-between">
                      {link.name}
                      {isActiveLink(link.href) && (
                        <ArrowRight size={20} className="ml-2" />
                      )}
                    </span>
                  </Link>
                ))}
              </nav>

              {/* Mobile CTA Button */}
              <Link
                href="/work-with-me"
                onClick={handleLinkClick}
                className="inline-flex items-center justify-center gap-2 bg-brand-gradient text-ink px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-xl hover:gap-3 mt-8"
              >
                Work With Me <ArrowRight size={20} />
              </Link>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-6 mt-8 pt-8 border-t border-white/10">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackLinkClick(social.name, "Navbar Mobile Menu")}
                      className="text-white/60 hover:text-white transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-14 sm:h-16 lg:h-20" />
    </>
  );
};
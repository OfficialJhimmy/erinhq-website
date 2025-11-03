// components/Navbar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Menu, X } from 'lucide-react';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { usePathname } from 'next/navigation';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'About ERIN', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Writing', href: '/writing' },
    { name: 'Digital Footprint', href: '/digital-footprint' },
    { name: 'Work With Me', href: '/work-with-me' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const isActiveLink = (href: string) => {
    return pathname === href;
  };

  return (
    <>
      <nav
       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2 lg:py-4 ${
        isScrolled ? 'bg-[#1B1B1B]/95 backdrop-blur-md shadow-lg' : 'bg-[#1B1B1B]'
      }`} 
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center z-50">
              <Image
                src="/images/erinhq.png"
                alt="ERIN Logo"
                width={60}
                height={40}
                className="h-[70px] w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-12">
              <div className="bg-[linear-gradient(90deg,#FFFFFF,#FFC687,#FF8906)] rounded-full px-8 py-4 shadow-lg">
                <div className="flex items-center gap-8">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-sm font-medium transition-colors relative ${
                        isActiveLink(link.href)
                          ? 'text-[#333333]'
                          : 'text-[#333333] hover:text-gray-900'
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

            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 text-white border-b-2 border-white pb-1 font-medium hover:border-orange-400 hover:text-orange-400 transition-all hover:gap-3"
            >
              Get in Touch <ArrowRight size={18} />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative z-50 p-2 text-white hover:text-orange-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <HiOutlineMenuAlt3 size={38} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-full sm:w-96 bg-[#1B1B1B] shadow-2xl transform transition-transform duration-500 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
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
                      ? 'bg-[linear-gradient(90deg,#FFFFFF,#FFC687,#FF8906)] text-[#1B1B1B]'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isMenuOpen
                      ? 'slideInRight 0.5s ease-out forwards'
                      : 'none',
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
              href="/contact"
              onClick={handleLinkClick}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-400 to-yellow-400 text-[#1B1B1B] px-8 py-4 rounded-full font-medium hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl hover:gap-3 mt-8"
            >
              Get in Touch <ArrowRight size={20} />
            </Link>

            {/* Social Links (Optional) */}
            <div className="flex items-center justify-center gap-6 mt-8 pt-8 border-t border-white/10">
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

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
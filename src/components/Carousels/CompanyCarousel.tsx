"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface Company {
  name: string;
  logo: string;
  link?: string;
  size?: number // CTA support
}

interface Props {
  companies: Company[];
  speed?: number; // lower = faster movement
}

const CompanyCarousel: React.FC<Props> = ({ companies, speed = 40 }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Touch swipe support
  const touchStartX = useRef<number>(0);
  const touchMoveX = useRef<number>(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const width = track.scrollWidth / 2;
    let pos = 0;

    const animate = () => {
      if (!isPaused) {
        pos -= 0.5;
        if (Math.abs(pos) >= width) pos = 0;
        track.style.transform = `translateX(${pos}px)`;
      }
      requestAnimationFrame(animate);
    };

    animate();
  }, [isPaused]);

  // Swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchMoveX.current = e.touches[0].clientX;
    const diff = touchMoveX.current - touchStartX.current;
    const track = trackRef.current;
    if (track) {
      track.style.transform = `translateX(${diff}px)`;
    }
  };

  const handleTouchEnd = () => {
    touchStartX.current = 0;
    touchMoveX.current = 0;
  };

  // Keyboard navigation (accessibility)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const current = new DOMMatrix(track.style.transform).m41;

    if (e.key === "ArrowRight") {
      track.style.transform = `translateX(${current - 20}px)`;
    }
    if (e.key === "ArrowLeft") {
      track.style.transform = `translateX(${current + 20}px)`;
    }
  };

  return (
    <div
      className="overflow-hidden w-full relative outline-none"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        ref={trackRef}
        className="flex gap-6 whitespace-nowrap transition-transform duration-75 opacity-0 animate-fadeIn"
      >
        {[...companies, ...companies].map((company, index) => {
          const LogoElement = (
            <div className="flex-shrink-0 w-[168px] h-[104px] rounded-2xl border border-gray-200 bg-white flex items-center justify-center p-6 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={company.size ?? 120}
                height={(company.size ?? 120) / 2}
                className="object-contain max-w-full max-h-full pointer-events-none"
                loading="lazy"
              />
            </div>
          );

          return (
            <div
              key={index}
              className="flex items-center justify-center shrink-0"
            >
              {company.link ? (
                <a href={company.link} target="_blank" rel="noopener noreferrer">
                  {LogoElement}
                </a>
              ) : (
                LogoElement
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompanyCarousel;
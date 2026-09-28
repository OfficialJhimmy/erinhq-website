"use client";

import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { HeroBackgroundImage } from "@/components/ui";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion ? undefined : item;
  const containerVariants = shouldReduceMotion ? undefined : container;
  const initial = shouldReduceMotion ? undefined : "hidden";
  const animate = shouldReduceMotion ? undefined : "show";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1B1B1B] text-center px-6 py-24">
      <HeroBackgroundImage src="/images/home-hero-ai.webp" />
      {/* Ambient background glow — purely decorative */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-copper/10 blur-[120px] motion-safe:animate-pulse"
      />

      <motion.div
        variants={containerVariants}
        initial={initial}
        animate={animate}
        className="relative z-10 flex flex-col items-center"
      >
        <motion.p variants={variants} className="text-white/50 font-heading text-sm uppercase tracking-wider mb-6">
          AI ENGINEER &middot; SOFTWARE ENGINEER
        </motion.p>

        <motion.h1
          variants={variants}
          className="font-body text-transparent bg-gradient-to-r from-white to-[#FF8906] bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] font-normal max-w-4xl"
        >
          I build intelligent systems and software that solve real business problems.
        </motion.h1>

        <motion.p variants={variants} className="mt-8 text-[#E2E2E2] font-body text-base md:text-xl max-w-2xl leading-relaxed">
          I design and build AI agents, intelligent automation, AI-powered products, knowledge
          systems and scalable software for startups, businesses and organisations. Based in Lagos,
          Nigeria. Working globally.
        </motion.p>

        <motion.div variants={variants} className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <Link
            href="/ai-solutions"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-400 to-yellow-400 text-[#1B1B1B] font-body font-medium rounded-full px-6 py-4 transition-transform hover:scale-105"
          >
            Explore AI Solutions
            <GoArrowUpRight size={18} />
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-body font-medium rounded-full px-6 py-4 transition-colors hover:border-white/40"
          >
            View My Projects
          </Link>
        </motion.div>

        <motion.p variants={variants} className="mt-8 text-white/50 text-sm">
          AI Engineering &middot; AI Automation &middot; AI Product Development &middot; Software
          Engineering
        </motion.p>

        <motion.a
          variants={variants}
          href="mailto:creatives@erinhq.com"
          className="mt-10 text-white/50 text-sm hover:text-white/80 transition-colors"
        >
          creatives@erinhq.com
        </motion.a>
      </motion.div>
    </section>
  );
}

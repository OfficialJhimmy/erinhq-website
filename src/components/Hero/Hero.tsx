import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const proofPoints = [
  "Leader & Expert",
  "8+ years engineering",
  "16+ Website and Mobile Apps shipped",
  "10+ AI products shipped",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#1B1B1B] text-center px-6 py-24">
      <p className="text-white/50 font-heading text-sm uppercase tracking-wider mb-6">
        Feyijimi Erinle, also known as ERIN
      </p>

      <h1 className="font-heading text-transparent bg-gradient-to-r from-white to-[#FF8906] bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-6xl leading-[1.15] font-normal max-w-4xl">
        I build software and AI solutions companies actually rely on
      </h1>

      <p className="mt-8 text-[#E2E2E2] font-body text-base md:text-xl max-w-2xl leading-relaxed">
        Websites, mobile apps, and AI systems, built by an engineer with eight
        years of full stack experience and hands-on AI product work.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
        {proofPoints.map((point) => (
          <span
            key={point}
            className="px-4 py-2 rounded-full border border-white/15 text-white/70 text-sm"
          >
            {point}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
        <Link
          href="/portfolio"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-400 to-yellow-400 text-[#1B1B1B] font-body font-medium rounded-full px-6 py-4 transition-transform hover:scale-105"
        >
          Explore my work
          <GoArrowUpRight size={18} />
        </Link>
        <Link
          href="/work-with-me"
          className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-body font-medium rounded-full px-6 py-4 transition-colors hover:border-white/40"
        >
          Work with me
        </Link>
      </div>

      <a
        href="mailto:creatives@erinhq.com"
        className="mt-14 text-white/50 text-sm hover:text-white/80 transition-colors"
      >
        creatives@erinhq.com
      </a>
    </section>
  );
}
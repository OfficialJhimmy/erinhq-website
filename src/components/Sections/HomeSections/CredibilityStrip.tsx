import React from "react";

const credibilityPoints = [
  "8+ years engineering experience",
  "AI systems and products built",
  "AWS certified",
  "Full-stack engineering background",
  "Based in Lagos, Nigeria · Working globally",
];

function Pills() {
  return (
    <>
      {credibilityPoints.map((point) => (
        <span
          key={point}
          className="flex-shrink-0 px-4 py-2 rounded-full border border-white/15 text-white/70 text-sm whitespace-nowrap"
        >
          {point}
        </span>
      ))}
    </>
  );
}

export const CredibilityStrip: React.FC = () => {
  return (
    <section className="bg-[#1B1B1B] py-6 border-t border-white/10 overflow-hidden">
      <div className="flex w-max items-center gap-3 motion-safe:animate-marquee hover:[animation-play-state:paused] motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:w-full motion-reduce:px-6">
        <div className="flex items-center gap-3 flex-shrink-0" aria-hidden={false}>
          <Pills />
        </div>
        <div className="flex items-center gap-3 flex-shrink-0 motion-reduce:hidden" aria-hidden="true">
          <Pills />
        </div>
      </div>
    </section>
  );
};

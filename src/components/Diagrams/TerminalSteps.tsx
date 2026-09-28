"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

interface TerminalStep {
  label: string;
  description: string;
}

interface TerminalStepsProps {
  steps: TerminalStep[];
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const line: Variants = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export function TerminalSteps({ steps }: TerminalStepsProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d] shadow-2xl">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-white/40">ai-system-architecture.log</span>
      </div>

      <motion.pre
        variants={shouldReduceMotion ? undefined : container}
        initial={shouldReduceMotion ? undefined : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "show"}
        viewport={{ once: true, margin: "-80px" }}
        className="overflow-x-auto whitespace-pre-wrap p-6 font-mono text-[13px] leading-7"
      >
        {steps.map((step, index) => (
          <motion.div key={step.label} variants={shouldReduceMotion ? undefined : line}>
            <span className="text-white/30">{String(index + 1).padStart(2, "0")}</span>
            <span className="text-[#28c840]"> ${" "}</span>
            <span className="text-copper">{step.label}</span>
            <span className="text-white/50"> — {step.description}</span>
          </motion.div>
        ))}
        <motion.span
          className="inline-block h-4 w-2 translate-y-0.5 bg-copper"
          animate={shouldReduceMotion ? undefined : { opacity: [1, 1, 0, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </motion.pre>
    </div>
  );
}

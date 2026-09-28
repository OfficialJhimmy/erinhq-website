"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

interface FlowChainProps {
  steps: string[];
  orientation?: "horizontal" | "vertical";
  dark?: boolean;
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const nodeVariant: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function FlowChain({ steps, orientation = "horizontal", dark = true }: FlowChainProps) {
  const shouldReduceMotion = useReducedMotion();
  const nodeClasses = dark
    ? "border-white/15 bg-white/5 text-white"
    : "border-black/10 bg-white text-[#1B1B1B]";
  const arrowClasses = dark ? "text-copper" : "text-copper";

  const content = steps.map((step, index) => (
    <motion.div
      key={step}
      variants={shouldReduceMotion ? undefined : nodeVariant}
      className="flex items-center gap-3"
    >
      <div
        className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium ${nodeClasses} ${
          orientation === "horizontal" ? "whitespace-nowrap" : ""
        }`}
      >
        <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-copper/20 text-xs font-heading text-copper">
          {index + 1}
        </span>
        {step}
      </div>
      {index < steps.length - 1 &&
        (orientation === "horizontal" ? (
          <motion.span
            className={arrowClasses}
            animate={shouldReduceMotion ? undefined : { x: [0, 4, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 }}
          >
            <ArrowRight size={18} />
          </motion.span>
        ) : (
          <motion.span
            className={`${arrowClasses} pl-3`}
            animate={shouldReduceMotion ? undefined : { y: [0, 4, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 }}
          >
            <ArrowDown size={18} />
          </motion.span>
        ))}
    </motion.div>
  ));

  if (orientation === "vertical") {
    return (
      <motion.div
        variants={shouldReduceMotion ? undefined : container}
        initial={shouldReduceMotion ? undefined : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "show"}
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col items-start gap-2"
      >
        {content}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : container}
      initial={shouldReduceMotion ? undefined : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "show"}
      viewport={{ once: true, margin: "-80px" }}
      className="flex flex-wrap items-center gap-3"
    >
      {content}
    </motion.div>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, X, Clock } from "lucide-react";

interface QueueItem {
  label: string;
  detail: string;
  status: "auto" | "review";
}

const items: QueueItem[] = [
  { label: "FAQ response sent", detail: "Answered from approved knowledge base", status: "auto" },
  { label: "Refund request — $340", detail: "Exceeds auto-approval threshold", status: "review" },
  { label: "Contract clause flagged", detail: "Non-standard liability terms detected", status: "review" },
];

// A small automation-UI mockup illustrating human-in-the-loop control —
// not a real product screen, just a visual stand-in for the idea.
export function HumanControlMockup() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <span className="font-heading text-sm uppercase tracking-wider text-white/70">Approval Queue</span>
        <span className="flex items-center gap-2 text-xs text-white/40">
          <motion.span
            className="h-2 w-2 rounded-full bg-[#28c840]"
            animate={shouldReduceMotion ? undefined : { opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
          Live
        </span>
      </div>
      <ul className="divide-y divide-white/10">
        {items.map((item) => (
          <li key={item.label} className="flex items-center justify-between gap-4 px-5 py-4">
            <div>
              <p className="text-sm font-medium text-white">{item.label}</p>
              <p className="text-xs text-white/40">{item.detail}</p>
            </div>
            {item.status === "auto" ? (
              <span className="flex flex-shrink-0 items-center gap-1.5 rounded-full bg-[#28c840]/10 px-3 py-1 text-xs font-medium text-[#28c840]">
                <Check size={12} /> Auto-approved
              </span>
            ) : (
              <div className="flex flex-shrink-0 items-center gap-2">
                <span className="flex items-center gap-1.5 rounded-full bg-copper/10 px-3 py-1 text-xs font-medium text-copper">
                  <Clock size={12} /> Needs review
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/15 text-white/50">
                  <Check size={12} />
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/15 text-white/50">
                  <X size={12} />
                </span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

import React from "react";
import { ArrowDown } from "lucide-react";

const flowSteps = [
  "User / Business Event",
  "Application",
  "AI Orchestration",
];

const branchSteps = ["Knowledge", "Model(s)", "Tools / APIs"];

const closingSteps = [
  "Validation / Guardrails",
  "Business Action or Response",
  "Human Review When Required",
  "Monitoring + Evaluation",
];

const allStepsInOrder = [...flowSteps, ...branchSteps, ...closingSteps];

function Node({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <div
      className={`rounded-xl border px-5 py-4 text-center font-heading text-sm uppercase tracking-wide ${
        dark
          ? "border-white/15 bg-white/5 text-white"
          : "border-black/10 bg-white text-[#1B1B1B]"
      }`}
    >
      {label}
    </div>
  );
}

// A visual system diagram with a full accessible text equivalent, per the
// AI Engineering spec (section 11). The visible diagram is aria-hidden; a
// screen reader gets the ordered list below it instead.
export function AIArchitectureDiagram() {
  return (
    <figure>
      <div aria-hidden="true" className="flex flex-col items-center gap-3 rounded-2xl bg-[#1B1B1B] p-6 md:p-10">
        {flowSteps.map((step) => (
          <React.Fragment key={step}>
            <Node label={step} dark />
            <ArrowDown size={18} className="text-white/40" />
          </React.Fragment>
        ))}

        <div className="grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
          {branchSteps.map((step) => (
            <Node key={step} label={step} dark />
          ))}
        </div>
        <ArrowDown size={18} className="text-white/40" />

        {closingSteps.map((step, index) => (
          <React.Fragment key={step}>
            <Node label={step} dark />
            {index < closingSteps.length - 1 && <ArrowDown size={18} className="text-white/40" />}
          </React.Fragment>
        ))}
      </div>

      <figcaption className="sr-only">
        <p>A typical AI system architecture flows as follows:</p>
        <ol>
          {allStepsInOrder.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </figcaption>
    </figure>
  );
}

"use client";

import React, { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowLeft, ArrowUp, Check } from "lucide-react";
import { ENQUIRY_TYPES, ENQUIRY_TYPE_LABELS, type EnquiryType } from "@/data/enquiryTypes";
import { event } from "@/lib/gtag";

type FormState = "idle" | "submitting" | "success" | "error";
type FieldKey =
  | "name"
  | "email"
  | "projectType"
  | "company"
  | "problem"
  | "desiredOutcome"
  | "companyWebsite"
  | "currentTools"
  | "timeline"
  | "budget"
  | "anythingElse";

interface StepConfig {
  key: FieldKey;
  kind: "text" | "email" | "textarea" | "choice";
  question: string;
  placeholder?: string;
  required: boolean;
}

const projectTypeOptions = Object.values(ENQUIRY_TYPES) as EnquiryType[];

function isEnquiryType(value: string | null): value is EnquiryType {
  return !!value && (projectTypeOptions as string[]).includes(value);
}

const steps: StepConfig[] = [
  { key: "name", kind: "text", question: "What should I call you?", required: true },
  { key: "email", kind: "email", question: "What's the best email to reach you?", required: true },
  { key: "projectType", kind: "choice", question: "What are you looking to build?", required: true },
  { key: "company", kind: "text", question: "Which company or organisation is this for?", required: true },
  { key: "problem", kind: "textarea", question: "Tell me about the problem or idea.", required: true },
  { key: "desiredOutcome", kind: "textarea", question: "What would you like the system to do?", required: true },
  { key: "companyWebsite", kind: "text", question: "Got a website? Drop the link.", placeholder: "https://...", required: false },
  { key: "currentTools", kind: "text", question: "Any current tools or systems involved?", required: false },
  { key: "timeline", kind: "text", question: "What's your expected timeline?", required: false },
  { key: "budget", kind: "text", question: "Roughly what budget are you working with?", required: false },
  { key: "anythingElse", kind: "textarea", question: "Anything else I should know?", required: false },
];

export function EnquiryForm() {
  const searchParams = useSearchParams();
  const presetType = searchParams.get("type");
  const initialType = isEnquiryType(presetType) ? presetType : ENQUIRY_TYPES.notSure;

  const [values, setValues] = useState<Record<FieldKey, string>>({
    name: "",
    email: "",
    projectType: initialType,
    company: "",
    problem: "",
    desiredOutcome: "",
    companyWebsite: "",
    currentTools: "",
    timeline: "",
    budget: "",
    anythingElse: "",
  });
  const [stepIndex, setStepIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);
  const hasStartedRef = useRef(false);
  const hpFieldRef = useRef<HTMLInputElement>(null);

  const step = steps[stepIndex];
  const isLastStep = stepIndex === steps.length - 1;
  const currentValue = values[step.key];
  const isValid = !step.required || currentValue.trim().length > 0;

  const handleFirstInteraction = () => {
    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      event({ action: "contact_form_started", category: "Form", label: "Work With Me" });
    }
  };

  const setValue = (key: FieldKey, value: string) => {
    handleFirstInteraction();
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const goNext = () => {
    if (!isValid) {
      setTouched(true);
      return;
    }
    setTouched(false);
    if (isLastStep) {
      void handleSubmit();
      return;
    }
    setDirection(1);
    setStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const goBack = () => {
    if (stepIndex === 0) return;
    setTouched(false);
    setDirection(-1);
    setStepIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async () => {
    setState("submitting");
    setErrorMessage(null);

    const payload = { ...values, hpField: hpFieldRef.current?.value ?? "" };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      event({ action: "contact_form_submitted", category: "Form", label: "Work With Me" });
      setState("success");
    } catch (error) {
      setState("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  const initialLabel = useMemo(() => ENQUIRY_TYPE_LABELS[initialType], [initialType]);

  if (state === "success") {
    return (
      <section id="enquiry-form" className="bg-[#1B1B1B] py-24 px-6">
        <div className="max-w-xl mx-auto text-center rounded-2xl border border-white/10 bg-white/[0.03] p-10">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-copper/15 text-copper">
            <Check size={24} />
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            Thanks for reaching out.
          </h2>
          <p className="text-white/70 mb-8">
            Your enquiry has been received. I&apos;ll review the details and get back to you with
            the next step.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/projects" className="inline-flex items-center gap-2 text-copper font-medium hover:gap-3 transition-all">
              Back to Projects <ArrowRight size={16} />
            </Link>
            <Link href="/ai-solutions" className="inline-flex items-center gap-2 text-copper font-medium hover:gap-3 transition-all">
              Explore AI Solutions <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="enquiry-form" className="bg-[#1B1B1B] py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 text-center">
          <span className="text-white/50 font-heading text-sm uppercase tracking-wider block mb-3">
            Tell Me What You Are Building
          </span>
          <p className="text-white/40 text-sm">
            You do not need a perfect brief. A few honest answers are enough.
          </p>
        </div>

        {/* Progress */}
        <div className="h-1 w-full rounded-full bg-white/10 mb-10 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-brand-gradient"
            animate={{ width: `${((stepIndex + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>

        <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step.key}
              custom={direction}
              initial={{ opacity: 0, x: direction * 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -24 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <p className="font-heading text-xl md:text-2xl font-semibold text-white mb-2">
                {step.question}{" "}
                {step.required ? (
                  <span className="text-copper">*</span>
                ) : (
                  <span className="text-white/30 text-sm font-body font-normal">(optional)</span>
                )}
              </p>

              {step.key === "projectType" && (
                <p className="text-white/40 text-sm mb-6">
                  Preselected as &ldquo;{initialLabel}&rdquo; based on where you came from &mdash;
                  change it if that is not right.
                </p>
              )}

              <div className="mt-6">
                {step.kind === "choice" && (
                  <div className="grid gap-3">
                    {projectTypeOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setValue("projectType", option);
                          window.setTimeout(goNext, 300);
                        }}
                        className={`flex items-center justify-between rounded-xl border px-5 py-4 text-left font-medium transition-colors ${
                          values.projectType === option
                            ? "border-copper bg-copper/10 text-white"
                            : "border-white/15 text-white/80 hover:border-white/30"
                        }`}
                      >
                        {ENQUIRY_TYPE_LABELS[option]}
                        {values.projectType === option && <Check size={18} className="text-copper" />}
                      </button>
                    ))}
                  </div>
                )}

                {(step.kind === "text" || step.kind === "email") && (
                  <input
                    type={step.kind}
                    autoFocus
                    value={currentValue}
                    placeholder={step.placeholder}
                    onChange={(e) => setValue(step.key, e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        goNext();
                      }
                    }}
                    className="w-full border-0 border-b-2 border-white/20 bg-transparent pb-3 text-xl text-white placeholder:text-white/30 focus:border-copper focus:outline-none"
                  />
                )}

                {step.kind === "textarea" && (
                  <textarea
                    autoFocus
                    value={currentValue}
                    rows={4}
                    onChange={(e) => setValue(step.key, e.target.value)}
                    className="w-full rounded-xl border border-white/15 bg-transparent p-4 text-lg text-white placeholder:text-white/30 focus:border-copper focus:outline-none"
                  />
                )}

                {touched && !isValid && (
                  <p role="alert" className="text-red-400 text-sm mt-3">
                    This one&apos;s needed before we continue.
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Honeypot — hidden from real visitors and screen readers, zero-size
            so it can never affect layout or scroll width */}
        <div className="absolute h-0 w-0 overflow-hidden opacity-0" aria-hidden="true">
          <label htmlFor="hpField">Leave this field empty</label>
          <input ref={hpFieldRef} type="text" id="hpField" name="hpField" tabIndex={-1} autoComplete="off" />
        </div>

        {state === "error" && errorMessage && (
          <p role="alert" className="text-red-400 text-sm mt-4 text-center">
            {errorMessage}
          </p>
        )}

        <div className="mt-8 flex items-center justify-between">
          <button
            type="button"
            onClick={goBack}
            disabled={stepIndex === 0}
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors disabled:opacity-0"
          >
            <ArrowLeft size={16} /> Back
          </button>

          <div className="flex items-center gap-4">
            {!step.required && (
              <button type="button" onClick={goNext} className="text-white/40 text-sm hover:text-white/70 transition-colors">
                Skip
              </button>
            )}
            {step.kind !== "choice" && (
              <button
                type="button"
                onClick={goNext}
                disabled={state === "submitting"}
                className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 font-medium text-ink transition-transform hover:scale-105 disabled:opacity-60"
              >
                {state === "submitting" ? "Sending..." : isLastStep ? "Submit" : "Continue"}
                {step.kind === "textarea" ? <ArrowUp size={16} className="rotate-90" /> : <ArrowRight size={16} />}
              </button>
            )}
          </div>
        </div>

        <p className="mt-4 text-center text-white/30 text-xs">
          Step {stepIndex + 1} of {steps.length}
        </p>
      </div>
    </section>
  );
}

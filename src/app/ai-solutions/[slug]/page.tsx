// app/ai-solutions/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import {
  aiSolutions,
  getSolutionBySlug,
  getRelatedSolutions,
  BUSINESS_PROBLEM_COPY,
  CUSTOMISATION_COPY,
  HUMAN_OVERSIGHT_COPY,
  TYPICAL_INTEGRATIONS,
  IMPLEMENTATION_APPROACH,
} from "@/data/aiSolutions";
import { SolutionCard } from "@/components/Cards/SolutionCard";
import { SolutionViewTracker } from "@/components/Analytics/SolutionViewTracker";
import { Footer } from "@/components/Footer/Footer";
import { Button } from "@/components/ui";
import { ENQUIRY_TYPES, workWithMeHref } from "@/data/enquiryTypes";
import { buildMetadata } from "@/lib/seo";
import { jsonLdScriptProps, breadcrumbJsonLd } from "@/lib/jsonLd";

export async function generateStaticParams() {
  return aiSolutions.map((solution) => ({ slug: solution.slug }));
}

interface SolutionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};

  return buildMetadata({
    title: solution.seoTitle,
    description: solution.metaDescription,
    path: `/ai-solutions/${solution.slug}`,
  });
}

export default async function SolutionDetailPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  const related = getRelatedSolutions(solution);

  return (
    <div className="min-h-screen bg-white">
      <SolutionViewTracker solutionName={solution.name} />
      <script
        {...jsonLdScriptProps(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "AI Solutions", path: "/ai-solutions" },
            { name: solution.name, path: `/ai-solutions/${solution.slug}` },
          ])
        )}
      />

      {/* Hero */}
      <section className="bg-[#1B1B1B] pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/ai-solutions"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to AI Solutions
          </Link>
          <span className="text-white/50 font-heading text-sm uppercase tracking-wider mb-4 block">
            {solution.heroEyebrow}
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tighter">
            {solution.name}
          </h1>
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
            {solution.summary}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href={workWithMeHref(ENQUIRY_TYPES.aiSystem)}>{solution.primaryCta}</Button>
            <Button href={workWithMeHref(ENQUIRY_TYPES.notSure)} variant="secondary">
              Discuss a Custom Version
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
        {/* Business problem */}
        <section>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[#1B1B1B] mb-4">
            The business problem
          </h2>
          <p className="text-[#525252] text-lg leading-relaxed">{BUSINESS_PROBLEM_COPY}</p>
        </section>

        {/* How it works */}
        <section>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[#1B1B1B] mb-6">
            How it works
          </h2>
          <ol className="space-y-3">
            {solution.howItWorks.map((step, index) => (
              <li key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-copper/20 font-heading text-sm text-copper">
                  {index + 1}
                </span>
                <span className="text-[#525252] text-lg leading-relaxed pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Features */}
        <section>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[#1B1B1B] mb-6">
            Features
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {solution.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-[#525252]">
                <CheckCircle2 size={20} className="flex-shrink-0 text-copper mt-0.5" />
                {feature}
              </li>
            ))}
          </ul>
        </section>

        {/* How it fits */}
        <section>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[#1B1B1B] mb-6">
            How it fits into your organisation
          </h2>
          <ul className="space-y-3">
            {solution.howItFits.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#525252] text-lg leading-relaxed">
                <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-copper" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[#525252] mt-6 italic">
            The system should connect to the organisation&apos;s existing tools and processes
            where practical. It should not require the organisation to rebuild everything around
            the AI system.
          </p>
        </section>

        {/* Benefits */}
        <section>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[#1B1B1B] mb-6">
            Benefits to the organisation
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {solution.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-[#525252]">
                <CheckCircle2 size={20} className="flex-shrink-0 text-copper mt-0.5" />
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        {/* Integrations */}
        <section>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[#1B1B1B] mb-4">
            Typical integrations
          </h2>
          <p className="text-[#525252] mb-4">
            Only integrations that are technically supported for the specific implementation are
            included. Possible integration categories include:
          </p>
          <div className="flex flex-wrap gap-2">
            {TYPICAL_INTEGRATIONS.map((integration) => (
              <span
                key={integration}
                className="px-3 py-1.5 bg-gray-100 text-[#525252] rounded-full text-sm"
              >
                {integration}
              </span>
            ))}
          </div>
        </section>

        {/* Human oversight */}
        <section className="rounded-2xl bg-[#FAF7F2] p-8">
          <h2 className="font-heading text-2xl font-semibold text-[#1B1B1B] mb-4">
            Human oversight
          </h2>
          <p className="text-[#525252] text-lg leading-relaxed">{HUMAN_OVERSIGHT_COPY}</p>
        </section>

        {/* Who it is for */}
        <section>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[#1B1B1B] mb-4">
            Who this is for
          </h2>
          <p className="text-[#525252] text-lg leading-relaxed">{solution.audience}</p>
        </section>

        {/* Customisation */}
        <section>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[#1B1B1B] mb-4">
            Your workflow will not look exactly like another company&apos;s.
          </h2>
          <p className="text-[#525252] text-lg leading-relaxed">{CUSTOMISATION_COPY}</p>
        </section>

        {/* Implementation approach */}
        <section>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[#1B1B1B] mb-6">
            Implementation approach
          </h2>
          <ol className="space-y-4">
            {IMPLEMENTATION_APPROACH.map((phase, index) => (
              <li key={phase.step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#1B1B1B] font-heading text-sm text-white">
                  {index + 1}
                </span>
                <p className="text-[#525252] text-lg leading-relaxed pt-1">
                  <span className="font-semibold text-[#1B1B1B]">{phase.step}</span> —{" "}
                  {phase.description}
                </p>
              </li>
            ))}
          </ol>
        </section>
      </div>

      {/* Final CTA */}
      <section className="relative bg-gradient-to-br from-[#1B1B1B] via-[#3E2A15] to-[#FF8906] py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
            Want this system built around your organisation?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Tell me what your current workflow looks like, what is slowing your team down and
            what you want to improve. We can map out the right system and determine what should
            be automated, what should remain human and what needs to connect to your existing
            tools.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href={workWithMeHref(ENQUIRY_TYPES.aiSystem)}>{solution.primaryCta}</Button>
            <Button href={workWithMeHref(ENQUIRY_TYPES.notSure)} variant="secondary">
              Talk About a Different Problem
            </Button>
          </div>
        </div>
      </section>

      {/* Related solutions */}
      {related.length > 0 && (
        <section className="bg-[#FAF7F2] py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[#1B1B1B]">
                Related Solutions
              </h2>
              <Link
                href="/ai-solutions"
                className="hidden md:inline-flex items-center gap-2 text-[#1B1B1B] font-medium hover:gap-3 transition-all hover:text-copper"
              >
                See All AI Solutions <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((relatedSolution) => (
                <SolutionCard key={relatedSolution.slug} solution={relatedSolution} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

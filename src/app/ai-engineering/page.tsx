// app/ai-engineering/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Rocket, TrendingUp, Building2, Briefcase, Cpu } from "lucide-react";
import { Footer } from "@/components/Footer/Footer";
import { Section, Button, Tag, FadeIn, HeroBackgroundImage } from "@/components/ui";
import { ProcessStepCard } from "@/components/Cards/ProcessStepCard";
import { ProjectCardPortfolio } from "@/components/Cards/ProjectCardPortfolio";
import { AIArchitectureDiagram } from "@/components/Diagrams/AIArchitectureDiagram";
import { FlowChain } from "@/components/Diagrams/FlowChain";
import { TerminalSteps } from "@/components/Diagrams/TerminalSteps";
import { HumanControlMockup } from "@/components/Diagrams/HumanControlMockup";
import { TechLogoMarquee } from "@/components/Diagrams/TechLogoMarquee";
import { FAQSplitSection } from "@/components/Sections/FAQSplitSection";
import { getProjectById } from "@/data/portfolioData";
import { ENQUIRY_TYPES, workWithMeHref } from "@/data/enquiryTypes";
import { buildMetadata } from "@/lib/seo";
import { jsonLdScriptProps, breadcrumbJsonLd, faqJsonLd } from "@/lib/jsonLd";

export const metadata: Metadata = buildMetadata({
  title: "AI Engineering & AI Systems Architecture | ERIN",
  description:
    "AI engineering for businesses and organisations. ERIN designs and builds AI agents, RAG systems, automation, multi-agent platforms, AI products and production-ready AI infrastructure.",
  path: "/ai-engineering",
});

const coreMessageFlow = [
  "Model",
  "Context",
  "Tools",
  "Application",
  "Business Workflow",
  "Human Review",
  "Evaluation",
];

const capabilities = [
  {
    name: "AI Agents",
    description:
      "Designing agents that can reason through defined tasks, use tools, retrieve information, make controlled decisions and execute multi-step workflows.",
    areas: "Agent orchestration, tool calling, task planning, memory where appropriate, structured outputs, human escalation.",
  },
  {
    name: "RAG & Knowledge Systems",
    description:
      "Building systems that allow AI applications to retrieve relevant information from approved company knowledge before generating responses.",
    areas: "Document ingestion, chunking, embeddings, vector search, metadata filtering, retrieval pipelines, citations and evaluation.",
  },
  {
    name: "AI Automation",
    description:
      "Connecting AI capabilities to business workflows so repetitive work can be handled automatically while keeping people involved where necessary.",
    areas: "Triggers, workflows, business rules, APIs, notifications, approvals and integrations.",
  },
  {
    name: "Multi-Agent Systems",
    description:
      "Designing specialised agents or workflows that divide complex research or operational tasks into manageable components.",
    areas: "Agent coordination, specialised roles, task delegation, synthesis and controlled execution.",
  },
  {
    name: "AI Product Development",
    description: "Building AI-powered products from concept and prototype through production software.",
    areas: "Product architecture, UX, APIs, model integration, data systems, evaluation and deployment.",
  },
  {
    name: "LLM Applications",
    description: "Engineering reliable applications around large language models rather than relying on raw model output.",
    areas: "Prompt and context design, structured generation, tool use, guardrails, evaluation and application integration.",
  },
  {
    name: "AI Systems Architecture",
    description: "Designing the architecture that connects models, data, software, infrastructure and people into a reliable system.",
    areas: "System design, data flows, APIs, security, scalability, observability and deployment strategy.",
  },
  {
    name: "AI Evaluation & Monitoring",
    description: "Measuring whether an AI system is producing useful, safe and reliable outputs over time.",
    areas: "Test datasets, evaluation criteria, human review, tracing, quality monitoring and iterative improvement.",
  },
];

const practiceSteps = [
  { label: "user_or_business_event", description: "A person, message, document, transaction or system event starts the workflow." },
  { label: "application_layer", description: "The product or interface captures the request and controls the user experience." },
  { label: "orchestration", description: "The system decides what AI task, workflow or tool should run." },
  { label: "knowledge_and_data", description: "The system retrieves the information required for the task." },
  { label: "model_layer", description: "One or more AI models process the request within the defined context." },
  { label: "tools_and_integrations", description: "The system can call approved APIs, databases or business tools where required." },
  { label: "validation_and_guardrails", description: "Outputs are checked against rules, schemas or evaluation criteria." },
  { label: "human_review", description: "Sensitive, ambiguous or high-impact actions can be routed to people." },
  { label: "monitoring_and_evaluation", description: "The system is measured and improved using real usage and evaluation data." },
];

const maturityLevels = [
  { name: "AI-assisted workflow", description: "AI supports a defined step inside an existing process." },
  { name: "AI-powered workflow", description: "AI handles multiple connected steps with business rules and integrations." },
  { name: "Agentic system", description: "AI can plan, use tools and execute a defined multi-step task within controlled boundaries." },
];

const dataAreas = [
  "Document processing",
  "Knowledge bases",
  "Vector search",
  "Embeddings",
  "Metadata and filtering",
  "Structured databases",
  "Internal APIs",
  "Data access controls",
];

const automationFlow = [
  "Customer enquiry",
  "AI understands intent",
  "CRM lookup",
  "Business rule",
  "Action",
  "Notification",
  "Human escalation if needed",
];

const productionConsiderations = [
  "Authentication and authorisation",
  "API design",
  "Data security",
  "Infrastructure",
  "Logging and observability",
  "Error handling",
  "Rate limits and cost controls",
  "Evaluation",
  "Versioning",
  "Deployment and CI/CD",
  "Scalability",
  "Human escalation",
];

const processSteps = [
  { step: "Discovery", description: "Understand the business problem, users, workflow, data and constraints." },
  { step: "AI feasibility", description: "Determine whether AI is actually useful and where it should sit in the workflow." },
  { step: "Architecture", description: "Define the system components, data flows, models, integrations and human controls." },
  { step: "Prototype", description: "Build the smallest useful version to validate the core behaviour." },
  { step: "Evaluation", description: "Test quality, reliability, failure modes, cost and user experience." },
  { step: "Production build", description: "Engineer the full application, integrations and infrastructure." },
  { step: "Deployment", description: "Launch the agreed system and establish monitoring." },
  { step: "Iteration", description: "Improve the system using feedback, evaluation and real-world usage." },
];

const responsiblePrinciples = [
  "Human review for high-impact decisions",
  "Controlled access to data and tools",
  "Clear system boundaries",
  "Traceable workflows where appropriate",
  "Evaluation before and after deployment",
  "Secure handling of sensitive information",
  "Explicit failure and escalation paths",
];

const audiences = [
  { segment: "Startups", description: "AI product development, prototypes and MVPs.", icon: Rocket },
  { segment: "Growing businesses", description: "Automation, customer experience and operational systems.", icon: TrendingUp },
  { segment: "Enterprises", description: "Internal knowledge, workflow automation and integrated AI systems.", icon: Building2 },
  { segment: "Professional services", description: "Research, document and knowledge workflows.", icon: Briefcase },
  { segment: "Technology teams", description: "AI capabilities that need to integrate into existing software.", icon: Cpu },
];

const faqs = [
  {
    question: "What is AI engineering?",
    answer:
      "AI engineering is the work of designing and building complete applications and systems around AI models. That can include data, retrieval, agents, APIs, software, infrastructure, evaluation and human workflows.",
  },
  {
    question: "Do you only build AI agents?",
    answer:
      "No. The architecture depends on the problem. Some workflows are best solved with traditional software, some with AI-assisted workflows, some with retrieval systems and some with controlled agentic systems.",
  },
  {
    question: "Can you integrate AI into our existing software?",
    answer:
      "Yes. AI can be designed as part of an existing product, internal tool or business workflow where the available systems and APIs support the integration.",
  },
  {
    question: "Can you build a custom AI system?",
    answer:
      "Yes. The AI Solutions catalogue provides examples of common systems, but custom systems can be designed around a specific organisation's workflow and requirements.",
  },
  {
    question: "Do you work with companies outside Nigeria?",
    answer:
      "Yes. ERIN is based in Lagos, Nigeria and works with businesses and organisations globally through remote collaboration.",
  },
  {
    question: "How do you make AI systems reliable?",
    answer:
      "Reliability depends on the system. Common engineering practices include grounded retrieval, structured outputs, validation, evaluation, monitoring, controlled tool access and human escalation.",
  },
];

const selectedWorkIds = ["kora", "quill", "melly-guard", "ai-contract-generator", "atlas"];
const stepBgColors = ["#F4F0E8", "#FDEEDC"];

export default function AIEngineeringPage() {
  const selectedWork = selectedWorkIds
    .map((id) => getProjectById(id))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  return (
    <div className="min-h-screen bg-white">
      <script
        {...jsonLdScriptProps(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "AI Engineering", path: "/ai-engineering" },
          ])
        )}
      />
      <script {...jsonLdScriptProps(faqJsonLd(faqs))} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1B1B1B] pt-32 pb-20 px-6">
        <HeroBackgroundImage src="/images/ai-engineering-hero.webp" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-white/50 font-heading text-sm uppercase tracking-wider mb-4 block">
            AI Engineering
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tighter">
            Engineering the systems around AI.
          </h1>
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            AI products need more than a model. They need reliable software, useful data, strong
            architecture, secure infrastructure, clear workflows and a way to measure whether the
            system is actually working. I design and build those systems end to end.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Button href="/ai-solutions">Explore AI Solutions</Button>
            <Button href="/projects" variant="secondary">
              View AI Projects
            </Button>
          </div>
          <p className="text-white/40 text-sm">
            AI Agents &middot; RAG &middot; AI Automation &middot; Multi-Agent Systems &middot; AI
            Products &middot; AI Systems Architecture
          </p>
        </div>
      </section>

      {/* Core message */}
      <Section aria-labelledby="core-message-heading" className="bg-white">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <span className="text-[#A3A3A3] font-heading text-sm uppercase tracking-wider block mb-3">
              The Engineering Mindset
            </span>
            <h2 id="core-message-heading" className="font-heading text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-4">
              An AI model is only one part of the system.
            </h2>
            <p className="text-[#525252] text-lg leading-relaxed">
              A production AI system sits inside a larger engineering environment. It needs access
              to the right information, the right tools, the right business rules and the right
              users. It also needs safeguards, evaluation, monitoring and a clear path for humans
              to intervene.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-[#FAF7F2]">
              <div className="relative h-32 w-full">
                <Image
                  src="/images/ai-engineering-chip.webp"
                  alt=""
                  fill
                  loading="lazy"
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] to-transparent" />
              </div>
              <div className="p-6 pt-0">
                <FlowChain steps={coreMessageFlow} orientation="vertical" dark={false} />
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Capabilities */}
      <Section aria-labelledby="capabilities-heading" className="bg-[#FAF7F2]">
        <FadeIn>
          <h2 id="capabilities-heading" className="font-heading text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-10 max-w-2xl">
            AI engineering capabilities.
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <FadeIn key={capability.name} delay={index * 0.05}>
              <div className="h-full rounded-2xl border border-black/10 bg-white p-6 transition-colors hover:border-copper">
                <h3 className="font-heading text-lg font-semibold text-[#1B1B1B] mb-2">{capability.name}</h3>
                <p className="text-[#525252] text-sm leading-relaxed mb-3">{capability.description}</p>
                <p className="text-[#A3A3A3] text-xs leading-relaxed">{capability.areas}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* What it looks like in practice — terminal style */}
      <Section aria-labelledby="practice-heading" className="bg-[#1B1B1B]">
        <FadeIn>
          <h2 id="practice-heading" className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl">
            From model to working business system.
          </h2>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-10">
            A typical AI system may connect several layers. The exact architecture changes
            depending on the business problem, data, users and operational requirements.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <TerminalSteps steps={practiceSteps} />
        </FadeIn>
      </Section>

      {/* Architecture diagram */}
      <Section aria-labelledby="architecture-heading" className="bg-[#FAF7F2]">
        <FadeIn>
          <h2 id="architecture-heading" className="font-heading text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-10 max-w-2xl">
            A typical AI system architecture.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <AIArchitectureDiagram />
        </FadeIn>
      </Section>


      {/* AI Automation — chain UI */}
      <Section aria-labelledby="automation-heading" className="relative overflow-hidden bg-[#1B1B1B]">
        <HeroBackgroundImage src="/images/ai-automation-cloud.webp" priority={false} />
        <div className="relative z-10">
        <FadeIn>
          <h2 id="automation-heading" className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl">
            Turn repetitive business workflows into intelligent systems.
          </h2>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-10">
            AI automation combines models with business rules, triggers, APIs and existing
            software into a workflow that can understand information, decide and act.
          </p>
        </FadeIn>
        <div className="mb-10 overflow-x-auto">
          <FlowChain steps={automationFlow} orientation="horizontal" dark />
        </div>
        <Button href="/ai-solutions">Explore AI Solutions</Button>
        </div>
      </Section>

      {/* Tech stack — real logos, marquee */}
      <Section aria-labelledby="stack-heading" className="bg-[#FAF7F2]">
        <div className="grid gap-10 lg:grid-cols-[1fr_260px] lg:items-center mb-10">
          <FadeIn>
            <h2 id="stack-heading" className="font-heading text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-4 max-w-2xl">
              Built with the tools the problem requires.
            </h2>
            <p className="text-[#525252] text-lg leading-relaxed max-w-2xl">
              The stack is selected around the requirements of the system rather than forcing
              every project into one technology set.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl lg:block">
              <Image
                src="/images/ai-engineering-circuit.webp"
                alt=""
                fill
                loading="lazy"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
        <TechLogoMarquee />
      </Section>

      {/* Process */}
      <Section aria-labelledby="process-heading" className="bg-white">
        <FadeIn>
          <h2 id="process-heading" className="font-heading text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-10 max-w-2xl">
            A practical process for turning an AI idea into a working system.
          </h2>
        </FadeIn>
        <div>
          {processSteps.map((step, index) => (
            <ProcessStepCard
              key={step.step}
              number={String(index + 1).padStart(2, "0")}
              description={`${step.step} — ${step.description}`}
              bgColor={stepBgColors[index % 2]}
              alignment={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </Section>

      {/* Responsible AI — automation UI mockup */}
      <Section aria-labelledby="responsible-heading" className="bg-[#1B1B1B]">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <h2 id="responsible-heading" className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Automation should increase capability without removing necessary human control.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              AI systems should have clear boundaries. Where an action is sensitive, irreversible
              or high-impact, the system should route to a person.
            </p>
            <ul className="grid gap-3">
              {responsiblePrinciples.map((principle) => (
                <li key={principle} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 size={18} className="flex-shrink-0 text-copper" />
                  {principle}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <HumanControlMockup />
          </FadeIn>
        </div>
      </Section>

      {/* Who I build for */}
      <Section aria-labelledby="who-heading" className="bg-white">
        <FadeIn>
          <h2 id="who-heading" className="font-heading text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-10 max-w-2xl">
            From startups building their first AI product to established organisations improving
            existing workflows.
          </h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <FadeIn key={audience.segment} delay={index * 0.05}>
                <div className="group h-full rounded-2xl border border-black/10 p-6 transition-colors hover:border-copper">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-copper/10 text-copper transition-colors group-hover:bg-copper group-hover:text-white">
                    <Icon size={20} />
                  </div>
                  <p className="font-heading font-semibold text-[#1B1B1B] mb-1">{audience.segment}</p>
                  <p className="text-[#525252] text-sm">{audience.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
       
      </Section>

      {/* Selected work */}
      <Section aria-labelledby="selected-work-heading" className="bg-[#FAF7F2]">
        <FadeIn>
          <h2 id="selected-work-heading" className="font-heading text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-10 max-w-2xl">
            Examples of AI systems and products.
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {selectedWork.map((project) => (
            <ProjectCardPortfolio
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.shortDescription}
              image={project.image}
              technologies={project.technologies}
              status={project.status}
            />
          ))}
        </div>
        <Button href="/projects">View All Projects</Button>
      </Section>

      {/* FAQ — split layout, before the final CTA */}
      <FAQSplitSection
        eyebrow="FAQ"
        heading="Frequently asked questions."
        body="Have a different question? Bring it directly and we can work through it together."
        ctaLabel="Ask Your Question"
        ctaHref={workWithMeHref(ENQUIRY_TYPES.notSure)}
        faqs={faqs}
        className="bg-white py-16 md:py-24"
      />

      {/* Single final CTA */}
      <section className="relative bg-gradient-to-br from-[#1B1B1B] via-[#3E2A15] to-[#FF8906] py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
            Have an AI system in mind?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Bring me the problem, workflow or product idea. We can work through what should be
            automated, where AI adds value, what needs to remain human and what the system would
            need to integrate with.
          </p>
          <Button href={workWithMeHref(ENQUIRY_TYPES.aiSystem)}>Start a Conversation</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

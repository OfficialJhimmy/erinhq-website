# ERIN Website Engineering Instructions

## Project identity

This repository is the personal website for Feyijimi Erinle, branded as ERIN.

Primary positioning:

> AI Engineer & Software Engineer building intelligent systems, AI products, automation and scalable software.

Core expertise:

- AI Engineering
- AI Automation
- AI Product Development
- Software Engineering

Supporting expertise:

- AI Agents
- RAG and Knowledge Systems
- LLM Applications
- Multi-Agent Systems
- AI Systems Architecture
- Backend Engineering
- Cloud Engineering
- Full-Stack Development
- DevOps

Location positioning:

> Based in Lagos, Nigeria. Working globally.

Do not reduce the brand to "AI only". Software engineering is the foundation of the current AI work.

---

## Non-negotiable implementation rule: inspect before changing

Before modifying the site:

1. Inspect the existing repository structure.
2. Inspect package.json and identify the framework, Next.js version, package manager and existing dependencies.
3. Inspect the existing app/router structure.
4. Inventory all current routes.
5. Inventory existing project/portfolio data and individual project pages.
6. Inspect the current design system, components, typography, colours, spacing and interaction patterns.
7. Inspect existing SEO metadata and analytics.
8. Inspect the existing Vercel deployment configuration.
9. Inspect existing forms, APIs and integrations.
10. Run the existing project locally and understand the current implementation before replacing anything.

Do not rebuild blindly.

Preserve useful existing work unless the specification explicitly calls for a change.

---

## Existing project preservation

The Projects/Portfolio work is being restructured, not deleted.

All existing projects, individual project pages, images, case study content, routes and useful functionality must remain intact unless explicitly requested otherwise.

Before changing Projects:

- inventory existing projects
- inventory existing routes
- identify indexed URLs
- identify project-specific layouts
- preserve existing URLs wherever possible
- add redirects or route aliases when a route genuinely must change
- preserve `/portfolio` through a redirect or alias if it currently exists
- never delete an existing project simply because it does not fit the new AI positioning

The new Projects architecture adds taxonomy and new AI work on top of the existing portfolio.

---

## Source-of-truth content

The approved content specifications live in:

`/docs/website-content/`

Read the relevant specification before implementing each page.

Files include:

- Home
- AI Solutions
- AI Engineering
- Projects and Case Studies
- About
- Work With Me

The `.md` versions are the preferred implementation references. The `.docx` versions are retained as human-readable source documents.

If the existing repository contains more current factual information than the specification, do not invent or silently overwrite facts. Flag the conflict and use the verified source.

---

## Website architecture

Primary navigation:

- Home
- AI Solutions
- AI Engineering
- Projects
- About
- Work With Me

Writing is currently hidden from the primary website navigation. Do not build or expose it as a visible primary page unless explicitly requested.

Supporting page:

- Software Engineering

Recommended URL structure:

- `/`
- `/ai-solutions`
- `/ai-solutions/[solution-slug]`
- `/ai-engineering`
- `/ai-engineering/ai-agents`
- `/ai-engineering/ai-automation`
- `/ai-engineering/rag`
- `/ai-engineering/ai-product-development`
- `/ai-engineering/multi-agent-systems`
- `/ai-engineering/ai-systems-architecture`
- `/software-engineering`
- `/software-engineering/full-stack-development`
- `/software-engineering/web-development`
- `/software-engineering/backend-development`
- `/software-engineering/cloud-engineering`
- `/software-engineering/devops`
- `/projects`
- `/projects/[project-name]`
- `/about`
- `/work-with-me`

SEO landing pages such as `/ai-engineer-nigeria` or `/ai-engineer-lagos` must not be created automatically. Only create them when they contain genuinely useful, differentiated content.

---

## Design direction

The website must feel:

- clean
- premium
- modern
- technically credible
- editorial
- attractive
- confident
- human
- fast

Do not make it look like a generic "AI startup" template.

Avoid:

- generic robot imagery
- excessive gradients
- glowing neon AI graphics
- unnecessary glassmorphism
- excessive animation
- huge walls of text
- meaningless dashboard mockups
- fake metrics
- generic stock imagery
- repetitive rounded cards everywhere

Prefer:

- strong typography
- generous whitespace
- clear hierarchy
- sophisticated grid systems
- restrained motion
- real project screenshots
- architecture diagrams
- workflow diagrams
- product UI
- carefully chosen photography
- visual storytelling
- strong editorial composition

### Existing Vercel site as visual reference

The existing Vercel application is:

`https://erin-the-brand-new-website.vercel.app/`

Use the existing Vercel site as a visual reference for design language and existing patterns.

Do NOT simply copy the current implementation.

Inspect it and identify:

- typography
- spacing
- layout rhythm
- colour usage
- navigation
- hero composition
- card treatment
- buttons
- interactions
- motion
- project presentation
- responsive behaviour

Reuse strong visual ideas where they fit the new architecture.

The final site should feel like an evolution of the current ERIN brand, not a completely unrelated redesign.

When a new page such as AI Engineering needs a stronger visual system, improve the existing design language rather than abandoning it.

---

## AI Engineering page design

The AI Engineering page is a high-priority authority page.

It should feel technical and visually impressive without becoming visually noisy.

Use the content specification as the source of truth.

Important visual ideas:

- system architecture diagrams
- AI workflow diagrams
- agent/tool/knowledge relationships
- retrieval flows
- validation and guardrail layers
- subtle technical motion
- project evidence
- code or infrastructure details only where useful

The key conceptual visual:

User / Business Event
→ Application
→ AI Orchestration
→ Knowledge / Models / Tools & APIs
→ Validation / Guardrails
→ Business Action or Response
→ Human Review when required
→ Monitoring + Evaluation

Do not imply that every system is autonomous.

---

# SEO ENGINEERING

SEO is a first-class engineering requirement.

Do not treat SEO as adding keywords to page text.

Build a technically sound search foundation.

## Metadata

Every indexable page must have:

- unique title
- unique meta description
- canonical URL
- Open Graph metadata
- Twitter/X metadata where appropriate
- correct robots directives
- meaningful heading hierarchy
- descriptive URL
- descriptive image alt text
- appropriate structured data where applicable

Use Next.js Metadata APIs.

Do not duplicate the same title and description across the site.

---

## Sitemap

Implement a dynamic sitemap using the framework's supported metadata convention.

The sitemap must include all canonical, indexable pages.

It must not include:

- noindex pages
- private routes
- duplicate URLs
- query-parameter variants
- development URLs
- preview deployment URLs

Use the production domain as the canonical origin.

---

## robots.txt

Implement a proper robots.txt.

Default intent:

- allow legitimate search crawlers to crawl public pages
- do not accidentally block CSS, JS, images or essential resources
- disallow private/admin/internal routes if any exist
- reference the production sitemap
- do not use robots.txt as a substitute for noindex

Do not block important pages from crawling.

---

## AI crawler accessibility

Do not automatically block legitimate AI/search crawlers.

The public site should remain accessible to relevant crawlers unless there is a deliberate business reason to restrict one.

Do not claim that this alone guarantees visibility in AI assistants.

AI discoverability depends on the same fundamentals that make content understandable to search engines:

- clear authoritative content
- crawlable pages
- semantic HTML
- strong internal linking
- structured data
- stable canonical URLs
- descriptive page titles
- useful original content
- reputable external references
- clear entity information

If implementing `llms.txt`, treat it as an optional supplementary machine-readable resource, not a replacement for normal SEO. Do not make unsupported ranking claims about it.

---

## Structured data

Implement JSON-LD where appropriate.

At minimum evaluate:

- Person
- WebSite
- Organization or professional entity where appropriate
- BreadcrumbList
- Article for future Writing content
- appropriate project/content schema only when valid

Do not invent schema properties.

The structured data must match visible page content.

Sanitize JSON-LD output appropriately.

---

## Internal linking

Create deliberate internal links between:

- Home
- AI Solutions
- individual AI Solutions
- AI Engineering
- AI Engineering subpages
- Projects
- project case studies
- Software Engineering
- About
- Work With Me

Important relationship:

AI Solutions = what can be built
AI Engineering = how it is engineered
Projects = proof
About = who ERIN is
Work With Me = conversion

Use descriptive anchor text.

Avoid "click here".

---

## Search intent and content architecture

Do not keyword-stuff.

Target search intent through useful pages.

Examples of relevant themes:

- AI Engineer Nigeria
- AI Engineer Lagos
- AI Automation Specialist
- AI Systems Architect
- AI Product Engineer
- Generative AI Engineer
- AI Agent Developer
- AI Consultant Nigeria
- Software Engineer Nigeria
- Full Stack Engineer
- AI Product Development
- AI Automation Services
- RAG Engineer
- Agentic AI Engineer

Use these naturally where relevant.

Nigeria should be a location signal, not a restriction on the market.

Use:

"Lagos, Nigeria. Working globally."

Do not repeat "Nigeria" in every heading or page title.

---

## Google Search Console

The production domain must be prepared for Google Search Console.

Before launch:

1. verify the production property
2. submit the sitemap
3. inspect key URLs
4. check indexability
5. check mobile rendering
6. monitor indexing and search performance

Do not promise that SEO changes will produce a specific ranking.

---

# ANALYTICS AND OBSERVABILITY

Implement analytics as a deliberate part of the site.

Preferred baseline:

- Google Analytics 4 for user behaviour and traffic
- Google Search Console for organic search performance
- Vercel Speed Insights for real-world performance/Core Web Vitals
- Vercel Analytics if it fits the existing deployment and privacy requirements

GA4 should allow analysis of:

- users
- sessions
- page views
- landing pages
- page paths
- traffic sources
- countries
- regions where available
- devices
- browsers
- engagement
- conversions
- outbound clicks
- enquiry submissions
- CTA interactions

Track meaningful events such as:

- `contact_form_started`
- `contact_form_submitted`
- `cta_clicked`
- `solution_viewed`
- `project_viewed`
- `external_link_clicked`

Use sensible event parameters.

Do not collect unnecessary personally identifiable information.

Never send raw form submissions, email addresses or private project information to analytics events.

If consent requirements apply to a visitor's jurisdiction, implement an appropriate consent mechanism rather than silently assuming consent.

---

# PERFORMANCE

Performance is a core requirement, not a final polish step.

Target:

- excellent Core Web Vitals
- fast first render
- low JavaScript
- minimal client-side hydration
- optimised images
- stable layout
- fast navigation
- accessible content
- strong mobile performance

Use:

- Next.js Server Components by default
- Client Components only where interaction requires them
- `next/image`
- `next/font`
- responsive image sizing
- modern image formats where appropriate
- lazy loading for below-the-fold media
- preload only genuinely critical resources
- dynamic imports for heavy interactive components
- streaming/Suspense where useful
- caching and revalidation where appropriate
- static generation for content that does not need runtime rendering

Avoid:

- unnecessary useEffect
- client-side fetching for static page content
- huge animation libraries for simple effects
- shipping entire component libraries to the client
- loading large video files immediately
- oversized hero images
- layout shifts caused by media without dimensions
- unnecessary third-party scripts

Every third-party script must have a reason to exist.

---

# ACCESSIBILITY

Target WCAG 2.2 AA where practical.

Ensure:

- semantic HTML
- keyboard navigation
- visible focus states
- sufficient colour contrast
- accessible buttons and links
- meaningful alt text
- labelled form controls
- error messages associated with inputs
- reduced-motion support
- no information communicated by colour alone
- logical heading hierarchy

---

# SECURITY

Follow normal production security practices.

- Never expose secrets in client code.
- Use environment variables.
- Validate form input server-side.
- Sanitize user-controlled content.
- Protect forms against abuse.
- Keep dependencies current where compatible.
- Avoid unnecessary third-party scripts.
- Do not expose internal API details.
- Use secure headers where appropriate.
- Do not log private enquiry information unnecessarily.

---

# QUALITY GATES

Before considering a page complete, verify:

### Content
- matches the approved specification
- no invented claims
- no unsupported metrics
- British English
- no sentence starts with "And"
- no em/en dashes

### Design
- consistent with ERIN brand
- clean and premium
- responsive
- visually balanced
- attractive without unnecessary effects

### SEO
- unique metadata
- canonical URL
- correct robots behaviour
- included in sitemap when indexable
- structured data where appropriate
- internal links
- descriptive headings
- image alt text

### Performance
- Lighthouse checked
- Core Web Vitals considered
- images optimised
- unnecessary JS removed
- no obvious layout shifts
- third-party scripts justified

### Accessibility
- keyboard tested
- focus tested
- mobile tested
- semantic HTML checked
- forms tested
- reduced motion checked

### Functional
- all links work
- all forms work
- no console errors
- no broken images
- no broken routes
- redirects work
- production build succeeds

---

# Working style for Claude Code

Do not make large destructive changes without first understanding the existing implementation.

Work incrementally.

For each major area:

1. inspect
2. plan
3. implement
4. test
5. review
6. move to the next area

When a requirement conflicts with an existing implementation, preserve the existing functionality unless the new specification explicitly supersedes it.

Do not invent missing information.

When something is ambiguous, use the project specifications and existing code as the source of truth.


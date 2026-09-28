# ERIN Website Rebuild and Engineering Prompt

You are the senior frontend engineer, AI product engineer, UX engineer and technical SEO engineer responsible for evolving the ERIN personal website into a premium, high-performance personal brand site.

## Your mission

Rebuild and refine the existing ERIN website without destroying the useful work that already exists.

The website should position Feyijimi Erinle as:

**AI Engineer & Software Engineer building intelligent systems, AI products, automation and scalable software.**

The site must make it immediately clear that:

- AI Engineering is a major focus.
- Software Engineering remains a core foundation.
- ERIN can build AI systems, AI products, automation and conventional software.
- ERIN is based in Lagos, Nigeria and works globally.
- ERIN is an engineer who can understand a business problem, design the system and build it.

The final website should feel premium, clean, modern, technically credible, editorial and highly performant.

---

# STEP 1: INSPECT BEFORE BUILDING

Do not start by replacing components.

First inspect:

- repository structure
- package.json
- Next.js version
- router structure
- current routes
- current components
- current design system
- current typography
- current colours
- current spacing
- current animations
- current project data
- existing project pages
- current metadata
- current robots.txt
- current sitemap
- current analytics
- current forms
- Vercel configuration
- environment variables
- existing SEO implementation

Then run the current site locally.

Create a route/content inventory before modifying the project.

The current deployed visual reference is:

https://erin-the-brand-new-website.vercel.app/

Inspect that site and use it as a design reference.

Do not simply copy it.

Extract the strongest visual language from it and evolve it into the new architecture.

---

# STEP 2: READ THE APPROVED CONTENT

The approved page specifications are in:

`/docs/website-content/`

Read the relevant Markdown specification before implementing each page.

Available specifications:

1. Home
2. AI Solutions
3. AI Engineering
4. Projects and Case Studies
5. About
6. Work With Me

The DOCX versions are also retained in the same directory for reference.

These documents are the content source of truth.

Do not invent:

- client names
- project results
- metrics
- employment history
- awards
- technologies
- testimonials
- revenue figures
- user counts
- performance numbers

If something is missing, preserve the existing verified information or flag it.

---

# STEP 3: PRESERVE EXISTING PROJECTS

This is extremely important.

The Projects page is being restructured, not replaced.

Before modifying Projects:

- inventory every existing project
- inventory every project URL
- inspect every project detail page
- preserve useful project content
- preserve images
- preserve working links
- preserve indexed URLs
- preserve project-specific layouts where appropriate

If the site currently has `/portfolio`, preserve it through a redirect or route alias if the new canonical route becomes `/projects`.

Do not delete old project pages simply because they are not AI projects.

Existing software work is part of the ERIN story.

---

# STEP 4: IMPLEMENT THE SITE ARCHITECTURE

Primary navigation:

Home
AI Solutions
AI Engineering
Projects
About
Work With Me

Writing is currently hidden from the primary navigation.

Supporting page:

Software Engineering

Recommended routes:

/
 /ai-solutions
 /ai-solutions/[solution-slug]
 /ai-engineering
 /ai-engineering/ai-agents
 /ai-engineering/ai-automation
 /ai-engineering/rag
 /ai-engineering/ai-product-development
 /ai-engineering/multi-agent-systems
 /ai-engineering/ai-systems-architecture
 /software-engineering
 /software-engineering/full-stack-development
 /software-engineering/web-development
 /software-engineering/backend-development
 /software-engineering/cloud-engineering
 /software-engineering/devops
 /projects
 /projects/[project-name]
 /about
 /work-with-me

Do not automatically create city/location SEO pages.

Only create additional SEO landing pages when there is enough unique useful content to justify them.

---

# STEP 5: DESIGN DIRECTION

The design must be clean and very attractive.

Think:

- premium personal brand
- high-end engineering portfolio
- editorial website
- technical credibility
- excellent typography
- restrained motion
- strong visual hierarchy
- whitespace
- sophisticated grids
- real product visuals
- architecture diagrams

Do not make it look like:

- a generic AI startup landing page
- a SaaS template
- a cyberpunk AI website
- a page full of glowing gradients
- a collection of random cards
- a generic developer portfolio

Avoid unnecessary:

- gradients
- glassmorphism
- glowing borders
- floating blobs
- robot illustrations
- stock AI imagery
- excessive rounded cards
- animation for animation's sake

Use actual project screenshots and technical visuals whenever possible.

---

# STEP 6: AI ENGINEERING VISUAL SYSTEM

The AI Engineering page should be one of the strongest pages visually.

It should communicate architecture, not just list AI buzzwords.

Create visual explanations for:

User / Business Event
→ Application
→ AI Orchestration
→ Knowledge / Models / Tools & APIs
→ Validation / Guardrails
→ Business Action or Response
→ Human Review when required
→ Monitoring + Evaluation

Show the idea that:

**An AI model is only one part of the system.**

Use:

- architecture diagrams
- workflow visualisations
- agent/tool relationships
- retrieval flows
- system components
- subtle technical motion
- project evidence

Do not imply that every problem requires an autonomous agent.

---

# STEP 7: SEO ENGINEERING

Treat SEO as an engineering system.

Every indexable page must have:

- unique title
- unique meta description
- canonical URL
- Open Graph metadata
- social metadata
- correct robots directives
- semantic headings
- descriptive URLs
- descriptive image alt text
- appropriate JSON-LD

Implement using Next.js metadata APIs.

Create:

- `app/robots.ts`
- `app/sitemap.ts`

or the appropriate equivalent for the actual project structure.

Robots must allow public pages to be crawled.

Do not accidentally block CSS, JavaScript or images.

Disallow only genuinely private/internal paths.

Do not use robots.txt to hide pages from search.

---

# STEP 8: AI SEARCH / AI DISCOVERABILITY

Do not treat "AI SEO" as a magic ranking feature.

Make the site highly understandable to both traditional search engines and AI systems.

Use:

- clean semantic HTML
- authoritative page content
- strong internal linking
- stable canonical URLs
- descriptive headings
- structured data
- clear entity information
- original content
- crawlable pages
- useful project evidence
- strong topical relationships

Do not automatically block legitimate AI/search crawlers.

If implementing `llms.txt`, treat it as supplementary documentation only. Do not claim it guarantees AI search visibility.

Make the site's information architecture easy for machines to understand.

---

# STEP 9: STRUCTURED DATA

Implement valid JSON-LD where appropriate.

Evaluate:

- Person
- WebSite
- BreadcrumbList
- Article for future Writing pages
- Organisation/professional entity where appropriate

Structured data must reflect visible content.

Never fabricate structured data.

Validate structured data before launch.

---

# STEP 10: ANALYTICS

Set up proper analytics.

Preferred baseline:

1. Google Analytics 4
2. Google Search Console
3. Vercel Speed Insights
4. Vercel Analytics if appropriate

Track:

- users
- sessions
- page views
- page paths
- landing pages
- countries
- regions where available
- devices
- browsers
- traffic sources
- engagement
- conversions

Track meaningful events:

- `cta_clicked`
- `contact_form_started`
- `contact_form_submitted`
- `solution_viewed`
- `project_viewed`
- `external_link_clicked`

Use parameters such as:

- CTA label
- page path
- solution slug
- project slug
- destination

Never send:

- email addresses
- names
- enquiry text
- private client information
- sensitive form content

to analytics events.

If consent is required for a visitor's jurisdiction, implement appropriate consent handling.

---

# STEP 11: SEARCH CONSOLE

Prepare the production domain for Google Search Console.

After deployment:

- verify the domain
- submit sitemap
- inspect important URLs
- check indexing
- check mobile usability
- check structured data
- monitor queries
- monitor pages
- monitor countries
- monitor CTR
- monitor impressions
- monitor clicks

Do not make ranking guarantees.

---

# STEP 12: PERFORMANCE

Performance is a launch requirement.

Use the actual Next.js architecture available in the repository.

Prefer:

- Server Components
- minimal Client Components
- `next/image`
- `next/font`
- responsive images
- modern image formats
- lazy loading
- dynamic imports for heavy features
- caching
- static generation where appropriate
- revalidation where useful
- streaming/Suspense where useful

Avoid:

- unnecessary `useEffect`
- unnecessary client-side fetching
- large client bundles
- heavy animation libraries
- huge hero videos
- unoptimised images
- unnecessary third-party scripts
- layout shifts
- blocking resources

Use Vercel Speed Insights to observe real-world performance.

Check Core Web Vitals.

---

# STEP 13: ACCESSIBILITY

Target WCAG 2.2 AA where practical.

Implement:

- semantic HTML
- keyboard navigation
- visible focus states
- correct contrast
- accessible forms
- proper labels
- meaningful alt text
- logical headings
- reduced motion
- accessible buttons
- accessible links

Do not make visual design more important than usability.

---

# STEP 14: MOBILE

The website must be designed mobile-first.

Test:

- small phones
- large phones
- tablets
- laptops
- large desktop screens

Pay particular attention to:

- navigation
- hero typography
- project cards
- architecture diagrams
- filters
- enquiry forms
- CTA sections
- image cropping
- animation performance

---

# STEP 15: CONTENT RELATIONSHIPS

Use internal linking intentionally.

AI Solutions:
"What can ERIN build?"

AI Engineering:
"How does ERIN engineer it?"

Projects:
"What has ERIN actually built?"

About:
"Who is ERIN?"

Software Engineering:
"What engineering foundation does ERIN bring?"

Work With Me:
"How can we start?"

These relationships should be visible in the navigation, content and contextual CTAs.

---

# STEP 16: CONVERSION

The Work With Me page should not be a generic contact form.

Support:

- Build an AI System
- Build an AI Product
- Build a Software Product
- Automate a Workflow
- I Have a Problem But I'm Not Sure What to Build

When users arrive from an AI Solution page, preselect the relevant enquiry type where practical.

Do not force users to understand technical terminology.

---

# STEP 17: FINAL QA

Before declaring the website finished:

Run the production build.

Check:

- TypeScript
- lint
- routes
- links
- redirects
- images
- metadata
- sitemap
- robots
- JSON-LD
- forms
- analytics
- mobile
- accessibility
- performance
- console errors

Check every important route manually.

Run Lighthouse or the project's equivalent performance/accessibility checks.

Review the final site as a user, not only as an engineer.

---

# FINAL STANDARD

The final result should feel like:

**A serious AI Engineer and Software Engineer's personal platform.**

It should not feel like:

**A developer portfolio that added AI keywords.**

The website needs to communicate engineering depth, product thinking, AI capability, strong visual taste and real-world usefulness.

Build the system carefully. Preserve existing work. Improve what already exists. Do not throw away good engineering just to make the site look new.

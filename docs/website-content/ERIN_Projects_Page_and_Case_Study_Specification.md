ERIN PROJECTS
Projects Page + Case Study Architecture
Extension specification: preserve existing work and add the new AI-focused structure
## 1. IMPORTANT IMPLEMENTATION DIRECTIVE
This document is an extension and restructuring specification. It is NOT a request to delete, replace or discard the existing Projects / Portfolio experience.
All existing projects, project pages, content, images, case-study information, URLs and useful existing functionality should remain intact unless a specific migration is explicitly required.
The new implementation should build on top of the existing portfolio. Existing work is part of ERIN's professional history and is valuable proof of software engineering, web development, product engineering and technical breadth.
The goal is to add a better information architecture, new filters/tabs, new AI projects and a stronger case-study structure without losing previous work.
## 2. Migration Principle
Think of the change as:
EXISTING PROJECTS + NEW TAXONOMY + NEW AI PROJECTS + IMPROVED CASE STUDIES
Not:
DELETE OLD PORTFOLIO → REPLACE WITH AI PORTFOLIO
Claude Code should inspect the current project routes and components before making changes. Preserve existing routes wherever practical. If a route must change, create a redirect from the old URL to the new canonical URL.
## 3. Primary Purpose of the Projects Page
The Projects page is the proof layer of the ERIN brand.
AI Solutions answers: 'What can you build for my organisation?'
AI Engineering answers: 'How do you engineer these systems?'
Projects answers: 'What have you actually built?'
Work With Me answers: 'How do I start a project with you?'
The Projects page should therefore demonstrate breadth without making AI and software engineering feel like separate careers.
## 4. Recommended URL
https://erinhq.com/projects
If the existing website currently uses /portfolio, do NOT remove it immediately. Preserve it through a redirect or route alias to /projects so existing links and search visibility are not unnecessarily broken.
## 5. SEO Metadata
Title:
AI & Software Engineering Projects | Feyijimi Erinle
Meta description:
Explore AI systems, automation platforms, software products, web applications and digital experiences built by Feyijimi Erinle, an AI Engineer and Software Engineer based in Nigeria and working globally.
## 6. Hero Section
Eyebrow:
PROJECTS
H1:
Systems, products and digital experiences I've built.
Supporting copy:
A selection of AI systems, software products, platforms, web applications and digital experiences I've designed and engineered across different industries and use cases.
Primary CTA:
Explore AI Solutions
Secondary CTA:
Work With Me
## 7. New Project Filters / Tabs
Add the following tabs or filter controls to the existing portfolio experience:
- All
- AI Engineering
- AI Automation
- Software Engineering
- Web Applications
- Platforms
- Websites & Digital Experiences
These are filters over the existing project collection. They are not separate portfolios.
A project may belong to more than one category. For example, an AI product can be tagged as both AI Engineering and Software Engineering.
## 8. Preserve Existing Projects
All existing projects currently represented on the ERIN portfolio should remain available.
The existing project collection should be audited before implementation. Known examples from the existing portfolio include:
- ERIN Personal Brand Website
- Omotola Omotayo Website
- Zaycodes
- Datamellon Website
- WriteTech Hub
- SongDis
- Shestel
- Dash Language School
- MellyAI Suite
- Melly Guard
- LSDPC Payment Portal
- AI Contract Generator
These are examples based on the current portfolio and project history. Claude Code should use the actual existing source data and project routes as the source of truth rather than recreating project information from this document.
No existing project should disappear simply because it is not AI-related. Software engineering and web development remain part of the ERIN story.
## 9. Existing Individual Project Pages
Existing individual project pages should remain intact.
- Preserve existing URLs where possible.
- Preserve existing project content and images.
- Preserve existing project-specific functionality.
- Preserve existing metadata where it is already useful.
- Improve the visual hierarchy only where it supports the new project architecture.
- Do not rewrite a project simply because it is older unless the content is clearly inaccurate or the user explicitly requests a rewrite.
- If an existing page already has a strong case-study structure, retain it and add missing fields only where useful.
Where a project has no individual page, create one using the new case-study template only when the project is important enough to justify a dedicated page.
## 10. Featured Project Strategy
The Projects page should have a Featured Projects section near the top.
Recommended initial featured AI projects:
- Kora — Internal AI Knowledge System
- Quill — AI Proposal & SOW Generator
- Atlas — Multi-Agent Research & Decision Intelligence
- Melly Guard — AI Security / Monitoring Platform
- AI Contract Generator
Add 2 to 4 strong software engineering projects alongside the AI projects. The exact projects should be selected from the existing portfolio based on quality, relevance and evidence.
Do not hide older work. Featured simply means prioritised visually, not the only work that exists.
## 11. Project Card Structure
Every project card should contain:
- Project image or product screenshot
- Category label
- Project name
- One-line description
- 2 to 4 capability or technology tags
- View Case Study or View Project CTA
Example:
AI ENGINEERING
Kora
Internal AI Knowledge System
An AI-powered knowledge system that helps teams retrieve and interact with organisational information.
RAG · Knowledge Systems · AI Engineering
View Case Study →
## 12. Project Taxonomy
Recommended classification model:
- AI Engineering — AI products, agents, RAG systems, AI platforms and intelligent applications.
- AI Automation — AI-enabled workflows, bots, business process automation and operational systems.
- Software Engineering — Full-stack products, backend systems, APIs and engineering platforms.
- Web Applications — Interactive web products and business applications.
- Platforms — Larger systems with multiple user roles, workflows or integrated services.
- Websites & Digital Experiences — Corporate websites, personal websites, marketing sites and immersive experiences.
Use tags rather than forcing every project into exactly one category.
## 13. Projects Page Section Order
1. Navigation
1. Hero
1. Project filters
1. Featured AI projects
1. AI Engineering projects
1. Software Engineering projects
1. Web applications and platforms
1. Websites and digital experiences
1. Custom build CTA
1. Footer
## 14. Project Case Study Template
This template is for NEW major project pages and for existing project pages that need a deeper case-study treatment. Existing pages do not need to be forcibly rewritten into this format if they already work well.
### 01. Project Overview
Project name, short description, category, role, project type, status, timeline where appropriate and technology summary.
### 02. The Problem
Explain the real business, product or user problem. Avoid starting with technology.
### 03. The Goal
Explain what the project needed to achieve.
### 04. The Solution
Explain what was designed and built.
### 05. How It Works
Show the main workflow using a product or system diagram.
### 06. Key Features
List the major user-facing and system capabilities.
### 07. My Role
Clearly state what ERIN personally designed, engineered, led or contributed.
### 08. Engineering & Architecture
Explain frontend, backend, AI, data, APIs, cloud, infrastructure and major architectural decisions relevant to the project.
### 09. Technical Decisions
Explain important choices and why they were made.
### 10. Challenges
Describe meaningful engineering, product or technical challenges.
### 11. Outcome
State verified outcomes, deliverables or capabilities. Never fabricate metrics.
### 12. What I Learned
Optional section for projects where engineering lessons provide useful insight.
### 13. Related AI Solution
If applicable, connect the project to a relevant AI Solution page.
### 14. Related Projects
Show 3 relevant projects.
### 15. Final CTA
Invite the visitor to discuss a similar project or a different problem.
## 15. Project Metadata Model
For maintainability, each project should have structured metadata.
- slug
- name
- shortDescription
- longDescription
- category
- tags
- industry
- projectType
- role
- status
- year
- featured
- technologies
- image / gallery
- caseStudyAvailable
- liveUrl where applicable
- repositoryUrl where applicable
- relatedSolutions
- relatedProjects
The actual implementation should use the existing project's data model if one already exists. Extend it rather than creating a parallel system unnecessarily.
## 16. AI Projects to Add
The following new projects should be added only where there is genuine work, prototype material, or an explicitly identified concept. They must not be presented as completed client deployments if they are not.
Kora — Internal AI Knowledge System — AI Engineering
Quill — AI Proposal & SOW Generator — AI Engineering / AI Automation
Atlas — Multi-Agent Research & Decision Intelligence — AI Engineering
Melly Guard — AI Security / Monitoring Platform — AI Engineering
AI Contract Generator — AI Document & Contract Workflow — AI Engineering / AI Automation
If a project is a concept rather than a completed build, label it clearly as a concept, prototype or solution exploration.
## 17. How Projects Connect to AI Solutions
This relationship is central to the new website.
Example:
AI Solution → AI Knowledge Assistant
Related proof → Kora
The AI Solution page explains what can be built for a business.
The Project page explains an actual system or relevant engineering work.
This creates a natural path:
Business problem → AI Solution → Proof → Conversation
Each relevant project should link to the closest AI Solution. Each relevant AI Solution should link to one or more relevant projects where real evidence exists.
## 18. Software Projects Must Remain Visible
Do not allow the AI repositioning to make the existing software engineering portfolio look obsolete.
Software engineering remains a core part of ERIN's positioning because AI products are software products.
Use the Software Engineering filter to make the existing body of work easy to discover.
A visitor should be able to filter the page and immediately see strong software engineering work without feeling like they have entered a different website.
## 19. Project Detail Page: Example Structure
Example for Kora:
KORA
Internal AI Knowledge System
AI ENGINEERING · RAG · KNOWLEDGE SYSTEMS
Short overview
Problem
Solution
Architecture diagram
Key features
AI / retrieval architecture
Engineering stack
Challenges and decisions
Outcome
Related AI Solution: AI Knowledge Assistant
CTA: Build Something Similar
The same structure can then be adapted for Quill, Atlas, Melly Guard, AI Contract Generator and future projects.
## 20. Case Study Visual Requirements
- Use actual product screenshots where available.
- Use architecture diagrams for technically complex systems.
- Use workflow diagrams for AI automation projects.
- Show before/after workflow comparisons when meaningful.
- Use image captions to explain what the visitor is looking at.
- Avoid decorative mockups that hide the actual product.
- Use responsive image optimisation and lazy loading for below-the-fold media.
- Ensure all images have meaningful alt text.
## 21. Projects Page SEO Strategy
The Projects page should target broad portfolio and professional-intent searches while individual project pages target their own project/topic intent.
Examples of relevant themes:
- AI engineering portfolio
- AI engineer portfolio
- AI projects
- AI automation projects
- software engineering portfolio
- full-stack engineering projects
- AI agent projects
- RAG projects
- AI product development projects
Do not stuff these phrases into the page. The project content itself should naturally establish the topical relevance.
## 22. Existing URL & SEO Preservation
This is a non-negotiable migration requirement.
- Audit all existing project URLs before implementation.
- Do not change URLs unnecessarily.
- If /portfolio currently exists, preserve it as a redirect or route alias to /projects.
- If individual project URLs already rank or are shared externally, preserve them.
- If a project URL must change, implement a permanent redirect from the old URL.
- Preserve existing title and description metadata where it is already accurate.
- Do not delete indexed project pages just because they are not AI projects.
## 23. Project Search & Filtering UX
- Filtering should update the project grid without creating unnecessary page reloads.
- Filters should be keyboard accessible.
- The active filter should be visually obvious.
- On mobile, filters can become a horizontally scrollable control or accessible dropdown.
- The URL may optionally reflect the selected filter if useful for sharing, but avoid creating hundreds of indexable duplicate URLs.
- Search should be added only if the portfolio becomes large enough to justify it.
## 24. Empty States
If a category has no projects, do not show an empty grid.
Instead, either hide the category until there is relevant work or show a simple message such as:
More projects in this category are being added.
Do not fabricate projects to fill a category.
## 25. Final Project CTA
H2:
Have something you want to build?
Body:
These projects show different ways I approach AI, software and product engineering. If you have a business problem, product idea or workflow you want to improve, we can work out what the right system should look like.
Primary CTA:
Start a Conversation
Secondary CTA:
Explore AI Solutions
## 26. Content Guardrails
- Never remove an existing project merely because it is not AI-related.
- Never fabricate a project, client, deployment or result.
- Clearly distinguish personal projects, client work, company work, prototypes and concepts.
- State ERIN's actual role on each project.
- Use verified technology stacks.
- Do not claim ownership of work that was produced entirely by another team.
- Do not invent metrics to make a case study sound more impressive.
- Keep technical explanations understandable to non-engineers.
- Use British English.
- Never start a sentence with 'And'.
- Avoid em dashes and en dashes throughout the website.
## 27. Claude Code Implementation Instructions
Before changing the Projects page, Claude Code should:
1. Inspect the existing Projects / Portfolio page implementation.
1. Identify the current project data source, components, routes and individual project pages.
1. Create an inventory of all existing projects and URLs.
1. Preserve all existing projects and pages.
1. Add the new filter taxonomy to the existing project data model.
1. Add new AI projects without deleting the existing collection.
1. Add the new case-study template as a reusable component for new or upgraded project pages.
1. Preserve existing project-specific layouts when they contain valuable content or functionality.
1. Add redirects or route aliases for any URL that changes.
1. Test all existing project links after the migration.
1. Test filters, responsive behaviour, accessibility and SEO metadata.
1. Only then apply visual refinements to align the page with the new ERIN brand.
## 28. Final Information Architecture
The final relationship should be:
AI SOLUTIONS
What ERIN can build for an organisation
↓
AI ENGINEERING
How ERIN engineers the systems
↓
PROJECTS
Proof of what ERIN has actually built
↓
WORK WITH ME
Start a conversation
The existing Software Engineering and Web Development projects remain inside Projects and are surfaced through the new filters. They are not removed or treated as legacy content.
## 29. Intended Visitor Takeaway
The visitor should leave the Projects page thinking:
“This is not just an AI portfolio. There is a real engineering history behind the AI work. I can see AI systems, software products, platforms and websites he has built, understand his role in them, and explore a similar solution if I need one.”
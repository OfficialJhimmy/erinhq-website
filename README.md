# ERIN Website Claude Code Pack

## Recommended project placement

Copy this structure into the root of the ERIN website repository:

```text
your-erin-website/
├── CLAUDE.md
├── docs/
│   └── website-content/
│       ├── ERIN_Home_Page_Content_Specification.md
│       ├── ERIN_AI_Solutions_Content_Specification.md
│       ├── ERIN_AI_Engineering_Page_Content_Specification.md
│       ├── ERIN_Projects_Page_and_Case_Study_Specification.md
│       ├── ERIN_About_Page_Content_Specification.md
│       ├── ERIN_Work_With_Me_Page_Content_Specification.md
│       └── [matching .docx files]
└── ...
```

Claude Code automatically uses `CLAUDE.md` as project-level instructions.

The Markdown files are the preferred implementation references because they are easy for coding agents to search and read. The DOCX files are retained for human reference.

## Recommended implementation order

1. Inspect existing repository
2. Global design system and shared layout
3. SEO/metadata foundation
4. Analytics and performance instrumentation
5. Home
6. AI Solutions + individual solution pages
7. AI Engineering
8. Projects migration and new taxonomy
9. Software Engineering
10. About
11. Work With Me
12. Final SEO/performance/accessibility QA

## Important

Do not let Claude delete existing portfolio/project pages.

The site is being evolved, not wiped and rebuilt from scratch.

Use the master prompt in:

`ERIN_WEBSITE_MASTER_IMPLEMENTATION_PROMPT.md`


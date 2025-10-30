// data/portfolioData.ts

export type ProjectCategory = 'all' | 'frontend' | 'backend' | 'fullstack' | 'documentation' | 'opensource';

export interface Project {
  id: string; // URL slug
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: ProjectCategory[];
  image: string;
  images: string[]; // Gallery images for detail page
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  year: string;
  client?: string;
  role: string;
  challenges?: string;
  solutions?: string;
  results?: string;
  testimonial?: {
    text: string;
    author: string;
    position: string;
  };
}

export const projects: Project[] = [
  {
    id: 'datamellon-dashboard',
    title: 'Datamellon AI Dashboard',
    shortDescription: 'Cloud-based frontend application with AI-powered tools for enterprise clients.',
    fullDescription: 'Built a comprehensive cloud-based dashboard that integrates 9+ custom GPT-based products tailored for finance, logistics, and operations. The platform streamlines tasks like reporting, content generation, and customer support.',
    category: ['frontend', 'fullstack'],
    image: '/images/portfolio/datamellon-thumb.jpg',
    images: [
      '/images/portfolio/datamellon-1.jpg',
      '/images/portfolio/datamellon-2.jpg',
      '/images/portfolio/datamellon-3.jpg',
    ],
    technologies: ['React.js', 'TypeScript', 'GPT Integration', 'Cloud Architecture', 'REST APIs', 'Redux'],
    liveUrl: 'https://datamellon.com',
    year: '2023',
    client: 'Datamellon',
    role: 'Lead Frontend Engineer',
    challenges: 'Integrating multiple AI models while maintaining performance and creating intuitive interfaces for complex enterprise workflows.',
    solutions: 'Implemented lazy loading, optimized API calls, and created a modular component system that allowed for rapid iteration.',
    results: 'Successfully launched 9+ AI-powered products, reduced task completion time by 60%, and improved client satisfaction scores by 40%.',
    testimonial: {
      text: 'Erin transformed our vision into a scalable, production-ready platform. The attention to detail and technical expertise was outstanding.',
      author: 'John Smith',
      position: 'CTO, Datamellon',
    },
  },
  {
    id: 'writetech-hub-docs',
    title: 'WriteTech Hub Documentation System',
    shortDescription: 'End-to-end documentation platform for startups and open-source projects.',
    fullDescription: 'Led the development of a comprehensive documentation system that includes onboarding flows, API references, and user-facing guides. The system helps teams reduce support load and speed up developer onboarding.',
    category: ['documentation'],
    image: '/images/portfolio/writetech-thumb.jpg',
    images: [
      '/images/portfolio/writetech-1.jpg',
      '/images/portfolio/writetech-2.jpg',
    ],
    technologies: ['Documentation as Code', 'Markdown', 'Git', 'API Documentation', 'SEO'],
    liveUrl: 'https://writetechhub.com',
    year: '2024',
    client: 'WriteTech Hub',
    role: 'Senior Technical Writer',
    challenges: 'Creating documentation that serves both technical and non-technical audiences while maintaining consistency across multiple projects.',
    solutions: 'Developed a style guide, created reusable templates, and implemented a review process that ensures quality and consistency.',
    results: 'Reduced support tickets by 35%, improved developer onboarding time by 50%, and increased documentation engagement by 70%.',
  },
  {
    id: 'shestel-ecommerce',
    title: 'Shestel E-commerce Platform',
    shortDescription: 'High-growth e-commerce platform handling thousands of daily transactions.',
    fullDescription: 'As the first engineer, I helped build the technical foundation and scale the platform from the ground up. Implemented CI/CD pipelines and automated testing that brought code coverage to 95%.',
    category: ['fullstack', 'backend'],
    image: '/images/portfolio/shestel-thumb.jpg',
    images: [
      '/images/portfolio/shestel-1.jpg',
      '/images/portfolio/shestel-2.jpg',
      '/images/portfolio/shestel-3.jpg',
    ],
    technologies: ['Next.js', 'Node.js', 'AWS', 'Jenkins', 'Docker', 'PostgreSQL'],
    liveUrl: 'https://shestel.com',
    year: '2021-2023',
    client: 'Shestel',
    role: 'First Engineer',
    challenges: 'Building a scalable platform from scratch while establishing engineering best practices and culture.',
    solutions: 'Set up CI/CD pipelines, implemented automated testing, and created engineering rituals that fostered collaboration.',
    results: 'Scaled to handle thousands of daily transactions, reduced post-release bugs by 40%, and built a high-performing engineering team.',
  },
  {
    id: 'melly-ai-chatbot',
    title: 'MellyAI Open Source Chatbot',
    shortDescription: 'Open-source AI chatbot with improved RAG/LLM capabilities.',
    fullDescription: 'Improved the RAG (Retrieval-Augmented Generation) and LLM capabilities of an open-source chatbot. Added comprehensive setup guides and contribution guidelines to help the community grow.',
    category: ['opensource', 'fullstack'],
    image: '/images/portfolio/melly-thumb.jpg',
    images: [
      '/images/portfolio/melly-1.jpg',
      '/images/portfolio/melly-2.jpg',
    ],
    technologies: ['Python', 'LangChain', 'OpenAI', 'Vector Databases', 'FastAPI'],
    githubUrl: 'https://github.com/username/melly-ai',
    year: '2024',
    role: 'Open Source Contributor',
    challenges: 'Improving AI accuracy while making the project accessible to new contributors.',
    solutions: 'Optimized the RAG pipeline, wrote detailed documentation, and created beginner-friendly contribution guides.',
    results: 'Improved response accuracy by 30%, attracted 50+ new contributors, and increased GitHub stars by 200%.',
  },
  {
    id: 'dash-language-school',
    title: 'Dash Language School Website',
    shortDescription: 'Responsive website that boosted mobile traffic by 40%.',
    fullDescription: 'Developed and implemented a responsive website design that significantly improved user engagement. Created reusable React components that reduced development time by 60%.',
    category: ['frontend'],
    image: '/images/portfolio/dash-thumb.jpg',
    images: [
      '/images/portfolio/dash-1.jpg',
      '/images/portfolio/dash-2.jpg',
    ],
    technologies: ['React.js', 'Redux', 'Firebase', 'HTML5', 'CSS3'],
    year: '2020-2022',
    client: 'Dash Language School',
    role: 'Frontend Engineer',
    challenges: 'Creating a mobile-first experience that works across all devices while maintaining fast load times.',
    solutions: 'Implemented responsive design patterns, optimized images, and created a component library.',
    results: 'Boosted mobile traffic by 40%, increased user engagement by 25%, and improved code quality by 30%.',
  },
  // Add 10 more projects here following the same structure
  {
    id: 'saas-analytics-platform',
    title: 'SaaS Analytics Platform',
    shortDescription: 'Real-time analytics dashboard for B2B SaaS companies.',
    fullDescription: 'Built a comprehensive analytics platform that provides real-time insights into user behavior, product usage, and business metrics.',
    category: ['fullstack', 'frontend'],
    image: '/images/portfolio/analytics-thumb.jpg',
    images: ['/images/portfolio/analytics-1.jpg'],
    technologies: ['React.js', 'TypeScript', 'D3.js', 'Node.js', 'MongoDB'],
    year: '2023',
    role: 'Full Stack Engineer',
  },
  {
    id: 'api-documentation-portal',
    title: 'API Documentation Portal',
    shortDescription: 'Interactive API documentation with live examples.',
    fullDescription: 'Created an interactive API documentation portal with live code examples, testing playground, and comprehensive guides.',
    category: ['documentation', 'frontend'],
    image: '/images/portfolio/api-docs-thumb.jpg',
    images: ['/images/portfolio/api-docs-1.jpg'],
    technologies: ['React.js', 'OpenAPI', 'Swagger', 'Markdown'],
    year: '2023',
    role: 'Technical Writer & Frontend Developer',
  },
  {
    id: 'cms-admin-dashboard',
    title: 'CMS Admin Dashboard',
    shortDescription: 'Content management system with intuitive admin interface.',
    fullDescription: 'Developed a powerful yet user-friendly CMS admin dashboard for managing content across multiple platforms.',
    category: ['fullstack', 'frontend'],
    image: '/images/portfolio/cms-thumb.jpg',
    images: ['/images/portfolio/cms-1.jpg'],
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    year: '2024',
    role: 'Full Stack Developer',
  },
  {
    id: 'payment-gateway-integration',
    title: 'Payment Gateway Integration',
    shortDescription: 'Secure payment processing system for e-commerce.',
    fullDescription: 'Integrated multiple payment gateways and built a unified payment processing system with fraud detection.',
    category: ['backend', 'fullstack'],
    image: '/images/portfolio/payment-thumb.jpg',
    images: ['/images/portfolio/payment-1.jpg'],
    technologies: ['Node.js', 'Stripe', 'PayPal', 'Express.js'],
    year: '2022',
    role: 'Backend Engineer',
  },
  {
    id: 'developer-onboarding-docs',
    title: 'Developer Onboarding Documentation',
    shortDescription: 'Comprehensive onboarding guides for developer teams.',
    fullDescription: 'Created a complete set of onboarding documentation that reduced new developer ramp-up time significantly.',
    category: ['documentation'],
    image: '/images/portfolio/onboarding-thumb.jpg',
    images: ['/images/portfolio/onboarding-1.jpg'],
    technologies: ['Markdown', 'Git', 'Documentation as Code'],
    year: '2023',
    role: 'Technical Writer',
  },
  {
    id: 'microservices-architecture',
    title: 'Microservices Architecture',
    shortDescription: 'Scalable microservices system for enterprise application.',
    fullDescription: 'Designed and implemented a microservices architecture that improved system scalability and maintainability.',
    category: ['backend', 'fullstack'],
    image: '/images/portfolio/microservices-thumb.jpg',
    images: ['/images/portfolio/microservices-1.jpg'],
    technologies: ['Node.js', 'Docker', 'Kubernetes', 'RabbitMQ'],
    year: '2023',
    role: 'Backend Architect',
  },
  {
    id: 'design-system-library',
    title: 'Design System Library',
    shortDescription: 'Reusable component library for product teams.',
    fullDescription: 'Built a comprehensive design system and component library used across multiple products.',
    category: ['frontend'],
    image: '/images/portfolio/design-system-thumb.jpg',
    images: ['/images/portfolio/design-system-1.jpg'],
    technologies: ['React.js', 'Storybook', 'TypeScript', 'Tailwind CSS'],
    year: '2024',
    role: 'Frontend Engineer',
  },
  {
    id: 'oss-contribution-guide',
    title: 'Open Source Contribution Guide',
    shortDescription: 'Documentation to help developers contribute to open source.',
    fullDescription: 'Wrote comprehensive guides on how to contribute to open source projects, covering everything from Git basics to PR best practices.',
    category: ['documentation', 'opensource'],
    image: '/images/portfolio/oss-guide-thumb.jpg',
    images: ['/images/portfolio/oss-guide-1.jpg'],
    technologies: ['Markdown', 'Git', 'GitHub'],
    year: '2023',
    role: 'Technical Writer',
  },
  {
    id: 'real-time-collaboration-tool',
    title: 'Real-time Collaboration Tool',
    shortDescription: 'Collaborative platform with live editing capabilities.',
    fullDescription: 'Built a real-time collaboration tool that allows multiple users to work together seamlessly.',
    category: ['fullstack', 'frontend'],
    image: '/images/portfolio/collab-thumb.jpg',
    images: ['/images/portfolio/collab-1.jpg'],
    technologies: ['React.js', 'Socket.io', 'Node.js', 'Redis'],
    year: '2024',
    role: 'Full Stack Engineer',
  },
  {
    id: 'devops-automation-scripts',
    title: 'DevOps Automation Scripts',
    shortDescription: 'Automation scripts for CI/CD pipelines.',
    fullDescription: 'Created automation scripts that streamlined deployment processes and reduced manual intervention.',
    category: ['backend', 'opensource'],
    image: '/images/portfolio/devops-thumb.jpg',
    images: ['/images/portfolio/devops-1.jpg'],
    technologies: ['Bash', 'Python', 'Jenkins', 'Docker'],
    year: '2022',
    role: 'DevOps Engineer',
  },
];

// Helper function to get projects by category
export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category.includes(category));
};

// Helper function to get project by ID
export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

// Helper function to get related projects
export const getRelatedProjects = (currentProject: Project, limit: number = 3): Project[] => {
  return projects
    .filter(project => 
      project.id !== currentProject.id && 
      project.category.some(cat => currentProject.category.includes(cat))
    )
    .slice(0, limit);
};
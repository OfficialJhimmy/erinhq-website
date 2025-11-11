// data/writingData.ts

export type ArticleCategory = 'blogs' | 'caseStudies' | 'apiDocs' | 'openSource' | 'contentForBrands' | 'tutorials' | 'specialization' | 'finance';

export interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
  readTime: string;
  link: string;
  linkText?: string;
  category: ArticleCategory[];
  tags: string[];
  companyName?: string;
  featured?: boolean;
  publishedDate?: string;
}

export const articles: Article[] = [
  // Blogs & Tutorials
  {
    id: 'six-month-halftime',
    title: 'Halftime: 6 Months of Showing Up for Myself',
    description: 'Six Months of showing up for myself, a first half of my 2025 experiences.',
    image: '/images/six-months.png',
    readTime: '11 min read',
    link: 'https://medium.com/@erinlejhimmy/halftime-6-months-of-showing-up-for-myself-44a43af22f26',
    linkText: 'Read more',
    category: ['blogs', 'tutorials'],
    tags: ['JavaScript', 'React.js', 'QR-Code'],
    companyName: 'ERIN HQ',
    featured: true,
    publishedDate: '2025-06-30',
  },
  {
    id: 'code-obfuscation',
    title: 'Code Obfuscation Explained: What It Is, How It Works, and When to Use It',
    description: 'A comprehensive guide on what is Code Obfuscation, how it works, and when to use it.',
    image: '/images/code-obfuscation.png',
    readTime: '8 min read',
    link: 'https://the-erin.hashnode.dev/code-obfuscation-explained',
    linkText: 'Read more',
    category: ['blogs', 'tutorials'],
    tags: ['JavaScript', 'React.js', 'QR-Code'],
    companyName: 'ERIN HQ',
    featured: true,
    publishedDate: '2025-09-01',
  },
  {
    id: 'agentic-ai',
    title: 'What Is Agentic AI and Why It Matters for the Future of Productivity',
    description: 'What Is Agentic AI and Why It Matters for the Future of Productivity',
    image: '/images/agentic-ai.png',
    readTime: '10 min read',
    link: 'https://the-erin.hashnode.dev/what-is-agentic-ai-and-why-it-matters-for-the-future-of-productivity',
    linkText: 'Read more',
    category: ['blogs', 'tutorials'],
    tags: ['JavaScript', 'React.js', 'QR-Code'],
    companyName: 'ERIN HQ',
    featured: true,
    publishedDate: '2025-06-25',
  },
  {
    id: 'ai-chatbot-aws',
    title: 'How to build an AI Chatbot using Amazon Lex and Lambda, and Integration with ReactJS',
    description: 'A comprehensive guide on how to build an AI chatbot using Amazon Lex, and Lambda, and integration with ReactJs.',
    image: '/images/ai-chatbot-lex.png',
    readTime: '16 min read',
    link: 'https://the-erin.hashnode.dev/how-to-build-an-ai-chatbot-using-amazon-lex-and-lambda-and-integration-with-reactjs',
    linkText: 'Read more',
    category: ['blogs', 'tutorials'],
    tags: ['JavaScript', 'React.js', 'QR-Code'],
    companyName: 'ERIN HQ',
    featured: true,
    publishedDate: '2023-03-15',
  },
  {
    id: 'gateways-aws',
    title: 'Gateways in AWS: A Comprehensive Guide',
    description: 'A comprehensive guide to gateways in AWS Cloud.',
    image: '/images/gateways.png',
    readTime: '10 min read',
    link: 'https://the-erin.hashnode.dev/gateways-in-aws',
    linkText: 'Read more',
    category: ['blogs', 'tutorials'],
    tags: ['JavaScript', 'React.js', 'QR-Code'],
    companyName: 'ERIN HQ',
    featured: true,
    publishedDate: '2024-01-31',
  },
  {
    id: 'migrate-exisiting-aws-accounts',
    title: 'How to Migrate Existing AWS Accounts into AWS Organizations',
    description: 'A comprehensive guide to migrating existing AWS accounts into AWS Organization.',
    image: '/images/migrate.png',
    readTime: '8 min read',
    link: 'https://the-erin.hashnode.dev/how-to-migrate-existing-aws-accounts-into-aws-organizations',
    linkText: 'Read more',
    category: ['blogs', 'tutorials'],
    tags: ['JavaScript', 'React.js', 'QR-Code'],
    companyName: 'ERIN HQ',
    featured: true,
    publishedDate: '2023-07-11',
  },
  {
    id: 'node-graph-ql',
    title: 'How to Build A GraphQL API with Node.js, Apollo-Server, and MongoDB Atlas',
    description: 'A comprehensive guide on how to build a GraphQL API with Node.js, Apollo-Server, and MongoDB Atlas.',
    image: '/images/node.png',
    readTime: '16 min read',
    link: 'https://the-erin.hashnode.dev/understanding-high-availability-fault-tolerance-and-disaster-recovery-in-aws-an-overview',
    linkText: 'Read more',
    category: ['blogs', 'tutorials'],
    tags: ['JavaScript', 'React.js', 'QR-Code'],
    companyName: 'ERIN HQ',
    featured: true,
    publishedDate: '2023-04-26',
  },
  {
    id: 'highavailability-fault-tolerance-disaster-recovery',
    title: 'Understanding High Availability, Fault Tolerance, and Disaster Recovery in AWS: An Overview',
    description: 'A comprehensive guide to understanding high availability, fault tolerance, and disaster recovery in AWS.',
    image: '/images/Cloud.png',
    readTime: '11 min read',
    link: 'https://the-erin.hashnode.dev/understanding-high-availability-fault-tolerance-and-disaster-recovery-in-aws-an-overview',
    linkText: 'Read more',
    category: ['blogs', 'tutorials'],
    tags: ['JavaScript', 'React.js', 'QR-Code'],
    companyName: 'ERIN HQ',
    featured: true,
    publishedDate: '2023-06-12',
  },
  {
    id: 'graph-ql',
    title: 'A Comprehensive Guide to Writing Your First GraphQL Query',
    description: 'A comprehensive guide on how to write your first GraphQL Query',
    image: '/images/graphql.png',
    readTime: '16 min read',
    link: 'https://the-erin.hashnode.dev/a-comprehensive-guide-to-writing-your-first-graphql-query',
    linkText: 'Read more',
    category: ['blogs', 'tutorials'],
    tags: ['JavaScript', 'React.js', 'QR-Code'],
    companyName: 'ERIN HQ',
    featured: true,
    publishedDate: '2023-04-10',
  },
  {
    id: 'ssr-nextjs',
    title: 'A detailed guide on how to implement Server-side Rendering (SSR) in a NextJs application',
    description: 'A detailed guide on how to implement SSR in a NextJs Application.',
    image: '/images/ssr.png',
    readTime: '16 min read',
    link: 'https://the-erin.hashnode.dev/a-detailed-guide-on-how-to-implement-server-side-rendering-ssr-in-a-nextjs-application',
    linkText: 'Read more',
    category: ['blogs', 'tutorials'],
    tags: ['JavaScript', 'React.js', 'QR-Code'],
    companyName: 'ERIN HQ',
    featured: true,
    publishedDate: '2023-03-29',
  },
  {
    id: 'dynamic-qr-codes-react',
    title: 'Creating Dynamic QR Codes Using React.js: A Step-by-Step Tutorial',
    description: 'A comprehensive guide to building dynamic QR code generators using React.js',
    image: '/images/qrcode-banner.webp',
    readTime: '8 min read',
    link: 'https://zaycodes-1686045136273.hashnode.dev/creating-dynamic-qr-codes-using-reactjs-a-step-by-step-tutorial',
    linkText: 'Read more',
    category: ['blogs', 'tutorials'],
    tags: ['JavaScript', 'React.js', 'QR-Code'],
    companyName: 'Hashnode',
    featured: true,
    publishedDate: '2023-06-15',
  },
  {
    id: 'aws-s3-optimization',
    title: 'How to Optimize AWS Simple Storage Service for Better Performance',
    description: 'Learn best practices and techniques to optimize AWS S3 for maximum performance',
    image: '/images/s3.webp',
    readTime: '10 min read',
    link: 'https://www.freecodecamp.org/news/how-to-optimize-aws-s3-for-performance/',
    linkText: 'Read more',
    category: ['blogs', 'tutorials'],
    tags: ['Cloud Computing', 'AWS', 'S3'],
    companyName: 'freeCodeCamp',
    featured: true,
    publishedDate: '2023-08-20',
  },
  {
    id: 'scraping-vs-api',
    title: 'Fetching Data through Scraping vs. API: How the Scraping Browser Can Save You Money on API Fees',
    description: 'A comparison of web scraping and API usage with cost-benefit analysis',
    image: '/images/send-email.webp',
    readTime: '7 min read',
    link: 'https://techjury.net/blog/fetching-data-through-scraping-vs-api/',
    linkText: 'Read more',
    category: ['blogs', 'tutorials'],
    tags: ['Web Scraping', 'Python', 'JavaScript'],
    companyName: 'Techjury',
    featured: true,
    publishedDate: '2023-09-10',
  },
  {
    id: 'vscode-extensions-react',
    title: '7 Best VSCode Extensions for React Devs in 2023',
    description: 'Essential VS Code extensions that every React developer should have',
    image: '/images/vscode.webp',
    readTime: '5 min read',
    link: 'https://javascript.plainenglish.io/7-best-vscode-extensions-for-react-devs-in-2023-eb565ef47c40',
    linkText: 'Read more',
    category: ['blogs', 'tutorials'],
    tags: ['React.js', 'VS Code', 'JavaScript'],
    companyName: 'inPlain English',
    featured: true,
    publishedDate: '2023-07-05',
  },
  {
    id: 'react-email-resend',
    title: 'How to Create and Send Custom Emails using React Email and Resend API',
    description: 'Build professional email templates with React and send them using the Resend API',
    image: '/images/send-email.webp',
    readTime: '12 min read',
    link: 'https://zaycodes-1686045136273.hashnode.dev/how-to-create-and-send-custom-emails-using-react-email-and-resend-api',
    linkText: 'Read more',
    category: ['blogs', 'tutorials'],
    tags: ['React.js', 'Resend API', 'Email Marketing'],
    companyName: 'WriteTech Hub',
    featured: true,
    publishedDate: '2023-10-15',
  },
  {
    id: 'ai-image-generator',
    title: 'Transforming Pixels into Imagination: Building an AI-Powered Image Generator with React.js and OpenAI API',
    description: 'Create an AI-powered image generation application using React.js and OpenAI',
    image: '/images/pixels.webp',
    readTime: '15 min read',
    link: 'https://zaycodes-1686045136273.hashnode.dev/transforming-pixels-into-imagination-building-an-ai-powered-image-generator-with-reactjs-and-openai-api',
    linkText: 'Read more',
    category: ['blogs', 'tutorials',],
    tags: ['AI', 'React.js', 'OpenAI'],
    companyName: 'WriteTech Hub',
    featured: true,
    publishedDate: '2023-11-20',
  },

  // Case Studies
  {
    id: 'crc-aws-migration',
    title: 'CRC Credit Bureau Migrates its Applications and Data to AWS',
    description: 'How CRC Credit Bureau successfully migrated to AWS with improved scalability and performance',
    image: '/images/crclogo.svg',
    readTime: '6 min read',
    link: 'https://www.datamellon.com/CaseStudyCRC/',
    linkText: 'Read more',
    category: ['caseStudies'],
    tags: ['CRC', 'Cloud Migration', 'AWS'],
    companyName: 'Datamellon',
    featured: false,
    publishedDate: '2023-05-12',
  },
  {
    id: 'gtco',
    title: 'GTBank Migrates its GTWorld backend to AWS Cloud',
    description: 'As part of its strategic initiative to improve operational efficiency and accelerate digital transformation, GTBank embraced DevOps practices to enhance the reliability, scalability, and security of its GTWorld mobile app.',
    image: '/images/gtco_logo.png',
    readTime: '5 min read',
    link: 'https://www.datamellon.com/CaseStudyGTCO/',
    linkText: 'Read more',
    category: ['caseStudies'],
    tags: ['SaaS', 'Performance', 'Backend'],
    featured: true,
    publishedDate: '2024-02-15',
  },
  {
    id: 'fincra-cost-optimization',
    title: 'Fincra Achieves Cost Savings and Optimization with Well-Architected Review',
    description: 'Cost optimization strategies implemented for Fincra using AWS Well-Architected Framework',
    image: '/images/fincra-case-study.webp',
    readTime: '7 min read',
    link: 'https://datamellon.com/fincra-war',
    linkText: 'Read more',
    category: ['caseStudies'],
    tags: ['Fincra', 'AWS', 'Cost Optimization'],
    companyName: 'Datamellon',
    featured: false,
    publishedDate: '2023-06-20',
  },
  {
    id: 'providus-bank-api-modernization',
    title: 'Providus Bank Modernizes API Management with AWS & Datamellon',
    description: 'Modernizing API infrastructure for Providus Bank using AWS services',
    image: '/images/providus-case-study.webp',
    readTime: '8 min read',
    link: 'https://datamellon.com/providus-case-study',
    linkText: 'Read more',
    category: ['caseStudies'],
    tags: ['Providus Bank', 'AWS', 'API Management'],
    companyName: 'Datamellon',
    featured: false,
    publishedDate: '2023-07-18',
  },
  {
    id: 'smallsmall-aws-migration',
    title: 'SmallSmall Technology Migrates to AWS with Datamellon',
    description: 'Complete cloud migration journey of SmallSmall Technology to AWS',
    image: '/images/startups.webp',
    readTime: '6 min read',
    link: 'https://datamellon.com/small-small',
    linkText: 'Read more',
    category: ['caseStudies'],
    tags: ['Cloud Migration', 'AWS', 'SmallSmall'],
    companyName: 'Datamellon',
    featured: false,
    publishedDate: '2023-08-25',
  },

  // API Documentation & Specialization
  {
    id: 'aws-waf-specialization',
    title: 'Task Tracker API Documentation',
    description: 'Comprehensive documentation on AWS WAF implementation and best practices',
    image: '/images/aws-waf.webp',
    readTime: '10 min read',
    link: 'https://datamellon.com/aws-waf',
    linkText: 'Read more',
    category: ['apiDocs'],
    tags: ['WAF', 'AWS', 'Security'],
    companyName: 'Datamellon',
    featured: false,
    publishedDate: '2023-09-05',
  },

  // Open Source
  {
    id: 'melly-ai-chatbot',
    title: 'Mautic Migration',
    description: 'Improved RAG/LLM, added setup guide, wrote contribution guidelines',
    image: '/images/chatbot-blog.jpg',
    readTime: '5 min read',
    link: '#',
    linkText: 'View Project',
    category: ['openSource'],
    tags: ['AI', 'Chatbot', 'Open Source'],
    featured: true,
    publishedDate: '2024-03-05',
  },

  // Content for Brands
  {
    id: 'developer-experience-content',
    title: 'Developer Experience Content',
    description: 'Creating content that resonates with technical audiences',
    image: '/images/brand-content-1.jpg',
    readTime: '5 min read',
    link: '#',
    linkText: 'Read more',
    category: ['contentForBrands'],
    tags: ['Developer Experience', 'Content Strategy', 'Technical Writing'],
    featured: false,
    publishedDate: '2024-02-28',
  },

  // Finance (Additional Category)
  {
    id: 'financial-consulting-startups',
    title: 'The Importance of Financial Consulting for Startups',
    description: 'Why early-stage startups need professional financial consulting',
    image: '/images/startups.webp',
    readTime: '6 min read',
    link: 'https://omassociates.com.ng/the-importance-of-financial-consulting-for-startups/',
    linkText: 'Read more',
    category: ['contentForBrands', 'finance'],
    tags: ['CFO', 'Consulting', 'Startups'],
    companyName: 'O.M Associates',
    featured: false,
    publishedDate: '2023-04-10',
  },
  {
    id: 'risk-management-compliance',
    title: 'Risk Management and Compliance Strategies for Modern Businesses',
    description: 'Essential risk management and compliance frameworks for growing businesses',
    image: '/images/risk.webp',
    readTime: '8 min read',
    link: 'https://omassociates.com.ng/risk-management-and-compliance-strategies-for-modern-businesses/',
    linkText: 'Read more',
    category: ['contentForBrands', 'finance'],
    tags: ['Risk Management', 'Compliance', 'Business Strategy'],
    companyName: 'O.M Associates',
    featured: false,
    publishedDate: '2023-05-15',
  },
  {
    id: 'data-analytics-financial-reporting',
    title: 'Leveraging Technology and Data Analytics for Accurate Financial Reporting',
    description: 'How modern technology improves financial reporting accuracy and efficiency',
    image: '/images/data-analytics.webp',
    readTime: '7 min read',
    link: 'https://omassociates.com.ng/leveraging-technology-and-data-analytics-for-accurate-financial-reporting/',
    linkText: 'Read more',
    category: ['contentForBrands', 'finance'],
    tags: ['Data Analytics', 'Financial Reporting', 'Tech'],
    companyName: 'O.M Associates',
    featured: false,
    publishedDate: '2023-06-08',
  },
];

// Helper function to get articles by category
export const getArticlesByCategory = (category: ArticleCategory): Article[] => {
  if (category === 'blogs') {
    // For blogs, show all blog-type content including tutorials
    return articles.filter(article => article.category.includes('blogs'));
  }
  return articles.filter(article => article.category.includes(category));
};

// Helper function to get featured articles
export const getFeaturedArticles = (limit?: number): Article[] => {
  const featured = articles.filter(article => article.featured);
  return limit ? featured.slice(0, limit) : featured;
};

// Helper function to get article by ID
export const getArticleById = (id: string): Article | undefined => {
  return articles.find(article => article.id === id);
};

// Helper function to get related articles
export const getRelatedArticles = (currentArticle: Article, limit: number = 3): Article[] => {
  return articles
    .filter(article => 
      article.id !== currentArticle.id && 
      (article.category.some(cat => currentArticle.category.includes(cat)) ||
       article.tags.some(tag => currentArticle.tags.includes(tag)))
    )
    .slice(0, limit);
};

// Helper function to get articles by tag
export const getArticlesByTag = (tag: string): Article[] => {
  return articles.filter(article => 
    article.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
};

// Helper function to get all unique tags
export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  articles.forEach(article => {
    article.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
};
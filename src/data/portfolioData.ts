// data/portfolioData.ts

export type ProjectCategory =
  | "all"
  | "portfolio"
  | "company"
  | "software tools"
  | "frontend"
  | "backend"
  | "fullstack"
  | "ai";

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
  solutions?: string[];
  results?: string;
  testimonial?: {
    text: string;
    author: string;
    position: string;
  };
}

export const projects: Project[] = [
  {
    id: "erin-personal-brand",
    title: "ERIN Personal Brand Website",
    shortDescription:
      "A fast and responsive personal brand website that showcases my work in tech, writing, and content creation.",
    fullDescription:
      "ERIN is my personal brand website built to bring together everything I do in one place. I work as a software engineer, a technical writer, a content creator, and a lifestyle enthusiast. The website reflects all these parts of me with a clean and fast interface that is easy to navigate.",
    category: ["portfolio", "frontend", "fullstack"],
    image: "/images/erin-prototype.webp",
    images: ["/images/erin-container.png", "/images/erin-full.png"],
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "Vercel",
    ],
    year: "2025",
    liveUrl: "https://erinhq.com",
    client: "Personal Project",
    role: "Software Engineer",
    challenges:
      "I needed a personal website that represents both my skills and personality while delivering high performance across all devices.",
    solutions: [
      "Built using Next.js for speed, SEO, and server side optimization",
      "Responsive layouts for mobile, tablet, and desktop users",
      "Improved page performance with image optimization and caching",
      "Simple and clear navigation for a seamless browsing experience",
      "Clean and modern UI that shows professionalism and creativity",
    ],
    results:
      "The website now loads quickly, feels smooth, and provides a fresh, engaging experience. I received positive feedback from HR professionals, tech founders, and fellow engineers. It has helped me increase my visibility, strengthen my portfolio presence, and showcase my work with confidence.",
  },
  {
    id: "omotola-omotayo",
    title: "Omotola Omotayo Professional Website",
    shortDescription:
      "A premium professional website showcasing her story, achievements, and booking opportunities.",
    fullDescription:
      "A personal brand website built for Omotola O. Omotayo, the founder of Elegance Media and COO at WriteTech Hub. She has over 7 years of experience as a community builder, project manager, and a strong advocate for diversity in tech. The website gives a complete view of her achievements, services, and media presence, making it easy for users to reach out and engage with her work.",
    category: ["portfolio", "frontend"],
    image: "/images/omotola-omotayo.png",
    images: ["/images/omotola-three.png", "/images/omotola-two.png"],
    technologies: ["WordPress", "Elementor", "HTML5", "CSS3", "SEO Tools"],
    year: "2024",
    liveUrl: "https://omotolaomotayo.com",
    client: "Elegance Media",
    role: "Frontend Developer",
    challenges:
      "She needed a single platform that could showcase her digital footprint, experience, speaking engagements, awards, and press features while staying easy to update.",
    solutions: [
      "Built a content management system using WordPress and Elementor",
      "Designed a clear structure for services, awards, features, and speaking pages",
      "Added contact and booking features for one-on-one sessions and speaking requests",
      "Optimized page performance and mobile experience",
      "Designed a modern interface that reflects her brand and credibility",
      "Enabled her team to easily update content anytime",
    ],
    results:
      "The website receives over 1,000 daily visitors and has become the primary place for people to learn about her and connect. It strengthened her brand, provided booking convenience for event organizers, and increased visibility in the tech ecosystem.",
    testimonial: {
      text: "ERIN brought my brand to life online. It is now easy for people to learn about me, download my media kit, and book me for speaking engagements. The site is beautiful, well organized, and very easy to update.",
      author: "Omotola O. Omotayo",
      position: "Founder, Elegance Media",
    },
  },
  {
    id: "zaycodes",
    title: "Zaycodes Personal Brand Website",
    shortDescription:
      "A personal brand website built to showcase her work, services, recognitions, and provide an easy way for clients to collaborate with her.",
    fullDescription:
      "A professional personal brand platform for Zainab Daodu — a Senior Technical Writer, former Software Developer, and Founder of WriteTech Hub. The website highlights her services such as technical documentation, public speaking, consultation, and content creation. It also presents her brand achievements, recognitions, and work samples, while giving users a seamless and responsive experience across all devices.",
    category: ["portfolio", "frontend"],
    image: "/images/zaycodes-cover.png",
    images: ["/images/zaycodes-one.png", "/images/zaycodes-two.png"],
    technologies: ["WordPress", "Elementor", "HTML5", "CSS3"],
    year: "2024",
    liveUrl: "https://zaycodes.com",
    client: "ZayCodes",
    role: "Frontend Developer",
    challenges:
      "She needed a platform that could hold her services, recognitions, work experiences, booking features, and media resources while staying flexible enough to update as her brand grows.",
    solutions: [
      "Built a scalable content management system using WordPress and Elementor",
      "Created dedicated pages for services, recognitions, and portfolio pieces",
      "Designed a structured experience for booking requests and contact",
      "Optimized the website for mobile, accessibility, and performance",
      "Ensured her team could easily upload new information without technical skills",
    ],
    results:
      "The website now serves as a central hub for brand visibility. It has increased her inquiries and digital reach, offering a professional space that reflects her work and credibility in the tech ecosystem.",
    testimonial: {
      text: "ERIN really understood my vision and executed it perfectly. The website represents my brand so well and helps me reach more clients and engagements. Updating content has never been easier — I love it!",
      author: "Zainab Daodu",
      position: "Senior Technical Writer & Founder, WriteTech Hub",
    },
  },
  {
    id: "datamellon",
    title: "Datamellon — Cloud & AI Consulting Website",
    shortDescription:
      "A fast, secure, and scalable company website with a complete CMS for managing content, showcasing services, and driving client engagement.",
    fullDescription:
      "Datamellon is a Cloud-native software development and AI consulting company with operations in the UK, Nigeria, Ghana, Kenya, USA, Canada, Uganda, South Africa, Dubai and Saudi Arabia. They provide digital transformation services, Machine Learning solutions, and Generative AI consulting for enterprise and government organisations. I built a high-performance company website and an internal Content Management System to support their brand expansion and global presence.",
    category: ["company", "fullstack"],
    image: "/images/datamellon-cover.png",
    images: [
      // "/images/datamellon-cover.png",
      "/images/datamellon-gallery.png",
    ],
    technologies: [
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "Python",
      "Docker",
      "AWS EC2",
      "AWS RDS",
      "REST API",
    ],
    year: "2024",
    liveUrl: "https://datamellon.com",
    client: "Datamellon",
    role: "Full Stack Engineer",
    challenges:
      "Datamellon needed a secure, modern, enterprise-grade website capable of handling constant growth, global traffic, and frequent content updates across multiple service offerings.",
    solutions: [
      "Built a high-performance website using Next.js with server-side rendering for speed and SEO",
      "Designed a scalable architecture using AWS services for high availability",
      "Developed a custom CMS with CRUD APIs and RBAC authentication system for secure content updates",
      "Implemented responsive UI with TailwindCSS for consistent mobile and desktop experience",
      "Optimized images, caching, and delivery pipelines for faster load times globally",
      "Integrated analytics tools for tracking engagement and marketing performance",
      "Ensured strong security compliance for enterprise clients and government partnerships",
    ],
    results:
      "The platform now supports Datamellon’s global business operations with enterprise-level performance and secure workflow. The in-house CMS enables the sales and marketing teams to update content independently, resulting in faster campaign delivery and an improved lead conversion rate.",
    testimonial: {
      text: "ERIN delivered a high-performing digital product that perfectly aligns with our brand. The CMS has transformed how we ship marketing content. Our online presence now represents who we are — a premium Cloud and AI solutions company.",
      author: "Datamellon Executive Team",
      position: "IT and Digital Strategy",
    },
  },
  {
    id: 'writetech-hub',
    title: 'WriteTech Hub — Technical Writing & Documentation Platform',
    shortDescription:
      'A CMS-powered website that showcases WriteTech Hub’s technical writing expertise, services, and resources for developers and organizations.',
    fullDescription:
      'WriteTech Hub is a platform dedicated to clear, precise technical communication, enabling growth and innovation through technical content. The website highlights services like Technical Content Creation, Outsourcing & Hiring Solutions, and Technical Writing Development & Resources. I built a modern CMS website using WordPress, React, and JavaScript to allow constant updates while delivering a seamless user experience.',
    category: ['company', 'frontend'],
    image: '/images/wth.png',
    images: [
      '/images/wth-two.png',
      '/images/wth-one.png',
    ],
    technologies: ['WordPress', 'React', 'JavaScript', 'HTML5', 'CSS3', 'SEO Tools'],
    year: '2024',
    liveUrl: "https://writetechhub.org",
    client: 'WriteTech Hub',
    role: 'Full Stack Developer',
    challenges:
      'The platform required frequent content updates, interactive pages for services and resources, and a design that communicates professionalism and innovation while remaining accessible.',
    solutions: [
      'Built a dynamic CMS with WordPress and React for easy content updates',
      'Designed responsive, mobile-first interfaces that adapt seamlessly to all devices',
      'Created structured sections for services, resources, and developer guides',
      'Implemented efficient CRUD workflows for team members to manage content without technical support',
      'Optimized performance and load times for better user engagement and SEO',
      'Designed clean UI/UX to reflect WriteTech Hub’s professionalism and thought leadership',
      'Integrated analytics to track engagement and user behavior for continuous improvement'
    ],
    results:
      'The website now serves as the central hub for WriteTech Hub’s brand and offerings. It allows the team to update content independently, drives higher user engagement, and presents the company as a leader in technical communication and resources.',
    testimonial: {
      text:
        'ERIN transformed our vision into a powerful, modern platform. The website is easy to manage, visually appealing, and truly captures the essence of WriteTech Hub’s mission. Our clients now enjoy a smooth and professional experience.',
      author: 'WriteTech Hub Executive Team',
      position: 'Leadership'
    }
  },
  {
    id: 'songdis',
    title: 'SongDis — Global Music Distribution Platform',
    shortDescription:
      'A powerful platform for artists and publishers to distribute music globally, manage royalties, and access analytics.',
    fullDescription:
      'SongDis is a music distribution company that enables artists and global superstars to get their music everywhere — Spotify, Apple Music, and more. The platform allows users to upload music, access professional tools, maintain 100% ownership, and earn revenue in any currency. I led the frontend development, building a seamless, responsive, and interactive user experience for Admin, Artist, and Publisher Dashboards, while ensuring modularity and scalability across all components.',
    category: ['company', 'frontend'],
    image: '/images/songdis-cover.png',
    images: [
      '/images/songdis-1.jpg',
      '/images/songdis-2.jpg',
    ],
    technologies: ['Next.js', 'TypeScript', 'React.js', 'TailwindCSS', 'REST APIs'],
    year: '2024',
    client: 'SongDis',
    liveUrl: "https://songdis.com",
    role: 'Lead Frontend Developer',
    challenges:
      'The platform required a highly interactive and responsive frontend for multiple user types (Admin, Artists, Publishers) with different modules, while maintaining a fast, reliable, and intuitive user experience.',
    solutions: [
      'Developed modular, reusable frontend components using Next.js and TypeScript',
      'Built fully responsive dashboards for Admin, Artists, and Publishers with custom modules',
      'Optimized user interactions for fast load times and seamless navigation',
      'Implemented dynamic charts and analytics views for revenue and royalties tracking',
      'Ensured scalability to support a growing global user base',
      'Collaborated with backend engineers to integrate APIs securely and efficiently',
      'Focused on intuitive UX design to enhance adoption and engagement across all user roles'
    ],
    results:
      'The SongDis platform now delivers a world-class user experience for artists, publishers, and admins alike. Users can manage their music, track revenue, and access analytics effortlessly. The responsive, modular dashboards have significantly improved engagement, adoption, and satisfaction across all user types.',
    testimonial: {
      text:
        'ERIN’s frontend expertise brought SongDis to life. The dashboards are intuitive, fast, and professional. Our global artists and publishers love the platform, and it has set a new standard for music distribution user experience.',
      author: 'SongDis Executive Team',
      position: 'Product & Operations'
    }
  },
  {
    id: 'shestel',
    title: 'Shestel — Global Digital Content Platform',
    shortDescription:
      'A global platform connecting users through digital content including movies, TV shows, and sports, with AI-powered engagement features.',
    fullDescription:
      'Shestel is a global digital content platform designed to bring people together through the content they love. By leveraging movies, TV shows, and sports, the platform encourages engagement, connection, and community. As a founding software engineer, I led the engineering team, established coding standards, and set up the engineering culture. I contributed extensively to full-stack development across React.js, React Native, Python, Microservices, REST APIs, and AI/ML integrations, creating a scalable and high-performance platform.',
    category: ['company', 'fullstack', 'frontend', 'backend'],
    image: '/images/shestel-new.png',
    images: [
      '/images/shestel-home.png',
      '/images/shestel-movie.png',
    ],
    technologies: [
      'React.js',
      'React Native',
      'Python',
      'Microservices',
      'REST APIs',
      'AI & Machine Learning',
      'Docker',
      'AWS'
    ],
    year: '2021-2023',
    client: 'Shestel',
    role: 'Founding Software Engineer',
    challenges:
      'The platform needed to handle large-scale digital content delivery, ensure engagement through AI-driven features, and maintain fast, reliable performance while onboarding new engineers to a high standard of code quality.',
    solutions: [
      'Led the engineering team and established coding standards and development culture',
      'Built full-stack features using React.js, React Native, and Python microservices',
      'Integrated AI and Machine Learning algorithms to personalize content engagement',
      'Set up scalable REST APIs and backend architecture for high performance',
      'Onboarded new engineers to coding practices, ensuring consistency and maintainability',
      'Implemented CI/CD pipelines, automated testing, and monitoring for robust deployments',
      'Optimized platform for responsive, cross-device performance and seamless user experience'
    ],
    results:
      'Shestel successfully scaled to a global audience, delivering a fast, reliable, and engaging content platform. The engineering standards established led to consistent code quality, faster onboarding of engineers, and a high-performing, maintainable platform. Users experienced seamless access to content, fostering stronger engagement and connection.',
    testimonial: {
      text:
        'As a founding engineer, ERIN brought technical vision, leadership, and execution to Shestel. The platform’s performance, scalability, and user experience reflect his deep expertise and commitment to building world-class systems.',
      author: 'Shestel CTO',
      position: 'Chief Technology Officer'
    }
  }, 
  {
    id: 'dash-language-school',
    title: 'Dash Language School Website',
    shortDescription:
      'A responsive, user-friendly platform for enrolling, paying, and managing language courses across multiple languages.',
    fullDescription:
      'Dash Language School offers language courses in German, Portuguese, Spanish, Mandarin, French, and Italian, helping learners of all ages and backgrounds explore the educational, cultural, and linguistic aspects of these countries. I built a modern, interactive web application using React.js and Node.js for the content management system. The platform allows users to easily browse courses, make payments, and register seamlessly, while providing a visually engaging experience enhanced with Framer animations.',
    category: ['company','frontend', 'fullstack'],
    image: '/images/dash-cover.png',
    images: [
      '/images/dash-1.jpg',
      '/images/dash-2.jpg',
    ],
    technologies: ['React.js', 'Node.js', 'Paystack', 'Framer Motion', 'HTML5', 'CSS3', 'REST APIs'],
    year: '2020-2022',
    client: 'Dash Language School',
    liveUrl: "https://www.dashlanguageschool.com.ng",
    role: 'Full Stack Engineer',
    challenges:
      'The platform needed to support multiple languages, provide a seamless registration and payment workflow, and deliver an engaging, interactive experience for learners of all ages, while being easy to manage for the school staff.',
    solutions: [
      'Built a responsive frontend using React.js with an intuitive navigation and registration flow',
      'Developed a content management system in Node.js for staff to manage courses and content easily',
      'Integrated Paystack for secure and seamless payment processing',
      'Implemented Framer Motion animations to enhance interactivity and user engagement',
      'Optimized the website for fast load times across all devices and browsers',
      'Designed a scalable structure to easily add new courses, languages, and features',
      'Ensured accessibility and mobile-first design for learners of all ages and devices'
    ],
    results:
      'The platform significantly improved enrollment efficiency, allowed learners to browse and pay for courses easily, and increased engagement through a visually appealing and interactive interface. Staff can now manage courses and content effortlessly, and the platform has become the primary hub for students to explore and register for language classes.',
    testimonial: {
      text:
        'ERIN built a platform that transformed how we reach and engage with our learners. The website is intuitive, fast, and visually impressive, making registration and payments effortless. His technical expertise and attention to detail are exceptional.',
      author: 'Dash Language School Director',
      position: 'Director'
    }
  },
  {
    id: 'david-olivia',
    title: 'David Olivia Consulting Website',
    shortDescription:
      'A professional website with CMS capabilities for managing content, SEO, and client engagement for a compliance consulting firm.',
    fullDescription:
      'David Olivia Consulting Ltd specializes in compliance consulting, training, and property management services. The website provides a professional, user-friendly interface to showcase the company’s expertise, services, and thought leadership. I built a CMS-powered frontend using WordPress, enabling the team to update content, manage SEO, and track website performance seamlessly. The platform ensures a smooth user experience for clients and partners while reflecting the firm’s credibility and professionalism.',
    category: ['frontend', 'company'],
    image: '/images/david-cover.png',
    images: [
      '/images/david-olivia-1.jpg',
      '/images/david-olivia-2.jpg',
    ],
    technologies: ['WordPress', 'Elementor', 'HTML5', 'CSS3', 'SEO Tools', 'JavaScript'],
    year: '2024',
    liveUrl: "https://www.davidolivia.com",
    client: 'David Olivia Consulting Ltd',
    role: 'Frontend Developer',
    challenges:
      'The platform needed to reflect professionalism, allow the company to update content regularly, manage SEO efficiently, and provide a smooth experience for clients and partners accessing services and resources.',
    solutions: [
      'Built a CMS-powered frontend using WordPress for easy content management',
      'Designed responsive and professional layouts for service pages and corporate information',
      'Optimized the website for SEO and page performance to drive traffic',
      'Implemented structured content management for updates by non-technical staff',
      'Created an intuitive user interface for clients and visitors to explore services and resources',
      'Ensured mobile-first design and accessibility across all devices'
    ],
    results:
      'The website now serves as a central hub for client engagement, showcasing David Olivia Consulting’s services and expertise effectively. Staff can update content independently, SEO performance has improved, and user experience is seamless across devices.',
    testimonial: {
      text:
        'ERIN developed a website that perfectly reflects our professionalism and expertise. The CMS allows our team to manage content with ease, and the overall design enhances user engagement and SEO performance.',
      author: 'David Olivia',
      position: 'Founder & CEO'
    }
  },
  {
    id: 'klaudworks',
    title: 'KlaudWorks — AI-Powered FinOps SaaS Tool',
    shortDescription:
      'A cloud financial management platform that enables users to monitor, analyze, and optimize cloud costs with AI-driven insights.',
    fullDescription:
      'KlaudWorks is an AI-powered FinOps solution developed by Datamellon. It helps businesses maximize cloud value by monitoring, analyzing, and optimizing their cloud costs efficiently, similar to AWS Cost Explorer. I worked as a senior frontend engineer on a team of talented developers, building a highly responsive and interactive dashboard using TypeScript, React.js, and TailwindCSS. We also integrated AI-driven insights to provide actionable recommendations and real-time analytics for cloud financial management.',
    category: ['software tools', 'frontend', 'fullstack'],
    image: '/images/klaudworks-cover.png',
    images: [
      '/images/klaudworks-one.png',
      '/images/klaudworks-two.png',
    ],
    technologies: ['React.js', 'TypeScript', 'TailwindCSS', 'AI Integration', 'REST APIs', 'Data Visualization'],
    year: '2024',
    liveUrl: "https://www.klaudworks.io/",
    client: 'Datamellon',
    role: 'Senior Frontend Engineer',
    challenges:
      'The platform needed to handle complex cloud financial data, deliver AI-driven insights, and provide a seamless user experience on a highly interactive dashboard for enterprise users.',
    solutions: [
      'Developed responsive and modular frontend components using React.js and TypeScript',
      'Integrated AI-driven insights into dashboards for actionable cloud cost recommendations',
      'Implemented interactive charts and data visualizations for clear analytics',
      'Optimized frontend performance for fast rendering of large datasets',
      'Ensured cross-browser compatibility and mobile responsiveness',
      'Collaborated closely with backend engineers to integrate APIs efficiently',
      'Enhanced user experience with TailwindCSS and consistent design patterns'
    ],
    results:
      'The KlaudWorks platform now provides enterprise users with a seamless and insightful experience to monitor, manage, and optimize cloud costs. User adoption increased, and the AI-driven insights helped organizations save on cloud spending while improving operational efficiency.',
    testimonial: {
      text:
        'ERIN’s frontend expertise elevated KlaudWorks to a world-class SaaS experience. The dashboard is intuitive, fast, and visually engaging, making complex cloud financial data easy to understand and act upon.',
      author: 'Datamellon Product Manager',
      position: 'Product Manager'
    }
  },
  {
    id: 'melly-ai-suite',
    title: 'Melly AI Suite — AI GPT Products for Enterprises',
    shortDescription:
      'A suite of 9 internal AI GPTs tailored for diverse business use cases, delivering intelligent solutions across industries.',
    fullDescription:
      'Melly AI Suite is a collection of AI-powered GPT products developed by Datamellon, designed to address a wide range of industry-specific challenges in banking, insurance, fitness, lifestyle, and more. I served as the Lead Frontend Engineer across all 9 GPT applications, building highly interactive, scalable, and intuitive user interfaces. Using Next.js, React, TypeScript, TailwindCSS, and AWS Amplify, I created seamless user experiences for enterprise clients, ensuring that each GPT delivered actionable insights and smooth interactions for end users. The suite demonstrates advanced AI integration in real-world enterprise workflows.',
    category: ['ai', 'frontend', 'fullstack'],
    image: '/images/mellyai-cover.png',
    images: [
      '/images/mellyai-three.png',
      '/images/mellyai-one.png',
      '/images/mellyai-two.png'
    ],
    technologies: ['Next.js', 'React.js', 'TypeScript', 'TailwindCSS', 'AWS Amplify', 'GPT Integration', 'REST APIs'],
    year: '2025',
    client: 'Datamellon',
    role: 'Lead Frontend Engineer',
    challenges:
      'The suite required consistent, high-performance frontends for 9 different AI GPT applications, each with unique industry workflows and complex AI-driven interactions. Ensuring seamless integration with backend AI services while maintaining responsiveness, accessibility, and a consistent design system was critical.',
    solutions: [
      'Led frontend development for all 9 GPT applications, standardizing design and interactions across the suite',
      'Built modular and reusable React components with TypeScript for maintainable and scalable code',
      'Integrated AI GPT APIs and ensured smooth real-time interactions with AWS Amplify backend services',
      'Implemented responsive designs with TailwindCSS for seamless cross-device experiences',
      'Optimized frontend performance for rapid rendering of AI responses and complex workflows',
      'Collaborated closely with backend engineers and AI specialists to align UI with AI functionality',
      'Ensured accessibility standards and user-friendly navigation for enterprise users across industries'
    ],
    results:
      'The Melly AI Suite successfully delivered 9 enterprise-ready AI GPT applications, streamlining workflows, providing actionable insights, and enabling business users to leverage AI effectively. The frontends were highly performant, visually consistent, and intuitive, leading to strong adoption and positive feedback from clients across multiple industries.',
    testimonial: {
      text:
        'ERIN’s leadership and frontend expertise were instrumental in bringing the Melly AI Suite to life. The interfaces are seamless, responsive, and highly interactive, enabling our AI products to deliver real business impact across multiple industries.',
      author: 'Datamellon CTO',
      position: 'Chief Technology Officer'
    }
  },
  {
    id: 'melly-guard',
    title: 'Melly Guard — AI-Powered Fraud Detection & Monitoring',
    shortDescription:
      'A unified AI platform for real-time fraud detection, AML/CTF monitoring, and automated compliance workflows.',
    fullDescription:
      'Melly Guard is an AI-driven fraud monitoring and detection tool used by several banks in Nigeria. It provides real-time detection across multiple channels, monitors transactions for AML/CTF risks, offers explainable AI outputs for regulatory acceptance, and automates compliance workflows to reduce operational costs. I worked across the full stack, building the Next.js frontend, Node.js and Python backend services, containerizing everything with Docker, and managing deployments with Kubernetes on AWS. This project required high performance, reliability, and seamless integration with critical banking systems.',
    category: ['software tools', 'ai', 'frontend', 'backend', 'fullstack'],
    image: '/images/main-dashboard.png',
    images: [
      '/images/reasoning.png',
      '/images/ctf.png',
      '/images/fraud.png'
    ],
    technologies: ['Next.js', 'React.js', 'Node.js', 'Python', 'Docker', 'Kubernetes', 'AWS', 'AI Integration', 'XAI'],
    year: '2025',
    client: 'Various Banks in Nigeria',
    role: 'Full Stack Engineer',
    challenges:
      'Ensuring real-time system performance during peak banking hours while processing high volumes of transactions. Balancing AI accuracy with regulatory compliance and maintaining high availability were critical.',
    solutions: [
      'Designed and implemented a caching layer to reduce database load and improve response times',
      'Optimized backend queries and AI processing pipelines for peak-hour performance',
      'Built the frontend in Next.js and React for responsive, real-time dashboards for banking users',
      'Containerized all services using Docker and orchestrated with Kubernetes for scalability and reliability',
      'Integrated explainable AI outputs (XAI) to ensure compliance with regulatory standards',
      'Collaborated with banks to align platform functionality with operational workflows and reporting requirements',
      'Implemented automated monitoring and alerting for fraud and AML/CTF events'
    ],
    results:
      'Melly Guard successfully reduced detected fraud cases by over 15% during early deployment and continues to improve as AI learns from transaction patterns. The platform is reliable, fast, and provides actionable insights to banks, directly impacting operational efficiency and customer safety.',
    testimonial: {
      text:
        'Erin’s full-stack expertise and deep understanding of AI systems were crucial in delivering a high-performance fraud detection platform. The system is fast, reliable, and has made a measurable impact on our operations.',
      author: 'Chief Risk Officer',
      position: 'Leading Nigerian Bank'
    }
  }, 
  {
    id: 'lsdpc-payment-portal',
    title: 'LSDPC Payment Portal — Government Property Transactions Platform',
    shortDescription:
      'A secure, multi-user payment portal for Lagos State Development and Property Corporation, enabling property transactions and administrative operations.',
    fullDescription:
      'The LSDPC Payment Portal is a comprehensive platform designed for Lagos State Development and Property Corporation, a state government entity that manages property sales, rentals, and development. The portal allows users to buy properties, pay rents, service charges, legal fees, perform change of ownership, land regularization, and submit complaints. It serves four distinct user personas: general users, MD, Marketing Admin, PLM Admin, and Finance Admin. I built the frontend using React and TypeScript, focusing on creating a responsive, accessible, and intuitive interface that simplifies complex property transactions for users while providing robust admin controls for internal teams.',
    category: ['software tools', 'frontend', 'fullstack'],
    image: '/images/lsdpc-thumb.png',
    images: [
      '/images/lsdpc-1.png',
      '/images/lsdpc-2.png',
      '/images/lsdpc-3.png'
    ],
    technologies: ['React.js', 'TypeScript', 'REST APIs', 'Responsive Design', 'Accessibility', 'Secure Authentication'],
    year: '2025',
    client: 'Lagos State Development and Property Corporation',
    role: 'Frontend Engineer',
    challenges:
      'Designing a portal that catered to multiple user types with different permissions and workflows, while ensuring security, accessibility, and ease of use for a government-backed system.',
    solutions: [
      'Developed a modular React frontend using TypeScript to support multiple user personas and workflows',
      'Built responsive and accessible UI components for seamless interaction across devices',
      'Integrated secure authentication and role-based access control for internal and external users',
      'Implemented dynamic dashboards for MD, Marketing, PLM, and Finance admins to monitor and manage transactions',
      'Collaborated with backend engineers to connect REST APIs for property transactions, payments, and complaint handling',
      'Optimized performance to handle high traffic during peak periods such as property launches',
      'Ensured a clean and user-friendly interface for complex property operations, simplifying the user journey'
    ],
    results:
      'The LSDPC Payment Portal streamlined property transactions and administrative operations, reducing manual processing time significantly. Users can now perform payments, submit requests, and manage their properties online, while internal teams can efficiently oversee all processes. The platform has improved user satisfaction and operational efficiency for the organization.',
    testimonial: {
      text:
        'ERIN delivered a robust, user-friendly portal that transformed how we manage property transactions. The platform is fast, secure, and easy for both our citizens and admin teams to use.',
      author: 'MD, Lagos State Development and Property Corporation',
      position: 'Managing Director'
    }
  }, 
  {
    id: 'ai-contract-generator',
    title: 'AI Contract Generator — Real-Time Contract Drafting Tool',
    shortDescription:
      'A web app that generates fully formatted legal contracts in real time based on user input.',
    fullDescription:
      'The AI Contract Generator is an MVP web application I built to allow users to create professional contracts efficiently. Users describe their business context in plain language, and the system delivers a complete, formatted contract in HTML, including section numbering, styling, and consistent terminology. I focused on architecting real-time systems that stream AI-generated content efficiently, handling token limits, API failures, and latency while maintaining a smooth, responsive user experience.',
    category: ['software tools', 'ai','frontend', 'backend', 'fullstack'],
    image: '/images/portfolio/ai-contract-thumb.jpg',
    images: [
      '/images/portfolio/ai-contract-1.jpg',
      '/images/portfolio/ai-contract-2.jpg'
    ],
    technologies: ['Next.js', 'React.js', 'TypeScript', 'AWS Lambda', 'Serverless Architecture', 'OpenAI API', 'Real-Time Streaming', 'HTML Formatting'],
    year: '2025',
    client: 'Personal Project',
    role: 'Full Stack Developer',
    liveUrl: "https://ai-contract-generator-five.vercel.app/",
    challenges:
      'Building a real-time system capable of streaming long AI-generated contracts while handling token limits, API failures, latency, and ensuring a consistent, legally structured document.',
    solutions: [
      'Implemented a minimal frontend with a text area, generate/stop button, content display area, and download functionality for HTML contracts',
      'Designed a robust backend using AWS serverless services to handle streaming content efficiently',
      'Handled API token limits, failures, and latency to ensure reliable delivery of contracts',
      'Ensured consistent terminology, legal structure, and formatting across all generated contracts',
      'Optimized real-time streaming to make the interface feel fast and responsive to users',
      'Integrated download functionality so users can save fully formatted HTML contracts'
    ],
    results:
      'The AI Contract Generator successfully delivers complete, formatted contracts in real time, providing users with an intuitive and reliable tool for generating legal documents. It demonstrates real-time AI content streaming, robust backend architecture, and a clean, minimal frontend experience.',
    testimonial: {
      text:
        'This project showcases Erin’s ability to design and implement real-time AI-driven systems. The contract generator is fast, reliable, and produces high-quality outputs, demonstrating strong full-stack engineering and AI integration skills.',
      author: 'Self-Review',
      position: 'Full Stack Developer'
    }
  },
  {
    id: 'chrome-history-sidepanel',
    title: 'Chrome Extension — History Sidepanel',
    shortDescription:
      'A Chrome Extension that displays a side panel showing visit history and basic page analytics for the current webpage.',
    fullDescription:
      'This Chrome Extension allows users to track their browsing activity by displaying a side panel with the last visit timestamp and basic page analytics. Users can see the number of links, words, and images on the current page, as well as a list of past visits to the same URL. The extension was built to combine an intuitive frontend interface with a robust backend API, demonstrating full-stack development skills in a browser extension context.',
    category: ['software tools', 'frontend', 'backend'],
    image: '/images/portfolio/chrome-extension-thumb.jpg',
    images: [
      '/images/portfolio/chrome-extension-1.jpg',
      '/images/portfolio/chrome-extension-2.jpg'
    ],
    technologies: ['React.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Docker', 'Chrome Extension API', 'REST APIs'],
    year: '2025',
    client: 'Personal Project',
    role: 'Full Stack Developer',
    challenges:
      'Designing a browser extension that collects and displays page analytics in real time while maintaining smooth performance and reliable data storage. Ensuring the backend API handles multiple page visits and metrics efficiently.',
    solutions: [
      'Built a React-based UI for the Chrome side panel to display current page metrics and past visits',
      'Developed a FastAPI backend with REST endpoints to store page visits and fetch visit history',
      'Used PostgreSQL to store page visit data including timestamps, URL, word count, link count, and image count',
      'Containerized the backend using Docker for easy local deployment and consistent development environments',
      'Implemented real-time updates for metrics and history display in the extension panel',
      'Optimized data collection to minimize performance impact on the user’s browsing experience',
      'Designed the system so that users can easily access analytics for any page they visit without publishing to the Chrome Web Store'
    ],
    results:
      'The Chrome Extension successfully tracks user visits and displays comprehensive page analytics in a clean side panel interface. Users can view their browsing history for any page and gain insights on content structure and activity. The project demonstrates strong full-stack capabilities and practical experience with browser extension development.',
    testimonial: {
      text:
        'This project highlights Erin’s ability to integrate frontend and backend technologies in a real-world browser extension. The extension is efficient, reliable, and user-friendly, showcasing expertise in React, FastAPI, and Chrome Extension development.',
      author: 'Self-Review',
      position: 'Full Stack Developer'
    }
  },
];

// Helper function to get projects by category
export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
  if (category === "all") return projects;
  return projects.filter((project) => project.category.includes(category));
};

// Helper function to get project by ID
export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

// Helper function to get related projects
export const getRelatedProjects = (
  currentProject: Project,
  limit: number = 3
): Project[] => {
  return projects
    .filter(
      (project) =>
        project.id !== currentProject.id &&
        project.category.some((cat) => currentProject.category.includes(cat))
    )
    .slice(0, limit);
};

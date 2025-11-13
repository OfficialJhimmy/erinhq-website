// /data/links.ts
export type LinkItem = {
    id: string;
    title: string;
    href: string;
    description?: string;
    icon?: string; // optional icon name or path
  };
  
  export const LINKS: LinkItem[] = [
    {
      id: "portfolio",
      title: "Explore my work",
      href: "/portfolio",
      description: "View my projects in design and code.",
      icon: "/images/briefcase.png",
    },
    {
      id: "youtube",
      title: "YouTube",
      href: "https://www.youtube.com/@erinthebrand",
      description: "Watch short tutorials and behind-the-scenes clips.",
      icon: "/images/youtube.png",
    },
    {
      id: "tiktok",
      title: "TikTok",
      href: "https://www.tiktok.com/@erinthebrand?_r=1&_t=ZS-91LVN0OmxrJ",
      description: "Catch quick web development clips and tips.",
      icon: "/images/tik-tok.png",
    },
    {
      id: "instagram",
      title: "Instagram",
      href: "https://www.instagram.com/erinthebrand/",
      description: "Follow for tips, updates, and resources.",
      icon: "/images/instagram.png",
    },
    {
      id: "twitter",
      title: "X",
      href: "https://x.com/erinthebrand",
      description: "Follow for quick updates and insights.",
      icon: "/images/twitter.png",
    },
    {
      id: "contact",
      title: "Work with me",
      href: "mailto:creatives@erinhq.com",
      description: "Get in touch about projects and rates.",
      icon: "/images/gmail.png",
    },
  ];
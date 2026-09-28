import { Instagram, Linkedin } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import type { ComponentType } from "react";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export interface SocialLink {
  name: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
}

// Only active, professionally maintained profiles — no placeholder/dead links.
export const socialLinks: SocialLink[] = [
  {
    name: "TikTok",
    icon: FaTiktok,
    href: "https://www.tiktok.com/@erinthebrand?_r=1&_t=ZS-91LVN0OmxrJ",
  },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/erinthebrand" },
  { name: "X (Twitter)", icon: XIcon, href: "https://x.com/erinthebrand" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/feyijimierinle" },
];

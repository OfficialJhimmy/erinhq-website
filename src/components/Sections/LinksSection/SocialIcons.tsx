// components/SocialIcons.tsx
import React from "react";
import { FaInstagram, FaTiktok, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

type Props = {
  className?: string;
  links?: {
    instagram?: string;
    tiktok?: string;
    linkedin?: string;
    github?: string;
    youtube?: string;
  };
};

const SocialIcons: React.FC<Props> = ({ className, links }) => {
  return (
    <nav aria-label="Social links" className={`flex gap-3 ${className || ""}`}>
      {links?.instagram && (
        <a
          href={links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="p-2 rounded-full bg-white/6 hover:bg-white/10 transition"
        >
          <FaInstagram />
        </a>
      )}
      {links?.tiktok && (
        <a
          href={links.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="p-2 rounded-full bg-white/6 hover:bg-white/10 transition"
        >
          <FaTiktok />
        </a>
      )}
      {links?.linkedin && (
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="p-2 rounded-full bg-white/6 hover:bg-white/10 transition"
        >
          <FaLinkedin />
        </a>
      )}
      {links?.github && (
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="p-2 rounded-full bg-white/6 hover:bg-white/10 transition"
        >
          <FaGithub />
        </a>
      )}
      {links?.youtube && (
        <a
          href={links.youtube}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="p-2 rounded-full bg-white/6 hover:bg-white/10 transition"
        >
          <FaYoutube />
        </a>
      )}
    </nav>
  );
};

export default SocialIcons;
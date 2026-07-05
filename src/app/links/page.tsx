// /app/links/page.tsx
"use client";
import React from "react";

import { LINKS } from "@/data/links";
import { motion } from "framer-motion";
import ProfileHeader from "@/components/Sections/LinksSection/ProfileHeader";
import SocialIcons from "@/components/Sections/LinksSection/SocialIcons";
import LinkCard from "@/components/Sections/LinksSection/LinkCard";
import LinksFooter from "@/components/Sections/LinksSection/LinksFooter";


export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-white flex items-start justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.995 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut", duration: 0.35 }}
          className="p-6 rounded-2xl"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
            backdropFilter: "blur(8px)",
          }}
        >
          <div className="flex flex-col items-center gap-4">
            <ProfileHeader
              name="ERIN"
              tagline="Imagine Creative, Imagine Modern."
              avatarSrc="/images/erinhq.png" // replace with your avatar
            />

            <SocialIcons
              className="mt-3"
              links={{
                instagram: "https://www.instagram.com/erinthebrand/",
                tiktok: "https://www.tiktok.com/@erinthebrand?_r=1&_t=ZS-91LVN0OmxrJ",
                linkedin: "https://linkedin.com/in/feyijimierinle",
                github: "https://github.com/officialjhimmy",
                youtube: "https://www.youtube.com/@erinthebrand",
              }}
            />
          </div>

          <div className="mt-6 space-y-3">
            {LINKS.map((l) => (
              <LinkCard item={l} key={l.id} />
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            {/* Example CTA matching your provided button style */}
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-400 to-yellow-400 text-[#1B1B1B] font-body font-medium rounded-full transition-transform hover:scale-105"
              style={{ padding: "12px 18px" }}
              aria-label="Explore my work"
            >
              Explore my work ↗
            </a>
          </div>

          <LinksFooter />
        </motion.div>
      </div>
    </main>
  );
}
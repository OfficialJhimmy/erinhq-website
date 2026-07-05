// components/LinkCard.tsx
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { LinkItem } from "@/data/links";

type Props = {
  item: LinkItem;
};

const cardVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

const LinkCard: React.FC<Props> = ({ item }) => {
  const isInternal = item.href.startsWith("/");
  const Button = (
    <div
      className={`w-full flex items-center gap-4 p-4 rounded-full shadow-sm transition-transform hover:scale-[1.02] bg-white/6 dark:bg-white/3`}
    >
      {item.icon ? (
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/8 overflow-hidden">
          <Image src={item.icon} alt={`${item.title} icon`} width={40} height={40} />
        </div>
      ) : (
        <div aria-hidden className="w-10 h-10 rounded-full bg-white/8" />
      )}

      <div className="flex-1 text-left">
        <div className="font-medium text-white">{item.title}</div>
        {item.description && (
          <div className="text-sm text-gray-200/70">{item.description}</div>
        )}
      </div>

      <div className="ml-2 text-gray-300" aria-hidden>
        ↗
      </div>
    </div>
  );

  const inner = (
    <motion.div
      initial="hidden"
      animate="show"
      variants={cardVariants}
      transition={{ duration: 0.28 }}
    >
      {Button}
    </motion.div>
  );

  return isInternal ? (
    <a href={item.href} className="w-full" aria-label={item.title}>
      {inner}
    </a>
  ) : (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full"
      aria-label={`${item.title} (opens in a new tab)`}
    >
      {inner}
    </a>
  );
};

export default LinkCard;
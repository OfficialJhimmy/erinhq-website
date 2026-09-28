import clsx from "clsx";
import type { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  variant?: "dark" | "light";
  className?: string;
}

const variantClasses: Record<"dark" | "light", string> = {
  dark: "border-white/15 text-white/70",
  light: "border-black/10 text-[#A3A3A3]",
};

export function Tag({ children, variant = "dark", className }: TagProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-3 py-1 font-heading text-xs uppercase tracking-wider",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

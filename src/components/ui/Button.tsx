import Link from "next/link";
import clsx from "clsx";
import type { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-body font-medium transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper disabled:opacity-50 disabled:pointer-events-none";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-brand-gradient text-ink hover:scale-[1.02]",
  secondary: "border border-white/20 text-white hover:border-white/40",
  ghost: "text-white border-b-2 border-white pb-1 hover:border-copper hover:text-copper",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

interface SharedProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

interface ButtonAsLink extends SharedProps {
  href: string;
  external?: boolean;
}

interface ButtonAsButton
  extends SharedProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children" | "onClick"> {
  href?: undefined;
}

export type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children, onClick } = props;
  const classes = clsx(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (typeof props.href === "string") {
    const { href, external } = props;
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  const { type = "button", disabled } = buttonProps;
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

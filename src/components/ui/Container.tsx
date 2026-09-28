import clsx from "clsx";
import type { ElementType, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export function Container({ children, className, as: Tag = "div" }: ContainerProps) {
  return <Tag className={clsx("mx-auto w-full max-w-7xl px-6", className)}>{children}</Tag>;
}

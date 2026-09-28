import clsx from "clsx";
import type { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  "aria-labelledby"?: string;
}

export function Section({ children, id, className, containerClassName, ...aria }: SectionProps) {
  return (
    <section id={id} className={clsx("py-16 md:py-24", className)} {...aria}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

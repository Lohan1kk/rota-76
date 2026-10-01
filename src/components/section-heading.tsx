import type { ReactNode } from "react";

import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[11px] font-semibold uppercase tracking-eyebrow text-primary",
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-8 bg-current opacity-60" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  tone = "dark",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <Reveal className={cn("max-w-2xl", className)}>
      <Eyebrow className={tone === "light" ? "text-wine" : undefined}>{eyebrow}</Eyebrow>
      <h2 className="mt-5 text-balance font-serif text-[2.25rem] font-medium leading-[1.08] tracking-tight sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-xl text-pretty text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-cream-foreground/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="#inicio"
      className={cn(
        "group inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-sm sm:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background",
        className,
      )}
      aria-label="Rota da Pizza 76 — voltar ao início"
    >
      <span className="hidden size-9 place-items-center min-[360px]:grid rounded-full border border-primary/60 font-serif text-sm sm:size-10 sm:text-[15px] font-semibold italic text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        76
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-base font-semibold tracking-tight sm:text-[19px]">Rota da Pizza</span>
        <span className="mt-1 text-[9px] sm:text-[10px] font-medium uppercase tracking-eyebrow text-muted-foreground">
          Brás · São Paulo
        </span>
      </span>
    </Link>
  );
}

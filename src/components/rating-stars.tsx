import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

export function RatingStars({
  value,
  className,
  starClassName,
}: {
  value: number;
  className?: string;
  starClassName?: string;
}) {
  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      role="img"
      aria-label={`Nota ${value.toLocaleString("pt-BR")} de 5`}
    >
      {Array.from({ length: 5 }, (_, i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <span key={i} className={cn("relative inline-block size-4", starClassName)}>
            <Star className="absolute inset-0 size-full text-current opacity-25" strokeWidth={1.5} />
            <Star
              className="absolute inset-0 size-full fill-current text-current"
              strokeWidth={1.5}
              style={{ clipPath: `inset(0 ${(1 - fill) * 100}% 0 0)` }}
            />
          </span>
        );
      })}
    </div>
  );
}

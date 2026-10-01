import { ArrowUpRight } from "lucide-react";

import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { RatingStars } from "@/components/rating-stars";
import { Eyebrow } from "@/components/section-heading";
import { googleReviewsUrl, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const testimonials = [
  "Atendimento acolhedor, pizza maravilhosa padrão das Top de Sampa!",
  "Os preços são muito bons e as pizzas são feitas com ingredientes de qualidade!",
  "Preço justo e uma variedade de sabores.",
];

export function Reviews() {
  return (
    <section id="avaliacoes" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_0%_50%,hsl(var(--wine)/0.28),transparent_70%)]"
      />
      <div className="container grid gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-4">
          <Eyebrow>Avaliações</Eyebrow>
          <h2 className="mt-5 text-balance font-serif text-[2.25rem] font-medium leading-[1.08] tracking-tight sm:text-5xl">
            Quem prova, volta.
          </h2>

          <div className="mt-10 flex items-end gap-5 border-t border-border pt-8 lg:flex-col lg:items-start lg:gap-3">
            <p className="font-serif text-[5.5rem] font-medium leading-[0.85] tracking-tight text-primary sm:text-[7rem]">
              {site.rating.value.toLocaleString("pt-BR")}
            </p>
            <div className="pb-1">
              <RatingStars value={site.rating.value} className="text-primary" starClassName="size-5" />
              <p className="mt-2 text-sm text-muted-foreground">
                <strong className="font-semibold text-foreground">{site.rating.count} avaliações</strong> no Google
              </p>
            </div>
          </div>

          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-foreground underline decoration-foreground/25 underline-offset-[6px] transition-colors hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
            Ver avaliações no Google
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>

        <Stagger className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
          {testimonials.map((quote, i) => (
            <StaggerItem key={quote} className={cn(i === 0 && "sm:col-span-2")}>
              <figure
                className={cn(
                  "flex h-full flex-col justify-between rounded-lg border border-border bg-card/70 p-7 sm:p-8",
                  i === 0 && "bg-wine-deep/60 sm:p-10",
                )}
              >
                <span aria-hidden="true" className="font-serif text-5xl leading-none text-primary/60">
                  &ldquo;
                </span>
                <blockquote
                  className={cn(
                    "mt-2 text-pretty font-serif leading-snug text-foreground",
                    i === 0 ? "text-2xl sm:text-[2rem]" : "text-xl",
                  )}
                >
                  {quote}
                </blockquote>
                <figcaption className="mt-8 border-t border-foreground/10 pt-5 text-xs text-muted-foreground">
                  Cliente · Avaliação no Google
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

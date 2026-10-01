import { ArrowUpRight } from "lucide-react";

import { WhatsAppIcon } from "@/components/brand-icons";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { menu, site } from "@/lib/site";

export function MenuSection() {
  let index = 0;

  return (
    <section id="cardapio" className="grain relative bg-cream py-24 text-cream-foreground sm:py-32">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            tone="light"
            eyebrow="Cardápio"
            title={
              <>
                Os sabores que fazem a <em className="font-normal text-wine">fama da casa</em>.
              </>
            }
            description="Uma seleção dos clássicos da casa, com coberturas generosas e ingredientes de primeira qualidade. Valores de referência para pizza grande."
          />
          <Reveal delay={0.1} className="shrink-0">
            <Button asChild variant="wine" size="lg">
              <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                Pedir pelo WhatsApp
              </a>
            </Button>
          </Reveal>
        </div>

        <div className="mt-16 space-y-16">
          {menu.map((group) => (
            <div key={group.title}>
              <Reveal className="flex items-baseline justify-between gap-6 border-b border-cream-foreground/15 pb-4">
                <h3 className="font-serif text-2xl font-medium sm:text-3xl">{group.title}</h3>
                <p className="hidden text-sm text-cream-foreground/60 sm:block">{group.note}</p>
              </Reveal>

              <Stagger as="ul" className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {group.items.map((pizza) => {
                  index += 1;
                  return (
                    <StaggerItem as="li" key={pizza.name} className="h-full">
                      <article className="group flex h-full flex-col rounded-lg border border-cream-foreground/10 bg-white/60 p-5 transition sm:p-6-[transform,box-shadow,border-color,background-color] duration-500 ease-out-expo hover:scale-[1.02] hover:border-wine/25 hover:bg-white hover:shadow-[0_24px_48px_-24px_hsl(var(--wine-deep)/0.35)] motion-reduce:hover:scale-100">
                        <div className="flex items-center justify-between">
                          <span className="font-serif text-sm italic text-wine/70 tabular-nums">
                            {String(index).padStart(2, "0")}
                          </span>
                          <ArrowUpRight
                            aria-hidden="true"
                            className="size-4 text-wine opacity-0 transition-all duration-500 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                          />
                        </div>
                        <h4 className="mt-4 font-serif sm:mt-8 text-xl font-medium leading-tight">{pizza.name}</h4>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-cream-foreground/65">
                          {pizza.description}
                        </p>
                        <p className="mt-6 flex items-baseline gap-1 border-t border-dashed border-cream-foreground/15 pt-4 text-wine">
                          <span className="text-xs font-medium">R$</span>
                          <span className="font-serif text-2xl font-semibold tabular-nums">{pizza.price}</span>
                          <span className="text-xs text-cream-foreground/50">,00</span>
                        </p>
                      </article>
                    </StaggerItem>
                  );
                })}
              </Stagger>
            </div>
          ))}
        </div>

        <Reveal>
          <p className="mt-12 text-sm text-cream-foreground/55">
            Preços e sabores sujeitos a alteração. Consulte o cardápio completo, bebidas e promoções pelo WhatsApp.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

import { Wine } from "lucide-react";

import { WhatsAppIcon } from "@/components/brand-icons";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { MenuBrowser } from "@/components/site/menu-browser";
import { Button } from "@/components/ui/button";
import { pizzas, site } from "@/lib/site";

export function MenuSection() {
  const uniformPrice = pizzas.every((p) => p.price === pizzas[0]?.price) ? pizzas[0]?.price : undefined;

  return (
    <section id="cardapio" className="grain relative bg-cream py-24 text-cream-foreground sm:py-32">
      <div className="container">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            tone="light"
            eyebrow="Cardápio"
            title={
              <>
                {pizzas.length} sabores, <em className="whitespace-nowrap font-normal text-wine">um só preço</em>.
              </>
            }
            description="Dos clássicos como Calabresa e Marguerita às receitas da casa, como a Rota 76 e a Rota da Pizza."
          />

          <Reveal delay={0.1} className="shrink-0">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end lg:flex-col lg:items-end">
              {uniformPrice !== undefined ? (
                <div className="lg:text-right">
                  <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-cream-foreground/55">
                    Qualquer sabor
                  </p>
                  <p className="mt-1 flex items-baseline gap-1.5 text-wine lg:justify-end">
                    <span className="text-lg font-medium">R$</span>
                    <span className="font-serif text-6xl font-semibold leading-none tracking-tight tabular-nums">
                      {uniformPrice}
                    </span>
                    <span className="text-lg font-medium">,00</span>
                  </p>
                </div>
              ) : null}
              <Button asChild variant="wine" size="lg">
                <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon />
                  Pedir pelo WhatsApp
                </a>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <MenuBrowser pizzas={pizzas} />
        </Reveal>

        <Reveal>
          <div className="mt-12 flex flex-col gap-4 border-t border-cream-foreground/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-3 text-[15px] text-cream-foreground/80">
              <Wine aria-hidden="true" className="size-5 text-wine" strokeWidth={1.5} />
              Temos vinho e bebidas para acompanhar.
            </p>
            <p className="text-sm text-cream-foreground/55">Preços sujeitos a alteração.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

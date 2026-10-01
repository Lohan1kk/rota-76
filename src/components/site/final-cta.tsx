import { InstagramIcon, WhatsAppIcon } from "@/components/brand-icons";
import { Reveal } from "@/components/motion";
import { Eyebrow } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section id="contato" className="grain relative overflow-hidden bg-wine-deep py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_80%_at_100%_100%,hsl(var(--wine)/0.9),transparent_70%)]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[0.18em] -left-[0.04em] -z-10 select-none font-serif text-[40vw] font-semibold italic leading-none text-transparent [-webkit-text-stroke:1px_hsl(var(--primary)/0.14)] lg:text-[26vw]"
      >
        76
      </span>

      <div className="container grid gap-12 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-7">
          <Eyebrow>Contato</Eyebrow>
          <h2 className="mt-5 text-balance font-serif text-[2.5rem] font-medium leading-[1.04] tracking-tight text-wine-foreground sm:text-6xl">
            Bateu a fome? <em className="whitespace-nowrap font-normal text-primary">A gente leva</em> até você.
          </h2>
          <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-wine-foreground/70 sm:text-lg">
            Faça seu pedido pelo WhatsApp a partir das {site.hours.opensAt}. Delivery rápido no Brás, na Mooca e região,
            ou retire no balcão.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5">
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild size="lg" className="h-14 text-base">
              <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="!size-5" />
                Pedir no WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 border-wine-foreground/25 text-base text-wine-foreground hover:border-wine-foreground/50 hover:bg-wine-foreground/5"
            >
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="!size-5" />
                Seguir {site.instagram.handle}
              </a>
            </Button>
          </div>
          <p className="mt-5 text-sm text-wine-foreground/60">
            Ou ligue:{" "}
            <a href={`tel:${site.phone.tel}`} className="font-medium text-wine-foreground underline-offset-4 hover:underline">
              {site.phone.display}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

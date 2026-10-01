import Image from "next/image";

import { InstagramIcon, WhatsAppIcon } from "@/components/brand-icons";
import { Reveal } from "@/components/motion";
import { Eyebrow } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section id="contato" className="grain relative overflow-hidden bg-wine-deep py-24 sm:py-32">
      {site.images.cta ? (
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <Image
            src={site.images.cta}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[80%_center]"
          />
          <div className="absolute inset-0 bg-wine-deep/80 lg:bg-transparent lg:bg-gradient-to-r lg:from-wine-deep lg:via-wine-deep/85 lg:to-wine-deep/10" />
        </div>
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_80%_at_100%_100%,hsl(var(--wine)/0.9),transparent_70%)]"
        />
      )}

      <div className="container grid gap-12 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-6">
          <Eyebrow>Contato</Eyebrow>
          <h2 className="mt-5 text-balance font-serif text-[2.5rem] font-medium leading-[1.04] tracking-tight text-wine-foreground sm:text-6xl">
            Bateu a fome? <em className="whitespace-nowrap font-normal text-primary">A gente leva</em> até você.
          </h2>
          <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-wine-foreground/75 sm:text-lg">
            Peça pelo WhatsApp de {site.hours.days.toLowerCase()}, das {site.hours.opensAt} às {site.hours.closesAt}.
            Delivery rápido no Brás, na Mooca e região, ou retire no balcão.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
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
              className="h-14 border-wine-foreground/30 text-base text-wine-foreground hover:border-wine-foreground/60 hover:bg-wine-foreground/10"
            >
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="!size-5" />
                Seguir {site.instagram.handle}
              </a>
            </Button>
          </div>
          <p className="mt-5 text-sm text-wine-foreground/70">
            Ou ligue:{" "}
            <a href={`tel:${site.phone.tel}`} className="whitespace-nowrap font-medium text-wine-foreground underline-offset-4 hover:underline">
              {site.phone.display}
            </a>
            {site.landlines.map((line) => (
              <span key={line.tel}>
                {" · "}
                <a href={`tel:${line.tel}`} className="whitespace-nowrap font-medium text-wine-foreground underline-offset-4 hover:underline">
                  {line.display}
                </a>
              </span>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

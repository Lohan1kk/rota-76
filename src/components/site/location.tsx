import { ArrowUpRight, Clock, MapPin, Phone, UtensilsCrossed, Wallet } from "lucide-react";
import type { ReactNode } from "react";

import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { formatHours, mapsDirectionsUrl, mapsEmbedUrl, site } from "@/lib/site";

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-5 py-6">
      <span className="mt-0.5 text-primary [&_svg]:size-[18px]" aria-hidden="true">
        {icon}
      </span>
      <div className="min-w-0">
        <dt className="text-[11px] font-semibold uppercase tracking-eyebrow text-muted-foreground">{label}</dt>
        <dd className="mt-2 text-[15px] leading-relaxed text-foreground">{children}</dd>
      </div>
    </div>
  );
}

const linkClass =
  "group inline-flex items-center gap-1 rounded-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function Location() {
  return (
    <section id="localizacao" className="relative border-t border-border py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Localização e horário"
          title="Na R. Flora, no coração do Brás."
          description="Venha jantar no salão, retire seu pedido no balcão ou receba em casa. Atendemos o Brás, a Mooca e região."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <dl className="divide-y divide-border border-y border-border">
              <InfoRow icon={<MapPin />} label="Endereço">
                <address className="not-italic">
                  {site.address.street}
                  <br />
                  {site.address.district}, {site.address.city} - {site.address.state}, {site.address.zip}
                </address>
                <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className={`${linkClass} mt-2 text-sm`}>
                  Como chegar
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </InfoRow>

              <InfoRow icon={<Phone />} label="Telefone e WhatsApp">
                <a href={`tel:${site.phone.tel}`} className="rounded-sm text-lg font-medium tabular-nums underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  {site.phone.display}
                </a>
              </InfoRow>

              <InfoRow icon={<Clock />} label="Horário">
                {site.hours.days ? <span className="block">{site.hours.days}</span> : null}
                <span className="block">{formatHours()}</span>
                <span className="mt-1 block text-sm text-muted-foreground">Fechado durante o dia</span>
              </InfoRow>

              <InfoRow icon={<UtensilsCrossed />} label="Atendimento">
                {site.services.join(" · ")}
              </InfoRow>

              <InfoRow icon={<Wallet />} label="Faixa de preço">
                {site.priceRange}
              </InfoRow>
            </dl>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="relative h-full min-h-[360px] overflow-hidden rounded-lg border border-border bg-card sm:min-h-[460px]">
              <iframe
                title={`Mapa: ${site.name}, ${site.address.full}`}
                src={mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 size-full border-0 [filter:grayscale(0.35)_contrast(1.05)]"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

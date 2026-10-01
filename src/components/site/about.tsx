import { Bike, Flame, Users } from "lucide-react";
import Image from "next/image";

import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Eyebrow } from "@/components/section-heading";
import { site } from "@/lib/site";

const highlights = [
  {
    icon: Flame,
    title: "Lareira no salão",
    text: "Nas noites frias de São Paulo, a pizza chega à mesa ao lado do fogo.",
  },
  {
    icon: Users,
    title: "Espaço familiar",
    text: "Mesas para reunir a família e os amigos sem pressa.",
  },
  {
    icon: Bike,
    title: "Delivery e retirada",
    text: "Peça pelo WhatsApp e receba rápido, ou passe aqui para buscar.",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5" y={32}>
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-lg border border-primary/30 sm:translate-x-5 sm:translate-y-5"
            />
            <figure className="grain relative aspect-[4/5] overflow-hidden rounded-lg bg-wine-deep">
              {site.images.about ? (
                <>
                  <Image
                    src={site.images.about}
                    alt="Salão da Rota da Pizza 76, com mesas e bancos de tambor azul e paredes vermelha e verde"
                    fill
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 top-0 h-3/5 bg-gradient-to-b from-black/85 via-black/60 via-35% to-transparent" />
                </>
              ) : (
                <>
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_100%,hsl(22_90%_48%/0.55),transparent_70%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_35%_at_50%_100%,hsl(40_95%_60%/0.35),transparent_70%)]" />
                  <Image
                    src={site.emblem}
                    alt="Emblema da Rota da Pizza 76"
                    width={720}
                    height={720}
                    sizes="(min-width: 1024px) 26vw, 60vw"
                    className="absolute bottom-[6%] left-1/2 w-[64%] -translate-x-1/2 opacity-90"
                  />
                </>
              )}
              <figcaption className="absolute inset-x-0 top-0 p-7 sm:p-9">
                <p className="text-[11px] font-semibold uppercase tracking-eyebrow text-wine-foreground/60">
                  R. Flora, 34 · Brás
                </p>
                <p className="mt-4 max-w-[15ch] font-serif text-3xl leading-[1.1] text-wine-foreground sm:text-4xl">
                  Puxe um banco, a pizza já vai sair.
                </p>
              </figcaption>
            </figure>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow>Nossa casa</Eyebrow>
            <h2 className="mt-5 text-balance font-serif text-[2.25rem] font-medium leading-[1.08] tracking-tight sm:text-5xl">
              Uma pizzaria de bairro, com o cuidado de quem cozinha pra família.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <blockquote className="mt-8 border-l-2 border-primary/60 pl-6 text-pretty text-lg leading-relaxed text-foreground/80">
              {site.description}
            </blockquote>
          </Reveal>

          <Stagger as="ul" className="mt-12 divide-y divide-border border-y border-border">
            {highlights.map(({ icon: Icon, title, text }) => (
              <StaggerItem as="li" key={title} className="flex gap-5 py-6">
                <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-full bg-wine/40 text-primary">
                  <Icon className="size-[18px]" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-medium">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

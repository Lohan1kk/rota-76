"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowDown, Clock, Star, Truck } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

import { WhatsAppIcon } from "@/components/brand-icons";
import { easeOutExpo } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { formatHours, site } from "@/lib/site";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easeOutExpo } },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const numeralY = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="grain relative flex min-h-[100svh] items-end overflow-hidden bg-background pb-14 pt-32 sm:items-center sm:pb-20"
    >
      <motion.div aria-hidden="true" className="absolute inset-0 -z-20" style={{ y: bgY }}>
        {site.images.hero ? (
          <>
            <Image
              src={site.images.hero}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_85%_100%,hsl(18_85%_42%/0.38),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_75%_90%,hsl(var(--wine)/0.55),transparent_65%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_10%_0%,hsl(var(--wine-deep)/0.6),transparent_70%)]" />
          </>
        )}
      </motion.div>

      <motion.span
        aria-hidden="true"
        style={{ y: numeralY }}
        className="pointer-events-none absolute -right-[6vw] bottom-[-6vw] -z-10 select-none font-serif text-[62vw] font-semibold italic leading-none text-transparent [-webkit-text-stroke:1px_hsl(var(--primary)/0.18)] sm:text-[46vw] lg:-right-[2vw] lg:text-[38vw]"
      >
        76
      </motion.span>

      <motion.div style={{ opacity: contentOpacity }} className="container">
        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-3xl">
          <motion.p
            variants={item}
            className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-eyebrow text-primary"
          >
            <span aria-hidden="true" className="h-px w-8 bg-current opacity-60" />
            Pizzaria no Brás · São Paulo
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 text-balance font-serif text-[2.75rem] font-medium leading-[1.02] tracking-tight sm:text-6xl lg:text-[5.25rem]"
          >
            Pizza feita com carinho, <em className="whitespace-nowrap font-normal text-primary">do forno</em> direto pra sua mesa.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-foreground/75 sm:text-lg"
          >
            Ingredientes de primeira qualidade, salão familiar com lareira para comer no local e entrega
            rápida para o Brás, a Mooca e toda a região.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                Pedir delivery pelo WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#cardapio">Ver cardápio</a>
            </Button>
          </motion.div>

          <motion.ul
            variants={item}
            className="mt-14 grid grid-cols-1 gap-x-8 gap-y-3 border-t border-foreground/10 pt-6 text-sm text-foreground/70 sm:flex sm:flex-wrap"
          >
            <li className="flex items-center gap-2.5">
              <Star className="size-4 fill-primary text-primary" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-foreground">
                  {site.rating.value.toLocaleString("pt-BR")}
                </strong>{" "}
                no Google · {site.rating.count} avaliações
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="size-4 text-primary" aria-hidden="true" />
              {site.hours.daysShort} · {formatHours()}
            </li>
            <li className="flex items-center gap-2.5">
              <Truck className="size-4 text-primary" aria-hidden="true" />
              Delivery e retirada no local
            </li>
          </motion.ul>
        </motion.div>
      </motion.div>

      <a
        href="#sobre"
        aria-label="Rolar para a próxima seção"
        className="absolute bottom-8 right-6 hidden size-11 place-items-center rounded-full border border-foreground/15 text-foreground/60 transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:grid"
      >
        <ArrowDown className="size-4" />
      </a>
    </section>
  );
}

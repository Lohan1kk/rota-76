"use client";

import { motion } from "framer-motion";
import { ChevronDown, Search, X } from "lucide-react";
import { useDeferredValue, useMemo, useRef, useState } from "react";

import { easeOutExpo } from "@/components/motion";
import { Button } from "@/components/ui/button";
import type { Pizza } from "@/lib/site";
import { cn } from "@/lib/utils";

const INITIAL_COUNT = 12;

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function formatPrice(value: number) {
  return value.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
}

export function MenuBrowser({ pizzas }: { pizzas: Pizza[] }) {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);
  const deferredQuery = useDeferredValue(query);
  const topRef = useRef<HTMLDivElement>(null);

  const uniformPrice = pizzas.every((p) => p.price === pizzas[0]?.price) ? pizzas[0]?.price : undefined;

  const results = useMemo(() => {
    const q = normalize(deferredQuery.trim());
    if (!q) return pizzas;
    return pizzas.filter((p) => normalize(`${p.name} ${p.description}`).includes(q));
  }, [deferredQuery, pizzas]);

  const searching = deferredQuery.trim().length > 0;
  const visible = searching || expanded ? results : results.slice(0, INITIAL_COUNT);
  const hiddenCount = results.length - visible.length;

  function collapse() {
    setExpanded(false);
    topRef.current?.scrollIntoView({ block: "start" });
  }

  return (
    <div ref={topRef} className="scroll-mt-24">
      <div className="flex flex-col gap-4 border-b border-cream-foreground/15 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <label className="relative block w-full sm:max-w-sm">
          <span className="sr-only">Buscar sabor ou ingrediente</span>
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-cream-foreground/45"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar sabor ou ingrediente…"
            className="h-12 w-full rounded-md border border-cream-foreground/15 bg-white/70 pl-11 pr-11 text-[15px] text-cream-foreground placeholder:text-cream-foreground/45 transition-colors focus:border-wine/50 focus:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-wine/30 [&::-webkit-search-cancel-button]:hidden"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Limpar busca"
              className="absolute right-2 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full text-cream-foreground/55 transition-colors hover:bg-cream-foreground/5 hover:text-cream-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine/40"
            >
              <X className="size-4" />
            </button>
          ) : null}
        </label>
        <p className="text-sm text-cream-foreground/60" aria-live="polite">
          {searching ? (
            <>
              <strong className="font-semibold text-cream-foreground">{results.length}</strong>{" "}
              {results.length === 1 ? "sabor encontrado" : "sabores encontrados"}
            </>
          ) : (
            <>
              <strong className="font-semibold text-cream-foreground">{pizzas.length}</strong> sabores no cardápio
            </>
          )}
        </p>
      </div>

      {results.length === 0 ? (
        <div className="py-16 text-center">
          <p className="font-serif text-2xl">Nenhum sabor encontrado.</p>
          <p className="mt-2 text-sm text-cream-foreground/60">
            Tente outro ingrediente, como &ldquo;catupiry&rdquo; ou &ldquo;palmito&rdquo;.
          </p>
          <Button variant="wine" className="mt-6" onClick={() => setQuery("")}>
            Ver todos os sabores
          </Button>
        </div>
      ) : (
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((pizza, i) => (
            <motion.li
              key={pizza.number}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -40px 0px" }}
              transition={{ duration: 0.55, ease: easeOutExpo, delay: Math.min(i % INITIAL_COUNT, 8) * 0.04 }}
              className="h-full"
            >
              <article className="group flex h-full flex-col rounded-lg border border-cream-foreground/10 bg-white/60 p-5 transition-[transform,box-shadow,border-color,background-color] duration-500 ease-out-expo hover:scale-[1.02] hover:border-wine/25 hover:bg-white hover:shadow-[0_24px_48px_-24px_hsl(var(--wine-deep)/0.35)] motion-reduce:hover:scale-100">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-sm italic tabular-nums text-wine/70">
                    {String(pizza.number).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-lg font-medium leading-snug">{pizza.name}</h3>
                  {uniformPrice === undefined ? (
                    <span className="ml-auto shrink-0 text-sm font-semibold tabular-nums text-wine">
                      R$ {formatPrice(pizza.price)}
                    </span>
                  ) : null}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-cream-foreground/65">{pizza.description}</p>
              </article>
            </motion.li>
          ))}
        </ul>
      )}

      {!searching && results.length > INITIAL_COUNT ? (
        <div className="mt-10 flex justify-center">
          <Button
            variant="outline"
            size="lg"
            aria-expanded={expanded}
            onClick={() => (expanded ? collapse() : setExpanded(true))}
            className="border-cream-foreground/20 text-cream-foreground hover:border-wine/40 hover:bg-white/60"
          >
            {expanded ? "Mostrar menos" : `Ver os ${pizzas.length} sabores`}
            <ChevronDown
              aria-hidden="true"
              className={cn("transition-transform duration-300", expanded && "rotate-180")}
            />
            {!expanded && hiddenCount > 0 ? <span className="sr-only">({hiddenCount} a mais)</span> : null}
          </Button>
        </div>
      ) : null}
    </div>
  );
}

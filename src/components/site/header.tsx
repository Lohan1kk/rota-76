"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { WhatsAppIcon } from "@/components/brand-icons";
import { Logo } from "@/components/logo";
import { easeOutExpo } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ease-out-expo",
        solid
          ? "border-b border-border/80 bg-background/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container flex h-[4.5rem] items-center justify-between gap-3 sm:gap-6">
        <Logo />

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative rounded-sm py-2 text-sm text-foreground/75 transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-out-expo hover:text-foreground hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <Button asChild size="sm" className="px-3 sm:h-10 sm:px-4 sm:text-sm">
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              <span className="sm:hidden">Pedir</span>
              <span className="hidden sm:inline">Pedir no WhatsApp</span>
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden [&_svg]:size-5"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="menu-mobile"
            aria-label="Menu"
            className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-border/80 bg-background lg:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: easeOutExpo }}
          >
            <ul className="container flex flex-col py-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: easeOutExpo, delay: 0.04 * i + 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-border/70 py-5 font-serif text-3xl tracking-tight transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none"
                  >
                    {link.label}
                    <span className="font-sans text-xs tabular-nums text-muted-foreground">
                      0{i + 1}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="container space-y-1 pb-10 text-sm text-muted-foreground">
              <p>{site.address.full}</p>
              <a href={`tel:${site.phone.tel}`} className="inline-block text-foreground underline-offset-4 hover:underline">
                {site.phone.display}
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

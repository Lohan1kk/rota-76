import Image from "next/image";

import { InstagramIcon, WhatsAppIcon } from "@/components/brand-icons";
import { formatHours, navLinks, site } from "@/lib/site";

const socialClass =
  "grid size-10 place-items-center rounded-full border border-border text-foreground/70 transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Image src={site.emblem} alt="Emblema da Rota da Pizza 76" width={120} height={120} className="size-28 opacity-90" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Pizzaria no Brás com espaço familiar, lareira no salão, delivery e retirada no local.
          </p>
          <div className="mt-6 flex gap-2">
            <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={socialClass}>
              <InstagramIcon className="size-[18px]" />
            </a>
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={socialClass}>
              <WhatsAppIcon className="size-[18px]" />
            </a>
          </div>
        </div>

        <nav aria-label="Rodapé" className="lg:col-span-3">
          <h2 className="text-[11px] font-semibold uppercase tracking-eyebrow text-muted-foreground">Navegação</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-foreground/80 transition-colors hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sm:col-span-2 lg:col-span-4">
          <h2 className="text-[11px] font-semibold uppercase tracking-eyebrow text-muted-foreground">Visite</h2>
          <address className="mt-5 space-y-3 text-sm not-italic leading-relaxed text-foreground/80">
            <p>{site.address.full}</p>
            <p className="flex flex-wrap gap-x-3">
              {[site.phone, ...site.landlines].map((line) => (
                <a key={line.tel} href={`tel:${line.tel}`} className="tabular-nums transition-colors hover:text-primary">
                  {line.display}
                </a>
              ))}
            </p>
            <p className="text-muted-foreground">
              {site.hours.days}, {formatHours()}
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
          </p>
          <p>Brás · São Paulo - SP</p>
        </div>
      </div>
    </footer>
  );
}

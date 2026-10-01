import { About } from "@/components/site/about";
import { FinalCta } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Location } from "@/components/site/location";
import { MenuSection } from "@/components/site/menu";
import { Reviews } from "@/components/site/reviews";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-[60] rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <MenuSection />
        <Reviews />
        <Location />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

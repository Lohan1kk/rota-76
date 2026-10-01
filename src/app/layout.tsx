import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import { MotionProvider } from "@/components/motion";
import { site } from "@/lib/site";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const title = "Rota da Pizza 76 | Pizzaria no Brás, São Paulo";
const description =
  "A melhor pizzaria do Brás, Mooca e região. Ingredientes de primeira, espaço familiar com lareira, delivery e retirada. Peça pelo WhatsApp: (11) 96640-2249.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}` },
  description,
  applicationName: site.name,
  keywords: [
    "pizzaria no Brás",
    "pizza Brás",
    "pizzaria Mooca",
    "delivery de pizza São Paulo",
    "Rota da Pizza 76",
    "pizzaria com lareira",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: site.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true, address: true },
};

export const viewport: Viewport = {
  themeColor: "#110e0d",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone.tel,
  servesCuisine: ["Pizza", "Italiana"],
  priceRange: "R$ 40–60",
  acceptsReservations: false,
  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.full)}`,
  sameAs: [site.instagram.url],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "BR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}

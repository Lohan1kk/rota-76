export const site = {
  name: "Rota da Pizza 76",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rotadapizza76.vercel.app",
  description:
    "A melhor pizzaria do Brás, Mooca e região. Trabalhamos com ingredientes de primeira qualidade, fazemos sua pizza com muito carinho e dedicação. Temos um espaço familiar para quem preferir comer no local. Entregamos rapidamente.",
  neighborhood: "Brás, São Paulo - SP",
  address: {
    street: "R. Flora, 34",
    district: "Brás",
    city: "São Paulo",
    state: "SP",
    zip: "03041-070",
    full: "R. Flora, 34 - Brás, São Paulo - SP, 03041-070",
  },
  phone: {
    display: "(11) 96640-2249",
    tel: "+5511966402249",
  },
  whatsappUrl: "https://api.whatsapp.com/send?phone=5511966402249",
  instagram: {
    url: "https://www.instagram.com/rotadapizza76/",
    handle: "@rotadapizza76",
  },
  rating: { value: 4.6, count: 68 },
  priceRange: "R$ 40–60 por pessoa",
  // Preencha `days` e `closesAt` (ex.: "Terça a domingo", "23:30") quando tiver o horário completo.
  hours: {
    days: "",
    opensAt: "18:00",
    closesAt: "",
  },
  // Caminhos de fotos reais em /public (ex.: "/images/hero.jpg"). Sem foto, o site usa a textura padrão.
  images: {
    hero: null as string | null,
    about: null as string | null,
  },
  services: ["Comer no local", "Delivery", "Pedir e retirar"],
} as const;

export const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contato", label: "Contato" },
] as const;

export function formatHours() {
  const { opensAt, closesAt } = site.hours;
  return closesAt ? `${opensAt} às ${closesAt}` : `A partir das ${opensAt}`;
}

export const mapsQuery = encodeURIComponent(`${site.name}, ${site.address.full}`);
export const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(site.address.full)}&z=16&output=embed`;
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.address.full)}`;
export const googleReviewsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

export type Pizza = {
  name: string;
  description: string;
  price: number;
};

export const menu: { title: string; note: string; items: Pizza[] }[] = [
  {
    title: "Tradicionais",
    note: "As receitas que nunca saem do forno.",
    items: [
      {
        name: "Muçarela",
        description: "Molho de tomate, muçarela, rodelas de tomate e orégano.",
        price: 40,
      },
      {
        name: "Calabresa",
        description: "Calabresa fatiada, cebola roxa, azeitonas pretas e orégano.",
        price: 42,
      },
      {
        name: "Margherita",
        description: "Muçarela, tomate fresco, manjericão e um fio de azeite extravirgem.",
        price: 46,
      },
      {
        name: "Frango com Catupiry",
        description: "Frango desfiado temperado na casa, coberto com Catupiry original.",
        price: 49,
      },
      {
        name: "Portuguesa",
        description: "Presunto, ovos, cebola, ervilha, azeitonas e muçarela.",
        price: 52,
      },
    ],
  },
  {
    title: "Especiais",
    note: "Combinações para quem quer ir além.",
    items: [
      {
        name: "Quatro Queijos",
        description: "Muçarela, provolone, parmesão e Catupiry gratinados.",
        price: 54,
      },
      {
        name: "Lombo Canadense",
        description: "Lombo canadense, Catupiry, cebola e muçarela.",
        price: 55,
      },
      {
        name: "Pepperoni",
        description: "Pepperoni levemente picante sobre muçarela derretida.",
        price: 56,
      },
      {
        name: "Rúcula com Tomate Seco",
        description: "Muçarela de búfala, tomate seco, rúcula fresca e parmesão.",
        price: 58,
      },
      {
        name: "Rota 76",
        description: "Muçarela, bacon crocante, calabresa, champignon e cebola caramelizada.",
        price: 60,
      },
    ],
  },
];

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
  landlines: [
    { display: "(11) 3798-2379", tel: "+551137982379" },
    { display: "(11) 3798-2384", tel: "+551137982384" },
  ],
  whatsappUrl: "https://api.whatsapp.com/send?phone=5511966402249",
  instagram: {
    url: "https://www.instagram.com/rotadapizza76/",
    handle: "@rotadapizza76",
  },
  rating: { value: 4.6, count: 68 },
  priceRange: "R$ 40–60 por pessoa",
  hours: {
    days: "Terça a domingo",
    daysShort: "Ter. a dom.",
    closedNote: "Fechado às segundas-feiras",
    opensAt: "18:00",
    closesAt: "23:30",
    schema: "Tu-Su 18:00-23:30",
  },
  emblem: "/images/emblema-rota76-claro.png",
  // Imagens em /public/images. Troque pelos caminhos de fotos reais quando tiver; com `null`, o site usa a textura padrão.
  images: {
    hero: "/images/hero-pizza-salao.jpg" as string | null,
    about: "/images/salao.jpg" as string | null,
    cta: null as string | null,
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
  number: number;
  name: string;
  description: string;
  price: number;
};

const DEFAULT_PRICE = 55;

// Para um sabor com preço diferente, adicione o valor como terceiro item: ["Nome", "Ingredientes", 62].
const flavors: [name: string, description: string, price?: number][] = [
  ["Alho e Óleo", "Alho frito, mussarela e azeitonas."],
  ["Abobrinha", "Abobrinha refogada, mussarela, parmesão, tomate seco e azeitonas."],
  ["Americana", "Presunto, palmito, ovo, mussarela e azeitonas."],
  ["Atum", "Atum sólido, cebola e azeitonas."],
  ["Bacon", "Bacon fatiado frito, mussarela, cebola e azeitonas."],
  ["Baiana", "Calabresa moída, pimenta, cebola, mussarela e azeitonas."],
  ["Bauru", "Presunto, mussarela, fatias de tomate e azeitonas."],
  ["Berinjela", "Berinjela, cebola, cobertura de provolone e azeitonas."],
  ["Brasileira", "Atum sólido, palmito, ovos, mussarela e azeitonas."],
  ["Brócolis", "Brócolis refogado, gorgonzola, catupiry e azeitonas."],
  ["Calabresa", "Calabresa fatiada, cebola e azeitonas."],
  ["Calabresa c/ Mussarela", "Calabresa fatiada, cebola, mussarela e azeitonas."],
  ["Caipira", "Frango, milho verde e cebola."],
  ["Dois Queijos", "Catupiry, mussarela e azeitonas."],
  ["Escarola", "Escarola refogada, mussarela e azeitonas."],
  ["Frango", "Peito de frango desfiado temperado, catupiry e azeitonas."],
  ["Frango", "Frango e cebola."],
  ["Frango c/ Mussarela", "Peito de frango desfiado temperado, mussarela e azeitonas."],
  ["Frango Palha", "Frango, catupiry e batata palha."],
  ["Lombo", "Lombo defumado, cebola e azeitonas."],
  ["Marguerita", "Mussarela, fatias de tomate, parmesão, manjericão e azeitonas."],
  ["Milho c/ Catupiry", "Milho verde cozido no vapor, catupiry e azeitonas."],
  ["Milho c/ Mussarela", "Milho verde cozido no vapor, mussarela e azeitonas."],
  ["Mussarela", "Mussarela e azeitonas."],
  ["Moda do Chef", "Mussarela, berinjela e parmesão ralado."],
  ["Napolitana", "Mussarela, fatias de tomate, parmesão e azeitonas."],
  ["Palmito", "Palmito fatiado, mussarela e azeitonas."],
  ["Peperoni", "Mussarela, pimentão, peperoni em fatias e azeitonas."],
  ["Peruana", "Peito de peru defumado, parmesão, mussarela e azeitonas."],
  ["Portuguesa", "Presunto, ovo, ervilha, cebola, mussarela e azeitonas."],
  ["Quatro Queijos", "Catupiry, mussarela, parmesão, provolone e azeitonas."],
  ["Siciliana", "Champignon, bacon, mussarela e azeitonas."],
  ["Três Queijos", "Catupiry, mussarela, parmesão e azeitonas."],
  ["Tomate Seco", "Mussarela e tomate seco."],
  ["Toscana", "Calabresa coberta com mussarela e azeitonas."],
  ["Vegetariana", "Palmito, champignon, milho, cebola, azeitona e orégano."],
  ["Rúcula", "Mussarela, rúcula, tomate seco, azeitona e orégano."],
  ["Moda do Pizzaiolo", "Presunto, mussarela, peperoni, azeitona e orégano."],
  ["À Moda da Casa", "Frango, palmito, champignon, pimentão, cebola, azeitona e orégano."],
  ["Papa Léguas", "Presunto, catupiry, lombo, tomate, azeitona e orégano."],
  ["Batata Palha", "Mussarela com batata palha."],
  ["Italiana", "Presunto, champignon, cebola e catupiry."],
  ["Rota da Pizza", "Champignon, frango, palmito, milho verde e catupiry."],
  ["Grega", "Presunto, palmito, ervilha e mussarela."],
  ["Tropical", "Calabresa, palmito e catupiry."],
  ["Damasceno", "Mussarela, milho, palmito e ervilha."],
  ["Rota 76", "Presunto, escarola, mussarela e bacon."],
  ["Bitencourt", "Calabresa, mussarela, lombo e bacon."],
  ["Champignon", "Champignon, mussarela e palmito."],
  ["Francesa", "Presunto, champignon, ovo e mussarela."],
  ["Paulista", "Mussarela, tomate e calabresa."],
  ["Calabresa Especial", "Calabresa, ovo, presunto e mussarela."],
  ["Flora", "Palmito, champignon, mussarela e presunto."],
  ["Firenze", "Calabresa, catupiry e parmesão."],
  ["Light", "Peito de peru, champignon, palmito e mussarela."],
];

export const pizzas: Pizza[] = flavors.map(([name, description, price], i) => ({
  number: i + 1,
  name,
  description,
  price: price ?? DEFAULT_PRICE,
}));

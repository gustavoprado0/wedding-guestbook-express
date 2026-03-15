import { ExternalLink, Gift, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const gifts = [
  {
    name: "Lista de Presentes Camicado",
    description: "Nossa lista completa na Camicado com diversos itens para o nosso novo lar.",
    store: "Camicado",
    url: "https://lista.camicado.com.br/manuellaeenzo",
    emoji: "🏠",
  },
  {
    name: "Aspirador de Pó Vertical Electrolux Ergorapido 2 em 1",
    description: "Aspirador sem fio 2 em 1, prático para o dia a dia. Cyclone até 21 min.",
    store: "Electrolux",
    price: "R$ 479,90",
    url: "https://loja.electrolux.com.br/aspirador-de-po-2-em-1-ergorapido-branco-erg21/p",
    emoji: "🧹",
  },
  {
    name: "Purificador de Água Electrolux Purex PEG Grafite",
    description: "Purificador de água bivolt para ter água sempre fresquinha e filtrada.",
    store: "Carrefour",
    url: "https://www.carrefour.com.br/produto/purificador-de-agua-electrolux-purex-peg-grafite-bivolt-9576317",
    emoji: "💧",
  },
  {
    name: "Batedeira Planetária Philco 800W 5 Litros",
    description: "Batedeira planetária preta com 12 velocidades e capacidade de 5 litros.",
    store: "Magazine Luiza",
    url: "https://m.magazineluiza.com.br/batedeira-planetaria-philco-preta-800w-12-velocidades-5-litros-pbp90a-103401154/p/240306400/ep/bapl/",
    emoji: "🍰",
  },
  {
    name: "Forno Elétrico de Embutir 68L Midea",
    description: "Forno elétrico de embutir com 68 litros de capacidade, perfeito para a cozinha.",
    store: "Casas Bahia",
    url: "https://www.casasbahia.com.br/forno-eletrico-de-embutir-68l-midea/p/1574901824",
    emoji: "🔥",
  },
  {
    name: "Secadora Electrolux Essential Care 11kg",
    description: "Secadora de roupas 11kg branca 110V para facilitar o dia a dia.",
    store: "Casas Bahia",
    url: "https://www.casasbahia.com.br/secadora-electrolux-stl11-essential-care-11kg-branca-110v/p/55005281",
    emoji: "👕",
  },
];

const Presentes = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-wedding-dark py-6">
        <div className="max-w-4xl mx-auto px-4 flex items-center gap-4">
          <Link
            to="/"
            className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            <ArrowLeft size={20} />
          </Link>
          <div className="text-center flex-1">
            <p className="font-serif text-3xl text-primary-foreground/90">
              Manuella & Enzo
            </p>
            <p className="text-primary-foreground/50 text-xs tracking-[0.25em] mt-1 font-sans">
              LISTA DE PRESENTES
            </p>
          </div>
          <div className="w-5" />
        </div>
      </header>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-4 py-12 text-center">
        <Gift className="mx-auto mb-4 text-accent" size={36} />
        <h1 className="font-serif text-4xl text-foreground mb-4">
          Nossos Presentes
        </h1>
        <p className="text-muted-foreground font-sans leading-relaxed max-w-lg mx-auto">
          Sua presença é o nosso maior presente! Mas se quiser nos presentear,
          preparamos esta lista com muito carinho. Clique no item para ser
          redirecionado à loja.
        </p>
      </section>

      {/* Gift Grid */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gifts.map((gift, i) => (
            <motion.a
              key={i}
              href={gift.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group block rounded-lg border border-border bg-card p-5 hover:shadow-lg hover:border-accent/40 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{gift.emoji}</div>
              <h3 className="font-serif text-lg text-foreground group-hover:text-accent transition-colors leading-snug mb-1">
                {gift.name}
              </h3>
              <p className="text-muted-foreground text-sm font-sans mb-3 leading-relaxed">
                {gift.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground tracking-wider font-sans uppercase">
                  {gift.store}
                </span>
                {gift.price && (
                  <span className="text-sm font-sans font-medium text-foreground">
                    {gift.price}
                  </span>
                )}
              </div>
              <div className="mt-3 flex items-center gap-1 text-accent text-xs font-sans font-medium">
                <ExternalLink size={12} />
                Ver na loja
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-wedding-dark text-center">
        <Link to="/" className="font-serif text-xl text-primary-foreground/90 hover:text-primary-foreground transition-colors">
          ← Voltar ao convite
        </Link>
      </footer>
    </div>
  );
};

export default Presentes;

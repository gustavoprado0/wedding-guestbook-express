import { ExternalLink, Gift } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Ornament from "./Ornament";

const gifts = [
  {
    name: "Lista de Presentes Camicado",
    description: "Nossa lista completa na Camicado com diversos itens para o nosso novo lar.",
    store: "Camicado",
    url: "https://lista.camicado.com.br/manuellaeenzo",
    emoji: "🏠",
  },
  {
    name: "Aspirador de Pó Vertical Electrolux",
    description: "Aspirador sem fio 2 em 1, prático para o dia a dia.",
    store: "Electrolux",
    price: "R$ 479,90",
    url: "https://loja.electrolux.com.br/aspirador-de-po-2-em-1-ergorapido-branco-erg21/p",
    emoji: "🧹",
  },
  {
    name: "Purificador de Água Electrolux",
    description: "Purificador bivolt para água sempre fresquinha e filtrada.",
    store: "Carrefour",
    url: "https://www.carrefour.com.br/produto/purificador-de-agua-electrolux-purex-peg-grafite-bivolt-9576317",
    emoji: "💧",
  },
  {
    name: "Batedeira Planetária Philco 800W",
    description: "Batedeira preta com 12 velocidades e capacidade de 5 litros.",
    store: "Magazine Luiza",
    url: "https://m.magazineluiza.com.br/batedeira-planetaria-philco-preta-800w-12-velocidades-5-litros-pbp90a-103401154/p/240306400/ep/bapl/",
    emoji: "🍰",
  },
  {
    name: "Forno Elétrico de Embutir 68L Midea",
    description: "Forno elétrico de embutir com 68 litros de capacidade.",
    store: "Casas Bahia",
    url: "https://www.casasbahia.com.br/forno-eletrico-de-embutir-68l-midea/p/1574901824",
    emoji: "🔥",
  },
  {
    name: "Secadora Electrolux 11kg",
    description: "Secadora de roupas 11kg branca 110V para facilitar o dia a dia.",
    store: "Casas Bahia",
    url: "https://www.casasbahia.com.br/secadora-electrolux-stl11-essential-care-11kg-branca-110v/p/55005281",
    emoji: "👕",
  },
];

const GiftSection = () => {
  return (
    <section id="presentes" className="py-20 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Ornament />
          <Gift className="mx-auto mb-4 text-wedding-dark" size={36} />
          <h2 className="font-serif text-4xl text-foreground mb-4">Lista de Presentes</h2>
          <p className="text-muted-foreground font-sans leading-relaxed max-w-lg mx-auto">
            Sua presença é o nosso maior presente! Mas se quiser nos presentear,
            preparamos esta lista com muito carinho.
          </p>
        </motion.div>

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
              className="group block rounded-lg border-2 border-wedding-dark/20 bg-card p-5 hover:border-wedding-dark/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-3">{gift.emoji}</div>
              <h3 className="font-serif text-lg text-foreground group-hover:text-wedding-dark transition-colors leading-snug mb-1">
                {gift.name}
              </h3>
              <p className="text-primary-foreground/50 text-sm font-sans mb-3 leading-relaxed">
                {gift.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-primary-foreground/40 tracking-wider font-sans uppercase">
                  {gift.store}
                </span>
                {gift.price && (
                  <span className="text-sm font-sans font-medium text-primary-foreground/80">
                    {gift.price}
                  </span>
                )}
              </div>
              <div className="mt-3 flex items-center gap-1 text-wedding-olive text-xs font-sans font-medium">
                <ExternalLink size={12} />
                Ver na loja
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            to="/presentes"
            className="inline-block text-wedding-olive hover:text-wedding-olive/80 font-sans text-sm tracking-wider transition-colors underline underline-offset-4"
          >
            Ver lista completa →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftSection;

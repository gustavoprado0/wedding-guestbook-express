import { ExternalLink, Gift } from "lucide-react";
import { motion } from "framer-motion";
import Ornament from "./Ornament";
const gifts = [
    {
        name: "Lista de Presentes Camicado",
        description: "Nossa lista completa na Camicado com diversos itens para o nosso novo lar.",
        store: "",
        url: "https://lista.camicado.com.br/manuellaeenzo",
        image: "/lista-presentes.jpeg",
    },
    {
        name: "Aspirador de Pó Vertical Electrolux",
        description: "Aspirador sem fio 2 em 1, prático para o dia a dia.",
        store: "",
        url: "https://loja.electrolux.com.br/aspirador-de-po-2-em-1-ergorapido-branco-erg21/p",
        image: "/aspirador.jpeg",
    },
    {
        name: "Purificador de Água Electrolux",
        description: "Purificador bivolt para água sempre fresquinha e filtrada.",
        store: "",
        url: "https://www.carrefour.com.br/produto/purificador-de-agua-electrolux-purex-peg-grafite-bivolt-9576317",
        image: "/purificador-de-agua.jpeg",
    },
    {
        name: "Batedeira Planetária Philco 800W",
        description: "Batedeira preta com 12 velocidades e capacidade de 5 litros.",
        store: "",
        url: "https://m.magazineluiza.com.br/batedeira-planetaria-philco-preta-800w-12-velocidades-5-litros-pbp90a-103401154/p/240306400/ep/bapl/",
        image: "/batedeira.jpeg",
    },
    {
        name: "Forno Elétrico de Embutir 68L Midea",
        description: "Forno elétrico de embutir com 68 litros de capacidade.",
        store: "",
        url: "https://www.casasbahia.com.br/forno-eletrico-de-embutir-68l-midea/p/1574901824",
        image: "/forno-elétrico.jpeg",
    },
    {
        name: "Secadora Electrolux 11kg",
        description: "Secadora de roupas 11kg branca 110V para facilitar o dia a dia.",
        store: "",
        url: "https://www.casasbahia.com.br/secadora-electrolux-stl11-essential-care-11kg-branca-110v/p/55005281",
        image: "/secadora.jpeg",
    },
];

export const GiftSection = () => {
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
                    <h2 className="font-serif text-4xl text-foreground mb-4">Lista de Presentes</h2>
                    <p className="text-muted-foreground font-sans leading-relaxed max-w-lg mx-auto">
                        Sua presença é o nosso maior presente! Mas se quiser nos presentear,
                        preparamos esta lista com muito carinho.
                    </p>
                </motion.div>
                <div className="
                    flex gap-4 overflow-x-auto pb-4
                    sm:grid sm:grid-cols-2
                    lg:grid-cols-3
                    ">
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
                          className="group min-w-[260px] sm:min-w-0 block rounded-lg border border-border bg-card p-5 hover:shadow-lg hover:border-border transition-all duration-300"
                        >
                            <img
                                src={gift.image}
                                alt={gift.name}
                                className="w-full h-40 object-contain mb-3"
                            />
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
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-muted-foreground tracking-wider font-sans uppercase">
                                        {gift.store}
                                    </span>
                                </div>
                            </div>
                            <div className="mt-3 flex items-center gap-1 text-accent text-xs font-sans font-medium">
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
                </motion.div>
            </div>
        </section>
    );
};
export default GiftSection; 
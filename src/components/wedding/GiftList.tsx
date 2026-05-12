import { ExternalLink } from "lucide-react";
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
        name: "Modelador de Cachos Taiff Curves",
        description: "Modelador de cachos 1,25 cm com cabo giratório, preto, bivolt.",
        store: "",
        url: "https://www.casasbahia.com.br/modelador-de-cachos-taiff-curves-1-25-cm-com-cabo-giratorio-preto-210c-bivolt/p/12358010",
        image: "/modelador-cachos.jpeg",
    },

    {
        name: "Varal de Parede Mágico Retrátil",
        description: "Varal de parede dobrável todo de alumínio, disponível em 60cm, 80cm e 100cm. Resistente à ferrugem, suporta até 5kg por varal.",
        store: "",
        url: "https://br.shp.ee/id4RVCix",
        image: "/varal-parede.jpeg",
    },

    {
        name: "Placas para Base Box Bouclé",
        description: "Kit com 14 placas modulares em tecido Bouclé para transformar a base box. Disponível para casal padrão, queen e king, com 25cm de altura. Fixação por velcro.",
        store: "",
        url: "https://br.shp.ee/LR8nUyFg",
        image: "/placas-base-box.jpeg",
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
        name: "Tapete",
        description: "Tapete para deixar os ambientes mais aconchegantes.",
        store: "",
        url: "https://a.co/d/0e0uH0ns",
        image: "/tapete.jpeg",
    },


    {
        name: "Kit 6 Quadros Decorativos Personalizados",
        description: "Kit com 6 quadros decorativos personalizados com foto e moldura premium. Disponível em moldura branca, preta ou madeira.",
        store: "",
        url: "https://br.shp.ee/sDsiDT1g",
        image: "/quadros.jpeg",
    },

    {
        name: "Rack TV Bancada Kent 55 Polegadas",
        description: "Rack TV bancada madeira maciça com 4 gavetas e 2 nichos, estilo rústico. Disponível em cinza, branco madeirado e madeirado.",
        store: "",
        url: "https://br.shp.ee/tSnYYwV4",
        image: "/rack-kent.jpeg",
    },
   

    {
        name: "Kit Colcha Boutis Dupla Face Nicole",
        description: "Colcha casal dupla face estampada com flores, tecido leve, macio e resistente. Casa Riachuelo.",
        store: "",
        url: "https://www.riachuelo.com.br/produto/kit-colcha-boutis-dupla-face-nicole-casa-riachuelo-16223276_sku_sku_casal_multicor",
        image: "/colcha.png",
    },

    {
        name: "Tapete Malibu",
        description: "Tapete Malibu com design moderno e sofisticado, material resistente e textura agradável. Disponível em 150x200cm e 200x300cm.",
        store: "",
        url: "https://www.riachuelo.com.br/produto/tapete-malibu-150x200cm-azul-casa-riachuelo-16309758001_sku_sku_150-x-200-cm_azul",
        image: "/tapete-malibu.png",
    },

    {
        name: "Porta Detergente Soft Touch de Cerâmica Nude",
        description: "Porta detergente líquido de cerâmica nude 380ml com acabamento soft touch. Design moderno para a cozinha.",
        store: "",
        url: "https://br.shp.ee/3mPdaEZX",
        image: "/porta-detergente.jpeg",
    },

    {
        name: "Sanduicheira",
        description: "Sanduicheira para cafés da manhã e lanches práticos.",
        store: "",
        url: "https://www.amazon.com.br/dp/B0CCBYBPPQ?ref_=cm_sw_r_cso_cp_mwn_dp_C1JWKDA20F4P6MK7RD10_1",
        image: "/sanduicheira.jpeg",
    },
    {
        name: "Liquidificador",
        description: "Liquidificador potente para sucos, vitaminas e muito mais.",
        store: "",
        url: "https://a.co/d/0iITFtIt",
        image: "/liquidificador.jpeg",
    },
    {
        name: "Jogo de Cama",
        description: "Jogo de cama completo para noites mais confortáveis.",
        store: "",
        url: "https://a.co/d/09bfRwaq",
        image: "/jogo-cama.jpeg",
    },
    {
        name: "Edredom Casal Malha Premium",
        description: "Edredom casal 100% algodão fio penteado para noites aconchegantes.",
        store: "",
        url: "https://www.zelo.com.br/edredom-zelo-malha-premium-casal-100-algodao-fio-penteado-p1011587",
        image: "/edredom.jpeg",
    },
    {
        name: "Cabeceira Cama Box Casal 140cm Orgânica Bouclé",
        description: "Cabeceira orgânica 140cm em tecido Bouclé. Disponível em Bouclé Off White e Bouclé Cinza.",
        store: "",
        url: "https://br.shp.ee/Frs36bkQ",
        image: "/cabeceira.jpeg",
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
                    <h2 className="font-serif text-4xl text-foreground mb-4">
                        Lista de Presentes
                    </h2>
                    <p className="text-muted-foreground font-sans leading-relaxed max-w-lg mx-auto">
                        Sua presença é o nosso maior presente! Mas se quiser nos presentear,
                        preparamos esta lista com muito carinho.
                    </p>
                </motion.div>

                <div className="flex gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
                    {gifts.map((gift, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="group min-w-[260px] sm:min-w-0 rounded-lg border border-border bg-card p-5 hover:shadow-lg transition-all duration-300 flex flex-col"
                        >
                            <img
                                src={gift.image}
                                alt={gift.name}
                                className="w-full h-40 object-contain mb-3"
                            />

                            <h3 className="text-lg text-foreground group-hover:text-accent transition-colors leading-snug mb-1">
                                {gift.name}
                            </h3>

                            <p className="text-muted-foreground text-sm font-sans mb-3 leading-relaxed flex-1">
                                {gift.description}
                            </p>

                            <div className="mt-3 flex items-center gap-4 flex-wrap">
                                <a
                                    href={gift.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-accent text-xs font-sans font-medium hover:underline"
                                >
                                    <ExternalLink size={12} />
                                    Ver na loja
                                </a>


                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GiftSection
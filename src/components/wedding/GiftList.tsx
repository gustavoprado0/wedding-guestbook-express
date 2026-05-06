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
        name: "Aspirador de Pó Vertical Electrolux",
        description: "Aspirador sem fio 2 em 1, prático para o dia a dia.",
        store: "",
        url: "https://loja.electrolux.com.br/aspirador-de-po-2-em-1-ergorapido-branco-erg21/p",
        url2: "https://www.mercadolivre.com.br/p/MLB14155420?pdp_filters=item_id:MLB1719272833&matt_tool=38524122#origin=share&sid=share&wid=MLB1719272833&action=copy",
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

    {
        name: "Cama Box Baú Casal + Colchão Ortobom",
        description: "Cama box baú casal bege com colchão Ortobom Airtech de molas ensacadas.",
        store: "",
        url: "https://www.madeiramadeira.com.br/cama-box-bau-casal-bege-e-colchao-ortobom-airtech-molas-ensacadas-368730425.html",
        image: "/cama.jpeg",
    },
    {
        name: "Geladeira Frost Free Electrolux 400L",
        description: "Refrigerador duplex IF44S frost free 400L em inox.",
        store: "",
        url: "https://www.magazineluiza.com.br/geladeira-refrigerador-electrolux-frost-free-duplex-400l-if44s/p/241075900/ed/refr/",
        image: "/geladeira.jpeg",
    },
    {
        name: "Micro-ondas Philco 20L",
        description: "Micro-ondas 20L com função tira-odor para o dia a dia.",
        store: "",
        url: "https://www.casasbahia.com.br/micro-ondas-pmo23eb-20l-com-funcao-tira-odor-philco/p/1521087602",
        image: "/microondas.jpeg",
    },
    {
        name: "Lavadora Electrolux Efficient 14,5kg",
        description: "Lavadora com cesto inox, Ultra Filter e tecnologia Jet Clean preta.",
        store: "",
        url: "https://www.casasbahia.com.br/lavadora-de-roupas-electrolux-efficient-lep15-145kg-com-cesto-inox-ultra-filter-e-tecnologia-jet-clean-preta/p/55069208",
        image: "/maquina-lavar.jpeg",
    },
    {
        name: "Ferro de Passar",
        description: "Ferro de passar roupa para deixar tudo sempre bem apresentado.",
        store: "",
        url: "https://a.co/d/03wQCe7M",
        image: "/ferro-passar.jpeg",
    },
    {
        name: "Fogão",
        description: "Fogão para tornar a cozinha ainda mais completa.",
        store: "",
        url: "https://a.co/d/0gxOi3py",
        image: "/fogao.jpeg",
    },
    {
        name: "Airfryer",
        description: "Airfryer para preparar refeições saudáveis e saborosas.",
        store: "",
        url: "https://a.co/d/0fBsVEnr",
        image: "/airfreyr.jpeg",
    },
    {
        name: "Tapete",
        description: "Tapete para deixar os ambientes mais aconchegantes.",
        store: "",
        url: "https://a.co/d/0e0uH0ns",
        image: "/tapete.jpeg",
    },

    {
        name: "Rack Suspenso Paris Off White",
        description: "Rack suspenso para painel ou TV até 55 polegadas, 2 portas, 1,10m, cor Off White Paris.",
        store: "",
        url: "https://br.shp.ee/9MnqFQ3d",
        image: "/rack.jpeg",
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
        name: "Rack 2 Portas Ditália R-606 Branco",
        description: "Rack para TV com 2 portas, estilo clean e moderno, cor branco.",
        store: "",
        url: "https://br.shp.ee/dSiwNumk",
        image: "/rack-ditalia.jpeg",
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
                        Listas de Presentes
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

                                {gift.url2 && (
                                    <a
                                        href={gift.url2}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-accent text-xs font-sans font-medium hover:underline"
                                    >
                                        <ExternalLink size={12} />
                                        Ver no Mercado Livre
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GiftSection
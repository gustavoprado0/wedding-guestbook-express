import { motion } from "framer-motion";
import Ornament from "./Ornament";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-background">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <Ornament />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl md:text-5xl text-foreground mb-8 font-light"
        >
          Sobre o nosso dia...
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-muted-foreground text-sm md:text-base leading-relaxed tracking-wide"
        >
          O grande dia está chegando e não poderíamos estar mais animados para
          compartilhar com a nossa família e amigos um dos dias mais especiais
          das nossas vidas! Queremos muito sua presença neste dia tão importante
          com muita festa, amor e carinho em uma comemoração que irá nos marcar
          para sempre!
        </motion.p>
        <Ornament className="mt-8" />
      </div>
    </section>
  );
};

export default AboutSection;

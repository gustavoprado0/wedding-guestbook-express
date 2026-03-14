import { motion } from "framer-motion";
import heroImage from "@/assets/couple-hero.jpeg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl text-white font-light tracking-wide uppercase"
        >
          Manuella e Enzo
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-white/90 font-sans text-lg md:text-xl mt-6 tracking-widest font-light"
        >
          24/05/2026
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;

import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const VenueSection = () => {
  const address = "Av. Paes de Barros, 3670 - Vila Prudente, São Paulo - SP, 03149-000, Brasil";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(address)}`;

  return (
    <section id="cerimonia" className="py-20 md:py-28 bg-wedding-cream">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl md:text-5xl text-foreground mb-4 font-light"
        >
          Casa Helenya
        </motion.h2>
        <p className="font-sans text-muted-foreground text-sm tracking-widest uppercase mb-8">
          Cerimônia e Recepção
        </p>
        <div className="space-y-4 mb-10">
          <p className="font-serif text-2xl md:text-3xl text-foreground">
            <span className="font-semibold">24/05/2026</span> às{" "}
            <span className="font-semibold">09:45</span>
          </p>
          <div className="flex items-start justify-center gap-2 text-muted-foreground">
            <MapPin size={18} className="mt-0.5 shrink-0" />
            <p className="font-sans text-sm">{address}</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            variant="outline"
            className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} /> Abrir com Google Maps
            </a>
          </Button>
          <Button
            variant="outline"
            className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href={wazeUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} /> Abrir com Waze
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;

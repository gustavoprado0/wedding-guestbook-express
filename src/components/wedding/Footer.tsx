import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-10 bg-wedding-dark text-center">
    <p className="font-serif text-2xl text-primary-foreground/90 mb-2">
      Manuella & Enzo
    </p>
    <p className="font-sans text-xs text-primary-foreground/50 tracking-widest flex items-center justify-center gap-1">
      Feito com <Heart size={12} className="text-wedding-olive" /> para o nosso grande dia
    </p>
  </footer>
);

export default Footer;

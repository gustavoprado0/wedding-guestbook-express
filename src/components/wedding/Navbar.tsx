import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "SOBRE O NOSSO DIA", href: "#sobre" },
  { label: "CERIMÔNIA E RECEPÇÃO", href: "#cerimonia" },
  { label: "NOSSA DATA", href: "#data" },
  { label: "CONFIRMAÇÃO DE PRESENÇA", href: "#confirmacao" },
  {label: "LISTA DE PRESENTES", href: "#presentes" }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-wedding-dark/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-center px-4 py-4">
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => scrollTo(item.href)}
                className="text-primary-foreground/80 hover:text-primary-foreground text-xs tracking-[0.2em] font-sans font-medium transition-colors"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-wedding-dark/95 px-4 pb-4">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="block w-full text-left py-3 text-primary-foreground/80 text-xs tracking-[0.2em] font-sans"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

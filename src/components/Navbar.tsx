import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Protocolo", href: "#metodo" },
  { label: "Contacto", href: "#orcamento" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const WA_URL = whatsappUrl(WHATSAPP_MESSAGES.hero);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-luxury ${
        scrolled
          ? "bg-cream/85 backdrop-blur-xl border-b border-foreground/10 shadow-elevated py-0"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div
        className={`container mx-auto px-6 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <a href="#" className={`font-display text-xl md:text-2xl font-bold tracking-wide transition-colors ${scrolled ? "text-foreground" : "text-cream"}`}>
          Wise<span className="text-gold">Clean</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`transition-colors font-body text-sm relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full ${scrolled ? "text-foreground/75 hover:text-gold" : "text-cream/85 hover:text-gold"}`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("navbar")}
            className="btn-fill bg-gradient-gold font-body font-semibold px-5 py-2.5 rounded-lg text-secondary text-sm transition-all duration-500 ease-luxury shadow-gold"
          >
            Agendar via WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={scrolled ? "md:hidden text-foreground" : "md:hidden text-cream"}
          aria-label="Abrir menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream/95 backdrop-blur-xl border-t border-foreground/10 px-6 py-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-foreground/80 hover:text-gold transition-colors font-body text-base"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => { trackWhatsAppClick("navbar_mobile"); setOpen(false); }}
            className="block bg-gradient-gold font-body font-semibold px-5 py-3 rounded-lg text-secondary text-sm text-center hover:opacity-90 transition-opacity shadow-gold"
          >
            Agendar via WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

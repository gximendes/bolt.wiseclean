import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

const Navbar = () => {
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

        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick("navbar")}
          className="btn-fill bg-gradient-gold font-body font-semibold px-5 py-2.5 rounded-lg text-secondary text-sm transition-all duration-500 ease-luxury shadow-gold inline-flex items-center gap-2"
        >
          <MessageCircle className="w-4 h-4 md:hidden" />
          <span className="hidden md:inline">Agendar via WhatsApp</span>
          <span className="md:hidden">Agendar</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

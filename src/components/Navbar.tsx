import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/lib/constants";
import { trackWhatsAppClick } from "@/lib/analytics";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-cream-deep/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <span
            className={`font-display text-2xl md:text-3xl font-semibold tracking-tight transition-colors ${
              scrolled ? "text-navy" : "text-cream"
            }`}
          >
            Wise<span className="text-gold">Clean</span>
          </span>
        </a>

        <a
          href={whatsappUrl(WHATSAPP_MESSAGES.hero)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick("navbar")}
          className={`inline-flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-full font-body font-medium text-sm transition-all duration-500 ${
            scrolled
              ? "bg-navy text-cream hover:bg-navy-deep"
              : "bg-gold text-navy hover:bg-gold-warm"
          }`}
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">Agendar via WhatsApp</span>
          <span className="sm:hidden">Agendar</span>
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;

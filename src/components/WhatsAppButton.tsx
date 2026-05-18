import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

const WhatsAppButton = () => {
  const [inContact, setInContact] = useState(false);

  useEffect(() => {
    const section = document.getElementById("orcamento");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInContact(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const url = whatsappUrl(WHATSAPP_MESSAGES.info);

  return (
    <>
      {/* Desktop: floating circle */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick("floating_button")}
        aria-label="Falar pelo WhatsApp com a WiseClean"
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full items-center justify-center shadow-lg hover:scale-110 transition-transform hidden md:flex ${
          inContact ? "md:opacity-0 md:pointer-events-none" : ""
        }`}
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>

      {/* Mobile: sticky full-width bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
          inContact ? "translate-y-full" : "translate-y-0"
        }`}
      >
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick("mobile_sticky")}
          className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-body font-semibold text-sm py-3.5 shadow-[0_-2px_12px_rgba(0,0,0,0.15)]"
        >
          <MessageCircle className="w-5 h-5" />
          Agendar via WhatsApp
        </a>
      </div>
    </>
  );
};

export default WhatsAppButton;

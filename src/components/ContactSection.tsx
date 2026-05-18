import { motion } from "framer-motion";
import { useEffect } from "react";
import { MessageCircle, Users } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { whatsappUrl, WHATSAPP_MESSAGES, RESPONSE_TIME } from "@/lib/constants";

const HUBSPOT_EMBED_SRC = "https://js-eu1.hsforms.net/forms/embed/148359973.js";

const REFERRAL_URL =
  "https://wa.me/?text=" + encodeURIComponent(WHATSAPP_MESSAGES.referral);

const ContactSection = () => {
  useEffect(() => {
    if (document.querySelector(`script[src="${HUBSPOT_EMBED_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = HUBSPOT_EMBED_SRC;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="orcamento" className="relative py-24 lg:py-32 bg-gradient-forest overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-cream mb-4 leading-tight">
            A sua casa merece{" "}
            <span className="text-gradient-gold">puro.</span>
          </h2>
          <p className="text-cream/70 font-body text-base max-w-md mx-auto">
            Diagnóstico gratuito ao domicílio. {RESPONSE_TIME}
          </p>
        </motion.div>

        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <a
              href={whatsappUrl(WHATSAPP_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("contact_cta")}
              className="btn-fill bg-gradient-gold font-body font-semibold px-10 py-4 rounded-lg text-secondary inline-flex items-center justify-center gap-2 shadow-gold text-base transition-all duration-500 ease-luxury"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar via WhatsApp
            </a>
            <p className="font-body text-[11px] mt-2 text-cream/50">
              {RESPONSE_TIME}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-lg shadow-card p-6"
          >
            <p className="text-muted-foreground font-body text-sm text-center mb-4">
              Ou preencha o formulário — respondemos no mesmo dia.
            </p>
            <div
              className="hs-form-frame"
              data-region="eu1"
              data-form-id="4bec4366-a2fa-48bb-b4df-4e7c7bf0cdce"
              data-portal-id="148359973"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-6 rounded-xl border border-gold/25 bg-cream/5 px-5 py-4 text-center"
          >
            <Users className="w-4 h-4 text-gold mx-auto mb-1.5" />
            <p className="text-cream/70 font-body text-sm leading-relaxed">
              Recomende a um amigo — ambos recebem 15 € de desconto.
            </p>
            <a
              href={REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold font-body text-xs font-medium hover:text-gold/80 transition-colors mt-1.5 inline-block"
            >
              Partilhar com um amigo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

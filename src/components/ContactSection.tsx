import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MessageCircle, Users, X } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { whatsappUrl, WHATSAPP_MESSAGES, RESPONSE_TIME } from "@/lib/constants";

const HUBSPOT_EMBED_SRC = "https://js-eu1.hsforms.net/forms/embed/148359973.js";

const REFERRAL_URL =
  "https://wa.me/?text=" + encodeURIComponent(WHATSAPP_MESSAGES.referral);

const ContactSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [rgpdAccepted, setRgpdAccepted] = useState(false);

  useEffect(() => {
    if (document.querySelector(`script[src="${HUBSPOT_EMBED_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = HUBSPOT_EMBED_SRC;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (!modalOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [modalOpen]);

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

        <div className="max-w-2xl mx-auto">
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
            className="text-center mb-8"
          >
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="font-body font-medium px-8 py-4 rounded-lg border border-cream/25 text-cream hover:border-gold hover:text-gold inline-flex items-center gap-2 transition-colors text-base"
            >
              Preencher formulário
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-6 rounded-xl border border-gold/25 bg-cream/5 px-5 py-4 text-center max-w-md mx-auto"
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

      {/* Modal */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(15, 15, 16, 0.85)" }}
        >
          <div
            className="w-full max-w-2xl rounded-xl shadow-deep flex flex-col overflow-hidden"
            style={{ background: "#F4EFE9", maxHeight: "90vh" }}
          >
            {/* Header */}
            <div
              className="px-6 py-5 flex items-center justify-between"
              style={{ background: "#1C2A36" }}
            >
              <p
                id="contact-modal-title"
                className="font-display text-xl font-bold"
                style={{ color: "#C9A24A" }}
              >
                Contacto
              </p>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="text-cream/60 hover:text-cream transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-6 overflow-y-auto flex-1">
              {/* RGPD checkbox */}
              <label className="flex items-start gap-3 cursor-pointer mb-6">
                <input
                  type="checkbox"
                  checked={rgpdAccepted}
                  onChange={(e) => setRgpdAccepted(e.target.checked)}
                  className="mt-1 h-4 w-4 cursor-pointer"
                  style={{ accentColor: "#C9A24A" }}
                />
                <span className="font-body text-sm" style={{ color: "#1C2A36" }}>
                  Li e aceito a{" "}
                  <a
                    href="/termos"
                    className="underline hover:text-gold transition-colors"
                    style={{ color: "#C9A24A" }}
                  >
                    Política de Privacidade
                  </a>{" "}
                  e os{" "}
                  <a
                    href="/termos"
                    className="underline hover:text-gold transition-colors"
                    style={{ color: "#C9A24A" }}
                  >
                    Termos e Condições
                  </a>{" "}
                  da WiseClean.
                </span>
              </label>

              {/* HubSpot form */}
              <div className={`transition-opacity duration-300 ${rgpdAccepted ? "opacity-100" : "opacity-50 pointer-events-none"}`}>
                <div
                  className="hs-form-frame"
                  data-region="eu1"
                  data-form-id="4bec4366-a2fa-48bb-b4df-4e7c7bf0cdce"
                  data-portal-id="148359973"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;

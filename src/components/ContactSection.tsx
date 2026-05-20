import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/lib/constants";
import { trackWhatsAppClick } from "@/lib/analytics";

const ContactSection = () => (
  <section id="contacto" className="bg-navy-deep py-24 md:py-32 overflow-hidden relative">
    {/* Textura subtil */}
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, #C9A24A 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }}
    />

    <div className="container mx-auto px-6 relative">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-eyebrow text-gold mb-6"
        >
          Próximo Passo
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-display-lg text-cream mb-8"
        >
          O diagnóstico é
          <br />
          <span className="italic text-gold">gratuito.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-body-lg text-cream/70 mb-12 max-w-xl mx-auto"
        >
          Envia uma foto do sofá pelo WhatsApp e respondo com um valor estimado em menos de 1 hora.
          Sem compromisso.
        </motion.p>

        {/* CTA principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <a
            href={whatsappUrl(WHATSAPP_MESSAGES.hero)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("contact_cta")}
            className="group inline-flex items-center gap-3 bg-gold hover:bg-gold-warm text-navy px-10 py-5 rounded-full font-body font-semibold text-base md:text-lg transition-all duration-500"
          >
            <MessageCircle className="w-5 h-5" />
            Agendar via WhatsApp
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-cream/40 text-body-sm mt-4">
            Resposta em menos de 1 hora · Diagnóstico gratuito sem compromisso
          </p>
        </motion.div>

        {/* Info de contacto */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto pt-12 border-t border-cream/10"
        >
          <a
            href="tel:+351912669208"
            className="flex flex-col items-center gap-2 text-cream/70 hover:text-gold transition-colors"
          >
            <Phone className="w-5 h-5 text-gold" />
            <span className="text-body-sm">912 669 208</span>
          </a>
          <a
            href="mailto:wiseclean@gmail.com"
            className="flex flex-col items-center gap-2 text-cream/70 hover:text-gold transition-colors"
          >
            <Mail className="w-5 h-5 text-gold" />
            <span className="text-body-sm">wiseclean@gmail.com</span>
          </a>
          <div className="flex flex-col items-center gap-2 text-cream/70">
            <Clock className="w-5 h-5 text-gold" />
            <span className="text-body-sm">Seg–Sáb · 09:00–19:00</span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;

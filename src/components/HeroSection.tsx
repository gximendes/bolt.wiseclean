import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FlaskConical, Recycle, Zap } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { whatsappUrl, WHATSAPP_MESSAGES, RESPONSE_TIME } from "@/lib/constants";

const HERO_IMAGE = "https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80";

const trustChips = [
  { icon: FlaskConical, label: "Safe pH™" },
  { icon: Recycle, label: "Recolha 100%" },
  { icon: Zap, label: "< 1h resposta" },
];

type HeroSectionProps = {
  eyebrow?: string;
  subline?: ReactNode;
};

const HeroSection = ({ eyebrow, subline }: HeroSectionProps = {}) => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={HERO_IMAGE}
        alt="Higienização técnica de sofá ao domicílio em Viseu — WiseClean Safe pH™"
        width={1920}
        height={1080}
        className="w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-forest opacity-90" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-70" />
    </div>

    <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32">
      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-gold text-xs md:text-sm font-body tracking-[0.25em] uppercase mb-6"
        >
          {eyebrow ?? "Centro de Higienização Técnica · Viseu"}
        </motion.p>

        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 text-cream">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            Purificar Lares.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="block text-gradient-gold"
          >
            Proteger Peles.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl mb-8 max-w-xl text-cream/80 font-body"
        >
          {subline ?? (
            <>
              Higienização técnica profunda com padrão interno{" "}
              <span className="text-gold">Safe pH™</span> — para um lar mais limpo
              e um ambiente mais confortável.
            </>
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {trustChips.map((c) => (
            <span
              key={c.label}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold/25 bg-cream/5 text-cream/80 font-body text-xs"
            >
              <c.icon className="w-3.5 h-3.5 text-gold" />
              {c.label}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <div className="flex flex-col">
            <a
              href={whatsappUrl(WHATSAPP_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("hero_cta")}
              className="btn-fill bg-gradient-gold font-body font-semibold px-8 py-4 rounded-lg text-secondary inline-flex items-center justify-center gap-2 transition-all duration-500 ease-luxury text-base"
            >
              Agendar via WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="font-body text-[11px] mt-2 text-cream/50 text-center">
              {RESPONSE_TIME}
            </p>
          </div>
          <a
            href="#servicos"
            className="font-body font-medium px-8 py-4 rounded-lg border border-cream/25 text-cream hover:border-gold hover:text-gold flex items-center justify-center gap-2 transition-colors text-base"
          >
            Conhecer os serviços
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;

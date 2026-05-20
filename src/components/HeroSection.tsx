import { motion } from "framer-motion";
import { ArrowRight, FlaskConical, Recycle, FileText } from "lucide-react";
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/lib/constants";
import { trackWhatsAppClick } from "@/lib/analytics";

const VIDEO_HERO = "https://videos.pexels.com/video-files/7614533/7614533-uhd_2560_1440_30fps.mp4";
const POSTER_HERO = "https://images.pexels.com/photos/7614533/pexels-photo-7614533.jpeg?auto=compress&cs=tinysrgb&w=1920";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Camada 1: Vídeo */}
    <div className="absolute inset-0">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover scale-110"
        aria-hidden
        poster={POSTER_HERO}
      >
        <source src={VIDEO_HERO} type="video/mp4" />
      </video>
      {/* Camada 2: Overlay navy gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/95 via-navy/85 to-navy-deep/95" />
      {/* Camada 3: Vignette de profundidade */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: "radial-gradient(ellipse at 30% 40%, transparent 0%, rgba(15,25,34,0.6) 100%)",
        }}
      />
    </div>

    {/* Conteúdo */}
    <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-eyebrow text-gold mb-8"
        >
          Higienização Técnica · Viseu · Carregal do Sal
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-display-xl text-cream mb-8"
        >
          <span className="block">Purificar Lares.</span>
          <span className="block text-gold italic font-medium">Proteger Peles.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-body-lg text-cream/75 max-w-2xl mb-12 font-light"
        >
          O que se acumula dentro do seu sofá não se vê. Mas o seu corpo sente. Higienização
          técnica profunda ao domicílio — com relatório escrito do que foi tratado.
        </motion.p>

        {/* Trust chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {[
            { icon: FlaskConical, text: "Safe pH™ por tipo de tecido" },
            { icon: Recycle, text: "100% da água tratada · ETA Tratris" },
            { icon: FileText, text: "Relatório técnico em cada serviço" },
          ].map((chip) => (
            <span
              key={chip.text}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-gold/25 bg-cream/[0.04] backdrop-blur-sm text-cream/80 text-body-sm"
            >
              <chip.icon className="w-3.5 h-3.5 text-gold" />
              {chip.text}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href={whatsappUrl(WHATSAPP_MESSAGES.hero)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("hero_cta")}
            className="group inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-warm text-navy px-8 py-4 rounded-full font-body font-semibold text-base transition-all duration-500"
          >
            Agendar diagnóstico gratuito
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#protocolo"
            className="inline-flex items-center justify-center gap-2 border border-cream/25 hover:border-gold hover:text-gold text-cream px-8 py-4 rounded-full font-body font-medium text-base transition-colors duration-500"
          >
            Ver o protocolo
          </a>
        </motion.div>

        {/* Footnote disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-cream/40 text-xs mt-10 max-w-lg"
        >
          Diagnóstico gratuito sem compromisso. Preço confirmado após avaliação técnica.
        </motion.p>
      </div>
    </div>

    {/* Indicador de scroll */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
    >
      <span className="text-cream/40 text-xs tracking-widest">SCROLL</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent"
      />
    </motion.div>
  </section>
);

export default HeroSection;

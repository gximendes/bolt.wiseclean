import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FlaskConical, Recycle, FileText, Heart, ArrowRight } from "lucide-react";
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/lib/constants";
import { trackWhatsAppClick } from "@/lib/analytics";

const pillars = [
  {
    icon: FlaskConical,
    title: "Padrão Safe pH™",
    text: "Cada produto é selecionado pelo pH adequado ao tipo de tecido. Padrão interno WiseClean — não certificação externa.",
  },
  {
    icon: Recycle,
    title: "Recolha total da água",
    text: "Toda a água utilizada é recolhida e enviada para tratamento certificado na ETA Tratris (Tondela). Pioneiros na região.",
  },
  {
    icon: FileText,
    title: "Relatório em cada serviço",
    text: "Documento técnico com fotografia antes/depois, produtos usados e cuidados recomendados. Sempre escrito, sempre transparente.",
  },
  {
    icon: Heart,
    title: "Follow-up aos 45 dias",
    text: "Contacto proativo após o serviço para verificar satisfação. Cuidado não acaba quando saímos da sua casa.",
  },
];

const quizOptions = [
  {
    label: "Nunca o fiz",
    response: {
      tone: "alert",
      title: "Está mais acumulado do que imagina.",
      text: "Um sofá sem higienização técnica acumula ao longo dos anos micro-resíduos orgânicos, ácaros e bactérias nas fibras profundas. A aspiração doméstica trata da superfície — o resto fica. A boa notícia: é tratável, e o primeiro serviço faz toda a diferença.",
      cta: "Quero começar pelo Pacote Saúde",
      message: "Olá! Nunca fiz higienização técnica ao meu sofá e quero saber mais sobre o Pacote Saúde.",
    },
  },
  {
    label: "Há mais de 1 ano",
    response: {
      tone: "warn",
      title: "Está dentro do esperado para uma intervenção completa.",
      text: "Em 12+ meses, as fibras acumularam o suficiente para que o protocolo de 8 etapas faça uma diferença visível e sentida. O Pacote Saúde trata sofá, colchão e tapete em conjunto — o reset que a casa precisa.",
      cta: "Ver o Pacote Saúde",
      message: "Olá! A última higienização foi há mais de 1 ano. Quero saber mais sobre o Pacote Saúde.",
    },
  },
  {
    label: "Há cerca de 6 meses",
    response: {
      tone: "good",
      title: "Está no ritmo recomendado.",
      text: "Manter este intervalo é o que distingue uma casa cuidada de uma casa apenas limpa. Quem agenda com antecedência tem prioridade nas datas — especialmente em março–maio e outubro–novembro (épocas de pico).",
      cta: "Agendar próximo serviço",
      message: "Olá! O último serviço foi há 6 meses. Quero agendar o próximo.",
    },
  },
  {
    label: "Recentemente",
    response: {
      tone: "info",
      title: "Excelente hábito. E o colchão?",
      text: "Quem cuida do sofá raramente se lembra do colchão — onde passamos 8 horas em contacto direto. Se ainda não foi tratado, é o próximo passo natural. O Pacote Conforto trata sofá e colchão em conjunto.",
      cta: "Ver o Pacote Conforto",
      message: "Olá! Tenho interesse em higienizar o colchão.",
    },
  },
];

const toneStyles: Record<string, string> = {
  alert: "bg-alert-red-bg border-alert-red/20",
  warn: "bg-warn-amber-bg border-warn-amber/20",
  good: "bg-good-green-bg border-good-green/20",
  info: "bg-info-blue-bg border-info-blue/20",
};

const toneTextStyles: Record<string, string> = {
  alert: "text-alert-red",
  warn: "text-warn-amber",
  good: "text-good-green",
  info: "text-info-blue",
};

const DifferenceSection = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected !== null ? quizOptions[selected] : null;

  return (
    <section className="bg-cream-warm py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-eyebrow text-gold-deep mb-6">A Diferença</p>
          <h2 className="text-display-md text-navy mb-6">
            Não é serviço de limpeza.
            <br />
            <span className="italic text-gold-deep">É infraestrutura de cuidado.</span>
          </h2>
        </div>

        {/* 4 Pillars */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-24">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white p-8 rounded-2xl border border-cream-deep"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-5">
                <p.icon className="w-5 h-5 text-gold-deep" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-navy mb-3">{p.title}</h3>
              <p className="text-body-sm text-ink-muted leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Quiz */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-eyebrow text-gold-deep mb-4">Diagnóstico Rápido</p>
            <h3 className="text-display-sm text-navy">
              Quando foi a última vez que alguém
              <br className="hidden md:block" />
              <span className="italic text-gold-deep">higienizou tecnicamente</span> o seu sofá?
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8">
            {quizOptions.map((opt, i) => (
              <button
                key={opt.label}
                onClick={() => setSelected(i)}
                className={`px-5 py-4 rounded-xl border-2 font-body text-sm md:text-base transition-all duration-300 ${
                  selected === i
                    ? "bg-navy text-cream border-navy"
                    : "bg-white text-navy border-cream-deep hover:border-gold"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`p-6 md:p-8 rounded-2xl border ${toneStyles[active.response.tone]}`}
              >
                <h4 className={`font-display text-xl md:text-2xl font-semibold mb-3 ${toneTextStyles[active.response.tone]}`}>
                  {active.response.title}
                </h4>
                <p className="text-body-sm md:text-body text-ink-soft leading-relaxed mb-6">
                  {active.response.text}
                </p>
                <a
                  href={whatsappUrl(active.response.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick("quiz_cta")}
                  className="inline-flex items-center gap-2 bg-navy hover:bg-navy-deep text-cream px-6 py-3 rounded-full font-body font-semibold text-sm transition-all duration-500"
                >
                  {active.response.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;

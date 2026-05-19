import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

const faqs = [
  {
    q: "Quanto tempo demora o serviço?",
    a: "Um sofá simples demora entre 2 a 3 horas. O Pacote Saúde completo (sofá + colchão + tapete) demora aproximadamente 5 horas. No final de cada serviço pode voltar a usar o espaço — a secagem é acelerada com ventilação orientada e fica completa em 2 a 4 horas após a conclusão.",
  },
  {
    q: "É seguro para crianças e animais de estimação?",
    a: "Sim. Todos os produtos WiseClean seguem o padrão interno Safe pH™ — formulados para ser seguros para pele sensível, crianças e animais de estimação. Não usamos produtos com fragrâncias agressivas nem compostos que deixem resíduos nocivos.",
  },
  {
    q: "Tenho de estar em casa durante o serviço?",
    a: "Recomendamos que esteja presente no início para o diagnóstico técnico e no final para receber o relatório. Durante o processo pode ausentar-se se preferir — deixamos a casa como a encontrámos.",
  },
  {
    q: "Como funciona a recolha da água?",
    a: "Toda a água utilizada no serviço é extraída pelo nosso equipamento IPC e recolhida num recipiente selado. No final, entregamos essa água na ETA Tratris (Tondela) para tratamento certificado. É uma prática que documentamos e que nos diferencia de qualquer outro serviço na região.",
  },
  {
    q: "Qual é a área de cobertura?",
    a: "Servimos Carregal do Sal e arredores até 15 km sem taxa de deslocação (Zona 1). Viseu, Seia e Oliveira do Hospital na Zona 2 com taxa de confirmação de 15 €. Coimbra e Guarda na Zona 3 com taxa de 30 €. A taxa é pré-paga via MBWay e descontada no valor final do serviço.",
  },
  {
    q: "O que inclui o relatório técnico?",
    a: "O relatório Safe pH™ documenta o tipo de tecido tratado, os produtos utilizados, as zonas de intervenção identificadas com lanterna UV, e os cuidados recomendados após o serviço. É entregue no final de cada visita e serve como registo verificável do trabalho realizado.",
  },
];

const FAQItem = ({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) => (
  <div className="border border-border rounded-xl overflow-hidden">
    <button
      type="button"
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left hover:bg-gold/5 transition-colors"
    >
      <span className="font-body text-sm font-medium text-foreground">{question}</span>
      <ChevronDown
        className={`w-4 h-4 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
          open ? "rotate-180" : ""
        }`}
      />
    </button>
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div className="px-5 pb-5">
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{answer}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-cream-warm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-gold text-xs md:text-sm font-body tracking-[0.25em] uppercase mb-4 block">
            Perguntas Frequentes
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Tudo o que precisa de saber antes de agendar.
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-2">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.q}
              question={faq.q}
              answer={faq.a}
              open={openFaq === faq.q}
              onToggle={() => setOpenFaq(openFaq === faq.q ? null : faq.q)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="font-body text-sm text-foreground mb-3">Tem outra dúvida?</p>
          <a
            href={whatsappUrl(WHATSAPP_MESSAGES.diagnosis)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fill bg-gradient-gold text-secondary font-body font-semibold px-6 py-3 rounded-lg shadow-gold text-sm inline-flex items-center gap-2 transition-all duration-500 ease-luxury"
          >
            <MessageCircle className="w-4 h-4" />
            Fale connosco via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FlaskConical,
  HeartPulse,
  Recycle,
  ChevronDown,
  Phone,
  Search,
  Shield,
  SprayCan,
  Droplets,
  Wind,
  ClipboardCheck,
} from "lucide-react";
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

const pillars = [
  {
    icon: FlaskConical,
    title: "Pureza Técnica",
    text: "Equipamento profissional IPC de injeção e extração elimina ácaros, bactérias, fungos e odores com profundidade e rigor técnico.",
  },
  {
    icon: HeartPulse,
    title: "Redução de Alergénios",
    text: "Protocolo com referência às melhores práticas de higienização antiparasitária. Indicado para ambientes com alergénios comuns.",
  },
  {
    icon: Recycle,
    title: "Compromisso Ecológico",
    text: "100% da água usada em cada serviço é recolhida e tratada em estação autorizada.",
  },
];

const profiles = [
  { emoji: "👩", title: "Pele sensível e dermatite", text: "Resíduos químicos e ácaros nos tecidos podem afetar peles sensíveis. A WiseClean remove-os em profundidade." },
  { emoji: "👨‍👩‍👧", title: "Filhos com alergias", text: "Redução de alergénios comuns nos têxteis do lar. Um ambiente mais limpo começa nos estofos onde dormem e brincam." },
  { emoji: "🏃", title: "Odores e higiene ativa", text: "Transpiração intensa penetra nas fibras. A higienização bacteriológica elimina na profundidade — não mascara." },
  { emoji: "👴", title: "Conforto e cuidado em casa", text: "Serviço completo ao domicílio para quem merece higiene e conforto sem esforço." },
];

const steps = [
  { icon: Phone, title: "Marcamos Consigo", text: "Resposta em menos de 1 hora via WhatsApp. Confirmamos data, hora e qualquer necessidade especial." },
  { icon: Search, title: "Avaliação Técnica", text: "Avaliamos o estado do seu sofá, colchão ou tapete. Identificamos as zonas com maior acumulação." },
  { icon: Shield, title: "Preparação Cuidada", text: "Seleccionamos os produtos certos para o seu tipo de tecido — seguros para a pele, crianças e animais." },
  { icon: SprayCan, title: "Ativação em Profundidade", text: "Aplicamos um agente enzimático nas zonas com maior concentração orgânica e abrimos as fibras manualmente." },
  { icon: Droplets, title: "Eliminação 99,9%", text: "Com equipamento profissional a pressão e temperatura controladas, eliminamos ácaros, bactérias e odores." },
  { icon: Recycle, title: "Recolha Total da Água", text: "Toda a água é extraída e recolhida para tratamento certificado. Sem resíduos nem humidade escondida." },
  { icon: Wind, title: "Secagem Acelerada", text: "Aceleramos a secagem com ventilação orientada. Em 2 a 4 horas pode voltar a usar o seu espaço." },
  { icon: ClipboardCheck, title: "Follow-up a 45 Dias", text: "Inspecção final, relatório personalizado e follow-up automático aos 45 dias." },
];

const seals = [
  { icon: FlaskConical, title: "Safe pH™", text: "Padrão interno de qualidade WiseClean — protocolo de pH controlado para cada tipo de tecido." },
  { icon: Recycle, title: "Recolha 100% da água", text: "Parceria com ETA Tratris — 100% da água tratada após cada serviço." },
  { icon: ClipboardCheck, title: "Relatório técnico", text: "Relatório técnico personalizado em cada serviço, com registo antes e depois." },
  { icon: ClipboardCheck, title: "Follow-up 45 dias", text: "Follow-up garantido a 45 dias pós-serviço — o compromisso não termina à porta." },
];

const quizOptions = ["Nunca", "Há mais de 1 ano", "Há 6 meses", "Recentemente"] as const;
type QuizAnswer = (typeof quizOptions)[number];

const AccordionItem = ({
  title,
  icon,
  children,
  open,
  onToggle,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  open: boolean;
  onToggle: () => void;
}) => (
  <div className="border border-border rounded-xl overflow-hidden">
    <button
      type="button"
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left hover:bg-gold/5 transition-colors"
    >
      <span className="flex items-center gap-3">
        {icon}
        <span className="font-body text-sm font-medium text-foreground">{title}</span>
      </span>
      <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
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
          <div className="px-5 pb-5">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const SofaQuiz = () => {
  const [answer, setAnswer] = useState<QuizAnswer | null>(null);
  const showClean = answer === "Nunca" || answer === "Há mais de 1 ano" || answer === "Há 6 meses";
  const showMaintenance = answer === "Recentemente";

  return (
    <div className="max-w-2xl mx-auto bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
      <p className="font-display text-lg md:text-xl text-foreground text-center mb-5">
        Quando foi a última vez que higienizou o seu sofá?
      </p>
      <div className="grid grid-cols-2 gap-3 mb-5">
        {quizOptions.map((opt) => (
          <button
            key={opt}
            onClick={() => setAnswer(opt)}
            className={`font-body text-sm px-4 py-3 rounded-lg border transition-colors ${
              answer === opt
                ? "border-gold bg-gold/10 text-gold"
                : "border-border text-foreground/80 hover:border-gold hover:text-gold"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      {showClean && (
        <div className="text-center pt-3 border-t border-border">
          <p className="text-foreground/85 font-body text-sm leading-relaxed mb-4">
            Os estofos devem ser higienizados de 6 em 6 meses. Um sofá com uso normal pode
            acumular até 2 milhões de ácaros.
          </p>
          <a
            href={whatsappUrl(WHATSAPP_MESSAGES.diagnosis)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-gold text-secondary font-body font-semibold px-6 py-3 rounded-lg shadow-gold text-sm btn-fill transition-all duration-500 ease-luxury"
          >
            Agendar diagnóstico gratuito
          </a>
        </div>
      )}
      {showMaintenance && (
        <p className="text-foreground/85 font-body text-sm leading-relaxed text-center pt-3 border-t border-border">
          Para manter esse nível, recomendamos higienização a cada 6 meses.
        </p>
      )}
    </div>
  );
};

const WhyWiseCleanSection = () => {
  const [openProfile, setOpenProfile] = useState<string | null>(null);
  const [openStep, setOpenStep] = useState<string | null>(null);
  const [openSeal, setOpenSeal] = useState<string | null>(null);

  return (
    <section id="saude" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-gold text-xs md:text-sm font-body tracking-[0.25em] uppercase mb-4 block">
            Porquê WiseClean
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">
            Não é limpeza. É{" "}
            <span className="text-gradient-gold">higienização técnica.</span>
          </h2>
          <p className="text-muted-foreground font-body text-base max-w-xl mx-auto">
            Os têxteis do lar acumulam o que não vê — mas que a sua pele e os seus pulmões sentem. A WiseClean elimina o invisível.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-7 shadow-card border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-5 shadow-gold">
                <p.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {p.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <SofaQuiz />
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-2">
          <AccordionItem
            title="Para quem é este serviço?"
            open={openProfile !== null}
            onToggle={() => setOpenProfile(openProfile ? null : "profiles")}
          >
            <div className="space-y-3">
              {profiles.map((p) => (
                <div key={p.title} className="flex items-start gap-3">
                  <span className="text-2xl leading-none mt-0.5" aria-hidden>{p.emoji}</span>
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground mb-1">{p.title}</p>
                    <p className="font-body text-[13px] text-muted-foreground leading-relaxed">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </AccordionItem>

          <AccordionItem
            title="Protocolo de 8 etapas"
            open={openStep !== null}
            onToggle={() => setOpenStep(openStep ? null : "steps")}
          >
            <div className="space-y-3">
              {steps.map((s, i) => (
                <div key={s.title} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center">
                    <s.icon className="w-4 h-4 text-gold" />
                  </span>
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground mb-0.5">
                      <span className="text-gold/50 mr-1.5">{String(i + 1).padStart(2, "0")}</span>
                      {s.title}
                    </p>
                    <p className="font-body text-[13px] text-muted-foreground leading-relaxed">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </AccordionItem>

          <AccordionItem
            title="Certificações e garantias"
            open={openSeal !== null}
            onToggle={() => setOpenSeal(openSeal ? null : "seals")}
          >
            <div className="space-y-3">
              {seals.map((s) => (
                <div key={s.title} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center">
                    <s.icon className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground mb-0.5">{s.title}</p>
                    <p className="font-body text-[13px] text-muted-foreground leading-relaxed">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </AccordionItem>
        </div>

        <p className="text-muted-foreground/70 font-body text-xs italic mt-8 max-w-xl mx-auto text-center">
          A WiseClean não pratica atos médicos. Recomendamos sempre consulta de profissional de saúde
          para condições específicas.
        </p>
      </div>
    </section>
  );
};

export default WhyWiseCleanSection;

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FlaskConical,
  HeartPulse,
  Recycle,
  ChevronDown,
  ClipboardCheck,
} from "lucide-react";
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

const pillars = [
  {
    icon: FlaskConical,
    title: "Pureza Técnica",
    text: "Equipamento profissional IPC com injeção e extração em profundidade. Removemos ácaros, bactérias, fungos e agentes de odor — e entregamos um relatório do que foi tratado.",
  },
  {
    icon: HeartPulse,
    title: "Redução de Alergénios",
    text: "Protocolo Safe pH™ indicado para ambientes com pele sensível, rinite e alergénios comuns. Não é prevenção genérica — é intervenção técnica com resultado documentado.",
  },
  {
    icon: Recycle,
    title: "Compromisso Ecológico",
    text: "Recolhemos 100% da água residual para tratamento certificado na ETA Tratris (Tondela). Uma prática que documentamos em cada serviço.",
  },
];

const profiles = [
  { emoji: "👩", title: "Pele sensível e dermatite", text: "Resíduos químicos e ácaros nos tecidos podem afetar peles sensíveis. A WiseClean remove-os em profundidade." },
  { emoji: "👨‍👩‍👧", title: "Filhos com alergias", text: "Redução de alergénios comuns nos têxteis do lar. Um ambiente mais limpo começa nos estofos onde dormem e brincam." },
  { emoji: "🏃", title: "Odores e higiene ativa", text: "Transpiração intensa penetra nas fibras. A higienização bacteriológica elimina na profundidade — não mascara." },
  { emoji: "👴", title: "Conforto e cuidado em casa", text: "Serviço completo ao domicílio para quem merece higiene e conforto sem esforço." },
];

const seals = [
  { icon: FlaskConical, title: "Safe pH™", text: "Padrão interno de qualidade WiseClean — protocolo de pH controlado para cada tipo de tecido." },
  { icon: Recycle, title: "Recolha 100% da água", text: "Parceria com ETA Tratris — 100% da água tratada após cada serviço." },
  { icon: ClipboardCheck, title: "Relatório técnico", text: "Relatório técnico personalizado em cada serviço, com registo antes e depois." },
  { icon: ClipboardCheck, title: "Follow-up 45 dias", text: "Follow-up garantido a 45 dias pós-serviço — o compromisso não termina à porta." },
];

const quizOptions = ["Nunca", "Há mais de 1 ano", "Há 6 meses", "Recentemente"] as const;
type QuizAnswer = (typeof quizOptions)[number];

const quizResponses: Record<QuizAnswer, {
  bg: string;
  border: string;
  titleClass: string;
  title: string;
  text: string;
  cta: string;
  waMsg: string;
}> = {
  "Nunca": {
    bg: "bg-red-50",
    border: "border-red-100",
    titleClass: "text-red-900",
    title: "O que está no seu sofá agora mesmo",
    text: "Um sofá sem higienização técnica acumula mais de 2 milhões de ácaros, células mortas de pele, fungos e resíduos orgânicos na esponja interior. Cada vez que se senta, liberta uma nuvem invisível de alergénios. O seu sistema imunitário está a trabalhar horas extra — e provavelmente não sabe porquê.",
    cta: "Quero resolver isto esta semana →",
    waMsg: WHATSAPP_MESSAGES.diagnosis,
  },
  "Há mais de 1 ano": {
    bg: "bg-amber-50",
    border: "border-amber-100",
    titleClass: "text-amber-900",
    title: "Ainda dá para recuperar — mas o protocolo completo vai ser necessário",
    text: "Em 12 meses, a esponja acumulou transpiração, células mortas e resíduos suficientes para degradar a qualidade do ar do seu lar. O Pacote Saúde trata sofá, colchão e tapete em simultâneo — é o reset que o espaço precisa.",
    cta: "Ver o Pacote Saúde →",
    waMsg: WHATSAPP_MESSAGES.package("Saúde", "139 €"),
  },
  "Há 6 meses": {
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    titleClass: "text-emerald-900",
    title: "Está dentro do ciclo — agende o próximo agora",
    text: "Está no ritmo certo. Para manter este nível de higiene e proteger a família, o próximo serviço devia ser planeado antes que os ácaros atinjam níveis críticos outra vez. Quem agenda com antecedência tem prioridade na marcação.",
    cta: "Agendar para os próximos meses →",
    waMsg: WHATSAPP_MESSAGES.diagnosis,
  },
  "Recentemente": {
    bg: "bg-blue-50",
    border: "border-blue-100",
    titleClass: "text-blue-900",
    title: "Excelente hábito — e o colchão?",
    text: "O colchão acumula 3× mais ácaros que o sofá porque passamos 8 horas por noite em contacto directo com ele. Se ainda não foi tratado, é o próximo passo óbvio. O Pacote Conforto trata sofá e colchão em conjunto.",
    cta: "Ver o Pacote Conforto →",
    waMsg: WHATSAPP_MESSAGES.package("Conforto", "89 €"),
  },
};

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
  const response = answer ? quizResponses[answer] : null;

  return (
    <div className="max-w-2xl mx-auto bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
      <p className="font-display text-lg md:text-xl text-foreground text-center mb-5">
        Quando foi a última vez que alguém eliminou o que está dentro do seu sofá — não apenas a superfície?
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
      <AnimatePresence mode="wait">
        {response && (
          <motion.div
            key={answer}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className={`${response.bg} border ${response.border} rounded-xl p-5 mt-4`}
          >
            <p className={`font-display text-base font-semibold ${response.titleClass} mb-2`}>
              {response.title}
            </p>
            <p className="font-body text-sm text-foreground/85 leading-relaxed">
              {response.text}
            </p>
            <a
              href={whatsappUrl(response.waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-gold text-secondary font-body font-semibold px-6 py-3 rounded-lg shadow-gold text-sm btn-fill transition-all duration-500 ease-luxury mt-4"
            >
              {response.cta}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const WhyWiseCleanSection = () => {
  const [openProfile, setOpenProfile] = useState<string | null>(null);
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
            A sua família merece saber o que vive nos tecidos.
          </h2>
          <p className="text-muted-foreground font-body text-base max-w-xl mx-auto">
            Sofás, colchões e tapetes acumulam o que os olhos não vêem — e que a pele e os pulmões sentem. A WiseClean elimina, documenta e prova.
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

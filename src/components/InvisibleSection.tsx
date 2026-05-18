import { motion } from "framer-motion";
import { Bug, Wind, Droplets, Eye, ChevronDown } from "lucide-react";

const cards = [
  {
    icon: Bug,
    title: "Mais de um milhão de ácaros",
    text: "Estudos de qualidade do ar interior mostram que um sofá com uso normal pode acumular mais de um milhão de ácaros. Invisíveis, mas presentes — e a principal causa de rinite alérgica em casa.",
  },
  {
    icon: Wind,
    title: "O ar que a família respira",
    text: "Cada vez que alguém se senta no sofá, partículas acumuladas são libertadas para o ar. Crianças e pessoas com sensibilidade respiratória são as mais afectadas.",
  },
  {
    icon: Droplets,
    title: "Humidade escondida na esponja",
    text: "A esponja de sofás e colchões retém humidade que favorece o desenvolvimento de fungos e bactérias — sem que se veja ou cheire qualquer sinal exterior.",
  },
  {
    icon: Eye,
    title: "A prova que entregamos",
    text: "Usamos lanterna UV para mapear o que não se vê antes de começar. No final, entregamos um relatório escrito do que foi tratado — em cada serviço, sem excepção.",
  },
];

const InvisibleSection = () => (
  <section id="invisivel" className="py-24 lg:py-32 bg-cream-warm">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <span className="text-gold text-xs md:text-sm font-body tracking-[0.25em] uppercase mb-4 block">
          O que os olhos não vêem
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">
          A sua casa parece limpa. Mas o que está dentro dos tecidos?
        </h2>
        <p className="text-muted-foreground font-body text-base max-w-xl mx-auto">
          A limpeza doméstica normal remove o que se vê. A WiseClean remove o que não se vê — e que a sua família respira todos os dias.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-14">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-7 shadow-card border border-border"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-5 shadow-gold">
              <c.icon className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              {c.title}
            </h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              {c.text}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <a
          href="#protocolo"
          className="btn-fill bg-gradient-gold text-secondary font-body font-semibold px-6 py-3 rounded-lg shadow-gold text-sm inline-flex items-center gap-2 transition-all duration-500 ease-luxury"
        >
          Ver o protocolo completo
          <ChevronDown className="w-4 h-4" />
        </a>
        <p className="font-body text-sm text-muted-foreground mt-3">
          Diagnóstico gratuito ao domicílio. Sem compromisso.
        </p>
      </motion.div>
    </div>
  </section>
);

export default InvisibleSection;

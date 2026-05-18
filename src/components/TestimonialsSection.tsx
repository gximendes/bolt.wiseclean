import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

const GOOGLE_REVIEWS_URL = "https://g.page/r/wiseclean/review";

const testimonials = [
  {
    name: "Ana M.",
    location: "Viseu",
    text: "A minha filha tem dermatite e o serviço fez uma diferença real. O sofá ficou impecável e ela parou de ter crises noturnas. Nota máxima.",
  },
  {
    name: "Pedro S.",
    location: "Viseu · Repeses",
    text: "Profissionalismo do início ao fim. Explicaram cada etapa, o cheiro do colchão desapareceu por completo e ainda me passaram um relatório.",
  },
  {
    name: "Marta L.",
    location: "Viseu · Abraveses",
    text: "Sou alérgica a ácaros. Após o serviço da WiseClean noto a diferença logo na respiração. Já agendei para o carro também.",
  },
];

const TestimonialsSection = () => (
  <section className="py-20 lg:py-24 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-gold text-xs font-body tracking-[0.25em] uppercase mb-3 block">
          Testemunhos
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
          Famílias que respiram melhor
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-7 shadow-card border border-border"
          >
            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-foreground font-body leading-relaxed mb-5 text-sm">
              "{t.text}"
            </p>
            <div className="pt-4 border-t border-border">
              <p className="font-body font-semibold text-foreground text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs font-body">{t.location}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gold hover:text-gold/80 font-body text-sm font-medium transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Ver todas as avaliações no Google
        </a>
        <p className="mt-3 text-muted-foreground font-body text-xs italic">
          Já foi cliente?{" "}
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gold transition-colors"
          >
            Deixe a sua avaliação
          </a>{" "}
          e receba 5 € de desconto no próximo serviço.
        </p>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;

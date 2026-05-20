import { motion } from "framer-motion";

const ProvocationSection = () => (
  <section className="bg-navy py-24 md:py-32 overflow-hidden">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto text-center"
      >
        <p className="text-eyebrow text-gold mb-8">O Invisível</p>
        <p className="text-display-lg text-cream font-light leading-tight">
          Dormimos sobre <span className="italic text-gold">milhões</span> de ácaros.
          <br className="hidden md:block" />
          Sentamo-nos em <span className="italic text-gold">bactérias acumuladas</span>.
          <br className="hidden md:block" />
          E chamamos a isso <span className="line-through opacity-40">limpo</span>.
        </p>
        <p className="text-body text-cream/50 mt-10 max-w-xl mx-auto">
          A poeira que se vê é a menor parte do problema. O que importa está nas fibras
          profundas — onde a aspiração doméstica não chega.
        </p>
      </motion.div>
    </div>
  </section>
);

export default ProvocationSection;

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import PriceCalculator from "@/components/PriceCalculator";

const AccordionItem = ({
  title,
  icon,
  children,
  open,
  onToggle,
}: {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
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

type ServicesSectionProps = {
  footerNote?: ReactNode;
};

const ServicesSection = ({ footerNote }: ServicesSectionProps = {}) => {
  const [zonesOpen, setZonesOpen] = useState(false);

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-cream-warm">
      <div className="container mx-auto px-6">
        <PriceCalculator />

        <div className="max-w-3xl mx-auto mt-10 space-y-2">
          <AccordionItem
            title="Como funciona a deslocação?"
            open={zonesOpen}
            onToggle={() => setZonesOpen(!zonesOpen)}
          >
            <p className="font-body text-sm text-muted-foreground italic">
              {footerNote ?? (
                <>
                  Deslocação incluída na Zona 1 (Carregal do Sal e arredores, até 15 km) ·
                  Zona 2: Viseu, Seia, Oliveira do Hospital — taxa fixa 15 € · Zona 3:
                  Coimbra, Guarda — taxa fixa 30 € · Acima de 100 km: sob orçamento.
                </>
              )}
            </p>
          </AccordionItem>

          <div className="rounded-xl border border-gold/30 bg-gold/5 p-5 mt-4">
            <p className="font-body text-sm text-foreground/80 leading-relaxed text-center">
              <span className="font-semibold text-gold">Preço variável?</span>{" "}
              Cada peça é única. A avaliação é sempre{" "}
              <strong>gratuita e sem compromisso</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

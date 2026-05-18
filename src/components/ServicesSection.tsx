import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles, ChevronDown, ShoppingBag, Plus } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

const packages = [
  {
    level: "Nível 1",
    name: "Essencial",
    priceDisplay: "59 – 89",
    priceAnchor: "a partir de 59 €",
    isFixed: false,
    time: "≈ 2h",
    tagline: "A primeira experiência WiseClean",
    audience: "Primeira experiência · jovens adultos",
    features: [
      "Avaliação técnica gratuita ao domicílio",
      "Higienização técnica profunda de 1 sofá",
      "Eliminação certificada de ácaros, bactérias e odores",
      "Protocolo IPC com injeção e extração profissional",
      "Relatório técnico do serviço",
    ],
    featured: false,
    footnote: undefined as string | undefined,
  },
  {
    level: "Nível 2",
    name: "Conforto",
    priceDisplay: "89 – 129",
    priceAnchor: "a partir de 89 €",
    isFixed: false,
    time: "≈ 3h30",
    tagline: "Para quem valoriza o descanso completo",
    audience: "Casais · adultos",
    features: [
      "Avaliação técnica gratuita ao domicílio",
      "Sofá + colchão de casal",
      "Higienização bacteriológica completa",
      "Produto antialérgico Safe pH™",
      "Follow-up garantido a 45 dias",
    ],
    featured: false,
    footnote: undefined as string | undefined,
  },
  {
    level: "Nível 3",
    name: "Saúde",
    priceDisplay: "139",
    priceAnchor: "139 €",
    isFixed: true,
    time: "≈ 5h",
    tagline: "O protocolo completo — sofá, colchão e tapete num único serviço.",
    audience: "Famílias com crianças, animais de estimação ou sensibilidades respiratórias",
    features: [
      "Avaliação técnica gratuita ao domicílio",
      "Sofá + colchão de casal + tapete",
      "Produto antialérgico com padrão Safe pH™ — testado por tipo de tecido",
      "Recolha de 100% da água residual para tratamento certificado",
      "Relatório técnico personalizado entregue no final",
      "Follow-up garantido a 45 dias pós-serviço",
    ],
    featured: true,
    footnote: "Em casos excepcionais pode ser ajustado até 179 € após avaliação técnica.",
  },
  {
    level: "Nível 4",
    name: "Premium",
    priceDisplay: "159 – 219",
    priceAnchor: "a partir de 159 €",
    isFixed: false,
    time: "≈ 6–7h",
    tagline: "Cuidado total. Sem compromissos.",
    audience: "Clientes premium · imóveis de valor",
    features: [
      "Avaliação técnica gratuita ao domicílio",
      "Pacote Saúde completo",
      "Impermeabilização profissional de tecidos",
      "Tratamento e condicionamento de couro",
      "Garantia de 90 dias",
      "Relatório fotográfico antes/depois",
    ],
    featured: false,
    footnote: undefined as string | undefined,
  },
  {
    level: "Nível 5",
    name: "Têxteis Completos",
    priceDisplay: "219 – 299",
    priceAnchor: "a partir de 219 €",
    isFixed: false,
    time: "≈ 8–10h",
    tagline: "Toda a casa, numa única visita.",
    audience: "Alojamento local · famílias numerosas",
    features: [
      "Avaliação técnica gratuita ao domicílio",
      "Pacote Premium completo",
      "Cadeiras, almofadas, travesseiros e puf incluídos",
      "Padrão interno Safe pH™",
      "Relatório de qualidade do ambiente",
      "Prioridade absoluta de agendamento",
    ],
    featured: false,
    footnote: undefined as string | undefined,
  },
];

type Pkg = (typeof packages)[number];

const addOnGroups = [
  {
    title: "Cadeiras",
    items: [
      { label: "Cadeira de sala (tecido simples)", price: "10 – 15 €" },
      { label: "Cadeira estofada (veludo, chenille)", price: "14 – 20 €" },
      { label: "Cadeira de couro / sintético", price: "16 – 22 €" },
      { label: "Cadeira de escritório (com braços)", price: "18 – 25 €" },
      { label: "Cadeirão / bergère", price: "25 – 35 €" },
      { label: "Pack 4 cadeiras tecido", price: "35 – 55 €" },
      { label: "Pack 4 cadeiras couro", price: "55 – 72 €" },
    ],
  },
  {
    title: "Almofadas e Travesseiros",
    items: [
      { label: "Almofada decorativa (até 40×40 cm)", price: "5 – 8 €" },
      { label: "Almofada média (40×60 cm)", price: "7 – 10 €" },
      { label: "Almofada grande (60×60 cm+)", price: "9 – 13 €" },
      { label: "Pack 4 almofadas", price: "22 – 32 €" },
      { label: "Travesseiro standard", price: "7 – 10 €" },
      { label: "Travesseiro antialérgico", price: "10 – 15 €" },
      { label: "Pack 2 travesseiros (casal)", price: "12 – 18 €" },
    ],
  },
  {
    title: "Pufs, Bancos e Cabeceiras",
    items: [
      { label: "Puf pequeno (até 50 cm)", price: "12 – 18 €" },
      { label: "Puf grande / ottoman", price: "19 – 28 €" },
      { label: "Banco estofado", price: "14 – 20 €" },
      { label: "Espreguiçadeira estofada", price: "20 – 30 €" },
      { label: "Cabeceira casal", price: "25 – 38 €" },
      { label: "Cabeceira individual", price: "15 – 25 €" },
    ],
  },
  {
    title: "Tapetes",
    items: [
      { label: "Tapete pequeno (até 4 m²)", price: "13 – 20 €" },
      { label: "Tapete médio (4 a 8 m²)", price: "22 – 32 €" },
      { label: "Tapete grande (8 a 12 m²)", price: "30 – 45 €" },
      { label: "Tapete extra grande (> 12 m²)", price: "10 – 14 € / m²" },
    ],
  },
];

const combos = [
  { combo: "Nível 2 + Pack 4 cadeiras + Pack 2 travesseiros", price: "136 – 202 €" },
  { combo: "Nível 3 + Pack 4 cadeiras + Pack 4 almofadas", price: "196 – 266 €" },
  { combo: "Nível 3 + Cadeirão + 2 travesseiros + 4 almofadas", price: "210 – 264 €" },
  { combo: "Nível 4 + Cabeceira casal + Pack 4 cadeiras", price: "219 – 312 €" },
];

const FeaturedCard = ({ pkg }: { pkg: Pkg }) => (
  <div className="relative rounded-2xl p-7 md:p-9 bg-gradient-navy text-cream shadow-deep border-2 border-gold flex flex-col max-w-md mx-auto">
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-gold text-secondary text-xs font-semibold font-body shadow-gold whitespace-nowrap">
      <Sparkles className="w-3.5 h-3.5" />
      Mais popular
    </div>
    <span className="font-body text-[11px] tracking-[0.2em] uppercase mb-1 text-gold">
      {pkg.level}
    </span>
    <h3 className="font-display text-2xl font-semibold mb-1 text-cream">
      {pkg.name}
    </h3>
    <p className="font-body text-xs mb-5 text-cream/70">{pkg.tagline}</p>
    <div className="mb-2 flex items-baseline gap-1">
      <span className="font-display text-4xl font-bold text-cream">{pkg.priceDisplay}</span>
      <span className="font-body text-base text-cream/60">€</span>
    </div>
    {pkg.footnote && (
      <p className="font-body text-[10px] italic mb-3 text-cream/45">* {pkg.footnote}</p>
    )}
    <p className="font-body text-xs mb-5 text-cream/55">Tempo estimado: {pkg.time}</p>
    <ul className="space-y-2.5 mb-6 flex-1">
      {pkg.features.map((f) => (
        <li key={f} className="flex items-start gap-2.5">
          <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center bg-gold/25">
            <Check className="w-2.5 h-2.5 text-gold" />
          </span>
          <span className="font-body text-[13px] leading-relaxed text-cream/85">{f}</span>
        </li>
      ))}
    </ul>
    <p className="font-body text-[11px] italic mb-4 text-cream/55">Para: {pkg.audience}</p>
    <a
      href={whatsappUrl(WHATSAPP_MESSAGES.package(pkg.name, pkg.priceAnchor))}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(`pkg_${pkg.name.toLowerCase().replace(/\s/g, "_")}`)}
      className="btn-fill block w-full text-center font-body font-semibold px-5 py-3 rounded-lg bg-gradient-gold text-secondary shadow-gold text-sm transition-all duration-500 ease-luxury"
    >
      Agendar via WhatsApp
    </a>
  </div>
);

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
  const [openPkg, setOpenPkg] = useState<string | null>(null);
  const [openAddon, setOpenAddon] = useState<string | null>(null);
  const [zonesOpen, setZonesOpen] = useState(false);
  const [combosOpen, setCombosOpen] = useState(false);

  const featured = packages.find((p) => p.featured)!;
  const others = packages.filter((p) => !p.featured);

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-cream-warm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-gold text-xs md:text-sm font-body tracking-[0.25em] uppercase mb-4 block">
            Portfólio WiseClean · 2026
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Escolha o protocolo certo para a sua família.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <FeaturedCard pkg={featured} />
        </motion.div>

        <div className="max-w-2xl mx-auto mt-10 space-y-2">
          {others.map((pkg) => (
            <AccordionItem
              key={pkg.name}
              title={`${pkg.level} · ${pkg.name} — ${pkg.priceDisplay} €`}
              open={openPkg === pkg.name}
              onToggle={() => setOpenPkg(openPkg === pkg.name ? null : pkg.name)}
            >
              <p className="font-body text-xs text-muted-foreground mb-3">{pkg.tagline}</p>
              <ul className="space-y-2 mb-4">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-0.5 flex-shrink-0 w-3.5 h-3.5 rounded-full flex items-center justify-center bg-gold/15">
                      <Check className="w-2 h-2 text-gold" />
                    </span>
                    <span className="font-body text-[13px] text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body text-[11px] italic text-muted-foreground mb-3">
                Para: {pkg.audience} · Tempo: {pkg.time}
              </p>
              <a
                href={whatsappUrl(WHATSAPP_MESSAGES.package(pkg.name, pkg.priceAnchor))}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick(`pkg_${pkg.name.toLowerCase().replace(/\s/g, "_")}`)}
                className="btn-fill inline-flex items-center gap-2 bg-foreground text-cream font-body font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-500 ease-luxury"
              >
                Agendar via WhatsApp
              </a>
            </AccordionItem>
          ))}

          <AccordionItem
            title="Add-ons e preços adicionais"
            icon={<ShoppingBag className="w-4 h-4 text-gold" />}
            open={openAddon !== null}
            onToggle={() => setOpenAddon(openAddon ? null : "addons")}
          >
            <div className="space-y-4">
              {addOnGroups.map((group) => (
                <div key={group.title}>
                  <p className="font-body text-xs font-semibold text-foreground mb-2">{group.title}</p>
                  <ul className="space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item.label} className="flex items-baseline justify-between gap-3">
                        <span className="font-body text-[13px] text-foreground/75">{item.label}</span>
                        <span className="font-body text-[13px] font-semibold text-gold whitespace-nowrap">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-5 border border-gold/30 rounded-lg overflow-hidden">
              <button
                type="button"
                onClick={() => setCombosOpen(!combosOpen)}
                className="w-full flex items-center justify-between gap-2 px-4 py-3 text-left hover:bg-gold/5 transition-colors"
              >
                <span className="font-body text-xs font-semibold text-gold">Combinações mais escolhidas</span>
                <ChevronDown className={`w-3.5 h-3.5 text-gold transition-transform ${combosOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {combosOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <ul className="px-4 pb-4 space-y-2">
                      {combos.map((c) => (
                        <li key={c.combo} className="flex items-baseline justify-between gap-3">
                          <span className="font-body text-[12px] text-foreground/75">{c.combo}</span>
                          <span className="font-body text-[12px] font-bold text-gold whitespace-nowrap">{c.price}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-5 text-center">
              <a
                href={whatsappUrl(WHATSAPP_MESSAGES.addons)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("addons_cta")}
                className="btn-fill inline-flex items-center gap-2 bg-gradient-gold text-secondary font-body font-semibold px-6 py-3 rounded-lg shadow-gold text-sm transition-all duration-500 ease-luxury"
              >
                <Plus className="w-4 h-4" />
                Adicionar peças via WhatsApp
              </a>
            </div>
          </AccordionItem>

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

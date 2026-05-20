import { motion } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/lib/constants";
import { trackWhatsAppClick } from "@/lib/analytics";

interface Package {
  name: string;
  level: string;
  price: string;
  priceNote?: string;
  description: string;
  audience: string;
  features: string[];
  cta: string;
  featured: boolean;
  badge?: string;
  ctaMessage: string;
}

const packages: Package[] = [
  {
    name: "Essencial",
    level: "Nível 1",
    price: "a partir de 59 €",
    description: "A primeira experiência WiseClean",
    audience: "Para quem quer experimentar o protocolo numa única peça",
    features: [
      "1 sofá (2 ou 3 lugares)",
      "Protocolo de 8 etapas completo",
      "Produtos Safe pH™",
      "Relatório técnico simplificado",
    ],
    cta: "Começar pelo essencial",
    ctaMessage: whatsappUrl("Olá! Tenho interesse no Pacote Essencial."),
    featured: false,
  },
  {
    name: "Saúde",
    level: "Nível 3",
    price: "139 €",
    priceNote: "valor fixo",
    description: "O protocolo completo para a sua família",
    audience: "Famílias com crianças, animais ou alergénios comuns",
    features: [
      "Sofá + colchão + tapete",
      "Protocolo Safe pH™ antialérgico",
      "Relatório técnico personalizado",
      "Follow-up automático aos 45 dias",
      "Prioridade na marcação",
    ],
    cta: "Escolher o Pacote Saúde",
    ctaMessage: whatsappUrl("Olá! Tenho interesse no Pacote Saúde de 139 €."),
    featured: true,
    badge: "Mais escolhido",
  },
  {
    name: "Premium",
    level: "Nível 4",
    price: "a partir de 159 €",
    description: "Cuidado total. Sem compromissos.",
    audience: "Imóveis de valor ou peças delicadas (couro, veludo)",
    features: [
      "Pacote Saúde completo",
      "Tratamento de couro ou impermeabilização",
      "Garantia de re-intervenção 90 dias",
      "Relatório fotográfico detalhado",
    ],
    cta: "Ver opções Premium",
    ctaMessage: whatsappUrl("Olá! Tenho interesse no Pacote Premium."),
    featured: false,
  },
];

const PackagesSection = () => (
  <section className="bg-cream py-24 md:py-32">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-eyebrow text-gold-deep mb-6">Pacotes</p>
        <h2 className="text-display-md text-navy mb-6">
          Três caminhos. <span className="italic text-gold-deep">Uma só promessa.</span>
        </h2>
        <p className="text-body text-ink-muted">
          Escolha o nível de cuidado. O protocolo de 8 etapas é o mesmo em todos.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`relative rounded-2xl p-8 lg:p-10 flex flex-col ${
              pkg.featured
                ? "bg-navy-deep text-cream md:scale-105 md:-my-2 shadow-[0_30px_80px_-15px_rgba(15,25,34,0.4)] border border-gold/30"
                : "bg-white text-navy border border-cream-deep"
            }`}
          >
            {pkg.featured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-navy px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-navy" />
                {pkg.badge}
              </div>
            )}

            {/* Header */}
            <div className="mb-8">
              <p className={`text-eyebrow mb-3 ${pkg.featured ? "text-gold" : "text-gold-deep"}`}>
                {pkg.level}
              </p>
              <h3 className="font-display text-3xl lg:text-4xl font-semibold mb-2">{pkg.name}</h3>
              <p className={`text-body-sm mb-6 ${pkg.featured ? "text-cream/60" : "text-ink-muted"}`}>
                {pkg.description}
              </p>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl lg:text-5xl font-bold">{pkg.price}</span>
                {pkg.priceNote && (
                  <span className={`text-body-sm ${pkg.featured ? "text-gold" : "text-gold-deep"}`}>
                    · {pkg.priceNote}
                  </span>
                )}
              </div>
            </div>

            {/* Audience */}
            <div
              className={`mb-6 pb-6 border-b ${
                pkg.featured ? "border-cream/15" : "border-cream-deep"
              }`}
            >
              <p className={`text-body-sm italic ${pkg.featured ? "text-cream/70" : "text-ink-muted"}`}>
                {pkg.audience}
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-10 flex-grow">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.featured ? "text-gold" : "text-gold-deep"}`} />
                  <span className={`text-body-sm ${pkg.featured ? "text-cream/85" : "text-ink-soft"}`}>{f}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={pkg.ctaMessage}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick(`package_${pkg.name.toLowerCase()}`)}
              className={`block text-center py-4 rounded-full font-body font-semibold text-sm transition-all duration-500 inline-flex items-center justify-center gap-2 ${
                pkg.featured
                  ? "bg-gold hover:bg-gold-warm text-navy"
                  : "bg-navy hover:bg-navy-deep text-cream"
              }`}
            >
              {pkg.cta}
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </div>

      {/* Footnote legal */}
      <p className="text-center text-ink-muted text-xs mt-12 max-w-2xl mx-auto">
        Valores indicativos. Preço final confirmado após diagnóstico técnico gratuito ao domicílio.
        O Pacote Saúde mantém 139 € como valor fixo, exceto em situações excecionais de complexidade
        acrescida — sempre comunicadas antes da intervenção.
      </p>
    </div>
  </section>
);

export default PackagesSection;

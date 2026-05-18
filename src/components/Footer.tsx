import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { whatsappUrl, WHATSAPP_MESSAGES, PHONE_DISPLAY, EMAIL } from "@/lib/constants";

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/wiseclean";

const Footer = () => (
  <footer className="bg-navy-deep pt-14 pb-8 border-t border-gold/20">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <p className="font-display text-xl font-bold text-cream mb-1">
            Wise<span className="text-gold">Clean</span>
          </p>
          <p className="text-cream/55 font-body text-sm leading-relaxed max-w-xs mb-4">
            Centro de higienização técnica em Viseu — padrão interno{" "}
            <span className="text-gold">Safe pH™</span> e recolha 100% da água.
          </p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com/wiseclean.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-cream/50 hover:text-gold transition-colors font-body text-xs"
            >
              <Instagram className="w-3.5 h-3.5" />
              @wiseclean.pt
            </a>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-cream/50 hover:text-gold transition-colors font-body text-xs"
            >
              <MapPin className="w-3.5 h-3.5" />
              Google Maps
            </a>
          </div>
          <p className="mt-4 text-cream/40 font-body text-xs">
            Interior auto em preparação —{" "}
            <a
              href={whatsappUrl(WHATSAPP_MESSAGES.autoWaitlist)}
              className="text-gold/60 hover:text-gold transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              avise-me
            </a>
          </p>
        </div>

        <div>
          <h4 className="font-body text-[11px] font-semibold text-gold mb-3 uppercase tracking-[0.2em]">
            Navegação
          </h4>
          <ul className="space-y-2">
            {[
              { label: "Serviços", href: "#servicos" },
              { label: "Porquê WiseClean", href: "#saude" },
              { label: "Contacto", href: "#orcamento" },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-cream/60 hover:text-gold transition-colors font-body text-sm"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-body text-[11px] font-semibold text-gold mb-3 uppercase tracking-[0.2em]">
            Contacto
          </h4>
          <ul className="space-y-2.5 text-cream/60 font-body text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
              <span>Viseu e arredores (até 15 km)</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
              <a
                href={whatsappUrl(WHATSAPP_MESSAGES.hero)}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
              <a href={`mailto:${EMAIL}`} className="hover:text-gold transition-colors">
                {EMAIL}
              </a>
            </li>
          </ul>
          <p className="mt-4 text-cream/40 font-body text-xs">
            Parcerias —{" "}
            <a
              href={whatsappUrl(WHATSAPP_MESSAGES.partnership)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/60 hover:text-gold transition-colors"
            >
              contacte-nos
            </a>
          </p>
        </div>
      </div>

      <div className="pt-6 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-cream/40 font-body text-xs">
          © {new Date().getFullYear()} WiseClean Unipessoal Lda. · Safe pH™ (padrão interno)
        </p>
      </div>

      <div className="mt-4 pt-4 border-t border-cream/10">
        <p className="text-cream/30 font-body text-[11px] leading-relaxed text-center max-w-3xl mx-auto">
          Empresa de higienização técnica. Não somos entidade prestadora de cuidados de saúde. O padrão Safe pH™ é um padrão interno de qualidade WiseClean — não constitui certificação por entidade externa acreditada. Os resultados individuais podem variar em função do tipo de tecido, grau de contaminação e condições do ambiente. Avaliação técnica sem custos e sem obrigação de contratação.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

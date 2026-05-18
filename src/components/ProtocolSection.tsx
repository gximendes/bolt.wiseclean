import { motion } from "framer-motion";
import {
  Phone,
  Search,
  Shield,
  SprayCan,
  Droplets,
  Recycle,
  Wind,
  ClipboardCheck,
} from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

const steps = [
  { icon: Phone, title: "Marcamos Consigo", text: "Resposta em menos de 1 hora via WhatsApp. Confirmamos data, hora e qualquer necessidade especial." },
  { icon: Search, title: "Avaliação Técnica", text: "Avaliamos o estado do seu sofá, colchão ou tapete. Identificamos as zonas com maior acumulação." },
  { icon: Shield, title: "Preparação Cuidada", text: "Seleccionamos os produtos certos para o seu tipo de tecido — seguros para a pele, crianças e animais." },
  { icon: SprayCan, title: "Ativação em Profundidade", text: "Aplicamos um agente enzimático nas zonas com maior concentração orgânica e abrimos as fibras manualmente." },
  { icon: Droplets, title: "Remoção em Profundidade", text: "Com equipamento profissional de injeção e extração a pressão controlada, removemos em profundidade ácaros, bactérias e agentes de odor acumulados nas fibras." },
  { icon: Recycle, title: "Recolha Total da Água", text: "Toda a água é extraída e recolhida para tratamento certificado. Sem resíduos nem humidade escondida." },
  { icon: Wind, title: "Secagem Acelerada", text: "Aceleramos a secagem com ventilação orientada. Em 2 a 4 horas pode voltar a usar o seu espaço." },
  { icon: ClipboardCheck, title: "Follow-up a 45 Dias", text: "Inspecção final, relatório personalizado e follow-up automático aos 45 dias." },
];

const ProtocolSection = () => (
  <section id="protocolo" className="py-24 lg:py-32 bg-background">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <span className="text-gold text-xs md:text-sm font-body tracking-[0.25em] uppercase mb-4 block">
          Protocolo de 8 Etapas
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">
          Cada visita segue a mesma sequência rigorosa.
        </h2>
        <p className="text-muted-foreground font-body text-base max-w-xl mx-auto">
          Não há improvisação. Cada etapa tem um propósito técnico — e um resultado verificável.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-card border border-border rounded-2xl p-6 shadow-card"
          >
            <span className="text-gold/40 font-display text-xs tracking-widest mb-2 block">
              {String(i + 1).padStart(2, "0")}
            </span>
            <s.icon className="w-8 h-8 text-gold mb-3" />
            <h3 className="font-display text-base font-semibold text-foreground mb-2">
              {s.title}
            </h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              {s.text}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <a
          href={whatsappUrl(WHATSAPP_MESSAGES.diagnosis)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick("protocol_cta")}
          className="btn-fill bg-gradient-gold text-secondary font-body font-semibold px-6 py-3 rounded-lg shadow-gold text-sm inline-flex items-center gap-2 transition-all duration-500 ease-luxury"
        >
          Agendar diagnóstico gratuito
        </a>
      </motion.div>
    </div>
  </section>
);

export default ProtocolSection;

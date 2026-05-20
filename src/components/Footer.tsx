import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy text-cream/70 py-16">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-10 mb-12">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className="font-display text-2xl font-semibold text-cream mb-4">
            Wise<span className="text-gold">Clean</span>
          </p>
          <p className="text-body-sm leading-relaxed">
            Higienização técnica de estofados ao domicílio. Carregal do Sal, Viseu e arredores.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-eyebrow text-gold mb-4">Contacto</p>
          <ul className="space-y-2 text-body-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold flex-shrink-0" />
              912 669 208
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gold flex-shrink-0" />
              wiseclean@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
              Carregal do Sal
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-eyebrow text-gold mb-4">Legal</p>
          <ul className="space-y-2 text-body-sm">
            <li>
              <a href="/" className="hover:text-gold transition-colors">
                Termos e Condições
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gold transition-colors">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a
                href="https://www.consumidor.gov.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                Resolução de Litígios
              </a>
            </li>
          </ul>
        </motion.div>
      </div>

      <div className="pt-8 border-t border-cream/10 text-body-sm text-cream/40 flex flex-col md:flex-row justify-between gap-4">
        <p>© 2026 WiseClean Unipessoal Lda. Todos os direitos reservados.</p>
        <p>
          <a href="https://www.consumidor.gov.pt" target="_blank" rel="noopener noreferrer" className="hover:text-gold">
            Resolução de litígios: www.consumidor.gov.pt
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

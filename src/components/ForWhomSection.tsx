import { motion } from "framer-motion";
import { Baby, Heart, PawPrint, Users } from "lucide-react";

const VIDEO_FOR_WHOM = "https://videos.pexels.com/video-files/6608912/6608912-uhd_2560_1440_25fps.mp4";
const POSTER_FOR_WHOM = "https://images.pexels.com/photos/6608912/pexels-photo-6608912.jpeg?auto=compress&cs=tinysrgb&w=1200";

const segments = [
  {
    icon: Baby,
    title: "Famílias com crianças",
    text: "Dermatite, rinite, pele sensível. Produtos Safe pH™ formulados para não agredir.",
  },
  {
    icon: PawPrint,
    title: "Lares com animais",
    text: "Pelo, salivação, micro-resíduos. Protocolo específico que vai onde a aspiração não chega.",
  },
  {
    icon: Heart,
    title: "Idosos e cuidadores",
    text: "Mobilidade reduzida. Trabalhamos ao domicílio com discrição e respeito pelo espaço.",
  },
  {
    icon: Users,
    title: "Quem valoriza o detalhe",
    text: "O sofá é onde se descansa. Merece o mesmo cuidado que damos ao resto da casa.",
  },
];

const ForWhomSection = () => (
  <section className="bg-cream py-24 md:py-32">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Esquerda: Vídeo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-navy"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            aria-hidden
            poster={POSTER_FOR_WHOM}
          >
            <source src={VIDEO_FOR_WHOM} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
          {/* Selo no canto */}
          <div className="absolute bottom-6 left-6 bg-cream/95 backdrop-blur px-4 py-3 rounded-lg">
            <p className="text-eyebrow text-gold-deep mb-1">Ao Domicílio</p>
            <p className="font-display text-lg text-navy">Sem deslocações para o cliente</p>
          </div>
        </motion.div>

        {/* Direita: Conteúdo + segmentos */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-eyebrow text-gold-deep mb-6"
          >
            Para Quem
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-display-md text-navy mb-6"
          >
            Quem dorme melhor com a casa
            <br />
            <span className="italic text-gold-deep">verdadeiramente</span> tratada.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-body text-ink-muted mb-10 max-w-lg"
          >
            Cada serviço é adaptado à pessoa que vive na casa — não ao tipo de móvel.
          </motion.p>

          <div className="space-y-6">
            {segments.map((seg, i) => (
              <motion.div
                key={seg.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                  <seg.icon className="w-5 h-5 text-gold-deep" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-navy mb-1">{seg.title}</h3>
                  <p className="text-body-sm text-ink-muted leading-relaxed">{seg.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ForWhomSection;

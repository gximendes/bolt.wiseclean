import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sofa,
  BedDouble,
  Square,
  Armchair,
  Box,
  Moon,
  Check,
  MessageCircle,
  Stethoscope,
} from "lucide-react";
import {
  PIECES,
  PACKAGES,
  ZONES,
  LEGAL_NOTE,
  WHATSAPP_PHONE,
} from "@/constants/pricing";
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  "ti-sofa": Sofa,
  "ti-bed": BedDouble,
  "ti-texture": Square,
  "ti-armchair": Armchair,
  "ti-square-rounded": Box,
  "ti-zzz": Moon,
};

const PACKAGE_AUDIENCE: Record<string, string> = {
  saude: "Ideal para famílias com crianças, animais de estimação ou sensibilidades respiratórias.",
  conforto: "Para casais e adultos que valorizam o descanso completo.",
};

type VariantChoices = Record<string, number>;

const PriceCalculator = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [variantChoices, setVariantChoices] = useState<VariantChoices>({});
  const [selectedZoneId, setSelectedZoneId] = useState<string>("zona1");

  const selectedZone = ZONES.find((z) => z.id === selectedZoneId) ?? ZONES[0];

  const togglePiece = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
    if (!(id in variantChoices)) {
      setVariantChoices((prev) => ({ ...prev, [id]: 0 }));
    }
  };

  const setVariant = (pieceId: string, optionIndex: number) => {
    setVariantChoices((prev) => ({ ...prev, [pieceId]: optionIndex }));
  };

  const activePackage = useMemo(() => {
    const idSet = new Set(selectedIds);
    for (const pkg of PACKAGES) {
      if (pkg.requiredIds.every((id) => idSet.has(id))) {
        return pkg;
      }
    }
    return null;
  }, [selectedIds]);

  const calculation = useMemo(() => {
    let totalMin = 0;
    let totalMax = 0;
    const packagePieceIds = new Set(activePackage?.requiredIds ?? []);

    for (const id of selectedIds) {
      if (packagePieceIds.has(id) && activePackage) continue;
      const piece = PIECES.find((p) => p.id === id);
      if (!piece) continue;
      const optIdx = variantChoices[id] ?? 0;
      const variant = piece.variants[0];
      const option = variant.options[optIdx] ?? variant.options[0];
      totalMin += option.priceMin;
      totalMax += option.priceMax;
    }

    if (activePackage) {
      totalMin += activePackage.priceMin;
      totalMax += activePackage.priceMax;
    }

    totalMin += selectedZone.fee;
    totalMax += selectedZone.fee;

    return { totalMin, totalMax };
  }, [selectedIds, variantChoices, selectedZone, activePackage]);

  const buildWhatsAppUrl = () => {
    const lines = selectedIds.map((id) => {
      const piece = PIECES.find((p) => p.id === id)!;
      const optIdx = variantChoices[id] ?? 0;
      const option = piece.variants[0].options[optIdx] ?? piece.variants[0].options[0];
      return `• ${piece.name} — ${option.name}`;
    });
    const msg =
      `Olá! Usei a calculadora do site WiseClean.\n\n` +
      `Peças a higienizar:\n${lines.join("\n")}\n\n` +
      `Zona: ${selectedZone.label}\n` +
      `Estimativa: ${calculation.totalMin}–${calculation.totalMax} €\n\n` +
      `Gostaria de confirmar disponibilidade para o diagnóstico gratuito.`;
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
  };

  const hasSelection = selectedIds.length > 0;

  return (
    <div id="calculadora">
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
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">
            Escolha o protocolo certo para a sua família.
          </h2>
          <p className="text-muted-foreground font-body text-base max-w-xl mx-auto">
            Selecione as peças, as opções e a zona — e receba uma estimativa instantânea.
          </p>
        </motion.div>

        {/* Step 1 — Piece selection */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="font-body text-sm font-semibold text-foreground mb-4 text-center">
            1. Selecione as peças a higienizar
          </p>
          <p className="font-body text-xs text-muted-foreground text-center mb-4">
            Selecione sofá + colchão + tapete para activar o Pacote Saúde (valor especial).
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {PIECES.map((piece) => {
              const Icon = ICON_MAP[piece.icon] ?? Sofa;
              const isSelected = selectedIds.includes(piece.id);
              return (
                <button
                  key={piece.id}
                  type="button"
                  onClick={() => togglePiece(piece.id)}
                  className={`relative text-left rounded-2xl p-5 border-2 transition-all duration-200 ${
                    isSelected
                      ? "border-[#C9A24A] bg-[#FAEEDA22]"
                      : "border-border bg-card hover:border-gold/40"
                  }`}
                >
                  {isSelected && (
                    <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#C9A24A] flex items-center justify-center">
                      <Check className="w-3 h-3 text-secondary" />
                    </span>
                  )}
                  <Icon className={`w-7 h-7 mb-3 ${isSelected ? "text-gold" : "text-muted-foreground"}`} />
                  <p className="font-display text-sm font-semibold text-foreground mb-1">{piece.name}</p>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">{piece.benefit}</p>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Package detection banner */}
        <AnimatePresence>
          {activePackage && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="max-w-3xl mx-auto mb-8"
            >
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-5 py-4 flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-sm font-semibold text-emerald-800">{activePackage.name}</p>
                  <p className="font-body text-xs text-emerald-700">{activePackage.description}</p>
                  <p className="font-body text-xs text-emerald-700">{activePackage.savingMessage}</p>
                  {activePackage.footnote && (
                    <p className="font-body text-[11px] text-emerald-600 mt-1 italic">{activePackage.footnote}</p>
                  )}
                  {PACKAGE_AUDIENCE[activePackage.id] && (
                    <p className="font-body text-xs text-emerald-600 mt-1">{PACKAGE_AUDIENCE[activePackage.id]}</p>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 2 — Variants and zone */}
        <AnimatePresence>
          {hasSelection && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-3xl mx-auto mb-10"
            >
              <p className="font-body text-sm font-semibold text-foreground mb-4 text-center">
                2. Escolha as opções e a zona
              </p>

              {selectedIds.map((id) => {
                const piece = PIECES.find((p) => p.id === id);
                if (!piece) return null;
                const variant = piece.variants[0];
                const selectedOpt = variantChoices[id] ?? 0;
                return (
                  <div key={id} className="mb-5">
                    <p className="font-body text-xs font-semibold text-foreground mb-2">
                      {piece.name} — {variant.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {variant.options.map((opt, i) => (
                        <button
                          key={opt.name}
                          type="button"
                          onClick={() => setVariant(id, i)}
                          className={`font-body text-xs px-3 py-1.5 rounded-full border transition-colors ${
                            selectedOpt === i
                              ? "border-gold bg-gold/10 text-gold"
                              : "border-border text-foreground/70 hover:border-gold/50"
                          }`}
                        >
                          {opt.name}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}

              <div className="mt-6 pt-5 border-t border-border">
                <p className="font-body text-xs font-semibold text-foreground mb-2">Zona de deslocação</p>
                <div className="flex flex-wrap gap-2">
                  {ZONES.map((zone) => (
                    <button
                      key={zone.id}
                      type="button"
                      onClick={() => setSelectedZoneId(zone.id)}
                      className={`font-body text-xs px-3 py-1.5 rounded-full border transition-colors ${
                        selectedZoneId === zone.id
                          ? "border-gold bg-gold/10 text-gold"
                          : "border-border text-foreground/70 hover:border-gold/50"
                      }`}
                    >
                      {zone.label}
                    </button>
                  ))}
                </div>
                {selectedZone.prePayment && (
                  <p className="font-body text-[11px] text-muted-foreground mt-2 italic">
                    Inclui taxa de confirmação de deslocação pré-paga via MBWay, descontada no dia do serviço.
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 3 — Result */}
        <AnimatePresence>
          {hasSelection && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <p className="font-body text-sm font-semibold text-foreground mb-2">
                3. Estimativa
              </p>
              <p className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                {calculation.totalMin} – {calculation.totalMax} €
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-fill bg-gradient-gold text-secondary font-body font-semibold px-6 py-3 rounded-lg shadow-gold text-sm inline-flex items-center gap-2 transition-all duration-500 ease-luxury"
                >
                  <MessageCircle className="w-4 h-4" />
                  Agendar via WhatsApp
                </a>
                <a
                  href={whatsappUrl(WHATSAPP_MESSAGES.diagnosis)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body font-medium px-6 py-3 rounded-lg border border-foreground/20 text-foreground hover:border-gold hover:text-gold inline-flex items-center gap-2 transition-colors text-sm"
                >
                  <Stethoscope className="w-4 h-4" />
                  Prefiro o diagnóstico gratuito primeiro
                </a>
              </div>

              <p className="font-body text-[11px] text-muted-foreground italic max-w-xl mx-auto">
                {LEGAL_NOTE}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PriceCalculator;

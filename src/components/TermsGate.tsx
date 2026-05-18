import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "wiseclean_terms_accepted";

const TermsGate = () => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [scrolledToEnd, setScrolledToEnd] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  // Block body scroll while modal is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Block Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [open]);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 8) {
      setScrolledToEnd(true);
    }
  };

  const accept = () => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ accepted: true, date: new Date().toISOString(), version: "1.0" })
      );
    } catch {
      // ignore
    }
    setOpen(false);
  };

  const decline = () => {
    window.location.replace(
      "data:text/html;charset=utf-8," +
        encodeURIComponent(
          `<!doctype html><html lang="pt"><head><meta charset="utf-8"><title>WiseClean</title><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#1C2A36;color:#F4EFE9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;padding:24px;text-align:center}div{max-width:480px}h1{color:#C9A24A;font-weight:600;font-size:22px;margin:0 0 16px}p{line-height:1.6;font-size:16px;opacity:.9}</style></head><body><div><h1>WiseClean</h1><p>Para aceder ao site WiseClean é necessário aceitar os nossos Termos de Utilização. Se mudar de ideias, estamos aqui.</p></div></body></html>`
        )
    );
  };

  if (!open) return null;

  const canAccept = checked;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(15, 15, 16, 0.85)" }}
    >
      <div
        className="w-full max-w-2xl rounded-xl shadow-2xl flex flex-col overflow-hidden"
        style={{ background: "#F4EFE9", maxHeight: "90vh" }}
      >
        {/* Header */}
        <div
          className="px-6 py-5 flex items-center gap-4"
          style={{ background: "#1C2A36" }}
        >
          <div
            className="font-display text-xl font-bold"
            style={{ color: "#C9A24A", letterSpacing: "0.05em" }}
          >
            WiseClean
          </div>
          <div
            className="font-body text-sm md:text-base"
            style={{ color: "#F4EFE9", opacity: 0.95 }}
          >
            Antes de entrar, um momento.
          </div>
        </div>

        {/* Body */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="px-6 py-5 overflow-y-auto font-body text-sm leading-relaxed"
          style={{ maxHeight: 400, color: "#1C2A36" }}
        >
          <h2 id="terms-title" className="font-display text-lg font-semibold mb-1" style={{ color: "#1C2A36" }}>
            Termos de Utilização e Política de Privacidade
          </h2>
          <p className="text-xs mb-4" style={{ color: "#1C2A36", opacity: 0.7 }}>
            WiseClean · Versão 1.0 · Maio 2026
          </p>

          <p className="mb-3">
            Olá. Somos a WiseClean — e antes de entrar, queremos ser completamente transparentes consigo
            sobre como trabalhamos, o que pode esperar de nós, e o que esperamos de si. Sem letras miúdas escondidas.
          </p>

          <h3 className="font-semibold mt-5 mb-2">1. Quem somos</h3>
          <p className="mb-3">
            A WiseClean é uma empresa de higienização técnica de estofos com sede em Viseu, Portugal.
            Toda a comunicação, agendamento e prestação de serviço é feita por nós, diretamente.
          </p>

          <h3 className="font-semibold mt-5 mb-2">2. O que este site faz</h3>
          <p className="mb-3">
            Este site serve para que conheça os nossos serviços, preços e protocolo de trabalho — e para
            que nos contacte caso queira agendar. Não recolhemos dados de pagamento online. Não vendemos
            dados a terceiros. Ponto.
          </p>

          <h3 className="font-semibold mt-5 mb-2">3. O que os nossos serviços incluem (e não incluem)</h3>
          <p className="mb-2"><strong>✔ O que fazemos:</strong> Higienização técnica de sofás, colchões, tapetes e outros têxteis,
            com equipamento profissional, produtos certificados e protocolo documentado. Eliminação comprovada
            de 99,9% de ácaros e bactérias quando o protocolo completo é aplicado em condições normais de utilização.</p>
          <p className="mb-2"><strong>✘ O que não fazemos:</strong> Não prometemos resultados médicos, curas de alergias ou eliminação
            de condições de saúde. A higienização técnica pode contribuir para um ambiente mais limpo, mas os
            resultados individuais de saúde variam de pessoa para pessoa e dependem de factores fora do nosso
            controlo. A WiseClean não pratica atos médicos.</p>
          <p className="mb-3">
            Não garantimos resultados em casos de dano pré-existente nos tecidos, manchas permanentes, ou
            situações em que o cliente nos tenha omitido informação relevante sobre o estado da peça antes do serviço.
          </p>

          <h3 className="font-semibold mt-5 mb-2">4. Preços e agendamento</h3>
          <p className="mb-3">
            Os preços apresentados no site são indicativos e baseados numa faixa mínimo–máximo. O valor exacto
            é sempre confirmado após diagnóstico gratuito ao domicílio, antes de qualquer trabalho ser iniciado.
            Nunca começamos um serviço sem que o preço final tenha sido acordado e aceite pelo cliente.
          </p>
          <p className="mb-3">
            O agendamento é confirmado via WhatsApp ou email. Cancelamentos com menos de 24 horas de antecedência
            podem implicar uma taxa administrativa de 15€, salvo situações de força maior devidamente comunicadas.
          </p>

          <h3 className="font-semibold mt-5 mb-2">5. Responsabilidade</h3>
          <p className="mb-3">
            A WiseClean compromete-se a tratar cada peça com o máximo cuidado e profissionalismo. Em caso de
            dano comprovado causado pela nossa intervenção, a nossa responsabilidade limita-se ao valor de
            mercado da peça danificada, avaliado por peritagem independente, e nunca excede o valor do serviço contratado.
          </p>
          <p className="mb-3">
            Não nos responsabilizamos por danos pré-existentes que não tenham sido identificados ou comunicados
            antes do início do serviço, nem por danos resultantes de tecidos com patologias ocultas (ex: fibras
            deterioradas internamente, estrutura da peça comprometida).
          </p>
          <p className="mb-3">
            Exoneramo-nos de qualquer responsabilidade por informação incorreta, incompleta ou enganosa fornecida
            pelo cliente no momento do contacto ou agendamento.
          </p>

          <h3 className="font-semibold mt-5 mb-2">6. Utilização do site</h3>
          <p className="mb-3">
            Ao usar este site, compromete-se a não utilizar as informações aqui contidas para fins ilegais,
            fraudulentos ou lesivos para a WiseClean ou para terceiros. Qualquer tentativa de obter serviços
            com informação falsa, simular sinistros ou utilizar de má fé os nossos processos de reclamação
            poderá ser participada às autoridades competentes.
          </p>

          <h3 className="font-semibold mt-5 mb-2">7. Dados pessoais e privacidade (RGPD)</h3>
          <p className="mb-2">
            Os dados que nos fornece (nome, telefone, email, morada para prestação de serviço) são utilizados exclusivamente para:
          </p>
          <ul className="list-disc pl-5 mb-3 space-y-1">
            <li>Responder ao seu contacto</li>
            <li>Confirmar e gerir o agendamento</li>
            <li>Enviar o relatório de serviço e follow-up aos 45 dias</li>
          </ul>
          <p className="mb-3">
            Não partilhamos os seus dados com terceiros para fins comerciais. Os seus dados são conservados pelo
            período mínimo necessário para gestão operacional e cumprimento de obrigações legais, e podem ser
            eliminados a seu pedido a qualquer momento através de geralwiseclean@gmail.com.
          </p>
          <p className="mb-3">
            Tem o direito de aceder, corrigir, apagar ou opor-se ao tratamento dos seus dados, nos termos do
            Regulamento (UE) 2016/679 (RGPD).
          </p>

          <h3 className="font-semibold mt-5 mb-2">8. Propriedade intelectual</h3>
          <p className="mb-3">
            O conteúdo deste site — textos, imagens, logótipo, nome WiseClean, certificação Safe pH™ e protocolo
            de 8 etapas — são propriedade exclusiva da WiseClean. A reprodução total ou parcial sem autorização
            escrita é proibida.
          </p>

          <h3 className="font-semibold mt-5 mb-2">9. Lei aplicável e foro competente</h3>
          <p className="mb-3">
            Estes termos são regidos pela lei portuguesa. Em caso de litígio, as partes comprometem-se a tentar
            resolução amigável num prazo de 30 dias. Na impossibilidade de acordo, é competente o Tribunal da
            Comarca de Viseu.
          </p>

          <h3 className="font-semibold mt-5 mb-2">10. Alterações aos termos</h3>
          <p className="mb-3">
            A WiseClean reserva-se o direito de actualizar estes termos. Sempre que tal aconteça, a data de
            versão será actualizada e o utilizador será novamente solicitado a aceitar.
          </p>

          <p className="text-xs mt-6" style={{ opacity: 0.7 }}>
            Última actualização: Maio de 2026 · WiseClean Unipessoal Lda. · Viseu, Portugal
          </p>

        </div>

        {/* Footer */}
        <div
          className="px-6 py-4 border-t flex flex-col gap-3"
          style={{ background: "#F4EFE9", borderColor: "rgba(28,42,54,0.15)" }}
        >
          <label className="flex items-start gap-3 cursor-pointer text-sm" style={{ color: "#1C2A36" }}>
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="mt-1 h-4 w-4 cursor-pointer"
              style={{ accentColor: "#C9A24A" }}
            />
            <span>Li e aceito os Termos de Utilização e a Política de Privacidade da WiseClean</span>
          </label>

          <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2">
            <button
              type="button"
              onClick={decline}
              className="px-5 py-2.5 rounded-md text-sm font-medium transition-colors border"
              style={{
                background: "transparent",
                color: "#1C2A36",
                borderColor: "rgba(28,42,54,0.35)",
              }}
            >
              Não Aceito
            </button>
            <button
              type="button"
              onClick={accept}
              disabled={!canAccept}
              className="px-5 py-2.5 rounded-md text-sm font-semibold transition-all"
              style={{
                background: canAccept ? "#C9A24A" : "rgba(201,162,74,0.45)",
                color: "#1C2A36",
                cursor: canAccept ? "pointer" : "not-allowed",
              }}
            >
              Aceito e Entro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsGate;

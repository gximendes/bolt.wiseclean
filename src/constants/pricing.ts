// src/constants/pricing.ts
// Fonte: Guia Mestre WiseClean v9.0 — Maio 2026

export const PIECES = [
  {
    id: "sofa",
    name: "Sofá",
    benefit: "Elimina ácaros, odores e pelos em profundidade",
    icon: "ti-sofa",
    variants: [
      {
        label: "Tipo",
        options: [
          { name: "2 lugares",       priceMin: 59,  priceMax: 79  },
          { name: "3 lugares",       priceMin: 69,  priceMax: 89  },
          { name: "Com chaise",      priceMin: 79,  priceMax: 99  },
          { name: "Modular / canto", priceMin: 89,  priceMax: 109 },
        ],
      },
    ],
  },
  {
    id: "colchao",
    name: "Colchão",
    benefit: "Reduz alergénios e fungos — mais qualidade no sono",
    icon: "ti-bed",
    variants: [
      {
        label: "Tamanho",
        options: [
          { name: "Solteiro", priceMin: 35, priceMax: 50 },
          { name: "Casal",    priceMin: 50, priceMax: 70 },
        ],
      },
    ],
  },
  {
    id: "tapete",
    name: "Tapete",
    benefit: "Remove pó, ácaros e alergénios acumulados",
    icon: "ti-texture",
    variants: [
      {
        label: "Dimensão",
        options: [
          { name: "Pequeno — até 4 m²",  priceMin: 13, priceMax: 20 },
          { name: "Médio — 4 a 8 m²",    priceMin: 22, priceMax: 32 },
          { name: "Grande — 8 a 12 m²",  priceMin: 30, priceMax: 45 },
        ],
      },
    ],
  },
  {
    id: "cadeiras",
    name: "Cadeiras",
    benefit: "Higienização completa de todos os estofados da sala",
    icon: "ti-armchair",
    variants: [
      {
        label: "Tipo",
        options: [
          { name: "Pack 4 — tecido",        priceMin: 35, priceMax: 55 },
          { name: "Pack 4 — couro / sint.",  priceMin: 55, priceMax: 72 },
          { name: "Cadeirão individual",     priceMin: 25, priceMax: 35 },
        ],
      },
    ],
  },
  {
    id: "almofadas",
    name: "Almofadas",
    benefit: "Elimina ácaros e resíduos de pele invisíveis",
    icon: "ti-square-rounded",
    variants: [
      {
        label: "Quantidade",
        options: [
          { name: "Pack 4 almofadas", priceMin: 22, priceMax: 32 },
          { name: "Pack 2 almofadas", priceMin: 12, priceMax: 18 },
        ],
      },
    ],
  },
  {
    id: "travesseiros",
    name: "Travesseiros",
    benefit: "Protege o sono com ar mais limpo e sem alergénios",
    icon: "ti-zzz",
    variants: [
      {
        label: "Quantidade",
        options: [
          { name: "Pack 2 (casal)",           priceMin: 12, priceMax: 18 },
          { name: "Travesseiro antialérgico",  priceMin: 10, priceMax: 15 },
        ],
      },
    ],
  },
] as const;

export const PACKAGES = [
  {
    id: "saude",
    name: "Pacote Saúde",
    requiredIds: ["sofa", "colchao", "tapete"],
    description: "O protocolo completo para famílias com alergénios",
    priceMin: 139,
    priceMax: 179,
    savingMessage: "Valor de conjunto aplicado automaticamente",
    footnote: "Até 179 € em casos de tecido delicado + saturação extrema + urgência < 24h",
  },
  {
    id: "conforto",
    name: "Pacote Conforto",
    requiredIds: ["sofa", "colchao"],
    description: "Sofá e colchão tratados em conjunto",
    priceMin: 89,
    priceMax: 129,
    savingMessage: "Valor de conjunto aplicado",
    footnote: null,
  },
] as const;

export const ZONES = [
  {
    id: "zona1",
    label: "Até 15 km de Carregal do Sal — incluída",
    description: "Carregal do Sal e arredores",
    fee: 0,
    prePayment: false,
  },
  {
    id: "zona2",
    label: "Zona 2 — Viseu, Seia, Oliveira do Hospital (15–50 km)",
    description: "Taxa de confirmação pré-paga via MBWay, descontada no serviço",
    fee: 15,
    prePayment: true,
  },
  {
    id: "zona3",
    label: "Zona 3 — Coimbra, Guarda (50–100 km)",
    description: "Taxa de confirmação pré-paga via MBWay, descontada no serviço",
    fee: 30,
    prePayment: true,
  },
] as const;

export const LEGAL_NOTE =
  "Estimativa indicativa sem carácter vinculativo. " +
  "O preço final é confirmado após avaliação técnica gratuita " +
  "e aceite pelo cliente antes de qualquer intervenção. " +
  "(DL 70/2007 — transparência de preços ao consumidor)";

export const WHATSAPP_PHONE = "351912669208";

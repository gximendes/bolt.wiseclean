export const PHONE = "351912669208";
export const PHONE_DISPLAY = "+351 912 669 208";
export const WHATSAPP_BASE = `https://wa.me/${PHONE}`;
export const EMAIL = "geralwiseclean@gmail.com";
export const SITE_URL = "https://wiseclean.pt";

export const WHATSAPP_MESSAGES = {
  hero: "Olá! Vi o site da WiseClean e gostaria de agendar uma higienização técnica.",
  package: (name: string, price: string) =>
    `Olá! Vi o site da WiseClean e gostaria de saber mais sobre o pacote ${name} (${price}). Pode confirmar disponibilidade?`,
  diagnosis: "Olá! Gostaria de agendar um diagnóstico gratuito.",
  addons: "Olá! Vi a tabela de add-ons no site da WiseClean e gostaria de adicionar peças ao meu pedido.",
  autoNotify: "Olá! Gostaria de ser avisado quando o serviço Interior Auto da WiseClean estiver disponível.",
  partnership: "Olá! Gostaria de falar sobre uma parceria de referenciação com a WiseClean.",
  autoWaitlist: "Olá! Quero ser avisado quando o serviço de interior auto estiver disponível.",
  referral: "Conheces a WiseClean? Higienização técnica profissional em casa. Usa o meu nome e ambos temos 15 € de desconto → https://wiseclean.pt",
  info: "Olá! Vi o site da WiseClean e gostaria de mais informações sobre o diagnóstico gratuito de sofás e colchões. Obrigado!",
} as const;

export const whatsappUrl = (msg: string) =>
  `${WHATSAPP_BASE}?text=${encodeURIComponent(msg)}`;

export const RESPONSE_TIME = "Resposta em menos de 1 hora · Seg–Sáb 8h–20h";

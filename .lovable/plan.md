## Plano de actualizações WiseClean

12 alterações distribuídas por componentes existentes + 1 nova página `/coimbra`.

### 1. Reposicionamento "único em Viseu" → "pioneiro na região Centro"
- `src/components/HeroSection.tsx`: ajustar parágrafo do hero.
- `src/components/DifferentialsSection.tsx`: ajustar sub-título.

### 2. Selo ETA mais específico
- `src/components/TrustSection.tsx`: substituir item "Parceria com ETA autorizada — tratamento de água" por "Parceria certificada com ETA Tratris, Tondela — 100% da água tratada após cada serviço".

### 3. Zonas de deslocação
- `src/components/ServicesSection.tsx`: substituir parágrafo italic final pelo novo texto com Zonas 1/2/3 + relatório + follow-up 45 dias.
- `src/components/Footer.tsx`: badge "Raio incluído: 20 km" → "Deslocação incluída até 15 km".

### 4. AutoDetailSection → "Em Desenvolvimento"
- `src/components/AutoDetailSection.tsx`:
  - Eyebrow: "Em Desenvolvimento".
  - Novo parágrafo focado em "estamos a preparar".
  - Remover lista de 4 benefícios.
  - CTA passa a botão ghost (`border-gold/60 text-gold bg-transparent hover:bg-gold/10`) com texto "Quero ser avisado →" e novo link WhatsApp.
  - Linha muted: "Disponibilidade ainda sem data confirmada."
  - Coluna direita: ícone `Car` w-16 h-16 gold, título "Em Preparação", subtítulo, e CTA "Avisar-me quando abrir →".

### 5. Remover "Interior Auto" da navegação
- `src/components/Navbar.tsx`: remover item do array `links`.
- `src/components/Footer.tsx`: remover `<li>` "Interior Auto".
- Secção continua na página.

### 6. Caption sob CTAs WhatsApp
Adicionar `Resposta em menos de 1 hora · Seg–Sáb 8h–20h` (`font-body text-[11px] mt-2` centrado) por baixo do botão WhatsApp em:
- `HeroSection.tsx` (`text-cream/55`)
- `FinalCTA.tsx` (`text-cream/55`)
- `ContactForm.tsx` (`text-muted-foreground`)

### 7. Social links no Footer
- `src/components/Footer.tsx`, coluna brand (md:col-span-2), abaixo dos badges:
  - Label "Seguir" (gold uppercase tracking-wide text-xs).
  - Container `flex gap-4 mt-3`:
    - Instagram → `https://instagram.com/wiseclean.pt` ("@wiseclean.pt").
    - MapPin → "Ver no Google Maps" (Google My Business).
  - Estilo `text-cream/60 hover:text-gold transition-colors font-body text-sm`.

### 8. Bloco Google Reviews em Testimonials
- `src/components/TestimonialsSection.tsx`, abaixo do grid:
  - Link centrado com ícone `ExternalLink`: "Ver todas as avaliações no Google →".
  - Linha incentivo: "Já foi cliente? Deixe a sua avaliação no Google e receba 5 € de desconto no próximo serviço." com "Deixe a sua avaliação no Google" como link.

### 9. Quiz interactivo no HealthSection
- `src/components/HealthSection.tsx`: entre o grid before/after e os profile cards, adicionar card com `useState`:
  - Pergunta: "Quando foi a última vez que higienizou o seu sofá?"
  - 4 botões ghost com hover gold: Nunca / Há mais de 1 ano / Há 6 meses / Recentemente.
  - Para as 3 primeiras: texto sobre 6 meses + 2M de ácaros + CTA WhatsApp "Agendar diagnóstico gratuito →".
  - Para "Recentemente": só texto de manutenção.
  - `mb-12` antes dos profile cards.

### 10. Linha de parcerias clínicas no Footer
- `src/components/Footer.tsx`, fundo da coluna brand, após social links:
  - "Parcerias com clínicas, dermatologistas e alergologistas — contacte-nos" (link WhatsApp).
  - `text-cream/45 font-body text-xs`; link `text-gold/70 hover:text-gold`.

### 11. Callout "Recomende a um amigo" no FinalCTA
- `src/components/FinalCTA.tsx`, abaixo dos botões:
  - Caixa `mt-8 max-w-sm mx-auto rounded-xl border border-gold/25 bg-cream/5 px-6 py-4 text-center`.
  - Ícone `Users` gold w-5 h-5 centrado mb-2.
  - Texto: "Recomende a um amigo — ambos recebem 15 € de desconto no próximo serviço."
  - Link "Partilhar com um amigo →" via `wa.me/?text=...` (sem destinatário) `text-gold text-xs font-medium`.

### 12. Nova página `/coimbra`
- Criar `src/pages/Coimbra.tsx`: clone de `Index.tsx` com componentes específicos (`HeroSectionCoimbra`, `ServicesSectionCoimbra`) ou via prop opcional.
- Para minimizar duplicação:
  - Adicionar prop opcional a `HeroSection` (`eyebrow`, `subline`) e a `ServicesSection` (`footerNote`).
  - `Coimbra.tsx` passa:
    - Hero eyebrow: "Centro de Higienização Técnica · Coimbra".
    - Sub-headline: parágrafo a referir Coimbra (Solum, Vale das Flores, Santa Clara, Celas).
    - ServicesSection footer: "Zona 3 — taxa fixa 30 € · mínimo 2 serviços por dia de deslocação".
- Registar rota `/coimbra` em `src/App.tsx`.
- Manter todo o resto (componentes, design, branding) idêntico.

### Notas técnicas
- URLs WhatsApp construídos com `encodeURIComponent` para consistência com o restante código.
- URL do Google My Business / Reviews: usar placeholder `https://g.page/r/wiseclean` (substituir quando o utilizador fornecer o link real) — vou perguntar abaixo se preferir confirmar antes.
- Sem alterações de backend, sem novos pacotes; apenas frontend.

### Ordem de execução
1. Pequenas substituições de texto (1, 2, 3).
2. Remoções de navegação (5).
3. Refactor AutoDetail (4).
4. Captions sob CTAs (6).
5. Footer extras (7, 10).
6. Testimonials Google block (8).
7. HealthSection quiz (9).
8. FinalCTA referral box (11).
9. Página Coimbra (12).

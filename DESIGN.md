---
name: João Victor Quintino — Portfolio
description: Portfólio pessoal de arquiteto de software full stack, em tema grafite monocromático
colors:
  void-black: "#0a0a0c"
  panel-ink: "#101014"
  deep-ink: "#0b0d1a"
  frost-white: "#e8eaf2"
  graphite-muted: "#9298b6"
  graphite-faint: "#6b7095"
  steel-periwinkle: "#9fb2d6"
  steel-periwinkle-bright: "#8fa8d6"
  fog-slate: "#aabcdd"
  ash-silver: "#a6a6b0"
  brushed-chrome-mid: "#93a7cc"
  polished-aluminum-start: "#f4f4f6"
  polished-aluminum-end: "#cfcfd6"
  ink-on-aluminum: "#141418"
  angular-brand-red: "#dd0031"
  whatsapp-green: "#25d366"
  glass-border: "rgba(255,255,255,0.1)"
  ambient-glow: "rgba(112,142,196,0.34)"
typography:
  display:
    fontFamily: "'Space Grotesk', system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.5vw, 3.875rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  body:
    fontFamily: "'Manrope', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "'JetBrains Mono', monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.125em"
rounded:
  sm: "9px"
  md: "16px"
  lg: "22px"
  xl: "24px"
  pill: "100px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "44px"
  xl: "90px"
components:
  button-primary:
    backgroundColor: "{colors.polished-aluminum-start}"
    textColor: "{colors.ink-on-aluminum}"
    rounded: "{rounded.md}"
    padding: "15px 28px"
  chip:
    backgroundColor: "{colors.steel-periwinkle}"
    textColor: "{colors.fog-slate}"
    rounded: "{rounded.pill}"
    padding: "8px 15px"
---

# Design System: João Victor Quintino — Portfolio

## Overview

**Creative North Star: "The Architect's Terminal"**

Este portfólio veste a persona de "arquiteto de software", não "codador de tarefas": uma superfície escura, quase sem cor, onde o único vocabulário cromático é uma escala de cinza-azulado — a cor de aço escovado, blueprint e terminal, não de marketing. A superfície inteira se comporta como um ambiente de desenvolvimento de alta fidelidade: partículas conectadas como um grafo de dependências ao fundo, cursor customizado, cards com tilt 3D como se fossem painéis de vidro fosco, e uma seção de terminal interativo de verdade — o site literalmente se oferece para ser operado como um shell.

Rejeitado explicitamente: a variante irmã deste mesmo mockup em roxo/fúcsia/ciano vibrante (identidade "criativa/experimental") — o usuário escolheu a via monocromática, mais sóbria e correspondente ao registro "arquiteto corporativo" do que ao de "dev criativo colorido". Também rejeitado: qualquer prova social inventada (depoimentos, logos de clientes, métricas de terceiros) — tudo o que aparece na tela precisa vir do currículo real ou dos projetos reais.

**Key Characteristics:**
- Fundo quase preto absoluto, nunca cinza-neutro de UI genérica.
- Um único eixo cromático (grafite/aço-azulado) em vez de paleta multicor — a cor é reservada e por isso comunica precisão.
- Vidro fosco translúcido (bg branco a 2–6% de opacidade + borda a 6–14%) em vez de sombras para dar profundidade.
- Tipografia técnica (mono) para todo rótulo/metadado; tipografia editorial (Space Grotesk) só para títulos de seção e nome.
- Motion contido e funcional (reveal on scroll, tilt, contadores) — nunca decorativo sem propósito.

## Colors

Paleta quase monocromática: um único eixo de cinza-azulado (aço/grafite) carrega toda a expressão de cor; branco e preto absolutos fazem o contraste estrutural.

### Primary
- **Steel Periwinkle** (`#9fb2d6`): rótulos de seção ("01 — Sobre mim"), status, categorias de projeto, texto de metadado técnico. É a cor que aparece primeiro em cada seção — funciona como marcador de "isto é dado, não prosa".
- **Steel Periwinkle Bright** (`#8fa8d6`): estado mais saturado do mesmo tom — usado em elementos interativos/vivos: dot de status pulsante, cursor de digitação, prompt do terminal, comandos executados. Reserve para o que está "ativo agora".

### Secondary
- **Fog Slate** (`#aabcdd`): links, texto de chip/tag, nome da empresa na timeline, ícones sociais — a cor de "texto que também é call-to-action silenciosa".
- **Ash Silver** (`#a6a6b0`): bullets secundários (▸), palavra de destaque em headings ("arquiteto"), pontos separadores — acento mais discreto que o periwinkle.

### Tertiary
- **Brushed Chrome** (gradiente `#ffffff → #93a7cc 45% → #eef2f9`): texto com gradiente aplicado via `background-clip:text` — reservado exclusivamente para o sobrenome no hero, números de estatística e a palavra de impacto no CTA final ("extraordinário"). É o único lugar onde a cor "brilha".
- **Polished Aluminum** (gradiente `#f4f4f6 → #cfcfd6`, texto `#141418` sobre ele): todo botão de ação primária e o monograma "JV" — a única superfície clara e sólida da tela, o que a torna o ponto de maior contraste e atrai o olho para a ação.

### Neutral
- **Void Black** (`#0a0a0c`): fundo da página e do container raiz.
- **Panel Ink** (`#101014`) / **Deep Ink** (`#0b0d1a`): fundos de painel mais opacos (imagem de projeto, terminal, scrollbar track).
- **Frost White** (`#e8eaf2`): texto de corpo padrão; títulos usam branco puro (`#fff`).
- **Graphite Muted** (`#9298b6`) / **Graphite Faint** (`#6b7095`): texto secundário/legendas — dois degraus de "menos importante que o corpo".

Bordas de vidro fosco (`glass-border`, branco a 6–14% de opacidade) e o glow ambiente de fundo (`ambient-glow`, azul-acinzentado a 22–34% de opacidade) aparecem em várias intensidades conforme a densidade da superfície — a família de valores é a mesma, só a opacidade varia por contexto.

### Named Rules
**The One Hue Rule.** Toda cor de acento neste sistema vem da mesma família de aço-azulado (periwinkle/fog/ash). Não introduza um segundo matiz de acento (verde, laranja, roxo) — as exceções deliberadas são cores de identidade de terceiros, nunca escolha estética do site: `#dd0031` (marca Angular, footer), `#25d366` (marca WhatsApp, botão de contato), e as cores reais de `devicon-*-plain colored` nos ícones de tecnologia.

**The Aluminum-Is-Action Rule.** Superfície clara e sólida (gradiente Polished Aluminum) aparece só em CTAs primários e no monograma — nunca em cards, chips ou texto de corpo. Se um elemento não é "clique aqui" ou "isto é a marca", ele não recebe essa superfície.

## Typography

**Display Font:** Space Grotesk (com fallback `system-ui, sans-serif`)
**Body Font:** Manrope (com fallback `system-ui, sans-serif`)
**Label/Mono Font:** JetBrains Mono

**Character:** Space Grotesk dá aos títulos um caráter técnico-editorial (geométrico, levemente condensado, letter-spacing negativo) sem virar serifada-editorial nem grotesca-genérica; Manrope carrega o corpo com uma leitura confortável e humana; JetBrains Mono assina cada rótulo/eyebrow/terminal como "isto é dado de sistema, não copy de marketing".

### Hierarchy
- **Display** (700, `clamp(2rem, 4.5vw, 3.875rem)`, line-height 1.02, letter-spacing -0.03em): H1 do hero e H2 de cada seção. Sempre com uma palavra em Brushed Chrome ou Ash Silver como acento.
- **Title** (700, `clamp(1.5rem, 3vw, 2rem)`, line-height 1.1): nome de projeto, nome de vaga na timeline.
- **Body** (400, 1rem–1.03125rem, line-height 1.75–1.85): parágrafos descritivos; largura máxima ~540–760px por bloco.
- **Label** (500–600, 0.75rem–0.8125rem, letter-spacing 0.125–0.2em, uppercase): eyebrows de seção ("01 — Sobre mim"), categorias, nomes de campo no terminal — sempre em JetBrains Mono.

### Named Rules
**The Mono-Is-Metadata Rule.** Se o texto é um rótulo, timestamp, comando, versão ou categoria — vai em JetBrains Mono. Se é prosa para ser lida — vai em Manrope. Nunca misturar os dois papéis.

## Layout

Container central `max-width: 1240px` (1040–1080px nas seções de leitura mais estreita: terminal, contato), padding lateral fluido `clamp(20px, 5vw, 64px)`. Seções em pilha vertical única (sem grid de página, sem sidebar persistente) — a única exceção é a seção Stack, onde a coluna de competências fica `position: sticky` enquanto a coluna de categorias rola ao lado. Grid interno 2 colunas nas seções amplas (hero, sobre, stack, timeline) colapsando para 1 coluna abaixo de 980px; grid de stats 4→2 colunas abaixo de 520px. Espaçamento generoso entre seções (`90px` de padding vertical) — a página respira, nunca amontoa.

## Elevation & Depth

Sistema majoritariamente flat com profundidade por **camadas tonais translúcidas**, não sombra: cards usam fundo em gradiente de branco a 1.5–5.5% de opacidade sobre `Void Black`, com borda de 1px em branco a 6–14% de opacidade — o card "aparece" por contraste de opacidade, não por sombra projetada. Sombra de verdade (`box-shadow` com blur real) é reservada para elementos que literalmente flutuam sobre o layout: os cartões de código/tecnologia flutuantes no hero, botões CTA, e a janela do terminal.

### Shadow Vocabulary
- **cta-glow** (`box-shadow: 0 10px 30px rgba(0,0,0,.4)` sobre superfície Polished Aluminum): usado nos botões de ação primária — a sombra reforça que aquela superfície clara está literalmente elevada acima do fundo escuro.
- **float-card** (`box-shadow: 0 14px 40px rgba(0,0,0,.5)`): cartões flutuantes decorativos (snippet de código, badge de tecnologia) ancorados às bordas da foto no hero.
- **terminal-deep** (`box-shadow: 0 40px 100px rgba(0,0,0,.5), 0 0 0 1px rgba(196,198,210,.1)`): a janela de terminal — a sombra mais pesada do sistema, reservada para o componente mais "objeto físico" da tela.

### Named Rules
**The Flat-By-Default Rule.** Nenhum card de conteúdo (about, stack, projeto, timeline) recebe `box-shadow`. Profundidade vem de opacidade em camadas. Sombra real é só para objetos que a narrativa trata como "flutuando" (terminal, CTA, cartões decorativos do hero).

## Shapes

Cantos generosamente arredondados em toda a superfície — nunca cantos retos, nunca pill-shape fora de badges/chips/botões. Três escalas: `9px` (chips pequenos, teclas de comando), `16–22px` (cards de conteúdo, timeline), `24px` (blocos de destaque full-width: card "now", CTA de contato). Badges e tags sempre em `border-radius: 100px` (pill completo). Bordas são sempre 1px, nunca mais grossas, sempre em branco translúcido (ou no tom de acento quando o elemento é interativo).

## Components

### Buttons
- **Shape:** `border-radius: 12px` (CTAs grandes) ou `11px` (CTAs secundários inline).
- **Primary:** gradiente Polished Aluminum, texto `#141418`, peso 700, padding `15px 28px`, sombra `cta-glow`.
- **Secondary / Ghost:** fundo branco a 4% opacidade, borda branca a 14% opacidade, texto Frost White.
- **Hover / Focus:** sem mudança de cor brusca — a superfície já é clara; o feedback visual do sistema todo é via cursor customizado (anel cresce de 34px→54px e muda de cor ao pairar sobre qualquer link/botão).

### Chips (tags de skill/categoria)
- **Style:** fundo Steel Periwinkle a 10–16% opacidade, borda a 26–34% opacidade, texto Fog Slate ou Steel Periwinkle Bright.
- **State:** hover aumenta opacidade de fundo/borda e sobe o chip 2px (`translateY(-2px)`).

### Cards / Containers
- **Corner Style:** 16–24px conforme a seção (ver Shapes).
- **Background:** gradiente 160deg de branco 4–5.5%→1.2–1.5% opacidade sobre Void Black.
- **Shadow Strategy:** nenhuma — ver "The Flat-By-Default Rule" em Elevation.
- **Border:** 1px branco a 8–9% opacidade.
- **Internal Padding:** 24–40px conforme densidade do conteúdo.

### Navigation
- Barra fixa translúcida (`rgba(10,10,12,.55)` + `backdrop-filter: blur(16px)`), borda inferior 1px. Links em Manrope 500, cor Frost White com leve transparência; item ativo/CTA final ("Vamos conversar") sempre em superfície Polished Aluminum. Mobile: hambúrguer que abre painel flutuante translúcido arredondado, mesmo tratamento de vidro fosco do resto do sistema.

### Case Study Modal
Dialog acionado pelo botão "Ver case study completo" em cada card de projeto — substitui os antigos botões de "Código" (GitHub, removido: nenhum dos 3 projetos tem repositório público) e "Ver detalhes" (antes só rolava até o contato). Mantém a decisão de página única sem Angular Router: é um overlay, não uma rota. Estrutura fixa: categoria + badge de status (Em produção / Em desenvolvimento) → galeria de screenshots (via `ImageSlot`, mesmo princípio de nunca fingir imagem) → Problema → Arquitetura → Trade-offs (seção com título explícito "sem esconder o que não é perfeito" — limitações reais documentadas de propósito, não polidas para parecer perfeitas) → Testes → Resultado → stack chips → depoimento real em blockquote. Fecha com Esc, clique no backdrop ou botão de fechar; foco vai para o dialog ao abrir e volta ao elemento que abriu ao fechar.

### GitHub Activity Widget
Card de terminal (mesmo tratamento visual do bloco "ambiente de desenvolvimento" na seção Stack) que busca dados reais e ao vivo da API pública do GitHub no navegador do visitante — repositórios, seguidores, stars, linguagem principal. Três estados: carregando, pronto, erro (com fallback para o link direto do perfil). Nunca exibe número fabricado; na ausência de dados, mostra estado de erro honesto em vez de esconder ou inventar.

### Lighthouse Badge
Linha de texto mono discreta abaixo dos números da seção Stats, com os 4 scores reais de uma auditoria Lighthouse local (build de produção). É um snapshot estático versionado no código (não ao vivo) — deve ser re-executado e atualizado manualmente quando o site mudar de forma relevante ou for hospedado publicamente.

### Terminal Interativo (Signature Component)
Janela de terminal funcional (não decorativa): três dots de macOS, chips de atalho de comando, área de output com histórico real, input real que aceita comandos (`whoami`, `skills`, `projects`, `experience`, `contact`, `help`, `clear`, easter eggs como `sudo`/`ls`). É a demonstração mais literal do North Star "arquiteto que também opera terminal" — deve permanecer navegável por teclado (Enter para executar, foco visível no input) mesmo com o styling monocromático.

## Do's and Don'ts

### Do:
- **Do** manter todo acento de cor dentro da família periwinkle/fog/ash (`#8fa8d6`–`#aabcdd`–`#a6a6b0`) — um único eixo de matiz em toda a tela.
- **Do** usar o gradiente Brushed Chrome só em texto de destaque hero-level (nome, números de stat, palavra final do CTA) — nunca em corpo de texto ou botões.
- **Do** manter ícones de tecnologia (`devicon-*-plain colored`) com suas cores de marca reais, mesmo dentro do tema monocromático — eles são prova técnica, não decoração de marca do site.
- **Do** respeitar `prefers-reduced-motion`: reveal-on-scroll, partículas, tilt e contadores devem ter uma versão estática/instantânea equivalente.

### Don't:
- **Don't** introduzir um segundo matiz de acento (verde, roxo, laranja) — essa é a variante vibrante rejeitada pelo usuário.
- **Don't** aplicar `box-shadow` em cards de conteúdo comuns — profundidade vem só de opacidade em camada (ver Elevation).
- **Don't** inventar screenshots de projeto, depoimentos, logos de cliente ou métricas não confirmadas no currículo/PRODUCT.md — usar placeholder explícito até o usuário fornecer os assets reais.
- **Don't** usar cantos retos ou bordas com mais de 1px em qualquer superfície.

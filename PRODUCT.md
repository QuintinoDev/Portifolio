# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two primary audiences land on this single page:

1. **Recrutadores e gestores de tecnologia** avaliando João Victor para vagas CLT de Desenvolvedor Full Stack / Backend **Pleno**. Chegam via LinkedIn, indicação ou processo seletivo; avaliam em poucos minutos se o stack, senioridade e histórico batem com a vaga aberta.
2. **Potenciais clientes de freelance/consultoria** (donos de negócio ou outros devs/agências) buscando alguém para construir ou arquitetar um sistema sob demanda. Avaliam projetos entregues, stack e forma de contato.

Ambos os públicos compartilham a mesma página — não há segmentação de jornada por tipo de visitante.

## Product Purpose

Portfólio pessoal de João Victor Quintino de Brito: uma página única que demonstra competência técnica (backend .NET/ASP.NET Core, frontend Angular/Blazor, arquitetura de software) através de projetos reais entregues, trajetória profissional e stack dominada. Sucesso = o visitante baixa o CV, manda mensagem (e-mail/WhatsApp) ou acessa o GitHub/LinkedIn.

## Positioning

Não é um portfólio genérico de "dev júnior com todo templates" — o diferencial é a combinação de **arquitetura de software com disciplina operacional**: 5 anos de Exército Brasileiro (liderança, gestão sob pressão) somados a formação de pós-graduação em Arquitetura e Padrões de Projeto, aplicados em SaaS reais entregues (JurisDoc e Novo Império, em produção) e em soluções honestas sobre trade-off (ex: JurisDoc corrigiu vazamento de dado entre tenants encontrado em QA interna, documentado abertamente no case study em vez de escondido). O ângulo é "arquiteto de software", não "codador de tarefas".

## Operating Context

- Página é o único ativo do repositório `Portifolio` (antes HTML/CSS/JS estático, agora reconstruída em Angular).
- Currículo fonte de verdade: `public/assets/docs/Curriculo_JoaoVictor.pdf` (também disponível para download no site).
- Foto profissional: `public/assets/images/foto_trabalho.png`.
- Contato real: e-mail `joaovictorquintinobrito@gmail.com`, WhatsApp `+55 61 98384-2637`, GitHub `github.com/QuintinoDev`, LinkedIn `linkedin.com/in/joão-quintino-dev`.
- Navegação por âncoras dentro de uma única página (sem Angular Router) — decisão confirmada com o usuário.

## Capabilities and Constraints

- Site 100% estático no cliente — sem backend próprio, sem formulário com submissão server-side (contato via `mailto:` e link `wa.me`).
- Três projetos reais a exibir, cada um com case study completo (problema → arquitetura → trade-offs → testes → resultado) aberto via modal na própria página — sem Angular Router, mantendo o Product Principle "página única":
  - **JurisDoc** (SaaS jurídico próprio — João é dev e sócio, não freelance vendido): .NET 8, Clean Architecture em 5 projetos, Angular ×3 frontends, PostgreSQL, SignalR, IA (Anthropic) para extração estruturada de contrato. Em produção para o escritório Felipe Alexandre Advocacia.
  - **Novo Império** (projeto vendido para cliente real, Daniel Silva): ASP.NET Core + Blazor WebAssembly, PostgreSQL, Docker. Em produção (shopbarbearia.com.br).
  - **Plataforma de Gestão Imigratória** (vendido para cliente real, Felipe Alexandre): ainda em fase de especificação — desenvolvimento com início previsto para a semana de 2026-07-24. Case study reflete isso: seção de arquitetura marcada como "planejado", sem trade-offs reais ainda (serão adicionados durante o desenvolvimento), sem screenshots.
- **Nenhum dos 3 projetos tem repositório público disponível** — todos são fechados (cliente ou SaaS próprio não open-source). O CTA de projeto não linka GitHub; a prova é o case study (arquitetura real, screenshots, depoimento), não código aberto.
- **Sem link de demo ao vivo** — confirmado com o usuário: os sistemas são vendidos/entregues a clientes, sem ambiente de demonstração público disponível.
- Terminal interativo (easter egg) com comandos falsos (`whoami`, `skills`, `projects`, `experience`, `contact`, `help`, `clear`) — conteúdo determinístico, sem IA real por trás.
- Stack de implementação: Angular 20 standalone components, TypeScript, CSS puro (sem framework de CSS).

## Brand Commitments

- Nome e identidade: "João Victor" / iniciais "JV" como monograma.
- Tom de voz: técnico, direto, em português, com leve informalidade (`// olá, meu nome é`, comentários estilo código).
- Tema visual confirmado com o usuário: paleta **"Grafite"** monocromática (prata/azul-acinzentado sobre preto), não a variante roxo/fúcsia/ciano do outro mockup fornecido.
- Fontes de marca: Space Grotesk (display), Manrope (corpo), JetBrains Mono (código/labels técnicos). Ícones via devicon (tecnologias) e Font Awesome (UI).

## Evidence on Hand

- Currículo real (`Curriculo_JoaoVictor.pdf`) com histórico completo: Comp Line (Full Stack Jr, jul/2025–atual; estágio mar/2025–jul/2025), Exército Brasileiro (Sargento Temporário, mar/2020–mar/2025), pós-graduações GRAN Faculdade, graduação UDF, certificação AZ-900 em andamento.
- Mockup de referência completo e funcional (duas variantes de cor) fornecido pelo usuário, já analisado — serve como fonte de copy, estrutura de seções e comportamento de interação, não como código final.
- Dados reais e ao vivo da API pública do GitHub (`github.com/QuintinoDev`): repositórios públicos, seguidores, stars, linguagem mais usada — buscados em tempo real no navegador do visitante, nunca fabricados.
- Auditoria Lighthouse real (desktop, build de produção local): Performance 90, Acessibilidade 100, Boas Práticas 100, SEO 100 (jul/2026) — snapshot estático exibido no site; deve ser re-auditado e atualizado quando o site for hospedado publicamente ou sofrer mudanças relevantes.
- **Fatos de arquitetura de JurisDoc e Novo Império extraídos direto do código-fonte real** (repos em `C:\Users\joaov\source\repos\JurisDoc`, `jurisdoc-admin`, `jurisdoc-portal`, `jurisdoc-web`, `QuintinoDev\NovoImperio`) — usados para escrever os case studies em `portfolio-data.ts` (`CaseStudy.problem/architecture/tradeoffs/testing/result`). Inclui trade-offs reais e honestos (ex: JurisDoc corrigiu vazamento de dado entre tenants encontrado em QA interna; Novo Império não valida conflito de agendamento no servidor, só no frontend) — não esconder essas limitações reais em revisões futuras, elas são parte do que dá credibilidade ao case study.
- **3 depoimentos reais fornecidos pelo usuário** (JurisDoc: Felipe Alexandre, sócio; Novo Império: Daniel Silva, dono da barbearia; Gestão Imigratória: Felipe Alexandre, cliente) — armazenados em `Project.caseStudy.testimonial` em `portfolio-data.ts`. **Atenção**: o depoimento da Gestão Imigratória usa tempo verbal de sistema já entregue ("o projeto trouxe...", "facilita o controle") mas o projeto ainda está em especificação (dev começa a semana de 2026-07-24) — mantido como fornecido pelo usuário, mas rotulado na UI como "feedback sobre o discovery/especificação" para não implicar entrega já feita. Revisar com o usuário se esse enquadramento está correto.
- **8 screenshots reais foram fornecidas, testadas e depois revertidas.** O usuário salvou 8 imagens (4 JurisDoc: dashboard, funil de leads, calendário, login; 4 Novo Império: agenda, serviços, barbeiros, login) nas pastas `public/assets/images/projects/{jurisdoc,novo-imperio}/`. Vieram via WhatsApp, que recomprime e redimensiona a imagem (JPEG com baixa qualidade, ~1600px) — tratamento com sharpening/contraste (Pillow) ajudou pouco, o usuário considerou o resultado ruim. **Decisão: voltamos para `src: null` (placeholder) em `portfolio-data.ts` até haver uma fonte melhor** (print novo direto no PC, sem passar por WhatsApp, salvo direto nas pastas acima — como o ambiente de execução roda na própria máquina do usuário, cópia local não perde qualidade nenhuma). Os arquivos de baixa qualidade foram apagados das pastas.
- Sem prova social de terceiros além do que foi listado acima — nada além disso deve ser inventado.
- **Hospedagem: GitHub Pages**, decidido com o usuário. Repo `QuintinoDev/Portifolio` → Pages de projeto, URL final `https://quintinodev.github.io/Portifolio/`. Deploy via `.github/workflows/deploy-pages.yml` (build com `--base-href /Portifolio/`, testes rodam antes do deploy). Após o primeiro push, checar em Settings → Pages que a fonte está como "GitHub Actions".

## Open Items (need user-supplied info before implementing)

- **Screenshots reais em melhor qualidade**: tirar print novo direto no PC (não pelo WhatsApp) e salvar direto em `public/assets/images/projects/jurisdoc/` e `.../novo-imperio/` — depois trocar `caseStudy.screenshots[].src` de `null` para o caminho real em `portfolio-data.ts`.
- **Confirmar o enquadramento do depoimento da Gestão Imigratória** (ver nota acima) — está publicado como "feedback sobre discovery", não como resultado entregue.
- Quando o desenvolvimento da Plataforma de Gestão Imigratória avançar: atualizar `caseStudy.architecture` (hoje descrito como planejado) e preencher `tradeoffs`/`screenshots` com fatos reais, como foi feito para JurisDoc e Novo Império.
- **Domínio próprio** (opcional): se o usuário quiser um domínio customizado no lugar de `quintinodev.github.io/Portifolio`, precisa configurar `public/CNAME` + DNS — não feito ainda.

## Product Principles

1. **Arquiteto, não codador de tarefas.** Toda decisão de copy e ênfase visual reforça profundidade técnica e ownership arquitetural, não só listagem de tecnologias.
2. **Prova real acima de afirmação.** Projetos, trajetória e stack devem refletir exatamente o currículo/mockup fornecidos — nunca inventar métricas, depoimentos ou clientes.
3. **Dois públicos, uma página.** Nenhuma decisão de design deve favorecer recrutador CLT em detrimento de cliente freelance (ou vice-versa) — CTAs de CV e de contato para projeto convivem.
4. **Página única, sem fricção de navegação.** Toda a experiência vive em uma rota, navegação por âncora; não introduzir Router nem rotas adicionais nesta fase.
5. **Craft imperativo com propósito.** Efeitos (partículas, cursor customizado, tilt, terminal) existem para reforçar a narrativa técnica ("arquiteto que também escreve código bonito"), não como enfeite gratuito — cada um deve continuar acessível (reduced-motion, teclado, mobile) quando implementado.

## Accessibility & Inclusion

Nenhum requisito de acessibilidade específico foi levantado pelo usuário além do padrão esperado de um site público (contraste, navegação por teclado, `prefers-reduced-motion` para os efeitos de movimento). Tratar como padrão WCAG AA razoável, sem introduzir requisito adicional não confirmado.

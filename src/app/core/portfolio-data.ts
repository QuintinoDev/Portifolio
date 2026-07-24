export interface HeroIcon {
  cls: string;
  name: string;
}

export interface Stat {
  num: number;
  suffix: string;
  label: string;
}

export interface CoreSkill {
  name: string;
  cls: string;
  level: number;
  label: string;
}

export interface StackCategory {
  title: string;
  items: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface CaseStudyScreenshot {
  src: string | null;
  alt: string;
}

export interface CaseStudy {
  status: 'delivered' | 'in-development';
  ownership: 'client' | 'own-saas';
  problem: string;
  architecture: string;
  tradeoffs: string[];
  testing: string;
  result: string;
  screenshots: CaseStudyScreenshot[];
  testimonial?: Testimonial;
}

export interface Project {
  no: string;
  slotId: string;
  shotDescription: string;
  category: string;
  name: string;
  desc: string;
  bullets: string[];
  stack: string[];
  caseStudy: CaseStudy;
}

export interface TimelineEntry {
  period: string;
  role: string;
  company: string;
  points: string[];
}

export interface EducationEntry {
  title: string;
  place: string;
}

export interface NowItem {
  iconClass: string;
  title: string;
  desc: string;
}

export interface SocialLink {
  name: string;
  cls: string;
  url: string;
}

export const PROFILE = {
  firstName: 'João Victor',
  lastName: 'Quintino',
  fullName: 'João Victor Quintino de Brito',
  roleLine1: 'Full Stack Pleno',
  roleLine2: 'Arquiteto de Software',
  location: 'Brasília — DF',
  availability: 'Disponibilidade imediata · aberto a mudanças e viagens · CNH B.',
  email: 'joaovictorquintinobrito@gmail.com',
  whatsappDisplay: '(61) 98384-2637',
  whatsappUrl: 'https://wa.me/5561983842637',
  resumeUrl: 'assets/docs/Curriculo_JoaoVictor.pdf',
  photoUrl: 'assets/images/foto_trabalho.png',
};

export const TYPED_WORDS = [
  'ASP.NET Core',
  'Angular',
  'PostgreSQL',
  'Clean Architecture',
  'Azure DevOps',
  'Docker',
];

export const HERO_ICONS: HeroIcon[] = [
  { cls: 'devicon-csharp-plain colored', name: 'C#' },
  { cls: 'devicon-dotnetcore-plain colored', name: '.NET' },
  { cls: 'devicon-angular-plain colored', name: 'Angular' },
  { cls: 'devicon-typescript-plain colored', name: 'TypeScript' },
  { cls: 'devicon-postgresql-plain colored', name: 'PostgreSQL' },
  { cls: 'devicon-microsoftsqlserver-plain colored', name: 'SQL Server' },
  { cls: 'devicon-docker-plain colored', name: 'Docker' },
  { cls: 'devicon-azuredevops-plain colored', name: 'Azure DevOps' },
  { cls: 'devicon-java-plain colored', name: 'Java' },
  { cls: 'devicon-spring-plain colored', name: 'Spring Boot' },
];

/**
 * Real scores from a local Lighthouse audit (desktop preset) run against the
 * production build of this exact site. Not a live/self-updating measurement —
 * re-run manually and update this constant + date whenever the build changes
 * meaningfully. Numbers on real hosting (CDN, compression) will differ.
 */
export const LIGHTHOUSE_SCORES = {
  performance: 90,
  accessibility: 100,
  bestPractices: 100,
  seo: 100,
};
export const LIGHTHOUSE_AUDIT_DATE = 'jul/2026';

export const STATS: Stat[] = [
  { num: 5, suffix: '+', label: 'Anos em tecnologia' },
  { num: 2, suffix: '', label: 'Pós-graduações' },
  { num: 15, suffix: '+', label: 'Tecnologias no stack' },
  { num: 100, suffix: '%', label: 'Foco em Clean Arch.' },
];

export const ABOUT_TAGS: string[] = [
  'SOLID',
  'Clean Architecture',
  'DDD',
  'Design Patterns',
  'CI/CD',
  'Microsserviços',
  'JWT / RBAC',
];

export const CORE_SKILLS: CoreSkill[] = [
  { name: 'C# / .NET', cls: 'devicon-csharp-plain colored', level: 92, label: 'Avançado' },
  { name: 'ASP.NET Core', cls: 'devicon-dotnetcore-plain colored', level: 90, label: 'Avançado' },
  { name: 'SQL Server / T-SQL', cls: 'devicon-microsoftsqlserver-plain colored', level: 88, label: 'Avançado' },
  { name: 'Angular / Blazor', cls: 'devicon-angular-plain colored', level: 80, label: 'Sólido' },
  { name: 'Java / Spring Boot', cls: 'devicon-spring-plain colored', level: 74, label: 'Exército · legado' },
  { name: 'Docker / Azure DevOps', cls: 'devicon-docker-plain colored', level: 78, label: 'Sólido' },
  { name: 'PostgreSQL', cls: 'devicon-postgresql-plain colored', level: 82, label: 'Sólido' },
];

export const ENV_COMMANDS: { cmd: string; args: string; value: string }[] = [
  { cmd: 'dotnet', args: '--version', value: '10.0.100' },
  { cmd: 'ng', args: 'version', value: 'Angular CLI 21.0' },
  { cmd: 'java', args: '-version', value: 'Temurin 21 (LTS)' },
  { cmd: 'docker', args: '--version', value: '27.x' },
  { cmd: 'psql', args: '--version', value: 'PostgreSQL 17' },
];

export const STACK_CATEGORIES: StackCategory[] = [
  { title: 'Linguagens', items: ['C#', 'Java', 'TypeScript', 'JavaScript', 'SQL (T-SQL)', 'HTML', 'CSS'] },
  {
    title: 'Backend',
    items: ['ASP.NET Core', 'ASP.NET MVC', 'Entity Framework Core', 'Web API', 'Spring Boot', 'Hibernate/JPA', 'SOAP'],
  },
  { title: 'Frontend', items: ['Angular', 'Blazor WebAssembly', 'SPA', 'jQuery', 'Bootstrap'] },
  {
    title: 'Banco de dados',
    items: ['SQL Server', 'PostgreSQL', 'MySQL', 'Procedures / Views / Triggers', 'Tuning de queries'],
  },
  {
    title: 'DevOps & Cloud',
    items: ['Azure DevOps', 'CI/CD', 'Docker', 'Git / GitFlow', 'NuGet', 'Maven', 'VPS', 'Azure'],
  },
  {
    title: 'Arquitetura & testes',
    items: ['Clean Architecture', 'SOLID', 'DDD', 'xUnit', 'NUnit', 'JUnit', 'Postman', 'Swagger/OpenAPI'],
  },
];

export const PROJECTS: Project[] = [
  {
    no: '01',
    slotId: 'proj-jurisdoc',
    shotDescription: 'Screenshot do JurisDoc (dashboard/kanban)',
    category: 'SaaS · Gestão Jurídica',
    name: 'JurisDoc',
    desc: 'Plataforma de gestão para escritórios de advocacia — nasceu para resolver um problema bem concreto: contratos chegavam como PDF sem nenhum dado estruturado por trás, impossível de cruzar ou somar sem abrir arquivo por arquivo.',
    bullets: [
      'Clean Architecture em 5 projetos .NET; upload de contrato cai num worker que extrai o texto e usa IA (Anthropic) para estruturar os dados — não para escrever a cláusula.',
      'Dashboard comercial, calendário de vencimentos, funil de leads via WhatsApp com bot de IA e central de chamados do cliente, tudo em tempo real via SignalR.',
      '3 frontends Angular separados por público (equipe interna, portal do cliente, backoffice multi-tenant) e por superfície de segurança.',
    ],
    stack: ['.NET 8', 'Angular', 'PostgreSQL', 'Docker', 'SignalR', 'IA (Anthropic)'],
    caseStudy: {
      status: 'delivered',
      ownership: 'own-saas',
      problem:
        'O escritório Felipe Alexandre Advocacia recebia contratos como PDF escaneado ou digitado, sem nenhum dado estruturado por trás — impossível cruzar informação, calcular comissão ou saber o que estava vencendo sem abrir arquivo por arquivo. A captação de leads vivia espalhada entre WhatsApp e planilha, sem funil nem histórico.',
      architecture:
        'Clean Architecture em 5 projetos .NET (Model / Business / Data / API / Tests). O upload de um contrato cai num BackgroundService que roda a cada 30s, extrai o texto do PDF e usa a API da Anthropic para estruturar os dados em um contrato — dados que alimentam o dashboard comercial (total vendido, ticket médio, comissões, meta do ano) e o calendário de vencimentos. Notificações em tempo real via SignalR avisam a equipe e o cliente. Os provedores de IA ficam atrás de uma interface plugável (Anthropic / OpenAI / Mock) — hoje só a Anthropic está ligada em produção.',
      tradeoffs: [
        'Decisão deliberada de não usar IA para escrever o texto do contrato em si — a geração é por template HTML com substituição de placeholders, justamente para não arriscar alucinação num documento juridicamente vinculante. A IA estrutura dado, não redige cláusula.',
        'Multi-tenancy foi adicionado depois, não veio no desenho original: numa rodada de QA interna encontramos vazamento de dado entre escritórios (um via parcela/usuário de outro). A correção foi global query filters do EF Core em 16 tabelas via migration — prefiro contar essa história a esconder que ela aconteceu. Foi pego em QA, antes de qualquer cliente perceber, e virou processo: toda tabela sensível nova já nasce com o filtro.',
        'Autorização por papel (RBAC) ainda está em planejamento — hoje qualquer usuário autenticado tem acesso equivalente, com exceção de um endpoint com checagem de SuperAdmin. É um item aberto e documentado, não um ponto cego.',
      ],
      testing:
        '508 testes unitários no backend cobrindo services, repositórios, workers, filtros e middleware. Os dois frontends Angular relevantes fecham 38/38 testes (Vitest). O deploy só builda e sobe a imagem se os testes passarem.',
      result:
        'Em produção real para o escritório Felipe Alexandre Advocacia: dashboard comercial, funil de leads via WhatsApp com bot de IA (hoje na versão 4 do prompt, depois de ajustes a partir de falhas reais em produção), calendário financeiro e central de chamados do cliente.',
      screenshots: [
        { src: null, alt: 'JurisDoc — Dashboard comercial com métricas de vendas, comissões e meta do ano' },
        { src: null, alt: 'JurisDoc — Funil de leads (Kanban) integrado ao WhatsApp' },
        { src: null, alt: 'JurisDoc — Calendário de vencimentos com visão financeira do período' },
        { src: null, alt: 'JurisDoc — Tela de acesso à plataforma' },
      ],
      testimonial: {
        quote:
          'O JurisDoc foi pensado para resolver problemas reais da rotina de um escritório de advocacia. A centralização de clientes, atendimentos, tickets e processos proporciona uma visão muito mais clara da operação e cria uma base sólida para o crescimento da empresa.',
        author: 'Felipe Alexandre',
        role: 'Advogado, sócio do JurisDoc',
      },
    },
  },
  {
    no: '02',
    slotId: 'proj-barbearia',
    shotDescription: 'Screenshot do sistema de barbearias',
    category: 'SaaS · Agendamento',
    name: 'Novo Império — Gestão para Barbearias',
    desc: 'Sistema de agendamento para uma barbearia com múltiplos profissionais, vendido para um cliente real — substituiu a agenda de papel e o controle manual de disponibilidade de cada barbeiro.',
    bullets: [
      'API em ASP.NET Core + Blazor WebAssembly; autenticação JWT com escopo por papel — um barbeiro só enxerga a própria agenda, mesmo tentando requisitar a de outro.',
      'Disponibilidade modelada em 3 camadas: horário recorrente, bloqueios pontuais (almoço) e overrides por dia específico (folga, troca de última hora).',
      '3 suítes de teste reais (unitário, integração com Postgres via Testcontainers, frontend com bUnit) com CI que bloqueia deploy se algo quebrar.',
    ],
    stack: ['ASP.NET Core', 'Blazor WASM', 'PostgreSQL', 'Docker', 'xUnit'],
    caseStudy: {
      status: 'delivered',
      ownership: 'client',
      problem:
        'Barbearia com múltiplos profissionais dependia de agenda manual — sem controle real de disponibilidade por barbeiro. Folga, horário de almoço e troca de última hora geravam conflito de horário e overbooking.',
      architecture:
        'API em ASP.NET Core com camadas API → Business → Data → Model, autenticação via ASP.NET Identity + JWT com escopo por papel (um barbeiro autenticado só vê a própria agenda, mesmo que tente requisitar o ID de outro). Frontend em Blazor WebAssembly consumindo a API via serviços tipados. A disponibilidade de cada barbeiro é modelada em três camadas: horário de trabalho recorrente, bloqueios pontuais (almoço, por hora) e overrides por dia específico (folga inesperada, trabalhou num domingo).',
      tradeoffs: [
        'A prevenção de conflito de horário roda no frontend (o Blazor calcula os horários livres antes de renderizar a agenda), sem uma validação equivalente no servidor ao criar o agendamento — uma limitação real, que documento em vez de esconder.',
        'Datas e horas são guardadas como número inteiro (ex: 202607241400) em vez de DateTime — mais barato para consultas por intervalo, ao custo de precisar de lógica manual de codificação/decodificação.',
        'Autorização por política (guards mais finos por papel) ficou no backlog — hoje o controle é por checagem manual de role, decisão consciente de escopo, documentada no próprio histórico do projeto.',
        'O frontend Blazor (arquivos estáticos) ficou de fora do Docker Compose — só API e Postgres são containerizados; o Nginx da VPS serve os arquivos direto, simplificando o deploy.',
      ],
      testing:
        '3 suítes reais: unitário (xUnit + EF Core InMemory, cobrindo validação de agendamento e emissão de JWT), integração (WebApplicationFactory + Testcontainers com Postgres real, verificando 401/403/200 por papel) e frontend (bUnit). CI no GitHub Actions roda as três a cada push; o deploy de produção só acontece se tudo passar.',
      result:
        'Em produção real para a barbearia Novo Império, rodando em Docker + PostgreSQL 16 numa VPS. A migração de systemd para Docker foi feita no servidor ao vivo, sem downtime, preservando as chaves de Data Protection do ASP.NET.',
      screenshots: [
        { src: null, alt: 'Novo Império — Agenda semanal por barbeiro' },
        { src: null, alt: 'Novo Império — Gerenciamento de serviços oferecidos' },
        { src: null, alt: 'Novo Império — Gerenciamento de barbeiros e horários' },
        { src: null, alt: 'Novo Império — Tela de login do sistema' },
      ],
      testimonial: {
        quote:
          'Antes, muitas informações ficavam espalhadas e dependíamos de processos manuais para organizar a rotina. Com o sistema, conseguimos centralizar os agendamentos, clientes e informações da barbearia em um único ambiente. A solução tornou o dia a dia muito mais organizado e profissional.',
        author: 'Daniel Silva',
        role: 'Dono da Barbearia Novo Império',
      },
    },
  },
  {
    no: '03',
    slotId: 'proj-imigracao',
    shotDescription: 'Screenshot do sistema de gestão imigratória',
    category: 'SaaS · LegalTech Imigratório',
    name: 'Plataforma de Gestão Imigratória',
    desc: 'Sistema em fase de especificação para um escritório de assessoria imigratória internacional, unificando uma operação hoje fragmentada entre WhatsApp, Trello e CRM. Desenvolvimento começa em breve.',
    bullets: [
      'Motor de workflow configurável por país e tipo de visto, com jornada de etapas própria por produto migratório (planejado).',
      'Duas IAs generativas: atendimento ao cliente no WhatsApp (com handoff humano) e assistente jurídico interno com RAG (planejado).',
      'Contratos com assinatura eletrônica, Kanban/calendário sincronizados, OWASP e LGPD by design (planejado).',
    ],
    stack: ['.NET 10', 'Angular 21 (Signals)', 'PostgreSQL + pgvector', 'Redis', 'RAG / IA', 'Clicksign'],
    caseStudy: {
      status: 'in-development',
      ownership: 'client',
      problem:
        'Escritório de assessoria imigratória internacional (Europa, EUA, Brasil e Mercosul) com operação fragmentada entre WhatsApp, Trello e CRM — sem visão centralizada do processo de cada cliente por país e tipo de visto.',
      architecture:
        'Escopo especificado, ainda não implementado: motor de workflow configurável por país/tipo de visto, duas IAs generativas (atendimento no WhatsApp com handoff humano, e assistente jurídico interno com RAG via pgvector), contratos com assinatura eletrônica e Kanban/calendário sincronizados. As decisões finais de arquitetura e os trade-offs reais serão documentados aqui conforme o desenvolvimento avança.',
      tradeoffs: [],
      testing: 'Ainda não aplicável — projeto em fase de especificação.',
      result: 'Em especificação; desenvolvimento com início previsto para esta semana.',
      screenshots: [],
      testimonial: {
        quote:
          'O projeto trouxe uma forma muito mais organizada de acompanhar os processos e informações dos clientes. Ter uma visão centralizada de cada etapa facilita o controle das atividades e reduz bastante a dependência de planilhas e informações espalhadas.',
        author: 'Felipe Alexandre',
        role: 'Advogado — feedback sobre o discovery e a especificação do projeto',
      },
    },
  },
];

/** Closing statement about the approach across all three projects — not a client testimonial. */
export const PROJECTS_PHILOSOPHY =
  'Mais do que desenvolver funcionalidades, meu objetivo em cada projeto foi entender o problema, estruturar uma solução escalável e transformar processos complexos em experiências mais simples para quem utiliza o sistema.';

export const TIMELINE: TimelineEntry[] = [
  {
    period: 'Jul/2025 — Atual',
    role: 'Desenvolvedor Full Stack Júnior',
    company: 'Comp Line',
    points: [
      'APIs RESTful em ASP.NET Core com JWT, refresh tokens e RBAC.',
      'Stored procedures, views e funções em SQL Server para alto volume transacional.',
      'Pipelines CI/CD no Azure DevOps, containerização com Docker e integrações SOAP com SAP.',
      'Interfaces SPA em Blazor e Angular integradas às APIs internas.',
    ],
  },
  {
    period: 'Mar/2025 — Jul/2025',
    role: 'Estagiário de Desenvolvimento Full Stack',
    company: 'Comp Line',
    points: [
      'Funcionalidades em C# e ASP.NET, criação e consumo de APIs REST.',
      'Git, GitFlow e Azure DevOps com cerimônias Scrum (sprints, refinamentos, revisões).',
      'Correção de bugs, testes e apoio em refatorações de módulos existentes.',
    ],
  },
  {
    period: 'Mar/2020 — Mar/2025',
    role: 'Sargento Temporário',
    company: 'Exército Brasileiro',
    points: [
      'Manutenção e evolução de sistemas legados em Java (produção de alta criticidade).',
      'APIs RESTful em Spring Boot / Spring MVC, Hibernate/JPA, Maven e JUnit.',
      '5 anos consolidando disciplina, liderança e perfil analítico sob pressão.',
    ],
  },
];

export const EDUCATION: EducationEntry[] = [
  { title: 'Pós — Arquitetura e Desenvolvimento de Sistemas (Padrões de Projeto)', place: 'GRAN Faculdade · Concluído' },
  { title: 'Pós — Linguagens e Paradigmas de Programação', place: 'GRAN Faculdade · Concluído' },
  { title: 'Graduação — Análise e Desenvolvimento de Sistemas', place: 'UDF — Centro Universitário · Concluído' },
];

export const NOW_ITEMS: NowItem[] = [
  {
    iconClass: 'fa-solid fa-cloud',
    title: 'Certificações Azure',
    desc: 'Finalizando o AZ-900 e traçando o roadmap rumo ao AZ-204 e AZ-400.',
  },
  {
    iconClass: 'fa-solid fa-diagram-project',
    title: 'Arquitetura & microsserviços',
    desc: 'Aprofundando design de sistemas escaláveis, DDD e padrões de projeto na prática.',
  },
  {
    iconClass: 'fa-solid fa-arrow-trend-up',
    title: 'Transição para Pleno',
    desc: 'Buscando ownership técnico, escalabilidade e arquitetura de soluções corporativas.',
  },
];

export const SOCIALS: SocialLink[] = [
  { name: 'GitHub', cls: 'devicon-github-original', url: 'https://github.com/QuintinoDev' },
  { name: 'LinkedIn', cls: 'devicon-linkedin-plain', url: 'https://www.linkedin.com/in/jo%C3%A3o-quintino-dev/' },
];

export const CMD_CHIPS: string[] = ['help', 'whoami', 'skills', 'projects', 'experience', 'contact', 'clear'];

export const NAV_LINKS: { href: string; label: string }[] = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#stack', label: 'Stack' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#experiencia', label: 'Trajetória' },
  { href: '#terminal', label: 'Terminal' },
];

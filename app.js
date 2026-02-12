// ========= CONFIG (edite aqui rápido) =========
const PROFILE = {
  name: "João Victor Quintino de Brito",
  role: "Full Stack Developer",
  headline: "Construo APIs e sistemas corporativos com foco em segurança, escalabilidade e impacto no negócio.",

  email: "jvqb.dev@gmail.com",
  phone: "+55 61 98384-2637",
  location: "Brasilia - DF",
  github: "https://github.com/QuintinoDev",
  linkedin: "https://www.linkedin.com/in/jo%C3%A3o-quintino-dev/",
  cvUrl: "./arquivos/Curriculo Desenvolvimento.pdf",
  primaryProjectUrl: "https://github.com/QuintinoDev/NovoImperio",

  // WhatsApp: use DDD + numero, so digitos (ex: 5561999999999)
  whatsappNumber: "5561983842637",
  whatsappMessage: "Olá, João! Vi seu portfólio e gostaria de conversar sobre uma oportunidade.",

  // Sua imagem PNG sem fundo
  heroImageSrc: "./imagens/foto_trabalho.png",

  stack: ["C#", "ASP.NET Core", "Blazor", "Java", "Angular", "PostgreSQL", "SQL Server", "JWT", "Docker", "Azure DevOps"],

  specialties: [
    "APIs REST com ASP.NET Core",
    "Autenticação JWT + RBAC",
    "Integrações com sistemas externos",
    "Modelagem SQL e performance"
  ],

  availability: {
    location: "Brasília - DF",
    workMode: "Híbrido / Remoto",
    english: "Intermediário (leitura técnica e conversação básica)",
    responseTime: "Retorno em até 24h útil",
    mobility: "Disponível para viagens"
  },

  objective:
    "Atuar como Desenvolvedor Full Stack / Backend, contribuindo com APIs, integrações, modelagem de dados e CI/CD, evoluindo continuamente em arquitetura, segurança e escalabilidade.",

  summary:
    "Desenvolvedor Full Stack com foco em ASP.NET Core, integrações entre sistemas e soluções corporativas. Experiência com SQL Server, PostgreSQL, CI/CD no Azure DevOps, Docker e arquitetura em camadas.",

  education: [
    "Pós-graduação em Arquitetura e Desenvolvimento de Sistemas com ênfase em Padrões de Projeto (GRAN) - Concluído",
    "Pós-graduação em Linguagens e Paradigmas de Programação (GRAN) - Concluído",
    "Análise e Desenvolvimento de Sistemas (UDF) - Concluído"
  ],

  certifications: [
    "Microsoft Certified: Azure Fundamentals (AZ-900) - Em andamento"
  ],

  competencies: {
    "Linguagens e frameworks": ["C#", "ASP.NET Core", "Java", "Angular", "Blazor", "Spring Boot", "Quarkus"],
    "Banco de dados": ["SQL Server", "PostgreSQL", "MySQL", "Microsoft Access"],
    "DevOps e ferramentas": ["Docker", "Azure DevOps", "Git", "GitHub", "Swagger", "CI/CD"],
    "Arquitetura e boas práticas": ["Clean Architecture", "SOLID", "Design Patterns", "DDD", "JWT", "RBAC", "APIs RESTful"],
    "Metodologias": ["Scrum", "GitFlow"]
  },

  // Atualize com numeros reais para causar impacto
  metrics: [
    { value: "3", label: "Projetos back-end completos", hint: "Entregues na empresa" },
    { value: "5", label: "Integrações externas", hint: "SAP, Zapsing, e-Nota, Assina e outros" },
    { value: "2", label: "APIs corporativas", hint: "Cetificate e Operation" },
    { value: "3", label: "Sistemas em produção", hint: "Copersucar + Barbearia + Cetificate" },
  ],
};

// ========= APP =========
const app = document.getElementById("app");

function buildWhatsAppUrl(numberDigitsOnly, message) {
  const n = String(numberDigitsOnly || "").replace(/\D/g, "");
  const text = encodeURIComponent(message || "");
  return `https://wa.me/${n}?text=${text}`;
}

function mount() {
  document.getElementById("brandName").textContent = PROFILE.name;
  document.getElementById("footerName").textContent = PROFILE.name;
  document.getElementById("brandRole").textContent = PROFILE.role;
  document.getElementById("year").textContent = String(new Date().getFullYear());

  // WhatsApp floating button
  document.getElementById("waFloat").href =
    buildWhatsAppUrl(PROFILE.whatsappNumber, PROFILE.whatsappMessage);

  // Mobile nav toggle
  const nav = document.querySelector(".nav");
  const navToggle = document.getElementById("navToggle");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Node)) {
      return;
    }
    if (!nav.contains(target) && !navToggle.contains(target)) {
      nav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      nav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      setActiveNavLink(a.getAttribute("href"));
    });
  });
  const initialHash = document.querySelector(`.nav a[href="${window.location.hash}"]`)
    ? window.location.hash
    : "#home";
  setActiveNavLink(initialHash);

  renderHome();
  if (initialHash !== "#home") {
    document.querySelector(initialHash)?.scrollIntoView({ behavior: "auto", block: "start" });
  }
  activateSectionSpy();
  activateReveal();
}

window.addEventListener("DOMContentLoaded", mount);

function setActiveNavLink(hash) {
  const links = document.querySelectorAll(".nav a");
  links.forEach(x => {
    const isActive = x.getAttribute("href") === hash;
    x.classList.toggle("active", isActive);
    if (isActive) {
      x.setAttribute("aria-current", "page");
    } else {
      x.removeAttribute("aria-current");
    }
  });
}

function activateSectionSpy() {
  const links = Array.from(document.querySelectorAll(".nav a"));
  const sections = links
    .map(link => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!sections.length) {
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (!visible.length) {
        return;
      }
      const id = visible[0].target.getAttribute("id");
      if (id) {
        setActiveNavLink(`#${id}`);
      }
    },
    { threshold: [0.25, 0.45, 0.65], rootMargin: "-90px 0px -50% 0px" }
  );

  sections.forEach(section => observer.observe(section));
}

function activateReveal() {
  const cards = document.querySelectorAll(".card, .impact-card");
  cards.forEach((card, index) => {
    card.classList.add("reveal");
    card.style.setProperty("--reveal-delay", `${Math.min(index * 40, 360)}ms`);
  });

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  cards.forEach(card => observer.observe(card));
}

// ========= PAGES =========
function renderHome() {
  const stackBadges = PROFILE.stack.map(s => `<span class="badge">${escapeHtml(s)}</span>`).join("");

  app.innerHTML = `
    <div class="page-layout">
      <div class="page-main">
        <section id="home">
          <section class="card pad home-left">
            <h1 class="h1">${escapeHtml(PROFILE.name)}</h1>
            <p class="p" style="margin-top:10px;">
              ${escapeHtml(PROFILE.headline)}
              Aqui você encontra um resumo rápido — role para ver detalhes.
            </p>

            <div style="margin-top:16px;" class="badges">
              ${stackBadges}
            </div>

            <div style="margin-top:18px; display:flex; gap:10px; flex-wrap:wrap;">
              <a class="btn btn-primary" href="#projetos">Ver Projetos</a>
              <a class="btn btn-ghost" href="#contato">Entrar em Contato</a>
              <a class="btn btn-ghost" href="${escapeAttr(PROFILE.cvUrl)}" target="_blank" rel="noreferrer" download>Baixar CV</a>
            </div>

            <hr class="sep"/>

            <div class="kpi">
              <div class="item">
                <strong>Entrega orientada a produto</strong>
                <span>Fluxos, regras de negócio, integrações e qualidade.</span>
              </div>
              <div class="item">
                <strong>Back-end + Segurança</strong>
                <span>Auth, JWT, permissões e APIs REST bem definidas.</span>
              </div>
              <div class="item">
                <strong>Banco & performance</strong>
                <span>Modelagem, consultas e consistência em produção.</span>
              </div>
            </div>

            <hr class="sep"/>

            ${impactSection()}

            <hr class="sep"/>

            ${specialtiesSection()}

            <hr class="sep"/>

            ${availabilitySection()}

            <hr class="sep"/>

            <div class="grid cards">
              ${navCard({
                title: "Experiência",
                desc: "Resumo do que já fiz, responsabilidades e impacto.",
                path: "experiencia",
                meta: "Carreira • Responsabilidades"
              })}

              ${navCard({
                title: "Projetos",
                desc: "Projetos com arquitetura, stack e resultados práticos.",
                path: "projetos",
                meta: "Cases • Código • Demonstração"
              })}

              ${navCard({
                title: "Sobre",
                desc: "Quem eu sou como profissional e como trabalho.",
                path: "sobre",
                meta: "Perfil • Stack • Valores"
              })}

              ${navCard({
                title: "Contato",
                desc: "Email / LinkedIn — e WhatsApp no botão flutuante.",
                path: "contato",
                meta: "Email • Redes • WhatsApp"
              })}
            </div>
          </section>
        </section>

        ${sectionExperiencia()}
        ${sectionProjetos()}
        ${sectionSobre()}
        ${sectionContato()}
      </div>

      <aside class="page-side" aria-label="Sobre mim">
        <div class="hero-panel">
          <div class="hero-media">
            <img class="hero-float-img" src="${escapeAttr(PROFILE.heroImageSrc)}" alt="Foto de ${escapeHtml(PROFILE.name)}" loading="lazy" decoding="async" />
          </div>
          <div class="hero-panel-body">
            <h3 class="h3">Sobre mim</h3>
            <p class="p" style="margin-top:8px;">
              Desenvolvedor full stack focado em construir sistemas completos, do zero à produção.
              Trabalho com ASP.NET Core, Blazor, PostgreSQL e integrações via API, priorizando segurança,
              arquitetura em camadas e código manutenível.
            </p>
          </div>
        </div>
      </aside>
    </div>
  `;

  const form = document.getElementById("contactForm");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);

    const nome = String(data.get("nome") || "").trim();
    const empresa = String(data.get("empresa") || "").trim();
    const assunto = String(data.get("assunto") || "").trim();
    const mensagem = String(data.get("mensagem") || "").trim();

    const subject = `[Portfólio] ${assunto}`;
    const body =
`Olá, ${PROFILE.name}!

Meu nome: ${nome}
Empresa: ${empresa || "-"}
---
${mensagem}

(Enviado via seu portfólio)`;

    const mailto = `mailto:${encodeURIComponent(PROFILE.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
}

function impactSection() {
  const items = PROFILE.metrics.map(m => `
    <div class="impact-card">
      <div class="impact-value">${escapeHtml(m.value)}</div>
      <div class="impact-label">${escapeHtml(m.label)}</div>
      ${m.hint ? `<div class="impact-hint">${escapeHtml(m.hint)}</div>` : ""}
    </div>
  `).join("");

  return `
    <div class="impact">
      <div class="impact-head">
        <strong>Impacto em números</strong>
      </div>
      <div class="impact-grid">
        ${items}
      </div>
    </div>
  `;
}

function specialtiesSection() {
  const items = PROFILE.specialties
    .map(item => `<li>${escapeHtml(item)}</li>`)
    .join("");

  return `
    <div class="case-results">
      <strong>Especialidades que gero valor</strong>
      <ul>${items}</ul>
    </div>
  `;
}

function availabilitySection() {
  const a = PROFILE.availability;
  return `
    <div class="availability-grid">
      <div class="availability-item">
        <strong>Localização</strong>
        <span>${escapeHtml(a.location)}</span>
      </div>
      <div class="availability-item">
        <strong>Modelo</strong>
        <span>${escapeHtml(a.workMode)}</span>
      </div>
      <div class="availability-item">
        <strong>Inglês</strong>
        <span>${escapeHtml(a.english)}</span>
      </div>
      <div class="availability-item">
        <strong>Contato</strong>
        <span>${escapeHtml(a.responseTime)}</span>
      </div>
      <div class="availability-item">
        <strong>Mobilidade</strong>
        <span>${escapeHtml(a.mobility)}</span>
      </div>
    </div>
  `;
}

function competenciesSection() {
  const groups = Object.entries(PROFILE.competencies)
    .map(([group, items]) => `
      <div class="competency-block">
        <strong>${escapeHtml(group)}</strong>
        <div class="badges" style="margin-top:8px;">
          ${items.map(item => `<span class="badge">${escapeHtml(item)}</span>`).join("")}
        </div>
      </div>
    `)
    .join("");

  return `
    <div class="case-results">
      <strong>Competências técnicas</strong>
      <div class="grid competency-grid" style="margin-top:10px;">
        ${groups}
      </div>
    </div>
  `;
}

function sectionExperiencia() {
  return `
    <section id="experiencia" class="card pad">
      <h2 class="h2">Experiência</h2>
      <p class="p section-intro">
        Minha experiência profissional e projetos relevantes.
      </p>

      <hr class="sep"/>

      <div class="grid" style="gap:12px;">
        ${expItem({
          role: "Desenvolvedor Full Stack Júnior",
          company: "Comp Line",
          period: "Jul/2025 — Atual",
          bullets: [
            "Atuação no desenvolvimento e evolução de sistemas corporativos, com foco em backend robusto, integrações seguras e arquitetura escalável.",
            "Desenvolvimento e manutenção de APIs RESTful em ASP.NET Core, utilizando JWT para autenticação, controle de acesso por roles (RBAC) e validações consistentes.",
            "Desenvolvimento das APIs dos sistemas Cetificate e Operation para a Copersucar.",
            "Implementação de integrações entre sistemas corporativos, garantindo padronização de payloads, segurança na comunicação e tratamento avançado de erros.",
            "Integrações com SAP, Zapsing, e-Nota e Assina, além de outros sistemas parceiros.",
            "Modelagem, otimização e manutenção de bancos SQL Server, com criação de procedures, views e funções voltadas a cenários de alto volume de dados.",
            "Atuação direta em pipelines CI/CD no Azure DevOps, incluindo automação de build, deploy e versionamento de aplicações.",
            "Containerização de aplicações com Docker, assegurando padronização entre ambientes de desenvolvimento, homologação e produção.",
            "Refatoração de código legado, aplicando princípios SOLID, Design Patterns e boas práticas de arquitetura em camadas.",
            "Desenvolvimento de componentes em Blazor, integrados diretamente às APIs, com foco em usabilidade e desempenho.",
            "Participação ativa em reuniões técnicas semanais com clientes, auxiliando na definição de requisitos, correções e melhorias contínuas dos sistemas."
          ],
        })}

        ${expItem({
          role: "Estagiário de Desenvolvimento Full Stack",
          company: "Comp Line",
          period: "Mar/2025 — Jul/2025",
          bullets: [
            "Atuação de apoio no desenvolvimento de sistemas corporativos, com forte aprendizado prático em backend, integrações e processos ágeis.",
            "Apoio no desenvolvimento de funcionalidades utilizando C# e ASP.NET.",
            "Criação e consumo de APIs REST para integração entre sistemas internos.",
            "Uso diário de Git, GitFlow e Azure DevOps para versionamento e controle de entregas.",
            "Participação ativa em Scrum, acompanhando sprints, refinamentos, revisões técnicas e planejamento.",
            "Correção de bugs, execução de testes e apoio em refatorações de código."
          ],
        })}

        ${expItem({
          role: "Desenvolvedor Full Stack | Projeto Próprio",
          company: "Projeto Pessoal — Sistema de Gestão para Barbearia",
          period: "Projeto pessoal",
          bullets: [
            "Projeto completo desenvolvido do zero, com foco em arquitetura, segurança e regras de negócio reais.",
            "Desenvolvimento de API REST em ASP.NET Core com JWT, controle de permissões e autenticação segura.",
            "Criação de frontend em Blazor, com interfaces responsivas e orientadas à usabilidade.",
            "Modelagem de banco de dados PostgreSQL, com foco em consistência, performance e integridade.",
            "Implementação de agenda inteligente, controle de barbeiros, serviços, clientes, dias off e horários indisponíveis.",
            "Integração planejada com WhatsApp e automações via n8n para agendamentos e atendimento.",
            "Organização do projeto em arquitetura em camadas, seguindo boas práticas de manutenção e escalabilidade."
          ],
        })}
      </div>
    </section>
  `;
}

function sectionProjetos() {
  return `
    <section id="projetos" class="card pad">
      <h2 class="h2">Projetos</h2>
      <p class="p section-intro">
        Cases reais com resultados. Alguns projetos corporativos não possuem link público.
      </p>

      <hr class="sep"/>

      ${caseStudyCard()}

      <hr class="sep"/>

      <div class="grid projects-grid">
        ${projectCard({
          title: "API de Agendamentos",
          desc: "Endpoint de horários disponíveis, validações e criação de agendamentos sem conflito.",
          meta: "API REST • EF Core • PostgreSQL",
          stack: ["REST", "EF Core", "PostgreSQL"],
          results: [
            "API completa desenvolvida para sistemas Cetificate e Operation (Copersucar).",
            "Backend desenhado para regras de negócio e integrações corporativas."
          ],
          links: [],
          col: 6,
        })}

        ${projectCard({
          title: "Automação / Integração",
          desc: "Integração com serviços externos e automação de fluxo (ex.: WhatsApp / agenda / atendimento).",
          meta: "Integrações • Automação • Processos",
          stack: ["n8n", "APIs", "Auth"],
          results: [
            "Integrações com SAP, Zapsing, e-Nota e Assina.",
            "Padronização de payloads e segurança na comunicação entre sistemas."
          ],
          links: [],
          col: 6,
        })}

        ${projectCard({
          title: "Copersucar — Cetificate & Operation",
          desc: "APIs corporativas para regras críticas e integrações seguras.",
          meta: "Projeto corporativo (sem link público) • Backend",
          stack: ["ASP.NET Core", "EF Core", "SQL Server", "JWT"],
          results: [
            "Padronização de payloads e consistência de dados.",
            "APIs desenvolvidas para suportar operações internas."
          ],
          links: [],
          col: 12,
        })}
      </div>
    </section>
  `;
}

function caseStudyCard() {
  return `
    <article class="card" style="padding:16px; background: var(--card-2); border: 1px solid var(--stroke-2);">
      <h3 class="h3">Case em destaque: Sistema de Gestão para Barbearia</h3>
      <div class="small" style="margin-top:6px;">Projeto próprio • Full Stack • 2025</div>
      <p class="p" style="margin-top:10px;">
        Agenda, barbeiros, serviços, clientes e regras de indisponibilidade com autenticação e permissões.
      </p>

      <div class="badges" style="margin-top:12px;">
        <span class="badge">ASP.NET</span>
        <span class="badge">Blazor</span>
        <span class="badge">PostgreSQL</span>
        <span class="badge">JWT</span>
      </div>

      <div class="grid case-study-grid" style="margin-top:12px;">
        <div class="case-study-item">
          <strong>Problema</strong>
          <p class="p">Agendamentos manuais por WhatsApp, conflitos de horário e baixa previsibilidade no atendimento.</p>
        </div>
        <div class="case-study-item">
          <strong>Solução</strong>
          <p class="p">API em ASP.NET Core + JWT e frontend Blazor com regras de disponibilidade, bloqueios e permissão por perfil.</p>
        </div>
        <div class="case-study-item">
          <strong>Resultado</strong>
          <p class="p">Fluxo de agendamento padronizado, menos retrabalho operacional e atendimento diário mais rápido.</p>
        </div>
      </div>

      <div class="case-results" style="margin-top:12px;">
        <strong>Resultados</strong>
        <ul>
          <li>Eliminou mensagens manuais e envio de horários por WhatsApp.</li>
          <li>Agenda 100% integrada: barbeiros só abrem e trabalham com os horários marcados.</li>
          <li>Fluxo de atendimento mais rápido e organizado no dia a dia.</li>
        </ul>
      </div>

      <div style="margin-top:14px; display:flex; gap:10px; flex-wrap:wrap;">
        <a class="btn btn-primary" href="${escapeAttr(PROFILE.primaryProjectUrl)}" target="_blank" rel="noreferrer">Ver repositório</a>
        <a class="btn btn-ghost" href="#sobre">Visão geral</a>
      </div>
    </article>
  `;
}

function sectionSobre() {
  const stackBadges = PROFILE.stack.map(s => `<span class="badge">${escapeHtml(s)}</span>`).join("");
  const educationItems = PROFILE.education
    .map(item => `<li>${escapeHtml(item)}</li>`)
    .join("");
  const certificationItems = PROFILE.certifications
    .map(item => `<li>${escapeHtml(item)}</li>`)
    .join("");

  return `
    <section id="sobre" class="card pad">
      <h2 class="h2">Sobre</h2>
      <p class="p section-intro">${escapeHtml(PROFILE.summary)}</p>

      <hr class="sep"/>

      ${competenciesSection()}

      <hr class="sep"/>

      <div class="case-results">
        <strong>Objetivo profissional</strong>
        <p class="p" style="margin-top:8px;">${escapeHtml(PROFILE.objective)}</p>
      </div>

      <hr class="sep"/>

      <div class="grid cards-3 about-grid">
        <div class="card" style="padding:16px; background: var(--card-2); border: 1px solid var(--stroke-2);">
          <h3 class="h3">Como eu trabalho</h3>
          <p class="p" style="margin-top:10px;">
            Priorizo requisitos bem definidos, APIs consistentes, regras de negócio claras e UX limpa.
            Sempre com documentação mínima e código fácil de manter.
          </p>
        </div>

        <div class="card" style="padding:16px; background: var(--card-2); border: 1px solid var(--stroke-2);">
          <h3 class="h3">Stack principal</h3>
          <div class="badges" style="margin-top:10px;">
            ${stackBadges}
          </div>
        </div>

        <div class="card" style="padding:16px; background: var(--card-2); border: 1px solid var(--stroke-2);">
          <h3 class="h3">Formação</h3>
          <ul class="highlight-links" style="margin:10px 0 0; padding-left:18px;">
            ${educationItems}
          </ul>
        </div>

        <div class="card" style="padding:16px; background: var(--card-2); border: 1px solid var(--stroke-2);">
          <h3 class="h3">Certificação e idioma</h3>
          <ul class="highlight-links" style="margin:10px 0 0; padding-left:18px;">
            ${certificationItems}
            <li>${escapeHtml(`Inglês - ${PROFILE.availability.english}`)}</li>
          </ul>
        </div>
      </div>

    </section>
  `;
}

function sectionContato() {
  return `
    <section id="contato" class="card pad">
      <h2 class="h2">Contato</h2>
      <p class="p section-intro">
        Me chama por email, LinkedIn ou WhatsApp (botão flutuante no canto inferior direito).
        Você também pode usar o formulário abaixo (ele abre seu cliente de email).
      </p>

      <hr class="sep"/>

      <div class="grid contact-grid">
        <div class="card" style="padding:16px; background: var(--card-2); border: 1px solid var(--stroke-2);">
          <h3 class="h3">Links rápidos</h3>
          <p class="p" style="margin-top:10px;">
            <strong>Email:</strong> <a href="mailto:${encodeURIComponent(PROFILE.email)}">${escapeHtml(PROFILE.email)}</a><br/>
            <strong>Telefone:</strong> <a href="https://wa.me/${escapeAttr(String(PROFILE.whatsappNumber).replace(/\D/g, ""))}" target="_blank" rel="noreferrer">${escapeHtml(PROFILE.phone)}</a><br/>
            <strong>Localização:</strong> ${escapeHtml(PROFILE.location)}<br/>
            <strong>GitHub:</strong> <a href="${escapeAttr(PROFILE.github)}" target="_blank" rel="noreferrer">Abrir</a><br/>
            <strong>LinkedIn:</strong> <a href="${escapeAttr(PROFILE.linkedin)}" target="_blank" rel="noreferrer">Abrir</a><br/>
            <strong>Currículo (PDF):</strong> <a href="${escapeAttr(PROFILE.cvUrl)}" target="_blank" rel="noreferrer" download>Baixar</a><br/>
            <strong>WhatsApp:</strong> <a href="${escapeAttr(buildWhatsAppUrl(PROFILE.whatsappNumber, PROFILE.whatsappMessage))}" target="_blank" rel="noreferrer">Abrir chat</a>
          </p>
        </div>

        <form class="card" style="padding:16px; background: var(--card-2); border: 1px solid var(--stroke-2);" id="contactForm">
          <h3 class="h3">Mensagem</h3>
          <div class="form" style="margin-top:10px;">
            <input class="input" name="nome" placeholder="Seu nome" required />
            <input class="input" name="empresa" placeholder="Empresa (opcional)" />
            <input class="input" name="assunto" placeholder="Assunto" required />
            <textarea class="input" name="mensagem" placeholder="Escreva sua mensagem..." required></textarea>

            <button class="btn btn-primary" type="submit">Enviar por Email</button>
            <span class="small">*O envio abre seu cliente de email (não usa servidor).</span>
          </div>
        </form>
      </div>
    </section>
  `;
}

// ========= UI COMPONENTS =========
function navCard({ title, desc, path, meta }) {
  return `
    <a class="card card-link" href="#${path}" data-link>
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:12px;">
        <div>
          <h3 class="h3">${escapeHtml(title)}</h3>
          <p class="p" style="margin-top:8px;">${escapeHtml(desc)}</p>
          <div class="small" style="margin-top:10px;">${escapeHtml(meta)}</div>
        </div>
        <span class="badge">Abrir &rarr;</span>
      </div>
    </a>
  `;
}

function expItem({ role, company, period, bullets }) {
  const lis = bullets.map(b => `<li class="p" style="margin: 6px 0;">${escapeHtml(b)}</li>`).join("");
  return `
    <article class="card" style="padding:16px; background: var(--card-2); border: 1px solid var(--stroke-2);">
      <div style="display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap;">
        <div>
          <h3 class="h3">${escapeHtml(role)}</h3>
          <div class="small" style="margin-top:6px;">${escapeHtml(company)}</div>
        </div>
        <span class="badge">${escapeHtml(period)}</span>
      </div>
      <div class="small" style="margin-top:10px;">Principais contribuições</div>
      <ul style="margin:12px 0 0; padding-left:18px;">
        ${lis}
      </ul>
    </article>
  `;
}

function projectCard({ title, desc, stack, links, results, meta, col = 6 }) {
  const badges = stack.map(s => `<span class="badge">${escapeHtml(s)}</span>`).join("");
  const actions = links
    .map(l => `<a class="btn btn-ghost" href="${escapeAttr(l.href)}" ${String(l.href).startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""}>${escapeHtml(l.label)}</a>`)
    .join("");
  const resultItems = (results || []).map(r => `<li>${escapeHtml(r)}</li>`).join("");
  const resultsBlock = resultItems
    ? `<div class="case-results"><strong>Resultados</strong><ul>${resultItems}</ul></div>`
    : "";
  const metaLine = meta ? `<div class="case-meta small">${escapeHtml(meta)}</div>` : "";
  const actionsBlock = actions
    ? `<div style="margin-top:14px; display:flex; gap:10px; flex-wrap:wrap;">${actions}</div>`
    : "";
  return `
    <article class="card project-card" style="grid-column: span ${col}; padding:16px; background: var(--card-2); border: 1px solid var(--stroke-2);">
      <h3 class="h3">${escapeHtml(title)}</h3>
      ${metaLine}
      <p class="p" style="margin-top:8px;">${escapeHtml(desc)}</p>

      <div class="badges" style="margin-top:12px;">
        ${badges}
      </div>

      ${resultsBlock}

      ${actionsBlock}
    </article>
  `;
}

// ========= SIMPLE ESCAPE HELPERS =========
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
function escapeAttr(str) {
  return escapeHtml(str).replaceAll("`", "&#096;");
}



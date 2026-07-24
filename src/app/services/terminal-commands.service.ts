import { Injectable } from '@angular/core';

export type TerminalTone = 'default' | 'accent' | 'white' | 'success' | 'warning' | 'error' | 'bold';

export interface TerminalSpan {
  text: string;
  tone?: TerminalTone;
}

export type TerminalLine = TerminalSpan[];

const t = (text: string, tone?: TerminalTone): TerminalSpan => ({ text, tone });

/**
 * Deterministic fake-shell content for the interactive terminal easter egg.
 * Output is structured (spans/lines), never raw HTML, so it renders safely
 * through Angular's default interpolation — no innerHTML, no XSS surface.
 */
@Injectable({ providedIn: 'root' })
export class TerminalCommandsService {
  getWelcome(): TerminalLine[] {
    return [
      [
        t('Bem-vindo ao terminal do portfólio de '),
        t('João Victor', 'white'),
        t('. Digite '),
        t('help', 'accent'),
        t(' para ver os comandos.'),
      ],
    ];
  }

  run(rawInput: string): TerminalLine[] | null {
    const cmd = rawInput.trim().toLowerCase();
    if (cmd === 'clear') return null;

    const map: Record<string, TerminalLine[]> = {
      '': [],
      help: [
        [t('Comandos disponíveis:')],
        [t('  '), t('whoami', 'accent'), t('     — quem sou eu')],
        [t('  '), t('skills', 'accent'), t('     — stack técnica')],
        [t('  '), t('projects', 'accent'), t('   — projetos em destaque')],
        [t('  '), t('experience', 'accent'), t(' — trajetória profissional')],
        [t('  '), t('contact', 'accent'), t('    — como falar comigo')],
        [t('  '), t('clear', 'accent'), t('     — limpar o terminal')],
      ],
      whoami: [
        [t('João Victor Quintino de Brito', 'white')],
        [t('Full Stack Pleno · Arquiteto de Software')],
        [t('Brasília — DF · '), t('disponível para novas oportunidades', 'success')],
      ],
      skills: [
        [t('Linguagens: ', 'bold'), t('C#, Java, TypeScript, JavaScript, SQL (T-SQL)')],
        [t('Backend: ', 'bold'), t('ASP.NET Core, EF Core, Web API, Spring Boot, SOAP')],
        [t('Frontend: ', 'bold'), t('Angular, Blazor WebAssembly, SPA')],
        [t('Dados: ', 'bold'), t('SQL Server, PostgreSQL, MySQL, tuning')],
        [t('DevOps: ', 'bold'), t('Azure DevOps, Docker, CI/CD, Git')],
        [t('Arquitetura: ', 'bold'), t('Clean Architecture, SOLID, DDD, microsserviços')],
      ],
      projects: [
        [t('01 ', 'accent'), t('Gestão Imigratória — SaaS LegalTech (.NET 10 · Angular 21 · pgvector · RAG)')],
        [t('02 ', 'accent'), t('JurisDoc — SaaS de gestão jurídica (.NET 8 · Angular · PostgreSQL)')],
        [t('03 ', 'accent'), t('Novo Império — gestão para barbearias (ASP.NET Core · Blazor WASM)')],
        [t('GitHub → '), t('github.com/QuintinoDev', 'white')],
      ],
      experience: [
        [t('Jul/2025→atual ', 'accent'), t('Dev Full Stack Jr · Comp Line')],
        [t('Mar/2025→Jul/2025 ', 'accent'), t('Estagiário Full Stack · Comp Line')],
        [t('Mar/2020→Mar/2025 ', 'accent'), t('Sargento Temporário · Exército Brasileiro')],
      ],
      contact: [
        [t('email     ', 'accent'), t('joaovictorquintinobrito@gmail.com', 'white')],
        [t('tel       ', 'accent'), t('(61) 98384-2637')],
        [t('linkedin  ', 'accent'), t('linkedin.com/in/joão-quintino-dev')],
        [t('github    ', 'accent'), t('github.com/QuintinoDev')],
      ],
      ls: [[t('sobre/  stack/  projetos/  experiencia/  contato/')]],
      sudo: [[t('nice try 😏 — sem root aqui.', 'warning')]],
    };

    if (cmd in map) return map[cmd];

    return [[t('comando não encontrado: ', 'error'), t(rawInput), t(' — digite '), t('help', 'accent'), t('.')]];
  }
}

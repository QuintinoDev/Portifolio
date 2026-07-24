import { AfterViewInit, Component, ElementRef, ViewChild, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../directives/reveal.directive';
import { TerminalCommandsService, TerminalLine } from '../../services/terminal-commands.service';
import { CMD_CHIPS } from '../../core/portfolio-data';

type HistoryEntry =
  | { kind: 'welcome'; lines: TerminalLine[] }
  | { kind: 'command'; raw: string; lines: TerminalLine[] };

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [RevealDirective, FormsModule],
  templateUrl: './terminal.html',
  styleUrl: './terminal.css',
})
export class Terminal implements AfterViewInit {
  @ViewChild('output') private outputRef?: ElementRef<HTMLElement>;
  @ViewChild('input') private inputRef?: ElementRef<HTMLInputElement>;

  readonly cmdChips = CMD_CHIPS;
  readonly history = signal<HistoryEntry[]>([]);
  inputValue = '';

  private readonly commands = inject(TerminalCommandsService);

  ngAfterViewInit(): void {
    this.history.set([{ kind: 'welcome', lines: this.commands.getWelcome() }]);
    this.run('whoami');
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key !== 'Enter') return;
    const value = this.inputValue;
    this.inputValue = '';
    this.run(value);
  }

  onChipClick(cmd: string): void {
    this.run(cmd);
    this.focusInput();
  }

  focusInput(): void {
    this.inputRef?.nativeElement.focus();
  }

  private run(raw: string): void {
    const cmd = raw.trim().toLowerCase();
    if (cmd === 'clear') {
      this.history.set([]);
      return;
    }

    const lines = this.commands.run(raw) ?? [];
    this.history.update((entries) => [...entries, { kind: 'command', raw, lines }]);
    queueMicrotask(() => {
      const el = this.outputRef?.nativeElement;
      if (el) el.scrollTop = el.scrollHeight;
    });
  }
}

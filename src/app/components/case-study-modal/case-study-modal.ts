import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { ImageSlot } from '../image-slot/image-slot';
import { Project } from '../../core/portfolio-data';

@Component({
  selector: 'app-case-study-modal',
  standalone: true,
  imports: [ImageSlot],
  templateUrl: './case-study-modal.html',
  styleUrl: './case-study-modal.css',
})
export class CaseStudyModal implements OnChanges {
  @Input() project: Project | null = null;
  @Output() closed = new EventEmitter<void>();

  @ViewChild('dialog') private dialogRef?: ElementRef<HTMLElement>;

  private lastFocused: HTMLElement | null = null;

  ngOnChanges(): void {
    if (this.project) {
      this.lastFocused = document.activeElement as HTMLElement;
      queueMicrotask(() => this.dialogRef?.nativeElement.focus());
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.project) this.close();
  }

  close(): void {
    this.closed.emit();
    this.lastFocused?.focus();
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) this.close();
  }
}

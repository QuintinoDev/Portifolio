import { Directive, ElementRef, HostListener, inject } from '@angular/core';
import { ReducedMotionService } from '../services/reduced-motion.service';

/**
 * Subtle 3D pointer-tilt for glass cards, with a radial glow that follows the cursor.
 * No-ops on touch (no mousemove) and under prefers-reduced-motion.
 */
@Directive({
  selector: '[appTilt]',
  standalone: true,
})
export class TiltDirective {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly reducedMotion = inject(ReducedMotionService);

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.reducedMotion.prefersReduced) return;
    const card = this.el.nativeElement;
    const rect = card.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1000px) rotateY(${px * 7}deg) rotateX(${-py * 7}deg) translateY(-6px)`;

    const glow = card.querySelector('[data-tilt-glow]') as HTMLElement | null;
    if (glow) {
      glow.style.background = `radial-gradient(500px circle at ${(px + 0.5) * 100}% ${(py + 0.5) * 100}%, rgba(150,150,162,.16), transparent 55%)`;
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    const card = this.el.nativeElement;
    card.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) translateY(0)';
    const glow = card.querySelector('[data-tilt-glow]') as HTMLElement | null;
    if (glow) glow.style.background = 'transparent';
  }
}

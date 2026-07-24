import { Directive, ElementRef, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { ReducedMotionService } from '../services/reduced-motion.service';

@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUpDirective implements OnInit, OnDestroy {
  @Input({ required: true }) appCountUp!: number;

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly reducedMotion = inject(ReducedMotionService);
  private observer?: IntersectionObserver;
  private raf?: number;

  ngOnInit(): void {
    const host = this.el.nativeElement;

    if (this.reducedMotion.prefersReduced || typeof IntersectionObserver === 'undefined') {
      host.textContent = String(this.appCountUp);
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.animate(host, this.appCountUp);
            this.observer?.unobserve(host);
          }
        }
      },
      { threshold: 0.4 },
    );
    this.observer.observe(host);
  }

  private animate(host: HTMLElement, target: number): void {
    const duration = 1400;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      host.textContent = Math.round(target * eased).toString();
      if (t < 1) this.raf = requestAnimationFrame(step);
    };
    this.raf = requestAnimationFrame(step);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.raf) cancelAnimationFrame(this.raf);
  }
}

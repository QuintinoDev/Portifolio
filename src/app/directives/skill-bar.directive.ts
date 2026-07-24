import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2, inject } from '@angular/core';
import { ReducedMotionService } from '../services/reduced-motion.service';

@Directive({
  selector: '[appSkillBar]',
  standalone: true,
})
export class SkillBarDirective implements OnInit, OnDestroy {
  @Input({ required: true }) appSkillBar!: number;

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private readonly reducedMotion = inject(ReducedMotionService);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const host = this.el.nativeElement;

    if (this.reducedMotion.prefersReduced || typeof IntersectionObserver === 'undefined') {
      this.renderer.setStyle(host, 'transform', `scaleX(${this.appSkillBar / 100})`);
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.renderer.setStyle(host, 'transform', `scaleX(${this.appSkillBar / 100})`);
            this.observer?.unobserve(host);
          }
        }
      },
      { threshold: 0.4 },
    );
    this.observer.observe(host);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}

import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2, inject } from '@angular/core';
import { ReducedMotionService } from '../services/reduced-motion.service';

/**
 * Fades + slides an element in the first time it crosses the viewport.
 * Pairs with the [data-reveal] / [data-revealed] CSS in styles.css.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
  host: {
    '[attr.data-reveal]': "''",
  },
})
export class RevealDirective implements OnInit, OnDestroy {
  /** Stagger delay in seconds, matching the source mockup's cascade. */
  @Input() revealDelay = 0;

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private readonly reducedMotion = inject(ReducedMotionService);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const host = this.el.nativeElement;

    if (this.revealDelay > 0) {
      this.renderer.setStyle(host, 'transition-delay', `${this.revealDelay}s`);
    }

    if (this.reducedMotion.prefersReduced || typeof IntersectionObserver === 'undefined') {
      this.renderer.setAttribute(host, 'data-revealed', 'true');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.renderer.setAttribute(host, 'data-revealed', 'true');
            this.observer?.unobserve(host);
          }
        }
      },
      { threshold: 0.14 },
    );
    this.observer.observe(host);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}

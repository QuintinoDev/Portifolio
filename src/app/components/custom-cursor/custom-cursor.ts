import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { ReducedMotionService } from '../../services/reduced-motion.service';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  templateUrl: './custom-cursor.html',
  styleUrl: './custom-cursor.css',
})
export class CustomCursor implements AfterViewInit, OnDestroy {
  @ViewChild('ring') private ringRef?: ElementRef<HTMLElement>;
  @ViewChild('dot') private dotRef?: ElementRef<HTMLElement>;

  private readonly reducedMotion = inject(ReducedMotionService);
  private raf?: number;
  private onMove?: (e: MouseEvent) => void;
  private hoverTargets: HTMLElement[] = [];
  private onEnter = () => this.setHoverState(true);
  private onLeave = () => this.setHoverState(false);

  ngAfterViewInit(): void {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const ring = this.ringRef?.nativeElement;
    const dot = this.dotRef?.nativeElement;
    if (!ring || !dot) return;

    let mouseX = innerWidth / 2;
    let mouseY = innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    this.onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };
    window.addEventListener('mousemove', this.onMove);

    const loop = () => {
      if (this.reducedMotion.prefersReduced) {
        ringX = mouseX;
        ringY = mouseY;
      } else {
        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;
      }
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      this.raf = requestAnimationFrame(loop);
    };
    loop();

    this.hoverTargets = Array.from(document.querySelectorAll('a, button, [data-cursor]')) as HTMLElement[];
    for (const target of this.hoverTargets) {
      target.addEventListener('mouseenter', this.onEnter);
      target.addEventListener('mouseleave', this.onLeave);
    }
  }

  private setHoverState(active: boolean): void {
    const ring = this.ringRef?.nativeElement;
    if (!ring) return;
    ring.style.width = active ? '54px' : '34px';
    ring.style.height = active ? '54px' : '34px';
    ring.style.borderColor = active ? 'rgba(143,168,214,.9)' : 'rgba(210,212,222,.6)';
  }

  ngOnDestroy(): void {
    if (this.raf) cancelAnimationFrame(this.raf);
    if (this.onMove) window.removeEventListener('mousemove', this.onMove);
    for (const target of this.hoverTargets) {
      target.removeEventListener('mouseenter', this.onEnter);
      target.removeEventListener('mouseleave', this.onLeave);
    }
  }
}

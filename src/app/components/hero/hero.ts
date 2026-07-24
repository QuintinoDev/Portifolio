import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { ImageSlot } from '../image-slot/image-slot';
import { ReducedMotionService } from '../../services/reduced-motion.service';
import { HERO_ICONS, PROFILE, TYPED_WORDS } from '../../core/portfolio-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RevealDirective, ImageSlot],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements AfterViewInit, OnDestroy {
  @ViewChild('typedText') private typedRef?: ElementRef<HTMLElement>;

  readonly profile = PROFILE;
  readonly heroIcons = HERO_ICONS;

  private readonly reducedMotion = inject(ReducedMotionService);
  private typeTimeout?: ReturnType<typeof setTimeout>;

  ngAfterViewInit(): void {
    const el = this.typedRef?.nativeElement;
    if (!el) return;

    if (this.reducedMotion.prefersReduced) {
      el.textContent = TYPED_WORDS[0];
      return;
    }

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const tick = () => {
      const word = TYPED_WORDS[wordIndex];
      if (!deleting) {
        charIndex++;
        el.textContent = word.slice(0, charIndex);
        if (charIndex === word.length) {
          deleting = true;
          this.typeTimeout = setTimeout(tick, 1500);
          return;
        }
      } else {
        charIndex--;
        el.textContent = word.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % TYPED_WORDS.length;
        }
      }
      this.typeTimeout = setTimeout(tick, deleting ? 45 : 95);
    };
    tick();
  }

  ngOnDestroy(): void {
    if (this.typeTimeout) clearTimeout(this.typeTimeout);
  }
}

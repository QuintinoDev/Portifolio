import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ReducedMotionService {
  private readonly query =
    typeof window !== 'undefined' && 'matchMedia' in window
      ? window.matchMedia('(prefers-reduced-motion: reduce)')
      : null;

  get prefersReduced(): boolean {
    return this.query?.matches ?? false;
  }
}

import { Component, Input } from '@angular/core';

/**
 * Drop-in image container. Pass `src` once a real asset exists; until then it
 * renders a labeled placeholder instead of a broken image or a fake screenshot.
 */
@Component({
  selector: 'app-image-slot',
  standalone: true,
  templateUrl: './image-slot.html',
  styleUrl: './image-slot.css',
})
export class ImageSlot {
  @Input() src: string | null = null;
  @Input() alt = '';
  @Input() label = '';
  @Input() shape: 'rect' | 'circle' = 'rect';
  /** Set for the hero/LCP image only — hints the browser to fetch it first. */
  @Input() priority = false;
  /** Shapes the placeholder illustration while no real asset exists. */
  @Input() kind: 'screenshot' | 'photo' = 'screenshot';
}

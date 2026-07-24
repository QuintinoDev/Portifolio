import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { TiltDirective } from '../../directives/tilt.directive';
import { ImageSlot } from '../image-slot/image-slot';
import { ABOUT_TAGS, PROFILE } from '../../core/portfolio-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective, TiltDirective, ImageSlot],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  readonly aboutTags = ABOUT_TAGS;
  readonly profile = PROFILE;
}

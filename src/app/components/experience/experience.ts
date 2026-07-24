import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { EDUCATION, TIMELINE } from '../../core/portfolio-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  readonly timeline = TIMELINE;
  readonly education = EDUCATION;
}

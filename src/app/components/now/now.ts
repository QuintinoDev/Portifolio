import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { NOW_ITEMS } from '../../core/portfolio-data';

@Component({
  selector: 'app-now',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './now.html',
  styleUrl: './now.css',
})
export class Now {
  readonly nowItems = NOW_ITEMS;
}

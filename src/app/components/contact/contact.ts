import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { PROFILE, SOCIALS } from '../../core/portfolio-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  readonly profile = PROFILE;
  readonly socials = SOCIALS;
}

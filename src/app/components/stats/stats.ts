import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { CountUpDirective } from '../../directives/count-up.directive';
import { LIGHTHOUSE_AUDIT_DATE, LIGHTHOUSE_SCORES, STATS } from '../../core/portfolio-data';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [RevealDirective, CountUpDirective],
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})
export class Stats {
  readonly stats = STATS;
  readonly lighthouseScores = LIGHTHOUSE_SCORES;
  readonly lighthouseAuditDate = LIGHTHOUSE_AUDIT_DATE;
}

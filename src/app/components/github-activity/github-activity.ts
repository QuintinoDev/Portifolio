import { Component, OnInit, inject } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { GithubStatsService } from '../../services/github-stats.service';

@Component({
  selector: 'app-github-activity',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './github-activity.html',
  styleUrl: './github-activity.css',
})
export class GithubActivity implements OnInit {
  private readonly service = inject(GithubStatsService);

  readonly state = this.service.state;
  readonly stats = this.service.stats;

  ngOnInit(): void {
    void this.service.load();
  }
}

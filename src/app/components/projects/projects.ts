import { Component, signal } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { TiltDirective } from '../../directives/tilt.directive';
import { ImageSlot } from '../image-slot/image-slot';
import { CaseStudyModal } from '../case-study-modal/case-study-modal';
import { PROJECTS, PROJECTS_PHILOSOPHY, Project } from '../../core/portfolio-data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective, TiltDirective, ImageSlot, CaseStudyModal],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  readonly projects = PROJECTS;
  readonly philosophy = PROJECTS_PHILOSOPHY;
  readonly openProject = signal<Project | null>(null);

  openCaseStudy(project: Project): void {
    this.openProject.set(project);
  }

  closeCaseStudy(): void {
    this.openProject.set(null);
  }
}

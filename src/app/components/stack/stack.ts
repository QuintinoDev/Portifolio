import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { SkillBarDirective } from '../../directives/skill-bar.directive';
import { GithubActivity } from '../github-activity/github-activity';
import { CORE_SKILLS, ENV_COMMANDS, STACK_CATEGORIES } from '../../core/portfolio-data';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [RevealDirective, SkillBarDirective, GithubActivity],
  templateUrl: './stack.html',
  styleUrl: './stack.css',
})
export class Stack {
  readonly coreSkills = CORE_SKILLS;
  readonly stackCategories = STACK_CATEGORIES;
  readonly envCommands = ENV_COMMANDS;
}

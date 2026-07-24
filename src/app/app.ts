import { Component } from '@angular/core';
import { BackgroundScene } from './components/background-scene/background-scene';
import { CustomCursor } from './components/custom-cursor/custom-cursor';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Stats } from './components/stats/stats';
import { About } from './components/about/about';
import { Stack } from './components/stack/stack';
import { Projects } from './components/projects/projects';
import { Experience } from './components/experience/experience';
import { Terminal } from './components/terminal/terminal';
import { Now } from './components/now/now';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BackgroundScene,
    CustomCursor,
    Navbar,
    Hero,
    Stats,
    About,
    Stack,
    Projects,
    Experience,
    Terminal,
    Now,
    Contact,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}

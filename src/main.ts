import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import BoardComponent from './tic-toc-toe/board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Board</h1>
    <app-board></app-board>
  `,
  imports: [BoardComponent]
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);

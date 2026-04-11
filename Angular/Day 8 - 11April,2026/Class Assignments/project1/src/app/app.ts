import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Reactiveforms } from './reactiveforms/reactiveforms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Reactiveforms],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('project1');
}

import { Component, inject } from '@angular/core';
import { Counter } from '../service/counter';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class CounterComponent {
  counterService = inject(Counter);

  increment() {
    this.counterService.incrementcount();
  }

  decrement() {
    this.counterService.decrementcount();
  }

  reset() {
    this.counterService.resetcount();
  }
}

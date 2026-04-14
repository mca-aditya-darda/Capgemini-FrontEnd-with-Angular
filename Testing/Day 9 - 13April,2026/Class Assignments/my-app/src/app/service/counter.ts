import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Counter {
  count: number = 0;

  incrementcount() {
    this.count += 1;
  }

  decrementcount() {
    this.count -= 1;
  }

  resetcount() {
    this.count = 0;
  }
}

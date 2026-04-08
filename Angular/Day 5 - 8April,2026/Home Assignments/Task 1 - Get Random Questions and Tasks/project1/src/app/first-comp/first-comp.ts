import { Component } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  imports: [],
  templateUrl: './first-comp.html',
  styleUrl: './first-comp.css',
})
export class FirstComp {
  tasks: string[] = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10'];
  questions: string[] = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10'];
  index: number = 0;
  index2: number = 0;
  task() {
    this.index = Math.floor(Math.random() * this.tasks.length);
  }

  ques() {
    this.index2 = Math.floor(Math.random() * this.questions.length);
  }
}

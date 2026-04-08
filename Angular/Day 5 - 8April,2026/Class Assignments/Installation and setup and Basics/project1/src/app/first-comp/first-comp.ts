import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-comp',
  imports: [FormsModule],
  templateUrl: './first-comp.html',
  styleUrl: './first-comp.css',
})
export class FirstComp {
  name: string = 'Angular';
  style: string = 'color: blue; font-size: 20px;';
  isHidden: boolean = false;
  click() {
    this.isHidden = !this.isHidden;
  }
  names: string[] = ['1name', '2name', '3name', '4name', '5name'];
  index: number = 0;
  ipVal: string = '';
  prev() {
    if (this.index > 0) {
      this.index--;
    }
  }
  next() {
    if (this.index < 4) {
      this.index++;
    }
  }
  // inputValChange(str: string) {
  //   console.log(str);
  //   console.log(this.ipVal);
  //   this.ipVal = str;
  // }
}

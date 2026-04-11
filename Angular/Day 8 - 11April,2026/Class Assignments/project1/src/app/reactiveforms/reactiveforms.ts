import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-reactiveforms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactiveforms.html',
  styleUrl: './reactiveforms.css',
})
export class Reactiveforms {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.minLength(8), Validators.required, checkPass]),
    currency: new FormControl(),
    gender: new FormControl(),
    tandc: new FormControl(),
    skills: new FormArray([]),
    confirmPassword: new FormControl('', [Validators.required]),
  });
  handleSubmit() {
    console.log(this.loginForm.value);
    console.log(this.loginForm);
  }
  public get skills() {
    return this.loginForm.get('skills') as FormArray;
  }
  handleCheckBoxes(event: Event) {
    let checkbox = event.target as HTMLInputElement;

    if (checkbox.checked) {
      this.skills.push(new FormControl(checkbox.value));
    } else {
      let index = this.skills.value.indexOf(checkbox.value);
      this.skills.removeAt(index);
    }
  }
  confirmPassword() {
    if (this.loginForm.value.password !== this.loginForm.value.confirmPassword) {
      this.loginForm.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      this.loginForm.get('confirmPassword')?.setErrors(null);
    }
  }
}

export function checkPass(control: AbstractControl): ValidationErrors | null {
  const value = control.value;

  if (!value) return null;

  let hasLetter = false;
  let hasNumber = false;
  for (let char of value) {
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
      hasLetter = true;
    } else if (char >= '0' && char <= '9') {
      hasNumber = true;
    }
  }
  if (hasLetter && hasNumber) {
    return { alphanumeric: true };
  }

  return null;
}

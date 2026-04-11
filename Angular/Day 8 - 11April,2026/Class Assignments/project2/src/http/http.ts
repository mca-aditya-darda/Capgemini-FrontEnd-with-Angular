import { JsonPipe } from '@angular/common';
import { GitUserType } from '../types/githubUser';
import { Http as HttpService } from './../services/http';
import { Component, inject, signal } from '@angular/core';
import { UserType } from '../types/usertype';
import { logintype } from '../types/logintype';

@Component({
  selector: 'app-http',
  imports: [JsonPipe],
  templateUrl: './http.html',
  styleUrl: './http.css',
})
export class Http {
  httpData = inject(HttpService);
  // userData: GitUserType[] = [];
  userData = signal<GitUserType[]>([]);
  ngOnInit() {
    this.httpData.getUser().subscribe({
      next: (data) => {
        console.log(data);
        // this.userData = [data];
        this.userData.set([data]);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Request completed');
      },
    });
  }
  addNewUser() {
    const newUser: UserType = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      avatar: 'https://example.com/avatar.jpg',
    };
    this.httpData.addUser(newUser).subscribe({
      next: (data) => {
        console.log('User added:', data);
      },
      error: (err) => {
        console.log('Error adding user:', err);
      },
      complete: () => {
        console.log('Add user request completed');
      },
    });
  }
  loginUser() {
    const newUser: logintype = {
      email: 'john.doe@example.com',
      password: 'password123',
    };
    this.httpData.loginUser(newUser).subscribe({
      next: (data) => {
        console.log('User added:', data);
      },
    });
  }
}

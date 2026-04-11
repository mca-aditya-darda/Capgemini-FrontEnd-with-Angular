import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GitUserType } from '../types/githubUser';
import { UserType } from '../types/usertype';
import { logintype } from '../types/logintype';

@Injectable({
  providedIn: 'root',
})
export class Http {
  httpClient = inject(HttpClient);
  baseurl = 'https://api.escuelajs.co/api/v1';
  getUser() {
    return this.httpClient.get<GitUserType>(`${this.baseurl}/users`);
  }
  addUser(user: UserType) {
    return this.httpClient.post(`${this.baseurl}/users/`, user);
  }
  loginUser(user: logintype) {
    return this.httpClient.post(`${this.baseurl}/auth/login`, user);
  }
}

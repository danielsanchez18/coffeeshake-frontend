import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user !: User;
  private readonly path = `${baseUrl}/user`;

  constructor(private httpClient : HttpClient) { }

  public registerUser(user : User) {
    return this.httpClient.post(`${this.path}/register`, user)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../model/listResponseModel';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<ListResponseModel<User>> {
    let newPath = this.apiUrl + 'users';
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const ROOT_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class BackendAPIService {

  constructor(
    private http: HttpClient
  ) { }

  getCV() {
    return this.http.get(`${ROOT_URL}/cv`);
  }

  login(username: string, password: string) {
    let body = { username, password };
    return this.http.post(`${ROOT_URL}/users/login`, body, {observe:'response'});
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';


const ROOT_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class BackendAPIService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCvs() {
    return this.http.get(`${ROOT_URL}/admin/cv/all`);
  }

  getCv() {
    return this.http.get(`${ROOT_URL}/cv`);
  }

  login(username: string, password: string) {
    let body = { username, password };
    return this.http.post(`${ROOT_URL}/users/login`, body, {observe:'response'});
  }

  refreshAccessToken( id, refreshToken){
    let headers: HttpHeaders = new HttpHeaders({
      'x-refresh-token':refreshToken,
      '_id':id
    });
    console.log(headers);
    return this.http.get(`${ROOT_URL}/users/me/access-token`,{
      headers:headers,
      observe:'response'
    });
  }
}

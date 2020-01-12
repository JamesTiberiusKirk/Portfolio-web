import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class BackendAPIService {

  constructor(
    private http: HttpClient
    ) { }

  getTest(){
    let url = "http://localhost:3000/hello";
    return this.http.get(url);
  }
  getCV(){
    let url = "http://localhost:3000/cv";
    return this.http.get(url);

  }
}

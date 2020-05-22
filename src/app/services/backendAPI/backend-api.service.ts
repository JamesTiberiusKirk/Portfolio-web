import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cv } from 'src/app/models/cv';
import { rejects } from 'assert';

const ROOT_URL = environment.server_config.host + environment.server_config.port

@Injectable({
  providedIn: 'root'
})
export class BackendAPIService {

  constructor(
    private http: HttpClient
  ) { }

  updateCv(updatedCv: Cv) {
    return new Promise((resolve, reject) => {
      this.http.patch(`${ROOT_URL}/admin/cv/update`, { cv: updatedCv })
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err)
        });
    })
  }

  getAllCvs(): Promise<Array<Cv>> {
    return new Promise((resolve, reject) => {
      this.http.get(`${ROOT_URL}/admin/cv/all`)
        .subscribe((data: Array<Cv>) => {
          resolve(data)
        }, err => {
          reject(err)
        });
    })
  }

  getCv() {
    let cvList: Array<Cv>
    return new Promise((resolve, reject) => {
      this.http.get<Array<Cv>>(`${ROOT_URL}/cv`)
        .subscribe(data => {
          cvList = data
          resolve(cvList)
        }, err => {
          rejects(err)
        });

    })
  }

  login(username: string, password: string) {
    let body = { username, password };
    return this.http.post(`${ROOT_URL}/users/login`, body, { observe: 'response' });
  }

  refreshAccessToken(id, refreshToken) {
    let headers: HttpHeaders = new HttpHeaders({
      'x-refresh-token': refreshToken,
      '_id': id
    });
    return this.http.get(`${ROOT_URL}/users/me/access-token`, {
      headers: headers,
      observe: 'response'
    });
  }
}

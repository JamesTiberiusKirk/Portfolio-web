import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cv } from 'src/app/models/cv';


const ROOT_URL = environment.server_config.host + environment.server_config.port

@Injectable({
  providedIn: 'root'
})
export class BackendAPIService {

  constructor(
    private http: HttpClient
  ) { }

  updateUserDetails(id: number, update: object): Promise<object> {

    let body = {
      id,
      update: update
    }

    return new Promise((resolve, reject) => {
      this.http.patch(`${ROOT_URL}/admin/users/update`, body)
        .subscribe((res) => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    })
  }

  newCv(markdown: string) {
    return new Promise((resolve, reject) => {
      this.http.post(`${ROOT_URL}/admin/cv`, { cv: { markdown } })
        .subscribe((res) => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

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

  getCv(): Promise<Cv> {
    return new Promise((resolve, reject) => {
      this.http.get<Cv>(`${ROOT_URL}/cv`)
        .subscribe(data => {
          resolve(data)
        }, err => {
          reject(err)
        });
    });
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

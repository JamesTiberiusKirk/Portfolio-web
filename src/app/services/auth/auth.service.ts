import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { shareReplay, tap } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

import { BackendAPIService } from '../backendAPI/backend-api.service';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from '../../models/index';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: BehaviorSubject<User>;
  public authState: Observable<User>;

  constructor(
    private api: BackendAPIService,
    private router: Router,
    ) { 
      
      this.currentUser = new BehaviorSubject<User>(JSON.parse(this.getSession()));
      this.authState = this.currentUser.asObservable();
    }
  
  public getCurrentUser(){
    return this.currentUser.value;
  }

  login(username: string, password: string) {
    return this.api.login(username, password).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
      
        let user = new User;
        user.id = res.body._id;
        user.accessToken = res.headers.get('x-access-token');
        user.refreshToken = res.headers.get('x-refresh-token');
        
        this.setSession(user);
        this.currentUser.next(user);
        return user;
      })
    );
  }

  logout() {
    this.removeSession();
    this.router.navigate(['/login']);
  }

  getSession(){
    return localStorage.getItem('current-user');
  }

  private setSession(user: User) {
    localStorage.setItem('current-user', JSON.stringify(user));
  }

  private removeSession() {
    localStorage.removeItem('current-user');
  }
}

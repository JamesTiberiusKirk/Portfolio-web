import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError, from } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthService } from '../auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    let request = this.addAccessTokenHeader(req);


    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {

        if (error.status == 401){
          this.auth.logout();
        }

        console.log(error);
        return throwError(error)
      })
    )
  }

  addAccessTokenHeader(req: HttpRequest<any>) {
    let user = this.auth.getCurrentUser();
    if (user) {
      return req.clone({
        setHeaders: {
          'x-access-token': user.accessToken
        }
      });
    }

    return req
  }
}

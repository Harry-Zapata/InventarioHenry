import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('token');
    if (token != null || token != undefined) {
      const headers = new HttpHeaders({
        'authorization': token
      });
      const requestClone = request.clone({
        headers
      })
      return next.handle(requestClone);
    }
    return next.handle(request);
  }
}

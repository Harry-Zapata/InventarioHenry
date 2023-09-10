import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Class/user.class';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "https://inventarioapi.onrender.com/api/login"
  constructor(private http:HttpClient) {
   }
   
   login(user:User):Observable<any>{
     return this.http.post<any>(this.url, {
       email: user.email,
       password: user.password
     })
   }
}

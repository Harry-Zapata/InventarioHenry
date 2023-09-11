import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Class/user.class';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = "https://inventarioapi.onrender.com/api/"
  constructor(private http:HttpClient) {
   }
   
   login(user:User):Observable<any>{
     return this.http.post<any>(this.url+"login", {
       email: user.email,
       password: user.password
     })
   }
   logout(){
    return this.http.delete(this.url+"logout");
   }
}

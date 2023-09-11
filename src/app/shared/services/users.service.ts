import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }
  url="https://inventarioapi.onrender.com/api/"
  getUsers() {
    return this.http.get(this.url+"users");
  }
  createUser(user:any){
    return this.http.post(this.url+"users",user);
  }
  getUserById(id:string){
    return this.http.get(this.url+"profile/"+id);
  }
}

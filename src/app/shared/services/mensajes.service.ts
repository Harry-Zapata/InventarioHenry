import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeClass } from '../Class/mensaje.class';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  url = 'https://inventarioapi.onrender.com/api/mensajes';
  constructor(private http:HttpClient) { }

  getMensajes(){
    return this.http.get(this.url);
  }
  crearMensajes(mensajes:any){
    return this.http.post(this.url,mensajes);
  }
  editarMensajes(id:string,mensajes:any){
    return this.http.put(this.url+"/"+id,mensajes);
  }
  mensajeById(id:string){
    return this.http.get(this.url+"/"+id);
  }
  eliminarMensaje(id:string){
    return this.http.delete(this.url+"/"+id);
  }
}

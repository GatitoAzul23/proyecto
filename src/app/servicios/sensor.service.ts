import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  private url = "http://localhost:3000/sensor";

  constructor(private http: HttpClient) { }

  activarLectura(){
    return this.http.get<any>(this.url);
  }
  detenerLectura(){
    return this.http.get<any>(this.url+ "/detener");
  }
  guardarLectura(datos:object){
    return this.http.post<any>(this.url, datos);
  }

  consultar(){
    return this.http.get<any>(this.url +"/info");
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CitasService {

  constructor(private http: HttpClient) { }
  private url = "http://localhost:3000/citas";
 
  guardar(cita:object){
    return this.http.post<any>(this.url+"/agendar", cita);
  }
  
  consultaHoy(){
    return this.http.get<any>(this.url+"/consultaHoy");    
  }

  consultarTodo(){
    return this.http.get<any>(this.url);
  }

  consultarFecha(cita: object){
    return this.http.post<any>(this.url+"/citaDia", cita);
  }

  eliminar(cita:object){
    return this.http.put<any>(this.url +"/eliminar", cita);
  }
  
  consultarUno(fecha: String, hora:String){
    return this.http.get<any>(this.url + "/consultar/"+fecha+"/"+hora);
  }
}

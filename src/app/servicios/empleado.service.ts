import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) { }
  private url = "http://localhost:3000/empleados";

  guardar(empleado: object){
    return this.http.post<any>(this.url, empleado)
  }

  consultar(){
    return this.http.get<any>(this.url);
  }

  consultarUno(email: string){
    return this.http.get<any>(this.url +"/detalle/"+ email);
  }
  modificar(empleado: object){
    return this.http.put<any>(this.url, empleado);
  }
  eliminar(empleado: object){
    return this.http.put<any>(this.url+"/eliminar", empleado);
  }
}

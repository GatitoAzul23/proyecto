import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor(private http : HttpClient) { }
  private url = "http://localhost:3000/pacientes"

  guardar(paciente:object){
    return this.http.post<any>(this.url+"/registroPa", paciente);
  }
  consultarUno(paciente:object){
    return this.http.post<any>(this.url+"/consulta", paciente);
  }
  actualizar(paciente:object){
    return this.http.put<any>(this.url, paciente);
  }
  //metodo para agregar historial al campo
  registroHistorial(paciente:object){
    return this.http.put<any>(this.url+"/historial", paciente);
  }
  //consultar todo lo que este en historial
  consultaHistorial(paciente:object){
    return this.http.post<any>(this.url+"/consultaHistorial", paciente)
  }
  borrar(paciente: object){
    return this.http.put<any>(this.url+"/eliminar", paciente)
  }
}

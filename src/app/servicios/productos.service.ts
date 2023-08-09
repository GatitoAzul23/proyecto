import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private servidor ="http://localhost:3000";
  private url = this.servidor+"/producto";
  constructor(private http: HttpClient) { }

  consultarUno(producto:object){
    return this.http.post<any>(this.url+"/codigo",producto);
  }

  guardar(
    codigo: string,
    nombre: string,
    descripcion: string,
    existencia: string,
    precio: string,
    file: File
  ){
    const fd = new FormData();
    fd.append("codigo", codigo);
    fd.append("nombre", nombre);
    fd.append("descripcion",descripcion);
    fd.append("existencia", existencia);
    fd.append("precio", precio);
    fd.append("imagen", file);

    return this.http.post<any>(this.url, fd);
  }

  modificar(
    codigo: string,
    nombre: string,
    descripcion: string,
    existencia: string,
    precio: string,
    file: File
  ){
    const fd = new FormData();
    fd.append("codigo", codigo);
    fd.append("nombre", nombre);
    fd.append("descripcion",descripcion);
    fd.append("existencia", existencia);
    fd.append("precio", precio);
    fd.append("imagen", file);

    return this.http.put<any>(this.url, fd);
  }
  eliminar(codigo:string){
    return this.http.delete<any>(this.url+"/borrar/"+ codigo);
  }
  consultarTodo(){
    return this.http.get<any>(this.url);
  }
  consultar(codigo:string){
    return this.http.get<any>(this.url +"/codigo/"+ codigo);
  }

  borrar(producto: object){
    return this.http.put<any>(this.url+"/eliminar", producto);
  }
}


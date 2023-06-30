import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {
  url = "http://localhost:3000/usuarios"

  constructor(private router:Router, private http:HttpClient) { }

  login(usuario:object){
    return this.http.post<any>(this.url+"/iniciosesion", usuario);
  }

  registro(usuario:object){
    return this.http.post<any>(this.url + "/registro", usuario);
  }

  logout(){
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
  
  eslogueado():boolean{
    if(localStorage.getItem("usuario") != null){
        return true;
    }else{
      return false;
    }
  }
}

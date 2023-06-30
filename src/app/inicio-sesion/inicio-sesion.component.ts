import { Component } from '@angular/core';
import { InicioSesionService } from '../servicios/inicio-sesion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  usuario={
    email:"",
    password:""
  }
  constructor(private ServicioLogin : InicioSesionService, private router:Router){}

  inicioSesion(){
    this.ServicioLogin.login(this.usuario).subscribe(
      res=>{
        alert("Bienvenido "+ res.env.nombre+ " "+res.env.apellido_paterno);
        localStorage.setItem("usuario", res.env.nombre);
        localStorage.setItem("token", res.env.jwtoken);
        this.router.navigate(['/dashboard']);

      },
      err=>{
        alert("Error al iniciar sesión");
      }
    );
  }

  registrarUsuario(){
    this.ServicioLogin.registro(this.usuario).subscribe(
      res=>{
        alert("Empleado guardado");
        this.limpiar_campos();
      },
      err=>{
        alert("Ingrese sus datos correctamente");
      }
    );
  }

  limpiar_campos(){
    this.usuario.password = "";
    this.usuario.email = "";   
  }

}

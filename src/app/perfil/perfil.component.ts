import { Component, OnInit } from '@angular/core';
import { InicioSesionService } from '../servicios/inicio-sesion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{
  empleado={
    nombre: "",
    apellido_paterno: "",
    apellido_materno: "",
    email:"",
    rfc : "",
    telefono: "",
    nss: "",
    puesto: "",
    sueldo: "",
    estado: "Activo",
    fecha_nac: "" 
  }
  usuario ={
    password:"",
    password_ant:"",
    email: localStorage.getItem("email")
  }

  constructor(private servicioLogin: InicioSesionService){}

ngOnInit(): void {
  this.consultar();
}

  cambiarContra(){
    this.servicioLogin.cambiarContra(this.usuario).subscribe(
      res=>{
          Swal.fire({
          title: 'Se cambió la contraseña',
          icon: 'success',
          timer: 2000,
        });
        this.limpiarCampos();
      },
      err=>{
        Swal.fire({
        title: err.error.error[0].msg,
        icon: 'error',
        timer: 2000,
        });
        // alert(err.error.error[0].msg);
      }
    );
  }

  limpiarCampos(){
    this.usuario.password ="";
    this.usuario.password_ant ="";
  }

  consultar(){
    this.servicioLogin.consultarUno(this.usuario).subscribe(
      res=>{
        this.empleado.nombre = res.usu.nombre;
        this.empleado.apellido_paterno = res.usu.apellido_paterno;
        this.empleado.apellido_materno = res.usu.apellido_materno;
        this.empleado.fecha_nac = res.usu.fecha_nac;
        this.empleado.email = res.usu.email;
        this.empleado.telefono = res.usu.telefono;
      },
      err=>{
        Swal.fire({
          title: 'Usuario no encontrado',
          icon: 'success',
          timer: 2000,
        });
      }
    );
  }
}

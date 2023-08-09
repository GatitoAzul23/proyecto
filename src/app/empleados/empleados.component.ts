import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../servicios/empleado.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  ngOnInit(): void {
    this.consultar();
  }
  constructor(private servicioEmpleado : EmpleadoService){}
  page =1;
  empleados:any;
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

  registrar(){
    this.servicioEmpleado.guardar(this.empleado).subscribe(
      res=>{
        // alert("Empleado guardado");
        Swal.fire({
          title: 'Información del empleado guardada.',
          icon: 'success',
          timer: 2000,
        });
        this.limpiarCampos();
        this.consultar();
      },
      err=>{
        // alert("Error al registrar empleado");
        Swal.fire({
          title: 'Error al registrar el empleado.',
          icon: 'success',
          timer: 2000,
        });
      }
    );
  }
  limpiarCampos(){
    this.empleado.nombre="",
    this.empleado.apellido_paterno="",
    this.empleado.apellido_materno="",
    this.empleado.email="",
    this.empleado.rfc ="",
    this.empleado.telefono="",
    this.empleado.nss="",
    this.empleado.puesto="",
    this.empleado.sueldo="",
    this.empleado.fecha_nac=""
  }
  consultar(){
    this.empleados = this.servicioEmpleado.consultar();
  }
}

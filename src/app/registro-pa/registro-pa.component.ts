import { Component } from '@angular/core';
import { PacientesService } from '../servicios/pacientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-pa',
  templateUrl: './registro-pa.component.html',
  styleUrls: ['./registro-pa.component.css']
})
export class RegistroPaComponent {

  constructor(private servicioPaciente: PacientesService){}

  paciente={
    nombre: "",
    apellido_paterno:"",
    apellido_materno: "",
    email:"",
    telefono: "",
    fecha_nac: "",
    alergias:""  
  }
  registrar(){
    this.servicioPaciente.guardar(this.paciente).subscribe(
      res=>{
        // alert("Paciente guardado");
        Swal.fire({
          title: 'Información del paciente guardada.',
          icon: 'success',
          timer: 2000,
        });
        this.limpiarCampos();
      },
      err=>{
        // alert("Error al registrar al paciente");
        Swal.fire({
          title: 'Error al registrar al paciente.',
          icon: 'error',
          timer: 2000,
        });
      }
    );
  }
  limpiarCampos(){
    this.paciente.nombre = "";
    this.paciente.apellido_paterno = "";
    this.paciente.apellido_materno = "";
    this.paciente.telefono = ""; 
    this.paciente.fecha_nac = "";
    this.paciente.alergias = "";
    this.paciente.email ="";
  }
}

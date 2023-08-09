import { Component } from '@angular/core';
import { PacientesService } from '../servicios/pacientes.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent {
  constructor(private servicioPaciente: PacientesService, private router:Router){}
  pacientes: any;
  paciente={
    nombre: "",
    apellido_paterno:"",
    apellido_materno: "",
    email:"",
    telefono: "",
    fecha_nac: "",
    alergias:"",
    fecha: "",
    detalle:""  
  }
  historial:any;
  
  consultarUno(){
    this.servicioPaciente.consultarUno(this.paciente).subscribe(
      res=>{
        this.paciente.nombre = res.pac.nombre;
        this.paciente.apellido_paterno = res.pac.apellido_paterno;
        this.paciente.apellido_materno = res.pac.apellido_materno;
        this.paciente.telefono = res.pac.telefono; 
        this.paciente.fecha_nac = res.pac.fecha_nac;
        this.paciente.alergias = res.pac.alergias;
        this.consultaHistorial();
      },
      err=>{
        // alert("Paciente no encontrado");
        Swal.fire({
          title: 'Paciente no encontrado',
          icon: 'error',
          timer: 2000,
        });
        this.paciente.nombre = "";
        this.paciente.apellido_paterno = "";
        this.paciente.apellido_materno = "";
        this.paciente.telefono = ""; 
        this.paciente.fecha_nac = "";
        this.paciente.alergias = "";
      }
    );
  }

  actualizar(){
    this.servicioPaciente.actualizar(this.paciente).subscribe(
      res=>{
        // alert("Paciente modificado");
        Swal.fire({
          title: 'Paciente modificado',
          icon: 'success',
          timer: 2000,
        });
        this.paciente.nombre = res.pac_modificado.nombre;
        this.paciente.apellido_paterno = res.pac_modificado.apellido_paterno;
        this.paciente.apellido_materno = res.pac_modificado.apellido_materno;
        this.paciente.telefono = res.pac_modificado.telefono; 
        this.paciente.fecha_nac = res.pac_modificado.fecha_nac;
        this.paciente.alergias = res.pac_modificado.alergias;
      },
      err=>{
        // alert("Paciente no encontrado");
        Swal.fire({
          title: 'Paciente no encontrado',
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
    location.reload();
  }

  limpiarHistorial(){
    this.paciente.fecha = "",
    this.paciente.detalle = ""
  }

  registroHistoria(){
    this.servicioPaciente.registroHistorial(this.paciente).subscribe(
      res=>{
        // alert ("Historial medico actualizado");
        Swal.fire({
          title: 'Historial medico actualizado',
          icon: 'success',
          timer: 2000,
        });
        this.limpiarHistorial();
        this.consultaHistorial();
      },
      err=>{
        Swal.fire({
          title: 'Error al actualizar el historial',
          icon: 'error',
          timer: 2000,
        });
      }
    )
  }
  consultaHistorial(){
    this.historial = this.servicioPaciente.consultaHistorial(this.paciente);
    //let algo = this.historial;
    // console.log(algo);
  }

  eliminar(){
    this.servicioPaciente.borrar(this.paciente).subscribe(
      res=>{
        // alert("Registro eliminado con exito");
        Swal.fire({
          title: 'Registro eliminado con éxito',
          icon: 'success',
          timer: 2000,
        });
        location.reload();
      },
      err=>{
        // alert("Error al eliminar este registro")
        Swal.fire({
          title: 'Error al eliminar este registro',
          icon: 'error',
          timer: 2000,
        });
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { CitasService } from '../servicios/citas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-cita',
  templateUrl: './registro-cita.component.html',
  styleUrls: ['./registro-cita.component.css']
})
export class RegistroCitaComponent implements OnInit{
  constructor(private servicioCitas: CitasService){}
  
  citas:any;
  citasF:any;
  cita = {
    email :"",
    fecha: "",
    hora:"",
    estado: "Activo"
  }

  citaR = {
    email: "",
    hora: "",
    fecha:"",
    estado :"Activo"
  }

  ngOnInit(): void{
    this.consultaHoy();
  }

  consultarUno(){
    this.servicioCitas.consultarFecha(this.citaR).subscribe(
      res=>{
        this.citasF = this.servicioCitas.consultarFecha(this.citaR);
      },
      err=>{
        // alert("Error al consultar cita");
        Swal.fire({
          title: 'Error al consultar cita',
          icon: 'error',
          timer: 2000,
        });
      }
    );
    // this.citasF = this.servicioCitas.consultarFecha(this.cita);
    // console.log(this.citas);
  }

  consultaHoy(){
    this.citas = this.servicioCitas.consultaHoy();
  }

  registrar(){
    this.servicioCitas.guardar(this.cita).subscribe(
      res=>{
        // alert("Cita agendada con exito");
        Swal.fire({
          title: 'Cita agendada con éxito',
          icon: 'success',
          timer: 2000,
        });
        this.limpiarCampos();
        
      },
      err=>{
        // alert("Error al agendar cita");
        Swal.fire({
          title: 'Error al agendar cita',
          icon: 'error',
          timer: 2000,
        });
      }
    );
  }
  limpiarCampos(){
    this.cita.email ="";
    this.cita.hora ="";
    this.cita.fecha ="";
  }


}

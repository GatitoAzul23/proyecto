import { Component, OnInit } from '@angular/core';
import { CitasService } from '../servicios/citas.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  constructor(private servicioCitas: CitasService, private rutaActiva: ActivatedRoute, private router: Router){}
  citas:any;
  cita={
    hora:"",
    fecha:"",
    email:"",
    estatus:"Activo"
  }

  ngOnInit(): void{
    let hora =""+ this.rutaActiva.snapshot.paramMap.get('hora');
    let fecha =""+ this.rutaActiva.snapshot.paramMap.get('fecha');
    this.servicioCitas.consultarUno(fecha, hora).subscribe(
      res=>{
        console.log(res);
        this.cita.hora = res.cita.hora;
        this.cita.fecha = res.cita.fecha;
        this.cita.email = res.cita.email;
      },
      err=>{
        this.limpiarCampos();
        this.router.navigate(['/citas/agendar']);
      }
    );
  }

  eliminarCita(){
    this.servicioCitas.eliminar(this.cita).subscribe(
      res=>{
        Swal.fire({
          title: 'Cita cancelada',
          icon: 'success',
          timer: 2000,
        });
      },
      err=>{
        Swal.fire({
          title: 'Error al cancelar la cita',
          icon: 'error',
          timer: 2000,
        });
        // alert("Error al cancelar cita");
      }
    );
  }
  
  limpiarCampos(){
    this.cita.hora = "";
    this.cita.fecha = "";
    this.cita.email = "";
  }
}

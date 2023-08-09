import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../servicios/empleado.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleado-detalle',
  templateUrl: './empleado-detalle.component.html',
  styleUrls: ['./empleado-detalle.component.css']
})
export class EmpleadoDetalleComponent implements OnInit{
  

  constructor(private servicioEmpleado : EmpleadoService, private rutaActiva: ActivatedRoute, private router: Router){}
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

  ngOnInit(): void {
    let email =""+ this.rutaActiva.snapshot.paramMap.get('email');
    this.servicioEmpleado.consultarUno(email).subscribe(
      res=>{
        this.empleado.nombre= res.emp.nombre,
        this.empleado.apellido_paterno= res.emp.apellido_paterno,
        this.empleado.apellido_materno=res.emp.apellido_materno,
        this.empleado.email=res.emp.email,
        this.empleado.rfc =res.emp.rfc,
        this.empleado.telefono=res.emp.telefono,
        this.empleado.nss=res.emp.nss,
        this.empleado.puesto=res.emp.puesto,
        this.empleado.sueldo=res.emp.sueldo,
        this.empleado.fecha_nac=res.emp.fecha_nac
      },

      err=>{
        this.router.navigate(['/empleados']);
      });
  }

  modificar(){
    this.servicioEmpleado.modificar(this.empleado).subscribe(
      res=>{
        this.empleado.nombre= res.emp_modificado.nombre,
        this.empleado.apellido_paterno= res.emp_modificado.apellido_paterno,
        this.empleado.apellido_materno=res.emp_modificado.apellido_materno,
        this.empleado.email=res.emp_modificado.email,
        this.empleado.rfc =res.emp_modificado.rfc,
        this.empleado.telefono=res.emp_modificado.telefono,
        this.empleado.nss=res.emp_modificado.nss,
        this.empleado.puesto=res.emp_modificado.puesto,
        this.empleado.sueldo=res.emp_modificado.sueldo,
        this.empleado.fecha_nac=res.emp_modificado.fecha_nac
        // alert("Registro modificado");
        Swal.fire({
          title: 'Registro modificado',
          icon: 'success',
          timer: 2000,
        });
      },
      err=>{
        // alert("Empleado no modificado");
        Swal.fire({
          title: 'Registro de empleado no modificado',
          icon: 'error',
          timer: 2000,
        });
      }
    );
  }
  eliminar(){
    this.servicioEmpleado.eliminar(this.empleado).subscribe(
      res=>{
        // alert("Registro eliminado");
        Swal.fire({
          title: 'Registor eliminado',
          icon: 'success',
          timer: 2000,
        });
        this.router.navigate(['/empleados']);
      },
      err=>{
        // alert("Empleado no eliminado");
        Swal.fire({
          title: 'Registro no eliminado',
          icon: 'error',
          timer: 2000,
        });
      }
    );
    
  }

}

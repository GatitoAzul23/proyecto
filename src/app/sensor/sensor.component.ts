import { Component, OnInit } from '@angular/core';
import { SensorService } from '../servicios/sensor.service';
@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit{

  sensor ={
    fecha:"",
    hora:"",
    lectura:""
  }
  info : any;
  intervalo: any;
  
  ngOnInit(): void {
    this.consultar();
  }

  constructor(private ServicioSensor: SensorService){}

  iniciarLectura(){
    this.ServicioSensor.activarLectura().subscribe(
      (res)=>{
        this.sensor.lectura = res.valorDistancia;
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  detenerLectura(){
    this.ServicioSensor.detenerLectura().subscribe(
      (res)=>{
        this.pausa();
        alert("Lectura detenida");
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  consultar(){
    this.info = this.ServicioSensor.consultar();
  }

  guardarLectura(){
    this.ServicioSensor.guardarLectura(this.sensor).subscribe(
      (res)=>{
        alert("Lectura registrada");
      },
      (err)=>{
        alert("Error al registrar la lectura");
      }
    );
  }

  starTimer(){
    this.intervalo = setInterval(
      ()=>{
        this.iniciarLectura();
      },5000); //5*60*1000 = 300000 miliseg ejecturar cada 5 minutos
  }

  pausa(){
    clearInterval(this.intervalo);
  }
}

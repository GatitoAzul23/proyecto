import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';

@Component({
  selector: 'app-productospub',
  templateUrl: './productospub.component.html',
  styleUrls: ['./productospub.component.css']
})
export class ProductospubComponent implements OnInit{

  constructor(private servicioProducto: ProductosService){}

  productos :any;
  file: any;
  ngOnInit(): void {
    this.consultar();
  }

  fotoseleccionada(event:any):void{
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
    }
  }

  consultar(){
    this.productos = this.servicioProducto.consultarTodo();
  }

}

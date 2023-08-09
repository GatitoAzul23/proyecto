import { Component } from '@angular/core';
import { InicioSesionService } from '../servicios/inicio-sesion.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(public servicioLogin:InicioSesionService){
   
  }
  
  cerrarSesion(){
    this.servicioLogin.logout();
  }
}

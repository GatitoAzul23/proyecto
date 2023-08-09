//Listado de modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from "ngx-pagination"; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
//Listado de componentes
import { AppComponent } from './app.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarruselComponent } from './carrusel/carrusel.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { RegistroPaComponent } from './registro-pa/registro-pa.component';
import { RegistroCitaComponent } from './registro-cita/registro-cita.component';
import { CitasComponent } from './citas/citas.component';
import { PublicidadComponent } from './publicidad/publicidad.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductospubComponent } from './productospub/productospub.component';
import { PublicidadpubComponent } from './publicidadpub/publicidadpub.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmpleadoDetalleComponent } from './empleado-detalle/empleado-detalle.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SensorComponent } from './sensor/sensor.component';
//listado de servicios
import { InicioSesionService } from './servicios/inicio-sesion.service';
import { UsuariosService } from './servicios/usuarios.service';
import { PacientesService } from './servicios/pacientes.service';
import { CitasService } from './servicios/citas.service';
import { EmpleadoService } from './servicios/empleado.service';
import { ProductosService } from './servicios/productos.service';
import { SensorService } from './servicios/sensor.service';
import { CobroComponent } from './cobro/cobro.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    EncabezadoComponent,
    UsuariosComponent,
    InicioComponent,
    CarruselComponent,
    DashboardComponent,
    SidebarComponent,
    MenuComponent,
    PacientesComponent,
    RegistroPaComponent,
    RegistroCitaComponent,
    CitasComponent,
    PublicidadComponent,
    ProductosComponent,
    ProductospubComponent,
    PublicidadpubComponent,
    ProductoDetalleComponent,
    EmpleadosComponent,
    EmpleadoDetalleComponent,
    PerfilComponent,
    SensorComponent,
    CobroComponent
  ],
  imports: [
    //aqui van los API de Angular material
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    FontAwesomeModule,
    NgxPaginationModule
  ],
  providers: [
    InicioSesionService,
    UsuariosService,
    PacientesService,
    CitasService,
    ProductosService,
    EmpleadoService,
    SensorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

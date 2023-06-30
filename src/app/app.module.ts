//Listado de modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Listado de componentes
import { AppComponent } from './app.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { MenuComponent } from './menu/menu.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarruselComponent } from './carrusel/carrusel.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { InicioComponent } from './inicio/inicio.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { DashboardComponent } from './dashboard/dashboard.component';


//listado de servicios
import { InicioSesionService } from './servicios/inicio-sesion.service';
import { UsuariosService } from './servicios/usuarios.service';



@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    MenuComponent,
    EncabezadoComponent,
    UsuariosComponent,
    InicioComponent,
    CarruselComponent,
    DashboardComponent
  ],
  imports: [
    //aqui van los API de Angular material
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [
    InicioSesionService,
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

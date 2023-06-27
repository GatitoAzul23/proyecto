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
    CarruselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    InicioSesionService,
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

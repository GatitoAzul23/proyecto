import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//listado de componentes en la navegación

import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path: "login", component:InicioSesionComponent},
  {path: "inicio", component:InicioComponent},
  {path: "**", redirectTo: "/inicio"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

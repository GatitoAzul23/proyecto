import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//listado de componentes en la navegación

import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { RegistroPaComponent } from './registro-pa/registro-pa.component';
import { RegistroCitaComponent } from './registro-cita/registro-cita.component';
import { CitasComponent } from './citas/citas.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoDetalleComponent } from './empleado-detalle/empleado-detalle.component';
import { ProductospubComponent } from './productospub/productospub.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SensorComponent } from './sensor/sensor.component';
import { CobroComponent } from './cobro/cobro.component';
//Listado de guardias
import { loginGuard } from './guardias/login.guard';
import { administradorGuard } from './guardias/administrador.guard';

const routes: Routes = [
  {path: "login", component:InicioSesionComponent},
  {path: "inicio", component:InicioComponent},
  {path: "dashboard", component : DashboardComponent},
  {path: "pacientes", component:PacientesComponent , canActivate:[loginGuard] },
  {path: "pacientes/registroPa", component:RegistroPaComponent, canActivate:[loginGuard]},
  {path: "citas/agendar", component:RegistroCitaComponent, canActivate:[loginGuard]},
  {path: "citas/cancelar/:fecha/:hora", component:CitasComponent, canActivate:[loginGuard]},
  {path: "productos", component: ProductosComponent, canActivate:[loginGuard, administradorGuard]},
  {path: 'productos/codigo/:codigo', component: ProductoDetalleComponent, canActivate:[loginGuard, administradorGuard]},
  {path: "empleados", component: EmpleadosComponent, canActivate:[loginGuard, administradorGuard]},
  {path: 'empleados/detalle/:email', component:EmpleadoDetalleComponent, canActivate:[loginGuard, administradorGuard]},
  {path: "productos/catalogo", component: ProductospubComponent},
  {path: "perfil", component: PerfilComponent, canActivate:[loginGuard]},
  {path: "sensor", component:SensorComponent, canActivate:[loginGuard, administradorGuard]},
  {path: "cobros", component:CobroComponent},
  {path: "**", redirectTo: "/inicio"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

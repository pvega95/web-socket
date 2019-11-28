import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { OpcionComponent } from './componentes/opcion/opcion.component';
import { ConsultaComponent } from './componentes/sugerencia/consulta/consulta.component';
import { RegistroComponent } from './componentes/sugerencia/registro/registro.component';
import { AuthGuard } from './guard/auth.guard';
import { GestionComponent } from './componentes/gestion/gestion.component';
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'view1', component: OpcionComponent, canActivate: [AuthGuard] },
  { path: 'consulta', component: ConsultaComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'gestion-sugerencia', component: GestionComponent },
  { path: 'usuario-nuevo', component: CrearUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

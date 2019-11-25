import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { OpcionComponent } from './componentes/opcion/opcion.component';
import { ConsultaComponent } from './componentes/sugerencia/consulta/consulta.component';
import { RegistroComponent } from './componentes/sugerencia/registro/registro.component';


const routes: Routes = [
  {path: '' , component: LoginComponent},
  {path: 'view1' , component: OpcionComponent},
  {path:'consulta',component: ConsultaComponent},
  {path: 'registro',component: RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

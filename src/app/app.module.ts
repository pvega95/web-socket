import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/sugerencia/registro/registro.component';
import { ConsultaComponent } from './componentes/sugerencia/consulta/consulta.component';
import { OpcionComponent } from './componentes/opcion/opcion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    ConsultaComponent,
    OpcionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

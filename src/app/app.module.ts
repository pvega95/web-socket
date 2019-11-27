import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/sugerencia/registro/registro.component';
import { ConsultaComponent } from './componentes/sugerencia/consulta/consulta.component';
import { OpcionComponent } from './componentes/opcion/opcion.component';
import { MovieServiceService } from './servicios/movie-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './servicios/auth.service';
import { TokenInterceptorService } from './servicios/token-interceptor.service';
import { NavComponent } from './componentes/nav/nav.component';
import { GestionComponent } from './componentes/gestion/gestion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    ConsultaComponent,
    OpcionComponent,
    NavComponent,
    GestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MovieServiceService,AuthService,
  {
    provide : HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

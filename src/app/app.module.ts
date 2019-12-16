import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// NgZoroo modules
import { NzIconModule, NZ_ICON_DEFAULT_TWOTONE_COLOR, NZ_ICONS } from 'ng-zorro-antd/icon';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { AccountBookFill, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzModalModule } from 'ng-zorro-antd/modal';
// End of NgZorro

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/sugerencia/registro/registro.component';
import { ConsultaComponent } from './componentes/sugerencia/consulta/consulta.component';
import { OpcionComponent } from './componentes/opcion/opcion.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './servicios/auth.service';
import { TokenInterceptorService } from './servicios/token-interceptor.service';
import { NavComponent } from './componentes/nav/nav.component';
import { GestionComponent } from './componentes/gestion/gestion.component';
import { ModalComponent } from './componentes/modal/modal.component';
import { DocumentoService } from './servicios/documento.service';
import { IconDefinition } from '@ant-design/icons-angular';
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';

import { LOCALE_ID } from '@angular/core';
import { ChatComponent } from './componentes/chat/chat.component';

const icons: IconDefinition[] = [ AccountBookFill, AlertOutline, AlertFill ];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    ConsultaComponent,
    OpcionComponent,
    NavComponent,
    GestionComponent,
    ModalComponent,
    CrearUsuarioComponent,
    ChatComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    NzMessageModule,
    NzIconModule,
    NzUploadModule,
    NzModalModule,
  ],
  providers: [AuthService,DocumentoService,
    { provide: LOCALE_ID, useValue: "en-US" },
    { provide: NZ_ICON_DEFAULT_TWOTONE_COLOR, useValue: '#00ff00' }, // If not provided, Ant Design's official blue would be used
    { provide: NZ_ICONS, useValue: icons },
    {
      provide : HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

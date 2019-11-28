import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { FormBuilder } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  user = {
    email:'',
    password:'',
    position:'1'
  }

  constructor(
    private AuthServ :AuthService,
    private message: NzMessageService,
  ) {

  }

  ngOnInit() {
  }

  signUp(){
    
    this.AuthServ.signUp(this.user).subscribe(()=>{
      this.message.success('El usuario se ha creado correctamente!')
    })
  }
}

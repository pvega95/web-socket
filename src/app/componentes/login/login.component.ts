import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from 'src/app/servicios/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email:'',
    password:''
  }

  constructor(private router: Router,
    private authService : AuthService,
    private message: NzMessageService) { 
      
    }

  ngOnInit() {
  }

  signUp(){
    this.authService.signUp(this.user)
      .subscribe(
        res =>{
          console.log(res)
          localStorage.setItem('token', res.token);
          this.router.navigate(['/view1']);
        },
        err => console.log(err)
      )
  }

  signIn(){
    this.authService.signIn(this.user)
    .subscribe(
      res =>{
        console.log(res)
        this.message.success('Bienvenido')
        localStorage.setItem('token', res.token);
        localStorage.setItem('userInfo', JSON.stringify(res.userInfo));
        this.router.navigate(['/view1']);
      },
      err => {
        this.message.error('Contraseña Incorrecta')
        console.log(err)

      }
    )
  }
}

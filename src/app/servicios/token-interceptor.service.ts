import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private authservice: AuthService
  ) { }

  intercept(req, next){
    console.log('intercert ' + `${this.authservice.getToken()}`)
    const tokenizeReq = req.clone({
      setHeaders:{
        Autorization: `Bearer ${this.authservice.getToken()}`
      }
    })
    return next.handle(tokenizeReq);
  }

  
}

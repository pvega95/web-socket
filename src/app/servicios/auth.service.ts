import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = environment.URL;
  // private URL = 'https://sugerencia-app.herokuapp.com/api'
  // private URL = 'http://localhost:3000/api'
  constructor(
    private http:HttpClient,
    private router:Router
    ) { }

  signUp(user){
    return this.http.post<any>(this.URL + '/users/signUp',user)
  }

  signIn(user){
    return this.http.post<any>(this.URL + '/users/signIn',user)
  }
  
  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    this.router.navigate(['/']);
  }
}

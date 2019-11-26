import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MovieServiceService } from 'src/app/servicios/movie-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private moviesService : MovieServiceService) { 
      this.moviesService.getMovies().subscribe(movies =>{
        console.log(movies);
      })
    }

  ngOnInit() {
  }

  ingresar(){
    this.router.navigate(['/view1']);
  }
}

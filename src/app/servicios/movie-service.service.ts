import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Movies } from '../modelos/movie.model'

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  domain: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getMovies(){
    // return this.http.get<Movies[]>(`${this.domain}/api/movies`)
    // .pipe(map(data => {})).subscribe(result =>{
    //   console.log(result);
    // })
    return this.http.get<Movies[]>(`${this.domain}/api/movies`)
    .pipe(map(res => res ));
  }
  addMovies(){

  }
  deleteTask(){

  }
  updateTask(){

  }
}

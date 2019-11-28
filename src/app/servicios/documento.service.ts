import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Document } from '../modelos/document.model'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {
  
  private URL = environment.URL;
  // private URL = 'https://sugerencia-app.herokuapp.com/api'
  // private URL = 'http://localhost:3000/api'
  constructor(
    private http:HttpClient,
    private router:Router
  ) { }

  getDocuments(){
    return this.http.get<Document>(this.URL + '/documents/')
  }

  createDocument(document){
    return this.http.post<Document>(this.URL + '/documents/create',document)
  }

  findDocument(idDocument){
    console.log(idDocument)
    return this.http.get<Document>(this.URL + '/documents/'+idDocument)
  }

  updateDocument(idDocument, body){
    return this.http.put(this.URL + '/documents/' + idDocument, body)
  }
}

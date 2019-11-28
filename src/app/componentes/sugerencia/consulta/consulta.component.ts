import { Component, OnInit } from '@angular/core';
import { DocumentoService } from 'src/app/servicios/documento.service';
import { Document } from 'src/app/modelos/document.model';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  cod_sugerencia:string = '';
  document: Document;
  constructor(
    private documentService: DocumentoService
  ) { }

  ngOnInit() {
  }

  submit(){
    this.documentService.findDocument(this.cod_sugerencia)
    .subscribe(
      res =>{
        this.document = res;
        console.log(this.document)
      },
      err =>{
        console.log(err)
      }
    )

  }

}

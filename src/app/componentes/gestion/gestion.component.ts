import { Component, OnInit } from '@angular/core';
import { DocumentoService } from 'src/app/servicios/documento.service';
import { Document } from 'src/app/modelos/document.model';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {
  cod_sugerencia:string = '';
  document: Document;
  documents: Document;

  selectedOption: any;
  printedOption: string;

  options = [
    { name: "x revisar", value: 1 },
    { name: "aprobado", value: 2 },
    { name: "rechazado", value: 3 }
  ]

  constructor(
    private documentService: DocumentoService
  ) { }

  ngOnInit() {
    this.getAllDocument();

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

  update() {
    this.printedOption = this.selectedOption;
    console.log(this.selectedOption)
  }

  getAllDocument(){
   this.documentService.getDocuments()
   .subscribe(
     res=>{
       console.log(res)
       this.documents = res
     },
     err=>{
       console.log(err)
     }
   )
   
  }

}

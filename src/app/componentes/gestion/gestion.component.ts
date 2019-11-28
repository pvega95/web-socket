import { Component, OnInit } from '@angular/core';
import { DocumentoService } from 'src/app/servicios/documento.service';
import { Document } from 'src/app/modelos/document.model';
import { NzMessageService } from 'ng-zorro-antd/message';

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
  currentId : string; //THE ID THAT made the call to find (submit)

  options = [
    { name: "TRAMPA"        , value: 0},
    { name: "Por revisar"   , value: 1 },
    { name: "Aprobado"      , value: 2 },
    { name: "Rechazado"     , value: 3 }
  ]

  constructor(
    private documentService: DocumentoService,
    private message: NzMessageService,
  ) { }

  ngOnInit() {
    this.getAllDocument();

  }

  submit(){
    this.documentService.findDocument(this.cod_sugerencia)
    .subscribe(
      (res:any) =>{
        this.document = res;
        this.selectedOption = res.estado
        this.currentId = res._id
        this.message.info('Se encontraron resultados')
      },
      err =>{
        console.log(err)
      }
    )
  }

  update() {
    this.printedOption = this.selectedOption;
    console.log(this.selectedOption)
    this.documentService.updateDocument(this.currentId, { "estado": this.selectedOption.toString(), "__v": 0 } ).subscribe(()=>{
      this.getAllDocument()
      console.log("wtf")
      this.message.success('El usuario se ha actualizado correctamente!')
    })
  }

  getAllDocument(){
   this.documentService.getDocuments()
   .subscribe(
     res=>{
       this.documents = res
     },
     err=>{
       console.log(err)
     }
   )
   
  }

}

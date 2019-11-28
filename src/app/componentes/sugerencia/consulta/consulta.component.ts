import { Component, OnInit } from '@angular/core';
import { DocumentoService } from 'src/app/servicios/documento.service';
import { Document } from 'src/app/modelos/document.model';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  cod_sugerencia:string = '';
  document: Document;
  constructor(
    private message: NzMessageService,
    private documentService: DocumentoService
  ) { }

  ngOnInit() {
  }

  submit(){
    this.documentService.findDocument(this.cod_sugerencia)
    .subscribe(
      (res:any) =>{
        if(res == null){
          this.message.error('No se encontraron resultados')
        }else{
          this.document = res;
          this.message.info('Se encontraron resultados')
        }
        
      },
      err =>{
        console.log(err)
      }
    )
  }

}

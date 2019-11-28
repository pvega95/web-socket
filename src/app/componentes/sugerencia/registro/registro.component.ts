import { Component, OnInit } from '@angular/core';
import { DocumentoService } from 'src/app/servicios/documento.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  crudForm: FormGroup;
  autor: any;

  constructor(
    private documentService: DocumentoService,
    private formBuilder: FormBuilder
  ) {
    this.crudForm = this.formBuilder.group({
      id: null,
      des_actual: '',
      des_futura: '',
      fecha_ingreso: '',
      autor: ''
    });
  }

  ngOnInit() {
    var retrievedObject = JSON.parse(localStorage.getItem('userInfo'));
    this.autor = retrievedObject
    console.log('userInfo: ', retrievedObject);

  }

  submit() {
    this.crudForm.controls['autor'].setValue(this.autor)
    const document = this.crudForm.value;
    console.log(document);
    this.documentService.createDocument(document)
      .subscribe(
        res => {
          console.log(res)
        },
        err => console.log(err)
      )

  }


}

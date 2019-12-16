import { Component, OnInit } from '@angular/core';
import { DocumentoService } from 'src/app/servicios/documento.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UploadFile } from 'ng-zorro-antd/upload/interface';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  crudForm: FormGroup;
  autor: any;

  /* For image */

  showUploadList = {
    showPreviewIcon: true,
    showRemoveIcon: true,
    hidePreviewIconInNonImage: true
  };
  fileList = [ ];
  previewImage: string | undefined = '';
  previewVisible = false;

  /* End of Image req */

  constructor(
    private documentService: DocumentoService,
    private message: NzMessageService,
    private formBuilder: FormBuilder
  ) {
    this.crudForm = this.formBuilder.group({
      id: null,
      des_actual: '',
      des_futura: '',
      fecha_ingreso: '',
      img_actual: '',
      img_futura: '',
      autor: '',
    });
  }

  ngOnInit() {
    var retrievedObject = JSON.parse(localStorage.getItem('userInfo'));
    this.autor = retrievedObject
    console.log('userInfo: ', retrievedObject);

  }

  submit() {

    this.crudForm.controls['autor'].setValue(this.autor)
    this.crudForm.get('fecha_ingreso').patchValue(new Date())
    const document = this.crudForm.value;
    console.log(document);
    this.documentService.createDocument(document)
      .subscribe(
        (res:any) => {
          this.message.success('Se ha registrado su sugerencia: ' + res.documento._id)
          console.log(res)
        },
        err => console.log(err)
      )

  }

  /* Start of image req */
  
  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  };
  /* End of image req */
}

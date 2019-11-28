import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opcion',
  templateUrl: './opcion.component.html',
  styleUrls: ['./opcion.component.css']
})
export class OpcionComponent implements OnInit {

  position:boolean;

  constructor() { }

  ngOnInit() {
    var retrievedObject = JSON.parse(localStorage.getItem('userInfo'));
    // console.log('userInfo: ', retrievedObject);
    
    switch (retrievedObject.position) {
      case '2':
        this.position = true;
        break;
      case '3':
        this.position = true;
        break;
      default:
        this.position = false;
        break;
    }
    // console.log('userInfo: ', JSON.parse(retrievedObject));
  }

}

import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/servicios/websocket.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

// class chatModel {
//   username : string;
//   message : string;
// }

export class ChatComponent implements OnInit {

  myForm: FormGroup;
  // formattedMessage: string;
  formattedMessage: any;

  chatModels = [];
  typing: any = '';

  chat = {
    username: '',
    message: ''
  }

  constructor(
    private websocketService: WebsocketService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.myForm = this.formBuilder.group({
      username: '',
      email: '',
      message: ''
    });

    this.onChanges();

    this.websocketService.listen('chat:message').subscribe(data => {
      this.typing = ''
      this.chatModels.push(data)
      console.log(this.chatModels);
    });

    this.websocketService.listen('chat:typing').subscribe( data => {
      console.log(data)
      this.typing = data;
    });

  }

  send() {
    // console.log(this.myForm.controls['message'].value)
    this.websocketService.emit('chat:message', {
      message: this.myForm.controls['message'].value,
      username: this.myForm.controls['username'].value
    })
  }

  onChanges(): void {
    this.myForm.get('username').valueChanges.subscribe(val => {
      this.formattedMessage = `My name is ${val}.`;
      this.websocketService.emit('chat:typing', val)
    });
  }

}

import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  socket : any;
  readonly URL = environment.URL;
  // readonly url: string = "ws://localhost:3000";


  constructor() { 
    this.socket = io(this.URL)
  }

  listen(eventName : string){
    return new Observable((subscriber)=>{
      this.socket.on(eventName,(data)=>{
        subscriber.next(data);
      })
    })
  }

  emit(eventName: string, data:any){
    this.socket.emit(eventName,data);
  }

}

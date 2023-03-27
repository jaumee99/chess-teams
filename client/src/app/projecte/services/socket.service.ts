import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  public socket: Socket;

  constructor() {
    this.socket = new Socket({ url: 'http://localhost:3000', options: {} });
  }
}

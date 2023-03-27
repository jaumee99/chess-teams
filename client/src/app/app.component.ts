import { Component } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  playerName: string = '';

  constructor(private socket: Socket) { }

  ngOnInit(): void {
    this.socket.on('updatePlayers', (players: any[]) => {
      console.log(players);
    });
  }

  addPlayer() {
    if (this.playerName.trim() !== '') {
      this.socket.emit('addPlayer', this.playerName);
      this.playerName = '';
    }
  }
}

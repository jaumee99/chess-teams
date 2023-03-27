import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { IPlayer } from '../../models/player/Iplayer';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  player: IPlayer[] = [];
  public socket: Socket;

  constructor(private route: ActivatedRoute, private router: Router, private socketService: SocketService ) {
    this.socket = this.socketService.socket;
  }

ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.socket.emit('getPlayer', id);
      this.socket.on('player', (players: IPlayer[]) => {
        this.player = players;
      });
    });
  }

  addPlayer(name: string): void {
    const player: IPlayer = {
      id: this.socket.ioSocket.id,
      team: this.player.length % 2,
      name: name
    };
    this.socket.emit('addPlayer', player);
  }

  pieceMoved(player: IPlayer): void {
    console.log('Ha mogut pesa!', player);
  }

}

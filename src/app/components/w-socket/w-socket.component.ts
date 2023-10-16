import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { WebSocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-w-socket',
  templateUrl: './w-socket.component.html',
  styleUrls: ['./w-socket.component.scss']
})
export class WSocketComponent {
  constructor(private webSocketService: WebSocketService) {}
}

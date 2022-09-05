import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from "@nestjs/common";

@WebSocketGateway({
  cors : {
    origin: ['http://localhost:3000']
  }
})
export class EventsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() public server: Server;
  private logger: Logger = new Logger('Event Gateway');

  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: string): any {
    console.log(client.data);
    console.log(client.rooms);
    console.log(payload);
    return this.server.emit('toClient', 'hello');
  }

  afterInit(server: Server): any {
    console.log('websocket server init');
  }

  handleConnection(client: any, ...args: any[]): any {
    console.log('@@', client.id);
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: any): any {
    this.logger.log(`Client disconnected: ${client.id}`);
  }
}

import { Service } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { io, Socket, } from 'socket.io-client';

@Service()
export class StatsService {
  private ioSocket: Socket = io('https://scorebot-lb.hltv.org', {
      transports: ['websocket'],
    });

    public joinMatch(matchId: number): void {
      this.ioSocket.emit('readyForMatch', JSON.stringify({ token: '', listId: Number(matchId) }));
    }

    public listen<T>(ev: string): Observable<T> {
      return fromEvent<T>(this.ioSocket, ev);
    }
}

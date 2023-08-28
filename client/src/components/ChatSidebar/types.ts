import { Socket } from "socket.io-client";

export interface User {
  socketID: string;
  userName: string;
  room: string;
}

export interface ChatBarProps {
  socket: Socket;
  room?: string | null;
}

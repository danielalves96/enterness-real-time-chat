import { Socket } from "socket.io-client";

export interface Message {
  id: string;
  text: string;
  name: string;
  socketID: string;
}

export interface ChatPageProps {
  socket: Socket;
}

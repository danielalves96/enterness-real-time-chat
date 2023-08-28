import { Socket } from "socket.io-client";

export interface ChatFooterProps {
  socket: Socket;
  userName?: string | null;
  room?: string | null;
}

export interface Emoji {
  colons: string;
  emoticons: string[];
  id: string;
  name: string;
  native: string;
  skin: number;
  unified: string;
}

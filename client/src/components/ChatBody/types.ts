export interface Message {
  id: string;
  text: string;
  name: string;
  socketID: string;
}

export interface ChatBodyProps {
  messages: Message[];
  lastMessageRef: React.RefObject<HTMLDivElement>;
  userName?: string | null;
}

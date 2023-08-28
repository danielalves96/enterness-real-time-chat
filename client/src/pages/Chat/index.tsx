import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ChatBody from "../../components/ChatBody";
import ChatFooter from "../../components/ChatFooter";
import ChatSidebar from "../../components/ChatSidebar";
import { ChatPageProps, Message } from "../../pages/Chat/types";

const Chat: React.FC<ChatPageProps> = ({ socket }) => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [searchParams] = useSearchParams();
  const lastMessageRef = useRef<HTMLDivElement | null>(null);
  const userName = searchParams.get("username");
  const room = searchParams.get("room");

  useEffect(() => {
    if (!userName || !room) {
      navigate("/");
      return;
    }

    socket.emit("newUser", { userName, socketID: socket.id, room });
  }, [navigate, room, socket, userName]);

  useEffect(() => {
    const messageResponseHandler = (data: Message) => {
      const messageExists = messages.some((message) => message.id === data.id);
      if (!messageExists) {
        setMessages((prevMessages) => [...prevMessages, data]);
      }
    };

    socket.on("messageResponse", messageResponseHandler);

    return () => {
      socket.off("messageResponse", messageResponseHandler);
    };
  }, [socket, messages]);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <ChatSidebar socket={socket} room={room} />
        <div className="flex flex-col flex-auto h-full p-6 bg-gray-900">
          <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-300 h-full p-4">
            <ChatBody
              messages={messages}
              lastMessageRef={lastMessageRef}
              userName={userName}
            />
            <ChatFooter socket={socket} userName={userName} room={room} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

import React from "react";
import { useNavigate } from "react-router-dom";
import { ChatBodyProps } from "./types";
import { CurrentUserMessage } from "../CurrentUserMessage";
import { OtherUserMessage } from "../OtherUserMessage";
import { LeaveChatButton } from "../LeaveChatButton";

const ChatBody: React.FC<ChatBodyProps> = ({
  messages,
  lastMessageRef,
  userName,
}) => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="flex flex-col h-full overflow-x-auto mb-4">
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-12 gap-y-2">
          {messages.map((message) =>
            message.name === userName ? (
              <CurrentUserMessage key={message.id} message={message} />
            ) : (
              <OtherUserMessage key={message.id} message={message} />
            )
          )}
        </div>
      </div>
      <LeaveChatButton handleLeaveChat={handleLeaveChat}></LeaveChatButton>
      <div ref={lastMessageRef} />
    </div>
  );
};

export default ChatBody;

import React, { useState, useRef } from "react";
import { ChatFooterProps, Emoji } from "./types";
import EmojiPickerComponent from "../EmojiPicker";
import { BsEmojiSunglasses, BsSendFill } from "react-icons/bs";

const ChatFooter: React.FC<ChatFooterProps> = ({ socket, userName, room }) => {
  const [message, setMessage] = useState<string>("");
  const [divVisible, setDivVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && userName) {
      socket.emit("message", {
        text: message,
        name: userName,
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
        room,
      });
    }
    setMessage("");
  };

  const toggleDivVisibility = () => {
    setDivVisible(!divVisible);
  };

  const handleSelectEmoji = (emoji: Emoji) => {
    setMessage(`${message}${emoji.native}`);
    setDivVisible(false);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <form
        className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
        onSubmit={handleSendMessage}
      >
        <div className="flex-grow ">
          <div className="relative w-full">
            <input
              ref={inputRef}
              type="text"
              className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="button"
              onClick={toggleDivVisibility}
              className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
            >
              <BsEmojiSunglasses size={20} />
            </button>
            {divVisible && (
              <EmojiPickerComponent onEmojiSelect={handleSelectEmoji} />
            )}
          </div>
        </div>
        <div className="ml-4">
          <button className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 rounded-xl text-white p-3 flex-shrink-0">
            <BsSendFill />
          </button>
        </div>
      </form>
    </>
  );
};

export default ChatFooter;

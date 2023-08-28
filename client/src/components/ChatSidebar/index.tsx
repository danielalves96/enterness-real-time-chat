import React, { useState, useEffect } from "react";
import { ChatBarProps, User } from "./types";
import imgUrl from "../../assets/logo.svg";
import { useTranslation } from "react-i18next";

const ChatSidebar: React.FC<ChatBarProps> = ({ socket, room }) => {
  const { t } = useTranslation();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    socket.on("newUserResponse", (data: User[]) => {
      const usersInRoom = data.filter((user) => user.room === room);
      setUsers(usersInRoom);
    });
  }, [socket, room]);

  return (
    <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-gray-900 flex-shrink-0">
      <div className="flex flex-row items-center justify-center h-12 w-full">
        <img className="w-10 h-10 mr-2" src={imgUrl} alt="logo" />
        <div className="ml-2 font-bold text-2xl text-white">
          {t("components.chatSidebar.appName")}
        </div>
      </div>
      <div className="flex flex-col mt-6">
        <div className="flex flex-row items-center justify-between text-sm ">
          <span className="font-bold text-white">{`${t(
            "components.chatSidebar.usersInRoom"
          )} ${room}:`}</span>
        </div>
        <div className="flex flex-col space-y-1 mt-4 -mx-2 overflow-y-auto">
          {users.map((user) => (
            <div
              className="flex flex-row items-center rounded-xl p-2"
              key={user.socketID}
            >
              <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full font-bold">
                {user.userName.substring(0, 2)}
              </div>
              <div className="ml-2 text-sm font-semibold text-white">
                {user.userName}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;

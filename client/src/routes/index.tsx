import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ChatPage from "../pages/Chat";
import { Socket } from "socket.io-client";

interface AppRoutesProps {
  socket: Socket;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ socket }) => {
  return (
    <Routes>
      <Route path="/" element={<Home socket={socket} />} />
      <Route path="/chat" element={<ChatPage socket={socket} />} />
    </Routes>
  );
};

export default AppRoutes;

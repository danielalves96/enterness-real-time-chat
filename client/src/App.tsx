import { BrowserRouter } from "react-router-dom";
import { io, Socket } from "socket.io-client";
import AppRoutes from "./routes";

const socket: Socket = io("ws://localhost:4000");

function App() {
  return (
    <BrowserRouter>
      <AppRoutes socket={socket} />
    </BrowserRouter>
  );
}

export default App;

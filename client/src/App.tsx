import { BrowserRouter } from "react-router-dom";
import { io, Socket } from "socket.io-client";
import AppRoutes from "./routes";

const serverURL = import.meta.env.VITE_SERVER_URL;
const socket: Socket = io(`${serverURL}`);

function App() {
  return (
    <BrowserRouter>
      <AppRoutes socket={socket} />
    </BrowserRouter>
  );
}

export default App;

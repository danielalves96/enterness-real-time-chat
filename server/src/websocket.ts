import { Server as SocketIOServer } from "socket.io"
import http from "http"
import { User } from "./types"

export const setupWebSocket = (server: http.Server) => {
  const io = new SocketIOServer(server, {
    cors: {
      origin: "*",
    },
  })

  let users: User[] = []

  io.on("connection", (socket) => {
    socket.on("message", (data) => {
      io.to(data.room).emit("messageResponse", data)
    })

    socket.on("newUser", (data: User) => {
      socket.join(data.room)

      const userInRoom = users.find(
        (user) => user.userName === data.userName && user.room === data.room
      )

      if (userInRoom) {
        userInRoom.socketID = socket.id
      } else {
        users.push(data)
      }

      io.emit("newUserResponse", users)
    })

    socket.on("disconnect", () => {
      users = users.filter((user) => user.socketID !== socket.id)
      io.emit("newUserResponse", users)
    })
  })
}

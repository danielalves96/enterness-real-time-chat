import express from "express"
import cors from "cors"
import http from "http"
import { setupWebSocket } from "./websocket"

const app = express()
const server = http.createServer(app)

setupWebSocket(server)

const PORT = 4000
app.use(cors())

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})

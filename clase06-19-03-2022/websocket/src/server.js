const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

const messages = [
  {
    author: "Diego",
    text: "Hola",
  },
  {
    author: "Jorge",
    text: "Como estan?",
  },
  {
    author: "Ana",
    text: "Hola grupo",
  },
];

io.on("connection", (socket) => {
  // Mensaje de bienvenida cuando se conecta un cliente nuevo
  console.log("💻 Nuevo usuario conectado!");
  socket.emit("mensajeConexion", "🔥 Bienvenidos al websocket Coderhouse");
  //Enviamos todos los mensajes al nuevo cliente cuando se conecta
  io.sockets.emit("messageBack", messages);
  socket.on("disconnect", () => {
    console.log("❌ Usuario desconectado");
  });
  socket.on("mensajeRespuesta", (data) => {
    console.log(data);
  });

  //Recibimos los mensajes desde el frontend
  socket.on("messageFront", (data) => {
    messages.push(data);
    // io.sockets.emit("message", data);
    io.sockets.emit("messageBack", messages);
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./src/public"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

const PORT = 8080;
server.listen(PORT, () => console.log(`🚀 Server started on port http://localhost:${PORT}`));

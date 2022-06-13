const express = require("express");

const app = express();

let contador = 0;

app.get("/", (req, res) => {
  res.send("<h1>Hola servidor Express</h1>");
});
app.get("/1", (req, res) => {
  res.send(" <h1>💵Hola servidor ruta 1</h1>");
});
app.get("/conteo", (req, res) => {
  contador++;
  res.send(`El conteo es ${contador}`);
});
app.get("/objeto", (req, res) => {
  res.json({ name: "coderhouse", emoji: "🔥" });
});

const PORT = 3001;

const server = app.listen(PORT, () => {
  console.log(`🔥 Servidor escuchando en el puerto http://localhost:${PORT}`);
});

server.on("error", (error) => console.log(error));

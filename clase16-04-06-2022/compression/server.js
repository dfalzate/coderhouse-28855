const express = require("express");
const compression = require("compression");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mensaje = "Hola que tal";
const mensajeLargo = mensaje.repeat(1000);

app.use(compression());

app.get("/saludo", (req, res) => {
  res.send(mensajeLargo);
});
app.get("/saludoZip", (req, res) => {
  res.send(mensajeLargo);
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));

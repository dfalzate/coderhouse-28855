import express, { json, urlencoded } from "express";

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

const nombres = ["Luis", "Lucia", "Juan", "Augusto"];
const apellidos = ["Pieres", "Cacurri", "Bezzola", "Alberca"];
const colores = ["Amarillo", "Azul", "Verde", "Rojo", "Blanco"];

app.get("/test", (req, res) => {
  const users = [];
  for (let i = 0; i < 10; i++) {
    const user = {
      id: i + 1,
      nombre: nombres[Math.round(Math.random() * (nombres.length - 1))],
      apellido: apellidos[Math.round(Math.random() * (apellidos.length - 1))],
      color: colores[Math.round(Math.random() * (colores.length - 1))],
    };
    users.push(user);
  }
  res.status(200).json({ users });
});

const PORT = 3001;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));

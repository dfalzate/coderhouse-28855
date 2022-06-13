const express = require("express");

const mascotas = [
  {
    nombre: "Mascota 1",
    raza: "Raza 1",
    edad: 1,
  },
  {
    nombre: "Mascota 2",
    raza: "Raza 2",
    edad: 2,
  },
  {
    nombre: "Mascota 3",
    raza: "Raza 3",
    edad: 3,
  },
];

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/index", {
    mascotas,
  });
});

app.get("/about", (req, res) => {
  res.render("pages/about", {});
});

const PORT = 8080;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));

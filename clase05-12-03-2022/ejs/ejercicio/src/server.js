const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const data = [
  {
    nombre: "Nombre 1",
    apellido: "Apellido 1",
    edad: 30,
  },
];

// app.set('views','./views')
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("../views/index", {
    data,
  });
});

app.post("/", (req, res) => {
  const { body } = req;
  data.push(body);
  res.send('<script>alert("Información guardada");windows.location.href="/"</script>');
});

const PORT = 8080;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));

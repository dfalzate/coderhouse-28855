const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const productos = JSON.parse(fs.readFileSync("productos.txt", "utf-8"));

const app = express();

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ------------------------------- Paginas web ------------------------------ */
const routerRender = express.Router();

routerRender.get("/", (req, res) => {
  res.render("index", {
    productos,
  });
});

routerRender.get("/get/:id", (req, res) => {
  const { id } = req.params;
  const producto = productos.filter((producto) => {
    if (producto.id === id) return producto;
  })[0];
  res.render("producto", { producto });
});

routerRender.get("/create", (req, res) => {
  res.render("formulario");
});

/* ---------------------------- No es pagina web ---------------------------- */
const routerProductos = express.Router();

routerProductos.post("/create", (req, res) => {
  const producto = req.body;
  producto.id = uuidv4();
  productos.push(producto);
  fs.writeFileSync("productos.txt", JSON.stringify(productos));
  res
    .status(200)
    .send("<div><h3>🔥 Producto grabado</h3><button><a href='/render'>Regresar</a></button></div>");
});

app.use("/render", routerRender);
app.use("/productos", routerProductos);

const PORT = 8080;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));

const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* -------------------------- GET -------------------------- */
app.get("/api/mensaje", (req, res) => {
  console.log(req);
  // res.status(200).send("Mensaje get");
  res.status(200).json({ mensaje: "Mensaje get" });
});

app.get("/api/usuario", (req, res) => {
  const { dni, nombre } = req.query;
  console.log(dni, nombre);
  console.log(req.body);
  res.status(401).json({ mensaje: "Mensaje get", dni, nombre });
});

app.get("/api/usuario/:dni1/:dni2", (req, res) => {
  const { dni1, dni2 } = req.params;
  console.log(dni1, dni2);
  res.status(401).json({ mensaje: "Mensaje get", dni1, dni2 });
});

/* ---------------------------------- POST ---------------------------------- */

app.post("/api/usuario", (req, res) => {
  const { body } = req;
  console.log(req.body);
  console.log(body);
});

/* ----------------------------------- PUT ---------------------------------- */

app.put("/api/usuario/:id", (req, res) => {
  const { id } = req.params;
  const { body } = req;
  console.log(id, body);
  res.status(200).json({ id, body });
});

/* --------------------------------- DELETE --------------------------------- */

app.delete("/api/usuario/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.json({ id });
});

const PORT = 8081;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:8081`),
);
server.on("error", (err) => console.log(err));

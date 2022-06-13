import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hola heroku");
});
app.get("/ruta", (req, res) => {
  res.send("<h1>Otra ruta</h1>");
});

const server = app.listen(process.env.PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));

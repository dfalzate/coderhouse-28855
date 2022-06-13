const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "./src/views");
app.set("view engine", "cte");

// !Primera parte
// app.set("view engine", "ntl");

// app.engine("ntl", (filePath, options, callback) => {
//   fs.readFile(filePath, (err, content) => {
//     if (err) return callback(new Error(err));
//     const render = content
//       .toString()
//       .replace("#title#", options.title)
//       .replace("#message#", options.message);
//     return callback(null, render);
//   });
// });

// app.get("/", (req, res) => {
//   res.render("index1", {
//     title: "Este es el titulo 1",
//     message: "Este es un mensaje 2",
//   });
// });

// !Segunda parte

app.engine("cte", (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(new Error(err));
    const render = content
      .toString()
      .replace("^^titulo$$", options.titulo)
      .replace("^^mensaje$$", options.mensaje)
      .replace("^^autor$$", options.autor)
      .replace("^^version$$", options.version);
    return callback(null, render);
  });
});

app.get("/cte1", (req, res) => {
  res.render("plantilla1", {
    titulo: "Titulo",
    mensaje: "Mensaje",
    autor: "Autor",
    version: 1.1,
  });
});

const PORT = 8080;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));

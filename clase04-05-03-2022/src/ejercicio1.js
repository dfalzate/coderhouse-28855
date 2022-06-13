const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let frase = "Hola Mundo, como estan?";

app.get("/api/frase", (req, res) => {
  res.status(200).json({
    frase,
  });
});

app.get("/api/letras/:num", (req, res) => {
  const numero = req.params.num;

  if (numero < 0 || numero > frase.length) {
    res.status(400).json({
      msg: "El numero es invalido",
    });
  }

  const character = frase.charAt(numero);

  res.status(200).json({
    character,
  });
});

app.get("/api/palabras/:num", (req, res) => {
  const numero = parseInt(req.params.num - 1);

  const arrayFrase = frase.split(" ");

  if (numero < 0 || numero > arrayFrase.length) {
    res.status(400).json({
      msg: "El numero es invalido",
    });
  }

  const palabra = arrayFrase[numero];

  res.status(200).json({
    buscad: palabra,
  });
});

app.post("/api/palabras", (req, res) => {
  const { palabra } = req.body;
  frase += " " + palabra;
  const arrayFrase = frase.split(" ");
  console.log(arrayFrase);
  res.status(200).json({
    agregada: palabra,
    pos: arrayFrase.length,
    frase,
  });
});

app.put("/api/palabras/:pos", (req, res) => {
  const { pos } = req.params;
  const { palabra } = req.body;
  const arrayFrase = frase.split(" ");
  const anterior = arrayFrase[pos];
  arrayFrase[pos] = palabra;
  frase = arrayFrase.join(" ");
  res.status(200).json({
    actualizada: palabra,
    anterior,
    frase,
  });
});

app.delete("/api/palabras/:pos", (req, res) => {
  const { pos } = req.params;
  const arrayFrase = frase.split(" ");
  console.log(arrayFrase);
  arrayFrase.splice(pos - 1, 1);
  frase = arrayFrase.join(" ");
  res.status(200).json({ frase });
});

const PORT = 8081;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:8081`),
);
server.on("error", (err) => console.log(err));

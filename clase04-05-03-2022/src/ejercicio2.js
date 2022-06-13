const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/sumar/:num1/:num2", (req, res) => {
  const { num1, num2 } = req.params;
  const suma = Number(num1) + Number(num2);
  res.status(200).send(`Suma: ${suma} `);
});

app.get("/api/sumar", (req, res) => {
  const { num1, num2 } = req.query;
  const suma = Number(num1) + Number(num2);
  res.status(200).send(`Suma: ${suma} `);
});

app.get("/api/operacion/:operacion", (req, res) => {
  const { operacion } = req.params;
  /* ---------------------------- NO RECOMENDADO!!! --------------------------- */
  const suma = eval(operacion);
  res.status(200).send(`Suma: ${suma} `);
});

const PORT = 3032;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:3032`),
);
server.on("error", (err) => console.log(err));

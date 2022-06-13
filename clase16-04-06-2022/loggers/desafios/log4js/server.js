const express = require("express");
const logger = require("./logger.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/suma/:id", (req, res) => {
  logger.info("Hola");
});

app.get("/suma", (req, res) => {
  const { n1, n2 } = req.query;
  if (isNaN(n1) || isNaN(n2)) {
    logger.debug("Valores incorrectos");
    logger.error(`n1=${n1} n2=${n2} no son numeros`);
    res.send(`n1=${n1} n2=${n2} no son numeros`);
  } else {
    logger.info(`Suma=${Number(n1) + Number(n2)}`);
    res.send(`Suma=${Number(n1) + Number(n2)}`);
  }
});

app.all("*", (req, res) => {
  logger.warn("Ruta no definida1");
  res.send("Ruta no definida 1");
});

app.use((req, res) => {
  logger.warn("Ruta no definida");
  res.send("Ruta no definida");
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  logger.info(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));

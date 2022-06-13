const express = require("express");
const { fork } = require("child_process");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let visitas = 0;

const computo = fork("calculo.js");

app.get("/calculo", (req, res) => {
  computo.on("message", (resultado) => {
    console.log("Resultado+++++++", resultado);
    res.status(200).send({ resultado });
  });
  computo.send("start");
});
app.get("/visitas", (req, res) => {
  ++visitas;
  res.status(200).json({ visitas });
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));

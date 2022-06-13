const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function calculo() {
  let sum = 0;
  for (let i = 0; i < 2e6; i++) {
    sum++;
    console.log(sum);
  }
  return sum;
}

let visitas = 0;

app.get("/calculo", (req, res) => {
  const resultado = calculo();
  res.status(200).json({ resultado });
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

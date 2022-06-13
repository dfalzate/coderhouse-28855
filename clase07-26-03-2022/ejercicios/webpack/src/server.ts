// import express from "express";
import express from "express";
import { Perimetros } from "./lib/perimetros";
import { Areas } from "./lib/areas";

const perimetros = new Perimetros();
const areas = new Areas();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routePerimetros = express.Router();

routePerimetros.get("/cuadrado", (req, res) => {
  const { lado } = req.query;
  const _lado: number = Number(lado);
  res.status(200).json({
    perimetro: perimetros.perimetroCuadrado(_lado),
  });
});

const routeAreas = express.Router();
routeAreas.get("/cuadrado", (req, res) => {
  const { lado } = req.query;
  const _lado: number = Number(lado);
  res.status(200).json({
    area: areas.areaCuadrado(_lado),
  });
});

app.use("/areas", routeAreas);
app.use("/perimetros", routePerimetros);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));

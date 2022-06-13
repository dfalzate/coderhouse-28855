import express from "express";
import { Persona } from "./lib/class";
import * as operaciones from "./lib/functions";

const coderhouse: Persona = new Persona("Coderhouse", 30);
const suma = operaciones.suma(1, 2);
const resta = operaciones.resta(1, 2);

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    coderhouse,
    suma,
    resta,
  });
});

app.listen(8080, () => {
  console.log("http://localhost:8080");
});

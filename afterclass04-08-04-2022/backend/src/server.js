import express from "express";
import dotenv from "dotenv";
import { config } from "./config/db.js";
import knex from "knex";
import cors from "cors";
dotenv.config();

const db = knex(config);



async function createTables() {
  try {
    const exist = await db.schema.hasTable("usuarios");
    if (!exist) {
      await db.schema.createTable("usuarios", (table) => {
        table.increments("id").primary().notNullable(),
          table.string("firstName").notNullable(),
          table.string("lastName").notNullable(),
          table.string("email").notNullable();
      });
      console.log("🔥 Tabla creada correctamente");
    }
  } catch (error) {
    console.log(error);
  }
}

createTables();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/usuarios/create", async (req, res) => {
  const { body } = req;
  try {
    const response = await db.insert(body).from("usuarios");
    console.log(response);
    if (response) {
      res.status(200).json({ response });
    } else {
      res.status(400).send("Problema al crear el usuario");
    }
  } catch (error) {
    console.log(error);
  }
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server started on port http://localhost:${PORT}`),
);
server.on("error", (err) => console.log(err));

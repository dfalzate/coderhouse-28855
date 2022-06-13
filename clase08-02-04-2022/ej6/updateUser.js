import { knex } from "./db.js";

async function updateUser() {
  try {
    await knex.from("usuarios").update({ name: "Nombre7", lastName: "Apellido7" }).where("id", 3);
    console.log("Informacion actualizada");
  } catch (error) {
    console.log(error);
  } finally {
    knex.destroy();
  }
}

updateUser();

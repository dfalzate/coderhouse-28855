import { knex } from "./db.js";

async function readUser() {
  try {
    const users = await knex.select().from("usuarios");
    // .where("id", ">", 4).orderBy("id", "desc");
    console.log(users);
  } catch (error) {
    console.log(error);
  } finally {
    knex.destroy();
  }
}

readUser();

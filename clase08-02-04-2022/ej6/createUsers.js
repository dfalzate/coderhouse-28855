import { knex } from "./db.js";

const users = [
  { name: "Name1", lastName: "Last1", email: "n1@n.com" },
  { name: "Name2", lastName: "Last2" },
  { name: "Name3", lastName: "Last3", email: "n3@n.com" },
];

async function createUsers() {
  try {
    const response = await knex.insert(users).from("usuarios");
    console.log("✔ ️Usuarios agregados");
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    knex.destroy();
  }
}

createUsers();

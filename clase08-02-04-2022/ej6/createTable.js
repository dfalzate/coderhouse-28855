import { knex } from "./db.js";

async function createTable() {
  try {
    const exist = await knex.schema.hasTable("usuarios");
    if (!exist) {
      await knex.schema.createTable("usuarios", (table) => {
        table.increments("id").primary().notNullable(),
          table.string("name", 100).notNullable(),
          table.string("lastName", 100).notNullable(),
          table.string("email", 100);
      });
      console.log("🔥 Tabla creada!");
    } else {
      console.log("❌ La tabla ya existe");
    }
  } catch (error) {
    console.log(error);
  } finally {
    knex.destroy();
  }
}

createTable();

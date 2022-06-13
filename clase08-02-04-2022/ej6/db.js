// import { config } from "./config.js";
import { config } from "./configSQLite.js";
// console.log(config);
import _knex from "knex";

export const knex = _knex(config);

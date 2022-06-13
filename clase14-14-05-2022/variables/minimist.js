const minimist = require("minimist");

const options = {
  default: {
    nombre: "Coderhouse",
    apellido: "Backend",
  },
  alias: {
    C: "AliasC",
    a1: "AliasA1",
  },
};

const arg = minimist(process.argv.slice(2), options);

console.log(arg);

/* ---------------------------- Desafió minimist ---------------------------- */

const optionsDesafio = {
  alias: {
    m: "modo",
    p: "puerto",
    d: "debug",
  },
  default: {
    modo: "prod",
    puerto: 3000,
    debug: false,
  },
};

const { modo, puerto, debug, _ } = minimist(process.argv.slice(2), optionsDesafio);

console.log({ modo, puerto, debug, otros: _ });

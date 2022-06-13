const yargs = require("yargs")(process.argv.slice(2));

/* ----------------------------------- EJ6 ---------------------------------- */
// import Yargs from 'yargs'
// const yargs =Yargs(process.argv.slice(2))

console.log(
  yargs
    .default({
      nombre: "Coderhouse",
      apellido: "Backend",
    })
    .alias({
      a: "AliasA",
    })
    .boolean("AliasA").argv,
);

/* ------------------------------ Desafio yargs ----------------------------- */

const { modo, puerto, debug, _ } = yargs
  .alias({
    m: "modo",
    p: "puerto",
    d: "debug",
  })
  .default({
    modo: "prod",
    puerto: 3000,
    debug: false,
  })
  .boolean("debug").argv;

console.log({ modo, puerto, debug, otros: _ });

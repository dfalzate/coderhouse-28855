// import { parse } from "https://deno.land/std@0.150.0/datetime/mod.ts";
import { parse } from "https://deno.land/std@0.149.0/datetime/mod.ts";

import { bgBlue, bold, italic, yellow, rgb24 } from "https://deno.land/std@0.150.0/fmt/colors.ts";

/* ----------------------------- primer ejemplo ----------------------------- */

function helloDeno(nombre: string) {
  console.log(`Hello ${nombre}`);
}

helloDeno("Coderhouse");

/* --------------------------- primera importación -------------------------- */

const myDate = parse("30-07-2022", "mm-dd-yyyy");
console.log(myDate);

console.log(bgBlue(yellow("Hello, World!")));

console.log(
  rgb24("Hello, World!", {
    r: 255,
    g: 42,
    b: 43,
  }),
);

/* ------------------------------ Objeto global ----------------------------- */

console.log(Deno);
console.log("Args=>", Deno.args);

const PORT = Number(Deno.env.get("PORT"));
console.log("Env=>", PORT);

/* -------------------------------- Archivos -------------------------------- */

await Deno.writeTextFile("text.txt", "Nuestro primer archivo con Deno");

const texto = await Deno.readTextFile("text.txt");
console.log(texto);

const fs = require("fs");

/* -------------------------------------------------------------------------- */
/*                                    Files                                   */
/* -------------------------------------------------------------------------- */

/* ---------------------------- escribir archivo ---------------------------- */

const objeto = {
  nombre: "Coderhouse",
  curso: 28855,
};

const array = [1, "a", [1, 2], objeto];

fs.writeFileSync("archivo.txt", JSON.stringify(objeto));
fs.writeFileSync("archivo.txt", JSON.stringify(array));
fs.writeFileSync("archivo.txt", "Esto es data\n");
console.log("Ejecuta otro codigo");
/* ------------------------------ leer archivo ------------------------------ */

let data = fs.readFileSync("archivo.txt", "utf-8");
console.log("Leer archivo sync:", data);
//console.log("Leer archivo sync:", JSON.parse(data));

/* ----------------------------- editar archivo ----------------------------- */

fs.appendFileSync("archivo.txt", "Data agregada\n");
data = fs.readFileSync("archivo.txt", "utf-8");
console.log("Leer archivo sync:", data);

/* ----------------------------- borrar archivo ----------------------------- */

fs.unlinkSync("archivo.txt");

//try {
//  fs.unlinkSync("archivo1.txt");
//} catch (error) {
//  console.log(error);
//  //throw new Error(error);
//}

console.log("sigue");

/* ----------------------------- Ejemplo en vivo ---------------------------- */

//const fs = require("fs")
try {
  fs.writeFileSync("fyh.txt", new Date().toLocaleString());
  console.log(fs.readFileSync("fyh.txt", "utf-8"));
} catch (e) {
  console.log(e);
}

/* -------------------- código asíncrono con callbacks -------------------- */

fs.writeFile("archivo2.txt", "Asincronico con callback", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Archivo creado");
  }
});

//console.log("Ejecuta otro codigo ");

/* ----------------------- leear archivo con callbacks ---------------------- */

fs.readFile("archivo2.txt", "utf-8", (a, b) => {
  if (a) {
    console.log(a);
  } else {
    console.log(b);
  }
});

/* ---------------------- editar archivo con callbacks ---------------------- */

fs.appendFile("archivo2.txt", "Esto es nuevo asincronico", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Archivo editado");
  }
});

/* ----------------------------- borrar archivo ----------------------------- */
fs.unlink("archivo2.txt", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Archivo borrado");
  }
});

/* ------------------------------ crear carpeta ----------------------------- */

fs.mkdir("nuevaCarpeta", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("carpeta creada");
  }
});

fs.writeFile("./nuevaCarpeta/archivo2.txt", "Asincronico con callback", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Archivo creado");
  }
});

fs.readdir("./nuevaCarpeta", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

async function crearArchivo() {
  try {
    await fs.promises.writeFile("archivo3.txt", "Async/Await");
    const data = await fs.promises.readFile("archivo3.txt", "utf-8");
    await fs.promises.appendFile("archivo3.txt", "Esto es nuevo");
    await fs.promises.rename("archivo3.txt", "otroArchivo.txt");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

async function otra() {
  await crearArchivo();
}

crearArchivo();

//await fs.promises.writeFile("archivo3.txt", "Async/Await");
//const data = await fs.promises.readFile("archivo3.txt", "utf-8");
//console.log(data);

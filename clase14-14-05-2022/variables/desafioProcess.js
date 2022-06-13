const minimist = require("minimist");

process.on("exit", (code) => {
  console.log(code);
});

const args = minimist(process.argv.slice(2));

const crearError = () => {
  const tipos = [];
  for (const value of args._) {
    tipos.push(typeof value);
  }
  console.log({
    error: {
      descripcion: "Error de tipo",
      numeros: args._,
      tipos,
    },
  });
  process.exit(-5);
};

const promedio = (numeros) => {
  if (numeros.length === 0) {
    console.log({
      error: {
        descripcion: "Entrada vacia",
      },
    });
    process.exit(-4);
  }
  for (const value of numeros) {
    if (typeof value !== "number") crearError();
  }
  const suma = numeros.reduce((sig, act) => sig + act);
  const promedio = suma / numeros.length;
  return promedio;
};

console.log({
  datos: {
    numeros: args._,
    promedio: promedio(args._),
  },
});

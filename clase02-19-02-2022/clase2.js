/* ---------------------------- return implicito ---------------------------- */
const getPersona = () => ({ nombre: "coderhouse" });
console.log(getPersona());

/* -------------------------------- callbacks ------------------------------- */

const ejecutar = (a) => a();
const saludar = () => console.log("Hola coderhouse");
ejecutar(saludar);
ejecutar(() => console.log("Otro callback"));

const ejecutar1 = (funcion, parametro) => funcion(parametro);
const saludar1 = (parametro) => console.log(`Hola ${parametro}`);
ejecutar1(saludar1, "Coderhouse backend 28855");
ejecutar1((parametro) => console.log(parametro), "Hola arrow function");

/* ----------------------------- Ejemplo en vivo ---------------------------- */

const operacion = (a, b, funcion) => funcion(a, b);

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;

console.log(operacion(1, 2, suma));
console.log(operacion(1, 2, resta));
console.log(operacion(1, 2, multiplicacion));
//console.log(operacion(1, 2, division));
//console.log(operacion(1, 0, division));

const division = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("b no puede ser igual a 0");
    } else {
      resolve(a / b);
    }
  });
};

division(10, 0)
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.log(error);
  });

division(10, 2)
  .then((resultado) => {
    console.log(resultado);
    return resultado;
  })
  .then((resultado) => {
    console.log(resultado * 25);
  })
  .catch((error) => {
    console.log(error);
  });

/* ----------------------------- codigo en vivo ----------------------------- */

Promise.resolve(20)
  .then((x) => x + 1)
  .then((x) => x * 2)
  .then((x) => {
    if (x === 22) throw "Error";
    return 80;
  })
  .then((x) => 30)
  .then((x) => x / 2)
  .then(console.log)
  .catch(console.log);

Promise.resolve(10)
  .then((x) => x + 1)
  .then((x) => x * 2)
  .then((x) => {
    if (x === 22) throw "Error";
    return 80;
  })
  .then((x) => 30)
  .then((x) => x / 2)
  .then(console.log)
  .catch(console.log);

console.log("++++++++++++++");

/* ------------------------- programacion sincronica ------------------------ */

function funA() {
  console.log(1);
  funB();
  console.log(2);
}

function funB() {
  console.log(3);
  funC();
  console.log(4);
}

function funC() {
  console.log(5);
}

funA();

/* --------------------------------- timers --------------------------------- */

setTimeout(() => {
  console.log("timer 5000ms");
}, 5000);

let conteo = 0;
//setInterval(() => {
//  console.log(conteo++);
//}, 1000);
//
//clearInterval(5000);
/* --------------------------- Ejecucion callbacks -------------------------- */

const delay = (retardo) => {
  for (let i = 0; i < retardo * 3e6; i++);
};

function hacerTarea1(num) {
  console.log("Delay - Haciendo tarea ", num);
  delay(100);
}

hacerTarea1(1);
hacerTarea1(2);
hacerTarea1(3);
hacerTarea1(4);

console.log("fin de tareas");
console.log("otras tareas ...");

function hacerTarea2(num, cb) {
  console.log("Tarea no. ", num);
  setTimeout(cb, 1000);
}

console.log("Inicio");
hacerTarea2(1, () => {
  hacerTarea2(2, () => {
    hacerTarea2(3, () => {
      console.log("fin de tareas");
    });
  });
});

console.log("otras tareas ...");

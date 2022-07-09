/* -------------------------------------------------------------------------- */
/*                                 console log                                */
/* -------------------------------------------------------------------------- */
console.log("Hola coderhouse");
console.warn("Warn");
console.error("Error");
console.log([1, 2, 3, 4]);
console.log({ nombre: "Coderhouse" });
console.log(true);
console.log(null);
console.log(undefined);
console.table([1, 2, 3, 4]);
console.table({ nombre: "Coderhouse" });
console.clear();

/* -------------------------------------------------------------------------- */
/*                               Tipos de datos                               */
/* -------------------------------------------------------------------------- */

var var1 = "Coder1";
function fun1() {
  var2 = "Coder2";
}
fun1();
// function fun1() {
//   let letvar2 = "Coder2";
// }
fun1();

// console.log(var1, var2);

var3 = var2;

let let1 = "Let1"; //se puede cambiar
const const1 = "Const1"; //constante y no se puede cambiar
console.log(let1, const1);

let1 = 1;
//const1 = 2;

console.log(let1, const1);

const const2 = [];
const const3 = {};

const2.push(1);
const3.nombre = "Coderhouse";

console.log(const2, const3);

// let i = 0;

// function foo() {
//   i = 1;
//   let j = 2;
//   if (true) {
//     console.log("Function Foo", i, j);
//   }
//   console.log(j);
// }

// function foo() {
//   let i = 1;
//   if (true) {
//     let i = 2;
//     console.log("Function Foo", i);
//   }
//   console.log(i);
// }

function foo() {
  if (true) {
    let i = 2;
    console.log("Function Foo", i);
  }
  // console.log(i);
}
foo();

/* -------------------------------------------------------------------------- */
/*                                  funciones                                 */
/* -------------------------------------------------------------------------- */

(function nombre(nom) {
  console.log("Función:", nom);
})("Coderhouse");

// nombre("Coderhouse");

const arrow = () => {};

(function () {
  console.log("Soy una funcion anonima");
})();

const functionHola = () => console.log("+++Hola+++");

function hola(funcion) {
  funcion();
}

hola(functionHola);

// function funct(()=>{}){}
// nombre();
arrow();

//closure
const v1 = 1;
function f1() {
  const v2 = 2;
  function f2() {
    const v3 = 3;
    console.log(v1, v2, v3);
  }
  f2();
  console.log(v1, v2);
}
f1();
console.log(v1);

// f1().f2();

/* -------------------------------------------------------------------------- */
/*                              templates strings                             */
/* -------------------------------------------------------------------------- */

// ("");
const nombre = "coderhouse";

const bienvenida = `
Bienvenidos al curso de ${nombre}
este es el curso 28852
`;
console.log(bienvenida);

/* -------------------------------------------------------------------------- */
/*                                   clases                                   */
/* -------------------------------------------------------------------------- */

// ! Important
// TODO

class Cliente {
  constructor(nombre, fecha, direccion) {
    this.nombre = nombre;
    this.fecha = fecha;
    this.direccion = direccion;
  }

  static saludoCorto = "Hola coderhouse";

  static funStatic(param1, param2) {
    console.log(param1);
  }

  getNombre() {
    console.log(this.nombre);
  }
}

console.log(Cliente.saludoCorto);
Cliente.funStatic("static function");
// Cliente.getNombre();
const cliente = new Cliente("Coderhouse", "12-02-2022", "Dirección");
console.log(cliente, typeof cliente);
cliente.getNombre();

class Ensayo {
  constructor(nombre) {
    this.nombre = nombre;
  }
  suma(a, b) {
    return a + b;
  }
}

const ensayo = new Ensayo("Coder");

console.log(ensayo.nombre);
console.log(ensayo.suma(1, 2));
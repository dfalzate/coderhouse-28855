"use strict";

var lista = [1, 2, 3, 4, 5];

lista.map(function (x) {
  return x * x;
}).forEach(function (x) {
  return console.log(x);
});

var persona = {
  nombre: "Coderhouse",
  edad: 30,
  url: "www.coderhouse.com"
};

console.log(persona);

const ToDos = require("./todos.js");

const toDos = new ToDos();

console.log(toDos.list());
toDos.add("Tarea1");
console.log(toDos.list());
toDos.add("Tarea2");
console.log(toDos.list());
toDos.complete("Tarea1");
console.log(toDos.list());

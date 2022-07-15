const ToDos = require("./todos.js");
const assert = require("assert").strict;

describe("Test de integración de tareas", () => {
  it("Debería crear el contener de tareas vacío", () => {
    const toDos = new ToDos();
    assert.strictEqual(toDos.list().length, 0);
  });
  it("Debería adicionar tareas correctamente", () => {
    const toDos = new ToDos();
    toDos.add("Tarea1");
    assert.strictEqual(toDos.list().length, 1);
    assert.deepStrictEqual(toDos.list(), [{ title: "Tarea1", completed: false }]);
  });
  it("Debería marcar como completada la Tarea1", () => {
    const toDos = new ToDos();
    toDos.add("Tarea1");
    toDos.add("Tarea2");
    toDos.complete("Tarea1");
    assert.strictEqual(toDos.list().length, 2);
    assert.deepStrictEqual(toDos.list(), [
      { title: "Tarea1", completed: true },
      { title: "Tarea2", completed: false },
    ]);
  });
});

describe("Comprobar errores", () => {
  it("Debería devolver un error cuando no hay tareas", () => {
    const toDos = new ToDos();
    const errorEsperado = new Error("No hay tareas");
    assert.throws(() => {
      toDos.complete("tarea");
    }, errorEsperado);
  });
  it("Debería devolver un error cuando la tarea no existe", () => {
    const toDos = new ToDos();
    toDos.add("Tarea1");
    const errorEsperado = new Error("Tarea no encontrada");
    assert.throws(() => {
      toDos.complete("tarea");
    }, errorEsperado);
  });
});

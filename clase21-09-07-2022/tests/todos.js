class ToDo {
  constructor() {
    this.todos = [];
  }

  list() {
    return this.todos;
  }

  add(title) {
    //(title, number)
    const todo = {
      title,
      completed: false,
      // number,
    };
    this.todos.push(todo);
    // console.log(number);
    //Por hice un código nuevo
  }

  complete(title) {
    if (this.todos.length === 0) {
      throw new Error("No hay tareas");
    }
    let found = false;
    this.todos.map((todo) => {
      if (todo.title === title) {
        todo.completed = true;
        found = true;
      }
    });
    if (!found) {
      throw new Error("Tarea no encontrada");
    }
  }
}

module.exports = ToDo;

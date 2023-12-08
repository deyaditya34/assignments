/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todo = [];
  }

  add(task) {
    this.todo.push(task);
    return this.todo;
  }

  remove(indexOfTodo) {
    
    return this.todo.splice(indexOfTodo, 1);
  }

  update(index, updatedTask) {
    if (index >= this.todo.length) {
      return
    }
    this.todo[index] = updatedTask;
  }

  getAll() {
    return this.todo;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= this.todo.length) {
      return null;
    }
    return this.todo[indexOfTodo];
  }

  clear() {
    this.todo = [];
  }
}

module.exports = Todo;

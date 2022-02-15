"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoCollection = void 0;
const todo_1 = require("./todo");
class ToDoCollection {
    constructor(userName, todoItems = []) {
        this.userName = userName;
        this.todoItems = todoItems;
        this.nextId = 1;
        // whitespace
    }
    addToDo(task) {
        while (this.getToDoById(this.nextId)) {
            this.nextId++;
        }
        this.todoItems.push(new todo_1.ToDoItem(this.nextId, task));
        return this.nextId;
    }
    getToDoById(id) {
        return this.todoItems.find((item) => item.id === id);
    }
    markComplete(id, complete) {
        const todoItem = this.getToDoById(id);
        if (todoItem) {
            todoItem.complete = true;
        }
    }
}
exports.ToDoCollection = ToDoCollection;

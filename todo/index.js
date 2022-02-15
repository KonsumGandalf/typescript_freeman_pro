"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = require("./todo");
const todoCollection_1 = require("./todoCollection");
let todos = [
    new todo_1.ToDoItem(1, "Buy Flowers"), new todo_1.ToDoItem(2, "Get Shoes"),
    new todo_1.ToDoItem(3, "Collect Tickets"), new todo_1.ToDoItem(4, "Call Joe", true)
];
let collection = new todoCollection_1.ToDoCollection("David", todos);
console.clear();
console.log(`${collection.userName}'s ToDoList`);
let newId = collection.addToDo("Go for run");
let todoItem = collection.getToDoById(newId);
console.log(JSON.stringify(todoItem));
todoItem === null || todoItem === void 0 ? void 0 : todoItem.printDetails();
//collection.addToDo(todoItem);

import { ToDoItem } from "./todo";
import { ToDoCollection } from "./todoCollection";

let todos: ToDoItem[] = [
    new ToDoItem(1, "Buy Flowers"), new ToDoItem(2, "Get Shoes"),
    new ToDoItem(3, "Collect Tickets"), new ToDoItem(4, "Call Joe", true)
];

let collection: ToDoCollection = new ToDoCollection("David", todos);

console.clear();
console.log(`${collection.userName}'s ToDoList`);

let newId = collection.addToDo("Go for run");
let todoItem = collection.getToDoById(newId)!;
console.log(JSON.stringify(todoItem));

todoItem?.printDetails();
//collection.addToDo(todoItem);
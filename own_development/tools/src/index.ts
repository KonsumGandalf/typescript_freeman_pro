import { sum } from "./calc" 

let printMessage = (msg: string): void => console.log(`Message: ${msg}`);
let message = "Hello, TypeScript";
printMessage(message);

const data = new Map();
data.set("Bob", "London");
data.set("Alice", "Paris");
data.forEach((val, key) => console.log(`${key} lives in ${val}`));

debugger;

const total = sum(100, 100, 100);
console.log(`Total value of the sum is ${total}`);
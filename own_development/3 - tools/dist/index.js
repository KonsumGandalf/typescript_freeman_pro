"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calc_1 = require("./calc"); // eslint-disable-line parse-error
let printMessage = (msg) => console.log(`Message: ${msg}`);
let message = "Hello, TypeScript";
printMessage(message);
let data = new Map();
data.set("Bob", "London");
data.set("Alice", "Paris");
data.forEach((val, key) => console.log(`${key} lives in ${val}`));
debugger;
const total = (0, calc_1.sum)(100, 100, 100);
console.log(`Total value of the sum is ${total}`);
//# sourceMappingURL=index.js.map
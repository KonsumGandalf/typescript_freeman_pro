"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
const cart_1 = require("./cart");
const formatters_1 = require("./formatters");
const debug_1 = __importDefault(require("debug"));
const chalk_1 = __importDefault(require("chalk"));
const kayak = new product_1.SportsProduct(1, "Kayak", 275, product_1.SPORT.Watersports);
const hat = new product_1.SportsProduct(2, "Hat", 22.1, product_1.SPORT.Running, product_1.SPORT.Watersports);
const ball = new product_1.SportsProduct(3, "Soccer Ball", 19.5, product_1.SPORT.Soccer);
const cart = new cart_1.Cart("Bob");
cart.addProduct(kayak, 1);
cart.addProduct(hat, 1);
cart.addProduct(hat, 2);
(0, formatters_1.sizeFormatter)("Cart", cart.itemCount);
(0, formatters_1.costFormatter)("Cart", cart.totalPrice);
(0, formatters_1.costFormatter)("Cart", `${cart.totalPrice}`);
(0, formatters_1.writeMessage)("Test message");
const db = (0, debug_1.default)("Example App");
db.enabled = true;
db("Message: %0", "Test message");
console.log(chalk_1.default.greenBright("Formatted Message"));
// console.log(chalk.notAColor("Formatted message"));

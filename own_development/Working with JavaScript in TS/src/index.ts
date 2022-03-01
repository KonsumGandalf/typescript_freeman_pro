import {SportsProduct, SPORT} from "./product";
import {Cart} from "./cart";
import {sizeFormatter, costFormatter, writeMessage} from "./formatters";
import debug from "debug";
import chalk from "chalk";

const kayak = new SportsProduct(1, "Kayak", 275, SPORT.Watersports);
const hat = new SportsProduct(2, "Hat", 22.1, SPORT.Running, SPORT.Watersports);
const ball = new SportsProduct(3, "Soccer Ball", 19.5, SPORT.Soccer);
const cart = new Cart("Bob");

cart.addProduct(kayak, 1);
cart.addProduct(hat, 1);
cart.addProduct(hat, 2);

sizeFormatter("Cart", cart.itemCount);
costFormatter("Cart", cart.totalPrice);
costFormatter("Cart", `${cart.totalPrice}`);
writeMessage("Test message");

const db = debug("Example App");
db.enabled = true;
db("Message: %0", "Test message");

console.log(chalk.greenBright("Formatted Message"));
// console.log(chalk.notAColor("Formatted message"));

import { calcTax, calcTaxAndSum } from "./tax.js";

class Product{
    constructor(name, price) {
        this.id = Symbol();
        this.name = name;
        this.price = price;
    }
    
    toString() {
        return `The Product ${this.name} has a Price of ${this.price}`
    }
}

const products = [new Product("Gloves", 23), new Product("Boots", 100)]
const totalPrice = calcTaxAndSum(...products.map(p => p.price));
console.log(`${products}\nTaxed Price: ${totalPrice}`)
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
const products = [new dataTypes_1.Product("Running Shoes", 100), new dataTypes_1.Product("Hat", 25)];
class SetCollection {
    constructor(initialItems = []) {
        this.items = new Set(initialItems);
    }
    add(...newItems) {
        newItems.forEach((item) => this.items.add(item));
    }
    get(name) {
        return [...this.items.values()].find((item) => item.name === name);
    }
    get count() {
        return this.items.size;
    }
}
const productCollection = new SetCollection(products);
console.log(`There are ${productCollection.count} products`);
const p = productCollection.get("Hat");
console.log(`Product: ${p.name}, ${p.price}`);
class MapCollection {
    constructor(initialItems = []) {
        this.items = new Map();
        this.add(...initialItems);
    }
    add(...newItems) {
        newItems.forEach((item) => this.items.set(item.name, item));
    }
    get(name) {
        return this.items.get(name);
    }
    get count() {
        return this.items.size;
    }
    [Symbol.iterator]() {
        return this.items.values();
    }
}
const productMapCollection = new MapCollection(products);
console.log(`There are ${productMapCollection.count} products`);
[...productMapCollection].forEach((prod) => console.log(`Product: ${prod.name}, ${prod.price}`));
// Page 331 - 358 are skipped

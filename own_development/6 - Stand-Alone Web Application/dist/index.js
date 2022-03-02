"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const localDataSource_1 = require("./data/localDataSource");
async function displayData() {
    const ds = new localDataSource_1.LocalDataSource();
    const allProducts = await ds.getProducts("name");
    const categories = await ds.getCategories();
    const chessProducts = await ds.getProducts("name", "Chess");
    let result = "";
    allProducts.forEach((p) => (result += `Product: ${p.name}, ${p.category}\n`));
    categories.forEach((c) => (result += `Category: ${c}\n`));
    chessProducts.forEach((p) => ds.order.addProduct(p, 1));
    result += `Order total: $${ds.order.total.toFixed(2)}`;
    return result;
}
displayData().then((res) => console.log(res));

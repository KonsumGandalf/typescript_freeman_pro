const ProductProto = {
  toString: function() {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
  },
};
const hat = {
  name: "Hat",
  price: 100,
  getPriceIncTax() {
    return Number(this.price) * 1.2;
  },
};
const boots = {
  name: "Boots",
  price: 100,
  getPriceIncTax() {
    return Number(this.price) * 1.2;
  },
};

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    toString() {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
}

const hat2 = new Product("Hat", 150);
Object.setPrototypeOf(hat, ProductProto);
Object.setPrototypeOf(boots, ProductProto);
console.log(hat.toString());
console.log(boots.toString());
console.log(hat2.toString());

const Product2 = function(name, price) {
  this.name = name;
  this.price = price;
};
Product2.prototype.toString = function () {
  return `toString: Name: ${this.name}, Price: ${this.price}`;
};
const hat_new = new Product2("Hat", 100);
const boots_new = new Product2("Boots", 100);

console.log(hat_new.toString());
console.log(boots_new.toString());
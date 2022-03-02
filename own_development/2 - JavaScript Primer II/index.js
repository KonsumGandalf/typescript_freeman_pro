/** const ProductProto = {
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
console.log(hat2.toString());*/

const Product = function(name, price) {
  this.id = Symbol();
  this.name = name;
  this.price = price;
};
Product.prototype.toString = function() {
  return `toString: Name: ${this.name}, Price: ${this.price}`;
};
const TaxedProduct = function(name, price, taxRate) {
  Product.call(this, name, price);
  this.taxRate = taxRate;
};
Object.setPrototypeOf(TaxedProduct.prototype, Product.prototype);

TaxedProduct.prototype.getPriceIncTax = function() {
  return Number(this.price) * this.taxRate;
};

TaxedProduct.prototype.toTaxString = function() {
  return `${this.toString()}, Tax: ${this.getPriceIncTax()}`;
};

const hat_new = new TaxedProduct("Hat", 100, 1.2);
const boots_new = new Product("Boots", 100);
console.log(hat_new.toTaxString());
console.log(boots_new.toString());

const ExportedProduct = function(name, price, dutyRate) {
  Product.call(this, name, price);
  this.dutyRate = dutyRate;
};
Object.setPrototypeOf(ExportedProduct.prototype, Product.prototype);

ExportedProduct.prototype.getPriceIncDuty = function() {
  return Number(this.price) * this.dutyRate;
};

ExportedProduct.prototype.toDutyString = function() {
  return `${this.toString()}, Duty: ${this.getPriceIncDuty()}`;
};

const gas = new ExportedProduct("Gasolina", 20, 2.1);
console.log(gas.toDutyString());

class AdvancedProduct extends Product {
  constructor(name, price, tax = 1.2) {
    super(name, price);
    this.taxRate = tax;
  }

  getPriceIncTax() {
    return Number(this.price) * this.taxRate;
  }

 toString() {
 const chainResult = super.toString();
 return `${chainResult}, Tax: ${this.getPriceIncTax()}`;
  }
}

const boat = new AdvancedProduct("submarine 1", 20, 2.0);
console.log(boat.toString());


function* createProductIterator() {
  yield new Product("Hat", 100);
  yield new Product("Boots", 100);
  yield new Product("Umbrella", 23);
}

[...createProductIterator()].forEach(ele => console.log(ele.toString()));

class GiftPack {
  constructor(name, prod1, prod2, prod3) {
    this.name = name;
    this.prod1 = prod1;
    this.prod2 = prod2;
    this.prod3 = prod3;
  }
  getTotalPrice() {
    return [this.prod1, this.prod2, this.prod3].reduce(
      (total, p) => total + p.price, 0);
  }

  *[Symbol.iterator]() {
    yield this.prod1;
    yield this.prod2;
    yield this.prod3;
  }
}
const winter = new GiftPack("winter", new Product("Hat", 100),
  new Product("Boots", 80), new Product("Gloves", 23));
console.clear();
console.log(`Total price: ${ winter.getTotalPrice() }`);
[...winter].forEach(p => console.log(`Product: ${p}`));


console.clear();
const data = {
  hat: new Product("Hat", 100),
};

data.boot = new Product("boot", 120);
Object.keys(data).forEach(key => console.log(data[key].toString()));

const mapData = new Map();
mapData.set("lego", new Product("Lego", 100));
mapData.set("playmobile", new Product("Playmobile", 100));

[...mapData.keys()].forEach(key => console.log(mapData.get(key).toString()));

const Supplier = function(name, productids) {
  this.name = name;
  this.productids = productids;
};

const acmeProducts = [new Product("Hat", 100), new Product("Boots", 100)];
const zoomProducts = [new Product("Hat", 100), new Product("Boots", 100)];

const productsMap = new Map();
[...acmeProducts, ...zoomProducts].forEach(product => productsMap.set(product.id, product));
const suppliers = new Map();
suppliers.set(
  "acme",
  new Supplier(
    "Acme Co",
    acmeProducts.map((p) => p.id),
  ),
);
suppliers.set(
  "zoom",
  new Supplier(
    "Zoom Shoes",
    zoomProducts.map((p) => p.id),
  ),
);

[...suppliers.entries()].forEach((key) =>
  console.log(
    `The company ${key[1].name} produces the products ${key[1].productids.forEach((name) => name)}`,
  ),
);

console.clear();

const bmw = new Product("BMW", 80000);

const carArray = [];
const carSet = new Set();
const carMap = new Map();

for (let i = 0; i < 5; i++) {
  carArray.push(bmw);
  carSet.add(bmw);
  carMap.set("bmw", bmw);
}
console.log(`Array length: ${carArray.length}`);
console.log(`Set size: ${carSet.size}`);
console.log(`Map size: ${carMap.size}`);
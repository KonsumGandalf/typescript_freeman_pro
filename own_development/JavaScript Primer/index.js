/**let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);
let bootPrice = "200";
console.log(`Hat price: ${bootPrice}`);

function sumPrices(...numbers) {
 return numbers.reduce(function(total, val) {
    return total + (Number.isNaN(Number(val)) ? 0 : Number(val));
 }, 0);
}

let totalPrice = sumPrices(hatPrice, bootPrice);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);
totalPrice = sumPrices(100, 200, 300);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);
totalPrice = sumPrices(100, 200);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);


let names = ["Hat", "Boots", "Gloves"];
let prices = [];
prices.push(100);
prices.push("100");
prices.push(50.25);

let combinedArray = [...names, ...prices];
combinedArray.forEach(element => console.log(`Combined array ele: ${element}`));

let [ Gloves ] = names
console.log(Gloves);

let [, ...last] = names
console.log(last)
*/
let hat = {
  name: "Hat",
  _price: 100,
  priceIncPrec: 1.2,

  set price(newPrice) {
    this._price = newPrice * this.priceIncPrec;
  },

  get price() {
    return this._price;
  },
};
let boots = {
  name: "Boots",
  price: "100",
};
let gloves = {
  productName: "Gloves",
  price: "40",
};

gloves.name = gloves.productName;
delete gloves.productName;
gloves.price = 20;

/**
let propertyCheck = hat.price ?? 0;
let objAndProCheck = (hat ?? {}).price ?? 0;
console.log(`Checks: ${propertyCheck}, ${objAndProCheck}`);

let additionalProp = { ...hat, discounted: true };
console.log(`Additional: ${JSON.stringify(additionalProp)}`)
let replacedProperties = { ...hat, price: 1000 };
console.log(`Replaced: ${JSON.stringify(replacedProperties)}`);
let { price, ...someProperties } = hat;
console.log(`Selected: ${JSON.stringify(someProperties)}`); */

console.log(`Hat: ${hat.price}, ${hat.priceIncPrec}`);
hat.price = 120;
console.log(`Hat: ${hat.price}, ${hat.priceIncPrec}`);

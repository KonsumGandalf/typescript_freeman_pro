"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateTax(amount) {
    if (typeof amount === "number") {
        return amount * 1.2;
    }
    return amount;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${typeof price === "number" ? price.toFixed(2) : price}`);
}
const prices = [100, 75, 23, "30"];
const prices2 = [100, "75"];
const names = ["Hat", "Gloves", "Umbrella"];
prices.push(...[100, 100, 100]);
prices.forEach((price, index) => {
    writePrice(names[index], calculateTax(price));
});
const products = [
    ["M416", 800],
    ["AKM", 300],
];
const catalogTupleUnion = [
    true,
    ["Scar", 1000],
    ...products,
];
catalogTupleUnion.forEach((elem) => {
    if (elem instanceof Array) {
        const [str, num] = elem;
        console.log(`Name: ${str}`);
        console.log(`Price: ${num.toFixed(2)}`);
    }
    else if (typeof elem === "boolean") {
        console.log(`Boolean Value: ${elem}`);
    }
});
const hat = ["Hat", 100];
const gloves = ["Gloves", 75, 10];
const restArray = [
    "Hat",
    20,
    ...hat,
    ...gloves,
];
console.log(restArray);
// eslint-disable-next-line
var EquipmentType;
(function (EquipmentType) {
    EquipmentType[EquipmentType["Helmet"] = 0] = "Helmet";
    EquipmentType[EquipmentType["West"] = 1] = "West";
    EquipmentType[EquipmentType["AR"] = 2] = "AR";
    EquipmentType[EquipmentType["DMR"] = 3] = "DMR";
    EquipmentType[EquipmentType["Car"] = 4] = "Car";
})(EquipmentType || (EquipmentType = {}));
const equipments = [
    [EquipmentType.Helmet, 100],
    [EquipmentType.AR, 600],
    [EquipmentType.DMR, 1000],
    [EquipmentType.West, 300],
    [EquipmentType.Car, 10000],
];
equipments.forEach((prod) => {
    // eslint-disable-next-line camelcase
    const local_price = calculateTax(prod[1]);
    switch (prod[0]) {
        case EquipmentType.Helmet:
            writePrice("Helmet", local_price);
            break;
        case EquipmentType.West:
            writePrice("Gloves", local_price);
            break;
        case EquipmentType.AR:
            writePrice("AR", local_price);
            break;
        case EquipmentType.DMR:
            writePrice("DMR", local_price);
            break;
        case EquipmentType.Car:
            writePrice("Car", local_price);
            break;
        default:
            break;
    }
});
const equiVal = 9;
console.log(EquipmentType[0], equiVal);
var CarBrand;
(function (CarBrand) {
    CarBrand[CarBrand["Audi"] = 0] = "Audi";
    CarBrand[CarBrand["VW"] = 1] = "VW";
    CarBrand[CarBrand["BMW"] = 2] = "BMW";
    CarBrand[CarBrand["Benz"] = 10] = "Benz";
    CarBrand[CarBrand["Opel"] = 3] = "Opel";
})(CarBrand || (CarBrand = {}));
console.log(CarBrand.Opel, CarBrand.Audi);
console.log("Berlin" /* DE */);
const restrictedValue = 1;
function getRandomValue() {
    return (Math.floor(Math.random() * 4) + 1);
}
var City;
(function (City) {
    City["London"] = "LON";
    City["Paris"] = "PAR";
    City["Chicago"] = "CHI";
})(City || (City = {}));
function getMixedValue() {
    switch (getRandomValue()) {
        case 1:
            return 1;
        case 2:
            return "Hello";
        case 3:
            return true;
        case 4:
            return City.London;
    }
}
console.log(getMixedValue());
function getRandomCity() {
    switch (getRandomValue() * 1) {
        case 1:
            return "MUC";
        case 2:
            return "NBG";
        case 3:
            return "RGBG";
        case 4:
            return "BER";
        default:
            return "RGBG";
    }
}
console.log(getRandomCity());

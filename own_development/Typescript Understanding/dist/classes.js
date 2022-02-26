"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeTest = void 0;
var Feature;
(function (Feature) {
    Feature[Feature["Waterproof"] = 0] = "Waterproof";
    Feature[Feature["Insulated"] = 1] = "Insulated";
})(Feature || (Feature = {}));
const hat = { name: "Hat", price: 100 };
const gloves = { name: "Gloves", price: 75 };
const umbrella = {
    name: "Umbrella",
    price: 30,
    hasFeature: (feature) => feature === Feature.Waterproof,
};
const products = [hat, gloves, umbrella];
products.forEach((prod) => console.log(`${prod.name}: ${prod.price} `
    + `Waterproof: ${prod.hasFeature ? prod.hasFeature(Feature.Waterproof) : "false"}`));
var Effect;
(function (Effect) {
    Effect[Effect["Fire"] = 0] = "Fire";
    Effect[Effect["Magic"] = 1] = "Magic";
    Effect[Effect["Posion"] = 2] = "Posion";
})(Effect || (Effect = {}));
const cossars = { name: "Cossars", price: 100 };
const bearRiders = { name: "Bear Riders", price: 100 };
const iceGuard = {
    name: "Ice Guard",
    price: 100,
    hasDamageType: (effect) => effect === Effect.Magic,
};
const unitSelection = [cossars, bearRiders, iceGuard];
unitSelection.forEach((prod) => console.log(`${prod.name}: ${prod.price} `
    + `Magic Damage: ${prod.hasDamageType ? prod.hasDamageType(Effect.Magic) : "none"}`));
const unitedList = [...products, ...unitSelection];
unitedList.forEach((prod) => {
    let output = `${prod.name}: ${prod.price} `;
    if ("hasDamageType" in prod) {
        output += `Magic Damage: ${prod.hasDamageType ? prod.hasDamageType(Effect.Magic) : "none"}`;
    }
    else if ("hasFeature" in prod) {
        output
            += `Waterproof: ${prod.hasFeature ? prod.hasFeature(Feature.Waterproof) : "false"}`;
    }
    console.log(output);
});
function isUnit(testObj) {
    return testObj.hasDamageType !== undefined;
}
function isProduct(testObj) {
    return testObj.hasFeature !== undefined;
}
console.clear();
unitedList.forEach((prod) => {
    let output = `${prod.name}: ${prod.price} `;
    if (isUnit(prod)) {
        output += `Magic Damage: ${prod.hasDamageType ? prod.hasDamageType(Effect.Magic) : "none"}`;
    }
    else if (isProduct(prod)) {
        output += `Waterproof: ${prod.hasFeature ? prod.hasFeature(Feature.Waterproof) : "false"}`;
    }
    console.log(output);
});
const bob = {
    id: "bsmith",
    name: "Bob",
    city: "London",
    company: "Acme Co",
    dept: "Sales",
};
const typeTest = {}.contact;
exports.typeTest = typeTest;
function correlateData(personData, employeeData) {
    const defaultData = { company: "None", dept: "None" };
    return personData.map((p) => ({
        ...p,
        ...employeeData.find((e) => e.id === p.id) || { ...defaultData, id: p.id },
    }));
}
const people = [
    { id: "bsmith", name: "Bob Smith", city: "London", contact: { name: "Alice" } },
    { id: "ajones", name: "Alice Jones", city: "Paris", contact: { name: "Felix" } },
    { id: "dpeters", name: "Dora Peters", city: "New York" },
];
const employees = [
    { id: "bsmith", company: "Acme Co", dept: "Sales" },
    { id: "dpeters", company: "Acme Co", dept: "Development", contact: { phone: 6512346543 } },
];
const dataItems = correlateData(people, employees);
console.clear();
console.log(dataItems);
dataItems.forEach((item) => {
    let output = "";
    Object.getOwnPropertyNames(item).forEach((prop) => { output += `${prop}: ${item[prop]} ,`; });
    console.log(`Output: ${output}\nEmployeedPerson: ${item.id}, ${item.name}, ${item.city}, ${item.company}, ${item.dept}`);
});
const person = {
    id: "bsmith",
    name: "Bob Smith",
    city: "London",
    company: "Acme Co",
    dept: "Sales",
    getContact(field) {
        return typeof field === "string" ? "Alice" : 897982;
    },
};
// const typeTest2 = person.getContact;
const stringParamTypeTest = person.getContact("Alice");
const numberParamTypeTest = person.getContact(123);
console.clear();
console.log(`Contact: ${person.getContact("Alice")}`);
console.log(`Contact: ${person.getContact(12)}`);

export { };

enum Feature {
  Waterproof,
  Insulated,
}
type Product = {
  name: string;
  price?: number;
  hasFeature?(Feature): boolean;
};

const hat = { name: "Hat", price: 100 };
const gloves = { name: "Gloves", price: 75 };
const umbrella = {
  name: "Umbrella",
  price: 30,
  hasFeature: (feature) => feature === Feature.Waterproof,
};
const products: Product[] = [hat, gloves, umbrella];

products.forEach((prod) => console.log(
  `${prod.name}: ${prod.price} `
      + `Waterproof: ${prod.hasFeature ? prod.hasFeature(Feature.Waterproof) : "false"}`,
));

enum Effect{
  Fire,
  Magic,
  Posion
}
type Unit = {
  name: string,
  price?: number,
  hasDamageType?(Effect): boolean;
}

type UnionUnitProduct = {
  name: string,
  price?: number
}

const cossars = { name: "Cossars", price: 100 };
const bearRiders = { name: "Bear Riders", price: 100 };
const iceGuard = {
  name: "Ice Guard",
  price: 100,
  hasDamageType: (effect) => effect === Effect.Magic,
};
const unitSelection: Unit[] = [cossars, bearRiders, iceGuard];

unitSelection.forEach((prod) => console.log(
  `${prod.name}: ${prod.price} `
      + `Magic Damage: ${
        prod.hasDamageType ? prod.hasDamageType(Effect.Magic) : "none"
      }`,
));

const unitedList: (Unit | Product)[] = [...products, ...unitSelection];
unitedList.forEach((prod) => {
  let output: string = `${prod.name}: ${prod.price} `;
  if ("hasDamageType" in prod) {
    output += `Magic Damage: ${prod.hasDamageType ? prod.hasDamageType(Effect.Magic) : "none"}`;
  } else if ("hasFeature" in prod) {
    output
      += `Waterproof: ${
        prod.hasFeature ? prod.hasFeature(Feature.Waterproof) : "false"
      }`;
  }
  console.log(output);
});

function isUnit(testObj: any): testObj is Unit {
  return testObj.hasDamageType !== undefined;
}
function isProduct(testObj: any): testObj is Product {
  return testObj.hasFeature !== undefined;
}

console.clear();
unitedList.forEach((prod) => {
  let output: string = `${prod.name}: ${prod.price} `;
  if (isUnit(prod)) {
    output += `Magic Damage: ${
      prod.hasDamageType ? prod.hasDamageType(Effect.Magic) : "none"
    }`;
  } else if (isProduct(prod)) {
    output += `Waterproof: ${
      prod.hasFeature ? prod.hasFeature(Feature.Waterproof) : "false"
    }`;
  }
  console.log(output);
});

type Person = {
  id: string,
  name: string,
  city: string,
  contact?: { name: string },
};

type Employee = {
  id: string;
  company: string;
  dept: string;
  contact?: { phone: number };
};

const bob = {
  id: "bsmith",
  name: "Bob",
  city: "London",
  company: "Acme Co",
  dept: "Sales",
};

type EmployedPerson = Employee & Person;

const typeTest = ({} as EmployedPerson).contact;

function correlateData(personData: Person[], employeeData: Employee[]) {
  const defaultData = { company: "None", dept: "None" };
  return personData.map((p) => ({
    ...p,
    ...employeeData.find((e) => e.id === p.id) || { ...defaultData, id: p.id },
  }));
}

const people: Person[] = [
  { id: "bsmith", name: "Bob Smith", city: "London", contact: { name: "Alice" } },
  { id: "ajones", name: "Alice Jones", city: "Paris", contact: { name: "Felix" } },
  { id: "dpeters", name: "Dora Peters", city: "New York" },
];
const employees: Employee[] = [
  { id: "bsmith", company: "Acme Co", dept: "Sales" },
  { id: "dpeters", company: "Acme Co", dept: "Development", contact: { phone: 6512346543 } },
];

const dataItems = correlateData(people, employees);

console.clear();
console.log(dataItems);
dataItems.forEach((item) => {
  let output: string = "";
  Object.getOwnPropertyNames(item).forEach((prop) => { output += `${prop}: ${item[prop]} ,`; });
  console.log(`Output: ${output}\nEmployeedPerson: ${item.id}, ${item.name}, ${item.city}, ${item.company}, ${item.dept}`);
});

type Person2 = {
  id: string,
  name: string,
  city: string,
  getContact(field: string): string,
};
type Employee2 = {
  id: string,
  company: string,
  dept: string,
  getContact(field: number): number,
};

type EmployedPerson2 = Person2 & Employee2;
const person: EmployedPerson2 = {
  id: "bsmith",
  name: "Bob Smith",
  city: "London",
  company: "Acme Co",
  dept: "Sales",
  getContact(field: string | number): any {
    return typeof field === "string" ? "Alice" : 897982;
  },
};
// const typeTest2 = person.getContact;
const stringParamTypeTest = person.getContact("Alice");
const numberParamTypeTest = person.getContact(123);
console.clear();
console.log(`Contact: ${person.getContact("Alice")}`);
console.log(`Contact: ${person.getContact(12)}`);


export { typeTest };

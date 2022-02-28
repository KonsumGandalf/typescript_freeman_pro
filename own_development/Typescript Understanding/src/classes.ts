/* eslint-disable no-useless-constructor */
/* eslint-disable max-classes-per-file */
export {};
/**
type Person = {
  id: string;
  name: string;
  city: string;
};

class Employee {
  public readonly id: string;
  public name: string;
  #dept: string;
  public city: string;

  constructor(id: string, name: string, dept: string, city: string) {
    this.id = id;
    this.name = name;
    this.#dept = dept;
    this.city = city;
  }

  writeDept() {
    console.log(`${this.name} works in ${this.#dept}`);
  }
}

const salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
salesEmployee.writeDept();
// salesEmployee.id = "fidel";

const data: (Person | Employee)[] = [
  { id: "bsmith", name: "Bob Smith", city: "London" },
  { id: "ajones", name: "Alice Jones", city: "Paris" },
  { id: "dpeters", name: "Dora Peters", city: "New York" },
  salesEmployee,
];

data.forEach((item) => {
  if (item instanceof Employee) {
    item.writeDept();
  } else {
    console.log(`${item.id} ${item.name}, ${item.city}`);
  }
});
*/
class Vehicle {
  constructor(
    public readonly id: string,
    public name: string,
    public engine: string,
    private wheels: number
  ) {
    // no statement required
  }

  printEngine() {
    console.log("The car has the following properties:");
    Object.getOwnPropertyNames(this).forEach((prop) =>
      console.log(`\t-${prop}: ${this[prop]}`)
    );
  }
}

class Car extends Vehicle {
  constructor(
    public id: string,
    public name: string,
    public engine: string,
    public cost: number,
    public range: number
  ) {
    super(id, name, engine, 4);
  }
}

class Motorbike extends Vehicle {
  constructor(
    public id: string,
    public name: string,
    public engine: string,
    public cost: number,
    public type: string
  ) {
    super(id, name, engine, 2);
  }
}

const audi = new Car("234ok", "A2", "9384-Tx", 20000, 300);
audi.printEngine();

const data: (Car | Motorbike | Vehicle)[] = [
  audi,
  new Motorbike("Suzuki", "Su-45", "6969-Turbo", 8800, "Racing Bike"),
  new Vehicle("Bobby Car", "Bobby Car", "Beine", 4),
];
data.forEach((ele) => ele.printEngine());
console.clear();

abstract class Person {
  constructor(public id: string, public name: string, public city: string) {}
  getDetails(): string {
    return `${this.name}, ${this.getSpecificDetails()}`;
  }
  abstract getSpecificDetails(): string;
}

class Child extends Person {
  constructor(
    public readonly id: string,
    public name: string,
    public city: string,
    public parents: string,
    private age: number
  ) {
    super(id, name, city);
  }

  getSpecificDetails() {
    return `The Parents of ${this.name} (${this.age} years old) are ${this.parents} `;
  }
}

class Parent extends Person {
  constructor(
    public readonly id: string,
    public name: string,
    public city: string,
    public children: string,
    private money: number
  ) {
    super(id, name, city);
  }

  getSpecificDetails() {
    return `The Parent ${this.name} has the children ${this.children} and money: ${this.money}`;
  }
}

const people: Person[] = [
  new Child("1", "David", "Regensburg", "Anja & Klaus", 20),
  new Parent("2", "Klaus", "Regensburg", "David", 1000000),
  new Parent("3", "Anja", "Schwandorf", "David", 1000000),
];
people.forEach((person) => console.log(person.getDetails()));

interface Human {
  name: string;
  getDetails(): string;
}

type MoneyPayer = {
  dept: string;
};

class Employee implements Human, MoneyPayer {
  constructor(
    public readonly id: string,
    public name: string,
    public dept: string,
    public city: string
  ) {
    // no statements required
  }
  getDetails() {
    return `${this.name} works in ${this.dept}`;
  }
}

class Customer implements Human {
  constructor(
    public readonly id: string,
    public name: string,
    public city: string,
    public creditLimit: number
  ) {
    // no statements required
  }
  getDetails() {
    return `${this.name} has ${this.creditLimit} limit`;
  }
}

const humanData: Human[] = [
  new Employee("fvega", "Fidel Vega", "Sales", "Paris"),
  new Customer("ajones", "Alice Jones", "London", 500),
];
humanData.forEach((item) => console.log(item.getDetails()));
console.clear();

interface Product {
  name: string;
  price: number;
}
class SportsProduct implements Product {
  constructor(
    public name: string,
    public category: string,
    public price: number
  ) {
    // no statements required
  }
}

class ProductGroup {
  constructor(...initialProducts: [string, Product][]) {
    initialProducts.forEach((p) => (this[p[0]] = p[1]));
  }

  [propertyName: string]: Product;
}

const dynamicGroup = new ProductGroup(
  ["shoes", new SportsProduct("Shoes", "Running", 20.1)],
  ["tretter", new SportsProduct("Shoe", "Football", 88)]
);
dynamicGroup.hat = new SportsProduct("Hat", "Skiing", 20);
Object.keys(dynamicGroup).forEach((k) => console.log(`Property Name: ${k}`));
Object.values(dynamicGroup).forEach((k) =>
  console.log(`Property Value: ${k.price}`)
);
const totalCost = dynamicGroup.hat.price + (dynamicGroup.tretter?.price ?? 0);
console.log(`Total: ${totalCost}`);

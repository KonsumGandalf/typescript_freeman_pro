"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
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
    constructor(id, name, engine, wheels) {
        this.id = id;
        this.name = name;
        this.engine = engine;
        this.wheels = wheels;
        // no statement required
    }
    printEngine() {
        console.log("The car has the following properties:");
        Object.getOwnPropertyNames(this).forEach((prop) => console.log(`\t-${prop}: ${this[prop]}`));
    }
}
class Car extends Vehicle {
    constructor(id, name, engine, cost, range) {
        super(id, name, engine, 4);
        this.id = id;
        this.name = name;
        this.engine = engine;
        this.cost = cost;
        this.range = range;
    }
}
class Motorbike extends Vehicle {
    constructor(id, name, engine, cost, type) {
        super(id, name, engine, 2);
        this.id = id;
        this.name = name;
        this.engine = engine;
        this.cost = cost;
        this.type = type;
    }
}
const audi = new Car("234ok", "A2", "9384-Tx", 20000, 300);
audi.printEngine();
const data = [
    audi,
    new Motorbike("Suzuki", "Su-45", "6969-Turbo", 8800, "Racing Bike"),
    new Vehicle("Bobby Car", "Bobby Car", "Beine", 4),
];
data.forEach((ele) => ele.printEngine());
console.clear();
class Person {
    constructor(id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;
    }
    getDetails() {
        return `${this.name}, ${this.getSpecificDetails()}`;
    }
}
exports.Person = Person;
class Child extends Person {
    constructor(id, name, city, parents, age) {
        super(id, name, city);
        this.id = id;
        this.name = name;
        this.city = city;
        this.parents = parents;
        this.age = age;
    }
    getSpecificDetails() {
        return `The Parents of ${this.name} (${this.age} years old) are ${this.parents} `;
    }
}
class Parent extends Person {
    constructor(id, name, city, children, money) {
        super(id, name, city);
        this.id = id;
        this.name = name;
        this.city = city;
        this.children = children;
        this.money = money;
    }
    getSpecificDetails() {
        return `The Parent ${this.name} has the children ${this.children} and money: ${this.money}`;
    }
}
const people = [
    new Child("1", "David", "Regensburg", "Anja & Klaus", 20),
    new Parent("2", "Klaus", "Regensburg", "David", 1000000),
    new Parent("3", "Anja", "Schwandorf", "David", 1000000),
];
people.forEach((person) => console.log(person.getDetails()));
class Employee {
    constructor(id, name, dept, city) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
        // no statements required
    }
    getDetails() {
        return `${this.name} works in ${this.dept}`;
    }
}
class Customer {
    constructor(id, name, city, creditLimit) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.creditLimit = creditLimit;
        // no statements required
    }
    getDetails() {
        return `${this.name} has ${this.creditLimit} limit`;
    }
}
const humanData = [
    new Employee("fvega", "Fidel Vega", "Sales", "Paris"),
    new Customer("ajones", "Alice Jones", "London", 500),
];
humanData.forEach((item) => console.log(item.getDetails()));
console.clear();
class SportsProduct {
    constructor(name, category, price) {
        this.name = name;
        this.category = category;
        this.price = price;
        // no statements required
    }
}
class ProductGroup {
    constructor(...initialProducts) {
        initialProducts.forEach((p) => (this[p[0]] = p[1]));
    }
}
const dynamicGroup = new ProductGroup(["shoes", new SportsProduct("Shoes", "Running", 20.1)], ["tretter", new SportsProduct("Shoe", "Football", 88)]);
dynamicGroup.hat = new SportsProduct("Hat", "Skiing", 20);
Object.keys(dynamicGroup).forEach((k) => console.log(`Property Name: ${k}`));
Object.values(dynamicGroup).forEach((k) => console.log(`Property Value: ${k.price}`));
const totalCost = dynamicGroup.hat.price + (dynamicGroup.tretter?.price ?? 0);
console.log(`Total: ${totalCost}`);

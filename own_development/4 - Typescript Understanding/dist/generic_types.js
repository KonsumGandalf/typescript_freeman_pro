"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.empData = exports.collatedData = exports.peopleData = void 0;
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-useless-constructor */
/* eslint-disable eol-last */
const dataTypes_1 = require("./dataTypes");
const people = [
    new dataTypes_1.Person("Bob Smith", "London"),
    new dataTypes_1.Person("Dora Peters", "New York"),
];
const products = [new dataTypes_1.Product("Running Shoes", 100), new dataTypes_1.Product("Hat", 25)];
const cities = [new dataTypes_1.City("London", 8136000), new dataTypes_1.City("Paris", 2141000)];
// [...people, ...products].forEach((item) => console.log(`Item: ${item.name}`));
const employees = [
    new dataTypes_1.Employee("Bob Smith", "Sales"),
    new dataTypes_1.Employee("Alice Jones", "Sales"),
];
/*
class DataCollection<T extends { name: string }, U> {
  private items: T[] = [];

  constructor(initialItems: T[]) {
    this.items.push(...initialItems);
  }

  collate(targetData: U[], targetProp: string, ItemProp: string) {
    const results = [];
    this.items.forEach((item) => {
      const match = targetData.find((d) => d[targetProp] === item[ItemProp]);
      if (match !== undefined) {
        results.push({ ...match, ...item});
      }
    });
    return results;
  }

  add(newItems: T[]) {
    this.items.push(...newItems);
  }

  getNames(): string[] {
    return this.items.map((item) => item.name);
  }

  getItem(index: number): T {
    return this.items[index];
  }
}
const peopleData = new DataCollection<Person, City>(people);
const collatedData = peopleData.collate(cities, "name", "city");
collatedData.forEach((c) => console.log(`${c.name}, ${c.city}, ${c.population}`));
*/
class DataCollection {
    constructor(initialItems) {
        this.items = [];
        this.items.push(...initialItems);
    }
    collate(targetData, targetProp, ItemProp) {
        const results = [];
        this.items.forEach((item) => {
            const match = targetData.find((d) => d[targetProp] === item[ItemProp]);
            if (match !== undefined) {
                results.push({ ...match, ...item });
            }
        });
        return results;
    }
    add(newItems) {
        this.items.push(...newItems);
    }
    getNames() {
        return this.items.map((item) => item.name);
    }
    getItem(index) {
        return this.items[index];
    }
}
class AdvancedCollection extends DataCollection {
    constructor(initialItems) {
        super(initialItems);
    }
    find(name) {
        return this.items.find((item) => item.name === name);
    }
    filter(predicate) {
        return this.items.filter((item) => predicate(item));
    }
    static reverse(items) {
        return items.reverse();
    }
    static reverseBase(items) {
        return items.reverse();
    }
}
exports.peopleData = new AdvancedCollection(people);
exports.collatedData = exports.peopleData.collate(cities, "name", "city");
exports.collatedData.forEach((c) => console.log(`${c.name}, ${c.city}, ${c.population}`));
exports.empData = exports.peopleData.collate(employees, "name", "name");
exports.empData.forEach((c) => console.log(`${c.name}, ${c.city}, ${c.role}`));
const searchedPerson = exports.peopleData.find("Dora Peters");
console.log(searchedPerson);
console.clear();
const mixedData = new AdvancedCollection([
    ...people,
    ...products,
]);
function isProduct(target) {
    return target instanceof dataTypes_1.Product;
}
const filteredProducts = mixedData.filter(isProduct);
filteredProducts.forEach((p) => console.log(`Product: ${p.name}, ${p.price}`));
const reversedCities = AdvancedCollection.reverse(cities);
reversedCities.forEach((city) => console.log(city));
const reversedCities2 = AdvancedCollection.reverseBase(cities);
reversedCities2.forEach((city) => console.log(city));
class ArrayCollection {
    constructor() {
        this.items = [];
    }
    add(...newItems) {
        this.items.push(...newItems);
    }
    count() {
        return this.items.length;
    }
}
class ProductCollection extends ArrayCollection {
    get(name) {
        return this.items.find((item) => item.name === name);
    }
}
class PersonCollection extends ArrayCollection {
    get(name) {
        return this.items.find((item) => item.name === name);
    }
}
const peopleCollection = new PersonCollection();
peopleCollection.add(new dataTypes_1.Person("Bob Smith", "London"), new dataTypes_1.Person("Dora Peters", "New York"));
console.log(`Collection size: ${peopleCollection.count()}`);

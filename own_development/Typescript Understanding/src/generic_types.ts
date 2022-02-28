/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-useless-constructor */
import {
  Person, Product, City, Employee,
} from "./dataTypes";

const people = [
  new Person("Bob Smith", "London"),
  new Person("Dora Peters", "New York"),
];
const products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
const cities = [new City("London", 8136000), new City("Paris", 2141000)];
// [...people, ...products].forEach((item) => console.log(`Item: ${item.name}`));
const employees = [
  new Employee("Bob Smith", "Sales"),
  new Employee("Alice Jones", "Sales"),
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
class DataCollection<T extends { name: string }> {
  protected items: T[] = [];

  constructor(initialItems: T[]) {
    this.items.push(...initialItems);
  }

  collate<U>(targetData: U[], targetProp: string, ItemProp: string): (U & T)[] {
    const results = [];
    this.items.forEach((item) => {
      const match = targetData.find((d) => d[targetProp] === item[ItemProp]);
      if (match !== undefined) {
        results.push({ ...match, ...item });
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

class AdvancedCollection<T extends { name: string }> extends DataCollection<T> {
  constructor(initialItems: T[]) {
    super(initialItems);
  }

  find(name: string): T | undefined {
    return this.items.find((item) => item.name === name);
  }

  filter<V extends T>(predicate: (target) => target is V): V[] {
    return this.items.filter((item) => predicate(item)) as V[];
  }

  static reverse(items: any[]) {
    return items.reverse();
  }
}

export const peopleData = new AdvancedCollection<Person>(people);
export const collatedData = peopleData.collate<City>(cities, "name", "city");
collatedData.forEach((c) => console.log(`${c.name}, ${c.city}, ${c.population}`));
export const empData = peopleData.collate<Employee>(employees, "name", "name");
empData.forEach((c) => console.log(`${c.name}, ${c.city}, ${c.role}`));

const searchedPerson = peopleData.find("Dora Peters");
console.log(searchedPerson);
console.clear();

const mixedData = new AdvancedCollection<Person | Product>([
  ...people,
  ...products,
]);
function isProduct(target): target is Product {
  return target instanceof Product;
}
const filteredProducts = mixedData.filter<Product>(isProduct);
filteredProducts.forEach((p) => console.log(`Product: ${p.name}, ${p.price}`));

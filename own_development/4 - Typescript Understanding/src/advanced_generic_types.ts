import {
  City, Person, Product, Employee,
} from "./dataTypes";

const products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
type shapeType = { name: string };
class SetCollection<T extends shapeType> {
  protected items: Set<T>;
  constructor(initialItems: T[] = []) {
    this.items = new Set<T>(initialItems);
  }

  add(...newItems: T[]): void {
    newItems.forEach((item) => this.items.add(item));
  }

  get(name: string) {
    return [...this.items.values()].find((item) => item.name === name);
  }

  get count(): number {
    return this.items.size;
  }
}
const productCollection: SetCollection<Product> = new SetCollection(products);
console.log(`There are ${productCollection.count} products`);
const p = productCollection.get("Hat");
console.log(`Product: ${p.name}, ${p.price}`);

class MapCollection<T extends shapeType> implements Iterable<T> {
  protected items: Map<string, T>;
  constructor(initialItems: T[] = []) {
    this.items = new Map<string, T>();
    this.add(...initialItems);
  }

  add(...newItems: T[]): void {
    newItems.forEach((item) => this.items.set(item.name, item));
  }

  get(name: string) {
    return this.items.get(name);
  }

  get count(): number {
    return this.items.size;
  }

  [Symbol.iterator](): Iterator<T> {
    return this.items.values();
  }
}

const productMapCollection: MapCollection<Product> = new MapCollection(products);
console.log(`There are ${productMapCollection.count} products`);

[...productMapCollection].forEach((prod) => console.log(`Product: ${prod.name}, ${prod.price}`));

// Page 331 - 358 are skipped

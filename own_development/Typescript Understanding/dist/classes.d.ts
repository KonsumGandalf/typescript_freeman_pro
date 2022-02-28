export {};
declare abstract class Person {
    id: string;
    name: string;
    city: string;
    constructor(id: string, name: string, city: string);
    getDetails(): string;
    abstract getSpecificDetails(): string;
}
interface Product {
    name: string;
    price: number;
}
export { Person, Product };

import { Person, City, Employee } from "./dataTypes";
declare class DataCollection<T extends {
    name: string;
}> {
    protected items: T[];
    constructor(initialItems: T[]);
    collate<U>(targetData: U[], targetProp: string, ItemProp: string): (U & T)[];
    add(newItems: T[]): void;
    getNames(): string[];
    getItem(index: number): T;
}
declare class AdvancedCollection<T extends {
    name: string;
}> extends DataCollection<T> {
    constructor(initialItems: T[]);
    find(name: string): T | undefined;
    filter<V extends T>(predicate: (target: any) => target is V): V[];
    static reverse<reverseType>(items: reverseType[]): reverseType[];
    static reverseBase(items: any[]): any[];
}
export declare const peopleData: AdvancedCollection<Person>;
export declare const collatedData: (City & Person)[];
export declare const empData: (Employee & Person)[];
export {};

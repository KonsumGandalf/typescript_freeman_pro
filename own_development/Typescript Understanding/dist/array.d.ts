declare function calculateTax(amount: number | string): number | string;
declare function writePrice(product: string, price: number | string): void;
declare const prices: (number | string)[];
declare const prices2: [number, string];
declare const names: string[];
declare const products: [string, number][];
declare const catalogTupleUnion: ([string, number] | boolean)[];
declare const hat: [string, number, number?];
declare const gloves: [string, number, number?];
declare const restArray: [string, number?, ...(number | string | undefined)[]];
declare enum EquipmentType {
    Helmet = 0,
    West = 1,
    AR = 2,
    DMR = 3,
    Car = 4
}
declare const equipments: [EquipmentType, number][];
declare const equiVal: EquipmentType;
declare enum CarBrand {
    Audi = 0,
    VW = 1,
    BMW = 2,
    Benz = 10,
    Opel = 3
}
declare const enum CountryCapital {
    DE = "Berlin",
    UK = "London",
    FR = "Paris",
    UA = "Kiew",
    RUS = "Moscow"
}
declare const restrictedValue: 1 | 2 | 3;
declare function getRandomValue(): 1 | 2 | 3 | 4;
declare enum City {
    London = "LON",
    Paris = "PAR",
    Chicago = "CHI"
}
declare function getMixedValue(): 1 | "Hello" | true | City.London;
declare type cities = "MUC" | "NBG" | "RGBG" | "BER";
declare function getRandomCity(): cities;

export {};

function calculateTax(amount: number | string): number | string {
  if (typeof amount === "number") {
    return amount * 1.2;
  }
  return amount;
}
function writePrice(product: string, price: number | string): void {
  console.log(
    `Price for ${product}: $${
      typeof price === "number" ? price.toFixed(2) : price
    }`
  );
}

const prices: (number | string)[] = [100, 75, 23, "30"];
const prices2: [number, string] = [100, "75"];
const names: string[] = ["Hat", "Gloves", "Umbrella"];

prices.push(...[100, 100, 100]);

prices.forEach((price: number | string, index: number) => {
  writePrice(names[index], calculateTax(price));
});

const products: [string, number][] = [
  ["M416", 800],
  ["AKM", 300],
];
const catalogTupleUnion: ([string, number] | boolean)[] = [
  true,
  ["Scar", 1000],
  ...products,
];

catalogTupleUnion.forEach((elem: [string, number] | boolean) => {
  if (elem instanceof Array) {
    const [str, num] = elem;
    console.log(`Name: ${str}`);
    console.log(`Price: ${num.toFixed(2)}`);
  } else if (typeof elem === "boolean") {
    console.log(`Boolean Value: ${elem}`);
  }
});

const hat: [string, number, number?] = ["Hat", 100];
const gloves: [string, number, number?] = ["Gloves", 75, 10];

const restArray: [string, number?, ...(number | string | undefined)[]] = [
  "Hat",
  20,
  ...hat,
  ...gloves,
];
console.log(restArray);

// eslint-disable-next-line
enum EquipmentType {
  Helmet,
  West,
  AR,
  DMR,
  Car,
}
const equipments: [EquipmentType, number][] = [
  [EquipmentType.Helmet, 100],
  [EquipmentType.AR, 600],
  [EquipmentType.DMR, 1000],
  [EquipmentType.West, 300],
  [EquipmentType.Car, 10000],
];

equipments.forEach((prod: [EquipmentType, number]) => {
  // eslint-disable-next-line camelcase
  const local_price = calculateTax(prod[1]);
  switch (prod[0]) {
    case EquipmentType.Helmet:
      writePrice("Helmet", local_price);
      break;
    case EquipmentType.West:
      writePrice("Gloves", local_price);
      break;
    case EquipmentType.AR:
      writePrice("AR", local_price);
      break;
    case EquipmentType.DMR:
      writePrice("DMR", local_price);
      break;
    case EquipmentType.Car:
      writePrice("Car", local_price);
      break;
    default:
      break;
  }
});
const equiVal: EquipmentType = 9;
console.log(EquipmentType[0], equiVal);

enum CarBrand {
  Audi = 0,
  VW = 1,
  BMW,
  Benz = 10,
  Opel = Audi + VW + BMW,
}

console.log(CarBrand.Opel, CarBrand.Audi);

// eslint-disable-next-line
const enum CountryCapital {
  DE = "Berlin",
  UK = "London",
  FR = "Paris",
  UA = "Kiew",
  RUS = "Moscow",
}

console.log(CountryCapital.DE);

const restrictedValue: 1 | 2 | 3 = 1;

function getRandomValue(): 1 | 2 | 3 | 4 {
  return (Math.floor(Math.random() * 4) + 1) as 1 | 2 | 3 | 4;
}
enum City {
  London = "LON",
  Paris = "PAR",
  Chicago = "CHI",
}
function getMixedValue(): 1 | "Hello" | true | City.London {
  switch (getRandomValue()) {
    case 1:
      return 1;
    case 2:
      return "Hello";
    case 3:
      return true;
    case 4:
      return City.London;
  }
}

console.log(getMixedValue());

type cities = "MUC" | "NBG" | "RGBG" | "BER";
function getRandomCity(): cities {
  switch (getRandomValue() * 1) {
    case 1:
      return "MUC";
    case 2:
      return "NBG";
    case 3:
      return "RGBG";
    case 4:
      return "BER";
    default:
      return "RGBG";
  }
}

console.log(getRandomCity());

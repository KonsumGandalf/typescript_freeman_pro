"use strict";
/** function calculateTax(amount: number, format: boolean): string | number {
  const calcAmount = amount * 1.2;
  return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}
const taxNumber = calculateTax(100, false) as number;
const taxString = calculateTax(100, true) as string;
const taxBoolean = calculateTax(100, false) as unknown as boolean;
console.log(`taxNumber ${taxNumber}`);
console.log(`taxString ${taxString}`);
console.log(`taxBoolean ${taxBoolean}, the type is ${typeof (taxBoolean)}`);

const unknownNumber: unknown = calculateTax(100, false);
const knownNow = unknownNumber as number;
console.log(`Unknown ${unknownNumber} vs Known ${knownNow}`); */
/**
function calculateTax(amount: number, format: boolean): string | number | null {
  if (amount === 0) {
    return null;
  }
  const calcAmount = amount * 1.2;
  return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}

const taxValue: string | number = calculateTax(0, false)!;
switch (typeof taxValue) {
  case "number":
    console.log(`Number Value: ${taxValue.toFixed(2)}`);
    break;
  case "string":
    console.log(`String Value: ${taxValue.charAt(0)}`);
    break;
  default:
    if (taxValue === null) {
      console.log("Value is null");
    } else {
      const value: never = taxValue;
      console.log(`Unexpected type for value: ${value}`);
    }
} */
/**
function calcTax(amount: number, discount?: number) {
  return (amount * 1.2) - (discount || 0);
}

function calculateTax(amount: number, discount = 0) {
  return amount * 1.2 - discount;
}

function calcListTax(amount: number | null, discount = 0, ...extraFees: number[]) {
  if (amount != null) {
    return amount * 1.2 - discount
      + extraFees.reduce((total: any, value: any) => total + value, 0);
  } return undefined;
}

function calculateTaxOverload(amount: number): number;
function calculateTaxOverload(amount: null): null;
function calculateTaxOverload(amount: number | null): number | null {
  if (amount != null) {
    return amount * 1.2;
  }
  return null;
}

const taxValue = calcTax(10, 1);
console.log(taxValue);

const taxValue2 = calculateTax(10);
console.log(taxValue2);

const taxValueList = calcListTax(null, 1, 20, 20, 20);
console.log(taxValueList);

const overloadValue = calculateTaxOverload(null);
console.log(overloadValue);
*/
function check(val) {
    if (!val) {
        throw new Error("Expression is false");
    }
}
function calculateTax2(amount) {
    check(amount);
    return amount * 1.2;
}
const taxAmount = calculateTax2(100);
console.log(`Tax value: ${taxAmount}`);

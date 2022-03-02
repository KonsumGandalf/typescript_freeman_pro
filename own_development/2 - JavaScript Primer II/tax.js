export function calcTax (price) {
    return Number(price) * 1.2;
}

export function calcTaxAndSum(...prices) {
    return prices.reduce((total, p) => total += calcTax(p), 0);
}
'use strict';

// assigns to a variable a bill amount
let bill = 60;

// assigns to a variable the result of the tip calculation (uses ternary operators)
const tip = bill >= 50 && bill <= 300 ? (bill / 100) * 15 : (bill / 100) * 20;

// logs to the console a template literal containing the bill, tip and total amount
console.log(
  `The bill is ${bill}, the tip is ${tip} and the total is ${bill + tip}.`
);

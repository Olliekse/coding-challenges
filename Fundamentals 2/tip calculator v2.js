'use strict';

// creates an array of bills
const bills = [125, 555, 44];

// assigns to a variable the result of a function that calculates the tip (15% or 20% of the bill)
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? (bill / 100) * 15 : (bill / 100) * 20;
};

// creates an array of tips by calling the function
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

//logs the 'tips' array to the console
console.log(tips);

// creates an array of the bills plus the tips
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// logs the 'totals' array to the console
console.log(totals);

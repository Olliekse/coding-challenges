'use strict';

// assigns to a variable an array of bills
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// assigns to variables empty arrays of 'tips' and 'totals'
const tips = [];
const totals = [];

// assigns to a variable the result of a function that calculates tips
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? (bill / 100) * 15 : (bill / 100) * 20;
};

// launches a loop that pushes 'tip' and total' values to variables
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

// logs to the console three values - 'bills', 'tips' and 'totals'
console.log(bills, tips, totals);

// assigns to a variable the result of a function that calculates an average from an array
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

// logs to the console the average of an array (in this case: the bill totals)
console.log(calcAverage(totals));

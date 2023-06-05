let bill = 60;
let tip = bill >= 50 && bill <= 300 ? (bill / 100) * 15 : (bill / 100) * 20;
console.log(
  `The bill is ${bill}, the tip is ${tip} and the total is ${bill + tip}.`
);

// assigns to a variable a function that calculates an average of three numbers
const calcAverage = (a, b, c) => (a + b + c) / 3;

// assigns to a variable the result of calling the 'calcAverage' function
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

// assigns to a variable a function with the averages as inputs and an output of various console logs with template literals
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`Nobody wins!`);
  }
};

// calls the 'callWinner' function using the averages as inputs
checkWinner(avgDolphins, avgKoalas);

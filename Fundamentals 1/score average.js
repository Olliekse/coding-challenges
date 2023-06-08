// assigns to variables an average taken from adding scores and dividing by three
const averageDolphins = (96 + 108 + 89) / 3;
const averageKoalas = (88 + 91 + 110) / 3;

//logs the 'average' variables to the console
console.log(averageDolphins, averageKoalas);

// an 'if'/'else' statement that logs different results to the console depending on the fulfilled criteria
if (averageDolphins > averageKoalas && averageDolphins >= 100) {
  console.log("The Dolphins win - " + averageDolphins + " points");
} else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
  console.log("The Koalas win - " + averageKoalas + " points");
} else if (
  averageKoalas === averageDolphins &&
  averageKoalas >= 100 &&
  averageDolphins >= 100
) {
  console.log("It's a tie");
} else {
  console.log("Nobody wins");
}

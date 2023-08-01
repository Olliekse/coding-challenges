function countPositivesSumNegatives(input) {
  let posCount = 0;
  let negSum = 0;
  let result = [];

  for (num of input) {
    if (num > 0) {
      posCount++;
    } else if (num < 0) {
      num += negSum;
    }
  }
  result.push(posCount, negSum);
}
console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);

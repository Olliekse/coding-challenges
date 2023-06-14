// 1) Understanding the problem
// - Array of values needs to be converted into a string;
// - Loop needs to create a new sentence for each temperature value.

// 2) Breaking up into sub problems
// - creating a loop for generating an amount of 'i' numbers equal to the array's length;
// - 'automating' the creation of new sentences for all array values.
// - converting the array into string
// - removing the comma leftover from the array
// - adding dots at the beginning and end of sentence

//  activates 'strict' mode
'use strict';

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let result = [];
  let dots = '...';
  for (let i = 0; i < arr.length; i++) {
    result[i] = `${dots} ${arr[i]}C in ${i + 1} days `;
  }
  result.toString();
  return result.join('') + dots;
};

console.log(printForecast(data1));

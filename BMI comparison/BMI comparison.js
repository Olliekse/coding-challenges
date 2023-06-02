let heightMark = 1.69;
let heightJohn = 1.95;
let weightMark = 78;
let weightJohn = 92;

let bmiMark = weightMark / heightMark ** 2;
let bmiJohn = weightJohn / heightJohn ** 2;

let bmiTest = bmiMark > bmiJohn;
console.log("Is Mark's BMI greater than John's? " + bmiTest);

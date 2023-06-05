let heightMark = 1.69;
let heightJohn = 1.95;
let weightMark = 78;
let weightJohn = 92;

let bmiMark = weightMark / heightMark ** 2;
let bmiJohn = weightJohn / heightJohn ** 2;

let bmiTest = bmiMark > bmiJohn;

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is greater than John's (${bmiJohn})`);
} else {
  console.log(`John's BMI (${bmiJohn}) is greater than Mark's (${bmiMark})`);
}

// assigns the height (metres) and weight (kg) of Mark and John to different variables
const heightMark = 1.69;
const heightJohn = 1.95;
const weightMark = 78;
const weightJohn = 92;

// assigns the BMI result of Mark and John to a variable
const bmiMark = weightMark / heightMark ** 2;
const bmiJohn = weightJohn / heightJohn ** 2;

// assigns to a variable the boolean result of comparing Mark and John's BMI
const bmiTest = bmiMark > bmiJohn;

// an 'if'/'else' statement that logs a different result to the console depending on the result of comparing BMIs
if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is greater than John's (${bmiJohn})`);
} else {
  console.log(`John's BMI (${bmiJohn}) is greater than Mark's (${bmiMark})`);
}

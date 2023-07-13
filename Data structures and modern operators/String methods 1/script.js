// activates strict mode
'use strict';

// appends a textarea to the body
document.body.append(document.createElement('textarea'));

// appends a button to the body
document.body.append(document.createElement('button'));

// adds an event listener and a function to the button
document.querySelector('button').addEventListener('click', function () {
  // assigns to a variable the textarea's value
  const text = document.querySelector('textarea').value;

  // assigns to a variable the result of splitting the input text into an array
  const rows = text.split('\n');

  // creates a loop that destructures the 'rows' array
  for (const [i, row] of rows.entries()) {
    // assigns to a variable the destructured 'row', converts it to lowercase, trims it and then splits it into two words
    const [first, second] = row.toLowerCase().trim().split('_');

    // assigns to a variable a template literal and capitalises the first letter of the second word
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;

    // logs to the console the final string with the emoticon
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

// document.querySelector('button').addEventListener('click', function (text) {
//   let newArray = [];
//   const textArray = text.split('\n');
//   for (let i = 0; i < textArray.length; i++) {
//     let [firstWord, secondWord] = textArray[i].split('_');

//     firstWord = firstWord.toLowerCase();
//     const secondWordCapital = secondWord.slice(0, 1).toUpperCase();
//     const secondWordRest = secondWord.slice(1).toLowerCase();

//     let newSecondWord = secondWordCapital + secondWordRest;

//     secondWord = newSecondWord;

//     let newName = [firstWord, secondWord].join('').trim();
//     newName = newName.padEnd(20, ' ') + `${'✅'.repeat(i + 1)}`;

//     newArray.push(newName + `${'\n'}`);
//   }
//   console.log(String(newArray.join('')));
// });

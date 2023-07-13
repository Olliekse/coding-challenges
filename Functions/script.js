// activates strict mode
'use strict';

// assigns to a variable the 'poll' button html element
const pollBtn = document.body.querySelector('.poll');

// assigns to a variable the 'poll' object
let poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),

  // creates a method for displaying the results
  displayResults(type = 'array') {
    type === 'array'
      ? console.log(this.answers)
      : console.log(`Poll results are ${this.answers.join(', ')}`);
  },

  //creates a method that shows a prompt window
  registerNewAnswer() {
    const answer = Number(
      prompt(`${this.answer}\n${this.options.join('\n')}\n(Write option number)
  `)
    );

    // uses short circuiting to limit answers to numbers that are 3 or below
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    // calls the method that displays the results
    this.displayResults();
  },
};

// adds an event listener to the 'poll' button
pollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));

// assigns to variables 2 sets of test data
const data1 = { answers: [5, 2, 3] };
const data2 = { answers: [1, 5, 3, 9, 6, 1] };

// calls the display results method
poll.displayResults.call(data1, 'string');
poll.displayResults.call(data1);
poll.displayResults.call(data2, 'string');
poll.displayResults.call(data2);

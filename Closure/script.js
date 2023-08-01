// activates strict mode
'use strict';

// creates an IIFE function
(function () {
  // assigns HTML elements to variables
  const header = document.querySelector('h1');
  const body = document.querySelector('body');

  // changes the header's colour to red
  header.style.color = 'red';

  // adds to the body an event listener that changes the header colour to blue
  body.addEventListener('click', () => (header.style.color = 'blue'));
})();

// activates 'strict' mode
'use strict';

// assigns to variables different elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// assigns to a variable a function that opens the popup
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// assigns to a variable a function that closes the popup
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// creates a loop that adds an event listener to each button
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// adds event listeners to both the 'close' button and the overlay
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

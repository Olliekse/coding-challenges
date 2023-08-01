// activates strict mode
'use strict';

//assigns to a variable the result of a function
const checkDogs = function (dogsJulia, dogsKate) {
  // clones 'dogsJulia' using the splice method
  const cloneDogsJulia = dogsJulia.slice();

  // removes the first and the last 2 numbers
  cloneDogsJulia.splice(0, 1);
  cloneDogsJulia.splice(-2);

  // glues the shallow copy and 'dogsKate' arrays
  const dogs = cloneDogsJulia.concat(dogsKate);

  // logs to the console whether the dog is an adult or a puppy
  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number  ${i + 1}
is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};

// calls the 'checkDogs' function
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// assigns to a variable the result of the average age function
const calcAverageHumanAge = ages => {
  // assigns to a variable the result of calculating the average age in human years

  const humanAges = ages
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  console.log(humanAges);
  return humanAges;
};

// calls the function that calculates the average age in human years
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);

console.log(dogs);

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recommendedFood ? 'much' : 'little'} food`);

// 3.
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood).flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood).flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6.
const eatingCheckOkay = dog => dog.curFood > dog.recommendedFood * 0.90 && dog.curFood < dog.recommendedFood * 1.10;

console.log(dogs.some(eatingCheckOkay));

// 7.
console.log(dogs.filter(eatingCheckOkay));

// 8.
const dogsCopy = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsCopy);

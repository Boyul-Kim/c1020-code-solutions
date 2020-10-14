var number1 = 4;
var number2 = 9;
var number3 = 11;

var maximumValue = Math.max(number1, number2, number3);
console.log('maximumValue:', maximumValue);

var heroes = ['Batman', 'Ironman', 'Flash', 'Saitama'];

var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'book1',
    author: 'title1'
  },
  {
    title: 'book2',
    author: 'title2'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 0);
console.log('library:', library);

var fullName = 'Boyul Kim';
var firstAndlastName = fullName.split(' ');
console.log('firstAndlastName:', firstAndlastName);
var firstName = firstAndlastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);

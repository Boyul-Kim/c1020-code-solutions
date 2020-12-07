/* eslint-disable no-console, no-unused-vars */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = numbers.map(number => number * 2);
console.log(doubled);

const price = numbers.map(number => '$' + number.toFixed(2));
console.log(price);

const upperCased = languages.map(language => language.toUpperCase());
console.log(upperCased);

const firstLetter = languages.map(language => language[0]);
console.log(firstLetter);

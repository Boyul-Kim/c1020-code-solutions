function addTwoNumbers(x, y) {
  var sum = x + y;
  return sum;
}
console.log('addTwoNumbers function return value:', addTwoNumbers(1, 2));

function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('convertMinutesToSeconds function return value:', convertMinutesToSeconds(5));

function greet(name) {
  return 'Hey, ' + name;
}
console.log('greet function return value:', greet('Beavis'));

function getArea(width, height) {
  return width * height;
}
console.log('getArea function return value:', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}
console.log('getFirstName function return value:', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  return array[array.length - 1];
}
console.log('getLastElement function return value:', getLastElement(['propane', 'and', 'propane', 'accessories']));

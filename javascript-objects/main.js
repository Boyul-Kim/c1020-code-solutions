/* eslint-disable no-console, no-unused-vars, dot-notation */
var student = {
  firstName: 'Boyul',
  lastName: 'Kim',
  age: 24

};

var fullName = student.firstName + ' ' + student.lastName;
console.log('fullName value:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Information Security Engineer';
console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'hyundai',
  model: 'ioniq',
  year: '2019'
};

vehicle['color'] = 'dark gray';
vehicle['isConvertible'] = false;
console.log('value of color:', vehicle['color']);
console.log('value of isConvertible:', vehicle['isConvertible']);
console.log('vehicle object', vehicle);

var pet = {
  name: 'doggo',
  type: 'dog'
};

delete pet.name;
delete pet.type;
console.log('pet object:', pet);

/* exported sumAll */
function sumAll(numbers) {
  var sum = 0;
  for (var i = 0; i <= numbers.length - 1; i++) {
    sum += numbers[i];
  }
  return sum;
}

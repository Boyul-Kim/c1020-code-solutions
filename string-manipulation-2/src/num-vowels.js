/* eslint-disable no-unused-vars */
function numVowels(string) {
  string = string.toLowerCase();
  var vowelCounter = 0;
  for (var index = 0; index <= string.length - 1; index++) {
    if (string[index] === 'a' || string[index] === 'e' || string[index] === 'i' || string[index] === 'o' || string[index] === 'u') {
      vowelCounter++;
    }
  }
  return vowelCounter;
}

/* eslint-disable no-unused-vars */
function capitalizeWords(string) {
  string = string.toLowerCase();
  for (var index = 0; index <= string.length - 1; index++) {
    if (index === 0) {
      var indexZero = string.slice(0, 1);
      var restOfWord = string.slice(1, string.length);
      indexZero = indexZero.toUpperCase();
      string = indexZero + restOfWord;
    } else if (string[index] === ' ') {
      var firstPart = string.slice(0, index + 1);
      var indexLetter = string.slice(index + 1, index + 2);
      indexLetter = indexLetter.toUpperCase();
      var secondPart = string.slice(index + 2, string.length);
      string = firstPart + indexLetter + secondPart;
    }
  }
  return string;
}

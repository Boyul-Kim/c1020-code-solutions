/* eslint-disable no-unused-vars */
function isPalindromic(string) {
  var stringCopy = string;
  var stringPalindrome = '';
  if (stringCopy.includes(' ')) {
    var space = stringCopy.indexOf(' ');
    var firstHalf = stringCopy.slice(0, space);
    var secondHalf = stringCopy.slice(space + 1, stringCopy.length + 1);
    stringCopy = firstHalf + secondHalf;
  }
  for (var i = stringCopy.length - 1; i >= 0; i--) {
    stringPalindrome += stringCopy[i];
  }
  if (stringPalindrome === stringCopy) {
    return true;
  } else {
    return false;
  }
}

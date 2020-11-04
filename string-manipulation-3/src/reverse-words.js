/* eslint-disable no-unused-vars */
function reverseWords(string) {
  var stringArray = string.split(' ');

  for (var i = 0; i <= stringArray.length - 1; i++) {
    var reverseWord = '';
    for (var x = stringArray[i].length - 1; x >= 0; x--) {
      reverseWord += stringArray[i][x];
    }
    stringArray[i] = reverseWord;
  }
  var reversalComplete = stringArray.join(' ');
  return reversalComplete;
}

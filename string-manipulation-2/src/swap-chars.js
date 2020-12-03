/* eslint-disable no-unused-vars */
function swapChars(firstIndex, secondIndex, string) {
  var stringArray = string.split('');
  var newWord = '';
  var placeHolder = '';
  placeHolder = stringArray[firstIndex];
  stringArray[firstIndex] = stringArray[secondIndex];
  stringArray[secondIndex] = placeHolder;
  for (var index = 0; index <= stringArray.length - 1; index++) {
    newWord += stringArray[index];
  }
  return newWord;
}

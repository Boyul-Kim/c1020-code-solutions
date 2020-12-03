/* eslint-disable no-unused-vars */
function lastChars(length, string) {
  var lastIndex = string.length;
  if (length > string.length) {
    return string;
  } else {
    var slicedWord = string.slice((lastIndex - length), lastIndex);
  }
  return slicedWord;
}

/* eslint-disable no-unused-vars */
function zip(first, second) {
  var newArray = [];
  for (var i = 0; i <= first.length - 1; i++) {
    if (first[i] !== undefined && second[i] !== undefined) {
      var word = [];
      word.push(first[i]);
      word.push(second[i]);
      newArray.push(word);
    }
  }
  return newArray;
}

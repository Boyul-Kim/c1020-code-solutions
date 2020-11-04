/* eslint-disable no-unused-vars */
function unique(array) {
  var newArray = [];
  for (var i = 0; i <= array.length - 1; i++) {
    if (newArray.includes(array[i]) === false) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

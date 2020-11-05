/* eslint-disable no-unused-vars */
function tail(array) {
  var newArray = [];
  for (var i = 1; i <= array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

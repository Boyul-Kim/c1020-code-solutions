/* eslint-disable no-unused-vars */
function drop(array, count) {
  var newArray = [];
  for (count; count <= array.length - 1; count++) {
    newArray.push(array[count]);
  }
  return newArray;
}

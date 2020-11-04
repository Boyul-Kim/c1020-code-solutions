/* eslint-disable no-unused-vars */
function flatten(array) {
  var newArray = [];
  for (var i = 0; i <= array.length - 1; i++) {
    if (Array.isArray(array[i])) {
      for (var x = 0; x <= array[i].length - 1; x++) {
        newArray.push(array[i][x]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

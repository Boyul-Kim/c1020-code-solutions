/* eslint-disable no-unused-vars */
function compact(array) {
  var newArray = [];
  for (var i = 0; i <= array.length - 1; i++) {
    if (array[i] !== false && array[i] !== null && array[i] !== 0 && array[i] !== undefined && array[i] !== '' && Number.isNaN(array[i]) === false) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

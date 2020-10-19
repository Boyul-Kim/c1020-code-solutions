/* eslint-disable no-unused-vars */
function chunk(array, size) {
  var newArray1 = [];
  var newArray2 = [];
  var totalArray = [];
  for (var i = 0; i <= array.length - 1; i++) {
    if (i < size) {
      newArray1.push(array[i]);
    } else if (i >= size) {
      newArray2.push(array[i]);
    }
  }
  totalArray.push(newArray1);
  totalArray.push(newArray2);
  return totalArray;
}

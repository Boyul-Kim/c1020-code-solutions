/* exported findIndex */
function findIndex(array, value) {
  for (var i = 0; i <= array.length - 1; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

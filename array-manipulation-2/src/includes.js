/* eslint-disable no-unused-vars */
function includes(array, value) {
  var counter = 0;
  for (var i = 0; i <= array.length - 1; i++) {
    if (array[i] === value) {
      counter++;
    }
  }
  if (counter > 0) {
    return true;
  } else {
    return false;
  }
}

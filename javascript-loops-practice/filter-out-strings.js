/* exported filterOutStrings */
function filterOutStrings(values) {
  var newArray = [];
  for (var i = 0; i <= values.length - 1; i++) {
    if (typeof values[i] !== typeof 'a') {
      newArray.push(values[i]);
    }
  }
  return newArray;
}

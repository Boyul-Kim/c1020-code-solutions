/* eslint-disable no-unused-vars */
function union(first, second) {
  var third = first.concat(second);
  var newArray = [];
  for (var i = 0; i <= third.length - 1; i++) {
    if (newArray.includes(third[i]) === false) {
      newArray.push(third[i]);
    }
  }
  return newArray;
}
